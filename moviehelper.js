export class MovieHelper {
	constructor(movieRuntimeList) {
		const movieMap = new Map();
		movieRuntimeList.forEach((e) => {
			movieMap.set(e.Film.toLowerCase(), e.runtime);
		});
		this.moviesMap = movieMap;
	}

	getRuntimeByName(name) {
		if (this.moviesMap.has(name.toLowerCase())) {
			return this.moviesMap.get(name.toLowerCase());
		}
		return "Movie Not Found";
	}

	getMoviesMapLength() {
		return this.moviesMap.size;
	}
}
