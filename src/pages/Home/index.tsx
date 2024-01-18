import './styles.scss';
import { BsSearch } from 'react-icons/bs';
import { GitHub } from '../../components/github';
import { useState, KeyboardEvent } from 'react';

function Home() {

    type User = {
        login: string,
        avatar_url: string,
        location: string,
        followers: number,
        following: number
    }

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            loadUser(userName)
        }
    }

    const [user, setUser] = useState<User | null>(null);
    const [userName, setUserName] = useState('');

    async function loadUser(userName: string) {
        const res = await fetch(`https://api.github.com/users/${userName}`);
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

    return (
        <div className='home-container'>
            <header>
                <h1>GitHub Finder</h1>
                <GitHub />
            </header>
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
                        <button className='btn-search' onClick={() => loadUser(userName)}><BsSearch /></button>
                    </div>
                </div>
                {user &&
                    <div className='user-container'>
                        <img src={user.avatar_url} />
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

                    </div>}

            </main>
        </div>
    );
}
export default Home;


