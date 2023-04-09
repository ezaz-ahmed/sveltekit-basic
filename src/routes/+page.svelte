<script lang="ts">
	// import CodeSnippetCard from '../CodeSnippetCard.svelte';
	// import { snippetStore, addSnippet } from '../SnippetStore';
	// import type { PageData } from './$types';
	// export let data: PageData;

	// let formData: CodeSnippetInput = {
	// 	title: '',
	// 	language: 'html',
	// 	code: ''
	// };

	// snippetStore.set(data.snippets);
</script>

<div class="flex justify-center">
	<div class="grid grid-cols-1 gap-4 min-w-full md:min-w-[750px]">
		<h3 class="text-center py-6">Create A Code Snippet</h3>
		<div class="card p-4 w-full text-token space-y-4">
			<label class="label">
				<span>Snippet Title</span>
				<input class="input" type="text" placeholder="Enter title here..." />
			</label>
			<label class="label">
				<span>Programming Language</span>
				<select class="select">
					<option value="html">HTML</option>
					<option value="css">CSS</option>
					<option value="typescript">TypeScript</option>
				</select>
			</label>
			<label class="label">
				<span>Code Snippet</span>
				<textarea class="textarea" rows="4" placeholder="Enter your snippet code here..." />
			</label>
			<button type="button" class="btn btn-sm variant-filled-primary">Create Snippet</button>
		</div>
		<div class="text-center py-6">
			<h2>My Code Snippets</h2>
		</div>
	</div>
</div>
