import './styles.scss';
import { BsSearch } from 'react-icons/bs';
import { useState, KeyboardEvent } from 'react';
import { User } from '../../types/User';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';

function Home() {
    const [user, setUser] = useState<User | null>(null);
    const [userName, setUserName] = useState('');
    const [error, setError] = useState(false);

    const loadUser = async (userName: string) => {
        setError(false);
        setUser(null);
        
        const res = await fetch(`https://api.github.com/users/${userName}`);
        if (res.status === 404) {
            setError(true)
            return;
        }
        const data = await res.json();

        const { login, avatar_url, location, followers, following } = data;
        const userData: User = {
            login,
            avatar_url,
            location,
            followers,
            following
        }
        setUser(userData);
    }

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            loadUser(userName)
        }
    }

    return (
        <div className='home-container container-app'>
            <Header/>
            <main>
                <div className='form-container'>
                    <h3>Digite um usuário:</h3>
                    <div className='search'>
                        <input
                            type='text'
                            placeholder='Nome do usuário'
                            onChange={(e) => setUserName(e.target.value)}
                            onKeyDown={handleKeyDown}
                        />
                        <button className='btn-search' onClick={() => loadUser(userName)}>
                            <BsSearch size={12}/>
                        </button>
                    </div>
                </div>
                {user && user.login &&
                    <div className='user-container'>
                        <img src={user.avatar_url} alt={user.login} />
                        <h3>{user.login}</h3>
                        <h3>{user.location}</h3>
                        <div className='stats'>
                            <div className='followers'>
                                <h3>Seguidores</h3>
                                <span>{user.followers}</span>
                            </div>
                            <div className='following'>
                                <h3>Seguindo</h3>
                                <span>{user.following}</span>
                            </div>
                        </div>
                        <Link to={`repos/${user.login}`}>Repositórios recentes</Link>
                    </div>}
                {error && <p>Usuário não encontrado</p>}
            </main>
        </div>
    );
}

export default Home;


