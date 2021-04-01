const sveltePreprocess = require('svelte-preprocess');
const node = require('@sveltejs/adapter-node');

module.exports = {
	preprocess: [
		sveltePreprocess({
			scss: {
				includePaths: ['theme'],
			},
		}),
	],
	kit: {
		adapter: node(),
		target: '#svelte',
	}
};
