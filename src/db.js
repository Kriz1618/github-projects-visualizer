const github = {
    baseURL: "https://api.github.com/graphql",
    username: "user",
    headers: {
        "Content-Type": "application/json",
        Authorization: "bearer token"
    },
};

export const buildGhCredentials = (username, token) => {
    github.headers.Authorization = `bearer ${token}`;
    return { ...github, username };
}

export default github;