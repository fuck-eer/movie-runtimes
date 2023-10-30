//path for movies name array

import MOVIES from "./files/moviesJSON/movies2023.json" assert { type: "json" };

import { getMovieRuntime } from "./makejson";

// try {
await getMovieRuntime(MOVIES, "2023");
// } catch (err) {
// 	throw new Error("Application down");
// }

// npm run makejson =====> writing json file
// npm run info =====> getting some file info
