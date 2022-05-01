//export const BASE_URL = process.env.REACT_APP_BASE_URL;
export const BASE_URL = "https://api.igdb.com/v4";
export const GAMES_URL = "/games";
//export const CORS_FIX = "https://cors-anywhere.herokuapp.com/";
export const ACCESS_TOKEN = "6o52f4qwo49mjqjtxaz4ar9yzd461g";
export const HEADER = {
  headers: {
    Accept: "application/json",
    Authorization: "Bearer 6o52f4qwo49mjqjtxaz4ar9yzd461g",
    "Client-ID": "ay0ffinneufqegvu1shkkiwgiqb3nf",
  },
  body: {
    data: " fields id, slug, url, box_art_url, storyline, summary;",
  },
};
