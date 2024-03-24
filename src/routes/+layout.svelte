<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar, Toast, type PopupSettings, popup } from '@skeletonlabs/skeleton';
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import { initializeStores } from '@skeletonlabs/skeleton';
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	import { storePopup, ListBox, ListBoxItem } from '@skeletonlabs/skeleton';
    import { goto } from '$app/navigation'
			
	initializeStores();
	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });


	let comboboxValue: string;

	const popupCombobox: PopupSettings = {
		event: 'click',
		target: 'popupCombobox',
		placement: 'bottom',
		closeQuery: '.listbox-item'
	};
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

				<button class="btn justify-between" use:popup={popupCombobox}>
					<span class="capitalize">{comboboxValue ?? 'Blog'}</span>
				</button>	
				
				<div class="card w-fit py-2" data-popup="popupCombobox">
					<ListBox rounded="rounded-none">
						<ListBoxItem bind:group={comboboxValue} on:click={() => goto('/articles')} name="medium" value="articles">Articles</ListBoxItem>
						<ListBoxItem bind:group={comboboxValue} on:click={() => goto('/book')} name="medium" value="books">Books</ListBoxItem>
						<ListBoxItem bind:group={comboboxValue} on:click={() => goto('/stories')} name="medium" value="stories">Stories</ListBoxItem>
					</ListBox>
					<div class="arrow bg-surface-100-800-token" />
				</div>
				
				<!-- <div class="card p-4 " data-popup="popupClick">
					<a href="/stories">Stories</a>
					<a href="/articles">Article</a>
					<a href="/book">Book</a>
					<div class="arrow variant-filled-primary" />
				</div> -->
				<LightSwitch />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
