// ---------- Helper Files ---------- //
//these are not currently in use, just for experiment purposes

// import { CORS_FIX, BASE_URL, GAMES_URL } from "../../pages/api/api";

// //helper function that can be used to populate games array
// export async function getAllGames() {
//   const response = await fetch(CORS_FIX + BASE_URL + GAMES_URL);
//   const data = await response.data;

//   const games = [];

//   for (const key in data) {
//     games.push({
//       id: key,
//       ...data[key],
//     });
//   }

//   return games;
// }

// //helper function to filter out games
// export async function getFeaturedGames() {
//   const allGames = await getAllGames();
//   return allGames.filter((game) => game.isFeatured);
// }
