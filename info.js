import { MovieHelper } from "./moviehelper.js";
import movies from "./files/runtimeJSON/moviesRuntime-2023.json" assert { type: "json" };

const MoviesData2023 = new MovieHelper(movies);

console.log(MoviesData2023.getMoviesMapLength());
