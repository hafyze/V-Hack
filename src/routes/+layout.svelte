<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar, Toast } from '@skeletonlabs/skeleton';
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import { initializeStores } from '@skeletonlabs/skeleton';

	initializeStores();

</script>

<Toast />

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
			<!-- TODO: EDIT -->
		<AppBar>
			<svelte:fragment slot="lead">
			<strong class="text-xl uppercase variant-filled-primary rounded-3xl p-2">V Hack</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a href="/events">Event</a>
				
				<LightSwitch />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
