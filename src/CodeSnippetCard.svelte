<script lang="ts">
	import { CodeBlock } from '@skeletonlabs/skeleton';
	// import { deleteSnippet, toggleFavorite } from './SnippetStore';
	// export let snippet: CodeSnippet = {
	// 	title: '',
	// 	language: '',
	// 	code: '',
	// 	favorite: false
	// };
	// export let index: number;
</script>

<div class="card">
	<header class="card-header">
		Code Snippet Title
		<div class="float-right">
			<button type="button" class="btn btn-sm variant-filled-secondary"> Favorite </button>
			<button type="button" class="btn btn-sm variant-filled-error"> X </button>
		</div>
	</header>
	<section class="p-4">
		<CodeBlock language={'HTML'} code={`<h1>Your Code Is Here </h1>`} />
	</section>
</div>
