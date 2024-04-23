import { ReposType } from "../types/Repos";

export async function loadRepos (userName: string):Promise<ReposType[]>  {
    const res = await fetch(`https://api.github.com/users/${userName}/repos`);
    return await res.json();
}

