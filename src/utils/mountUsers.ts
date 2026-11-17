import type IUser from "../interfaces/IUser";
import type IRepository from "../interfaces/IRepository";

export default function mountUser(data: any, dataRepos: any): IUser {
    const repositories_recents = dataRepos.map((repo: any) => ({
        name: repo.name,
        html_url: repo.html_url,
    })) as IRepository[];

    return {
        login: data.login,
        avatar_url: data.avatar_url,
        profile_url: data.html_url,
        name: data.name,
        repositories_publics: data.public_repos,
        followers: data.followers,
        repositories_recents,
    };
}
