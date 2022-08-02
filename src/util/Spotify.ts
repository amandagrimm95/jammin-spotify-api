let accessToken: string | undefined;
let expiresIn: number | undefined;
const clientID: string = '6aa8f8ca984e421ca69da408a08284aa';
const redirectURI: string = 'http://localhost:3000/';
const baseURL: string = 'https://api.spotify.com';

export const Spoitfy: object = {
    getAccessToken() {
        if (accessToken !== undefined) {
            return accessToken;
        } else {
            const url: string = window.location.href;
            const tokenMatchArray: RegExpMatchArray | null = url.match('/access_token=([^&]*)/');
            const expirationMatchArray: RegExpMatchArray | null = url.match('/expires_in=([^&]*)/');
            if (tokenMatchArray && expirationMatchArray) {
                accessToken = tokenMatchArray[1];
                expiresIn = Number(expirationMatchArray[1]);
                window.setTimeout(() => accessToken = '', expiresIn * 1000);
            } else {
                window.location.href = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
            }

        }
    },

    async search(term) {
        const endpoint = `/v1/search?type=track&q=${term}`
        const urlToFetch = baseURL + endpoint;
        const response = await fetch(urlToFetch);
        if (response.ok) {
            const responseJson = await response.json();
            console.log(responseJson);
        }
    }
};

