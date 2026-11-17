function searchUser(username: string) {
    return fetch(`https://api.github.com/users/${username}`);
}

function searchRepositories(username: string) {
    return fetch(`https://api.github.com/users/${username}/repos?sort=created&per_page=5`);
}

export { searchUser, searchRepositories };