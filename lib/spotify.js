import SpotifyWebApi from "spotify-web-api-node";

const scopes = [

"user-read-playback-state",
"user-modify-playback-state",
"user-read-currently-playing",
"user-read-private",
"user-read-email",
"user-follow-read",
"user-library-read",
"streaming",
"user-read-playback-position",
"user-top-read",
"user-read-recently-played",
"playlist-read-collaborative",
"playlist-read-private",
].join(',');

const params = {
  scope:scopes,
}

const queryParamString = new URLSearchParams(params);
const LOGIN_URL = `http://accounts.spotify.com/authorize?${queryParamString.toString()}`;
const spotifyAPI = new SpotifyWebApi({
  clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
  clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
})

export default spotifyAPI;
export { LOGIN_URL }