import axios from "axios";
import fs from "fs";

const KEY = "e426786e";

const appendFile = async (path, data) => {
	try {
		await fs.promises.appendFile(path, data);
	} catch (error) {
		console.error(error);
	}
};

export const getMovieRuntime = async (moviesArray, file) => {
	const name = `moviesRuntime-${file}`;
	const fileName = `./files/runtimeJSON/${name}.json`;

	const moviesData = [];
	const allPromises = moviesArray.map((e) =>
		axios
			.get(`https://www.omdbapi.com/?t=${e.Film}&apikey=${KEY}`)
			.then(({ data }) => {
				moviesData.push({
					...e,
					runtime: data.Runtime ?? "--",
				});
			})
			.catch((err) => {
				console.log("check error logs:entry error");
				appendFile(
					`./files/logs/${name}-error.txt`,
					`${e.Film}:==> ${JSON.stringify(err)}` + " \n\n"
				);
			})
	);

	try {
		console.log("getting movies details!");
		await Promise.all(allPromises);
		console.log("writing file to directory!");
		fs.writeFileSync(fileName, JSON.stringify(moviesData));
		console.log("done with the operation!");
	} catch (err) {
		console.log("check error logs:file error");
		appendFile(
			`./files/logs/main-error.txt`,
			`${name}:==> ${JSON.stringify(err)}` + " \n\n"
		);
	}
};
