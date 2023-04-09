<script lang="ts">
	import '@skeletonlabs/skeleton/themes/theme-crimson.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
	import { AppBar, AppShell, storeHighlightJs } from '@skeletonlabs/skeleton';
	import hljs from 'highlight.js';
	import 'highlight.js/styles/atom-one-dark.css';
	storeHighlightJs.set(hljs);
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar>
			<h3 class="text-left">CodeShare</h3>
		</AppBar>
	</svelte:fragment>
	<slot />
</AppShell>
