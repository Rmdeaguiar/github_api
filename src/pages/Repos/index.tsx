import { useEffect, useState } from 'react';
import './styles.scss';
import { useParams } from 'react-router-dom';
import { ReposType } from '../../types/Repos';
import { BsCodeSlash } from "react-icons/bs";
import { FaCalendarAlt } from "react-icons/fa";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { Link } from 'react-router-dom';
import Loader from '../../components/Loader/loader';
import { format } from 'date-fns';

function Repos() {
    const { username } = useParams();
    const [repos, setRepos] = useState<ReposType[] | [] | null>(null);
    const [quantityRepos, setQuantityRepos] = useState(0);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        username && loadRepos(username);
    }, []);

    const loadRepos = async (userName: string) => {
        setLoading(true);
        const res = await fetch(`https://api.github.com/users/${userName}/repos`);
        const data = await res.json();

        setQuantityRepos(data.length);

        let orderedRepos = data.sort((a: ReposType, b: ReposType) => {
            return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
        }).slice(0, 3);

        setRepos(orderedRepos)
        setLoading(false);
    }

    const formatDate = (date: Date): string => {
        return format(date, 'MM/yyyy');
    }

    return (
        <div className='repos-container'>
            <div className='repos-info'>
                <h1>Quantidade de repositórios de {username}: <h4>{quantityRepos}</h4></h1>
                <h1>Repositórios mais recentes:</h1>
            </div>
            {loading && <Loader />}
            <Link to='/' className='btn-back'>Voltar para Home</Link>
            {repos != null && repos.length > 0 ?
                repos.map((repo: ReposType) => (
                    <div className='repo-card' key={repo.name}>
                        <div className='repo-left'>
                            <h2>{repo.name.toUpperCase()}</h2>
                            <h3><BsCodeSlash />{repo.language}</h3>
                            <h3><MdOutlineStarPurple500 color='yellow' />{repo.stargazers_count}</h3>
                            <h3><FaCalendarAlt />{formatDate(new Date(repo.created_at))}</h3>
                            <a href={repo.html_url} target='_blank'>Link para repositório</a>
                        </div>
                        <p>{repo.description ? repo.description : 'O repositório não possui descrição'}</p>
                    </div>
                ))
                :
                !loading && <span>Este usuário ainda não possui repositórios.</span>}
        </div>
    );
}

export default Repos;


