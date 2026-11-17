import type IRepository from "./IRepository";

export default interface IUser {
    login: string;
    avatar_url: string;
    profile_url: string;
    name: string;
    repositories_publics: number;
    followers: number;
    repositories_recents: IRepository[];
}