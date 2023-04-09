import type { PageLoad } from './$types';

export const load = (() => {
	return {
		snippets: [
			{
				title: 'Cooper Codes Snippet',
				language: 'html',
				code: `<div>This is a div</div>`,
				favorite: false
			},
			{
				title: 'Cool code snippet',
				language: 'typescript',
				code: `console.log("Subscribe");`,
				favorite: false
			}
		]
	};
}) satisfies PageLoad;
