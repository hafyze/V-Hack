<script lang="ts">
	import '../app.postcss';
	import { AppShell } from '@skeletonlabs/skeleton';
	import ButtonLike from '../components/ButtonLike.svelte';

	let isDropdownOpen = false;
    let dropdownTimer: NodeJS.Timeout;

    function toggleDropdown() {
        clearTimeout(dropdownTimer);
        isDropdownOpen = !isDropdownOpen;
    }

    function closeDropdown() {
        dropdownTimer = setTimeout(() => {
            isDropdownOpen = false;
        }, 300); // Adjust this value as needed to control the delay before closing
    }

    function clearDropdownTimer() {
        clearTimeout(dropdownTimer);
    }
</script>

<!-- App Shell -->
<!-- svelte-ignore a11y-invalid-attribute -->
<AppShell>
	<svelte:fragment slot="header">
		<nav class="bg-second-color py-3 px-4">
			<div class="container mx-auto flex justify-between items-center">
				<div class="text-main-color text-3xl font-bold flex items-center">
					<img src="/increase.svg" alt="Logo" class="mr-2">
					<a href="/">financial</a>
				</div>
				 
				<!-- Navigation Links -->
				<ul class="flex space-x-7">
					<li><a href="#" class="text-main-color hover:text-third-color text-md font-bold">Tools</a></li>
					<li><a href="#" class="text-main-color hover:text-third-color text-md font-bold">Learn</a></li>
					<li><a href="/events" class="text-main-color hover:text-third-color text-md font-bold">Event</a></li>
					<li class="relative">
						<a href="#" on:mouseenter={toggleDropdown} on:mouseleave={closeDropdown} class="text-main-color hover:text-third-color text-md font-bold">Blog</a>
						<!-- Dropdown Content -->
						{#if isDropdownOpen}
							<ul class="absolute left-0 mt-2 bg-second-color border border-gray-300 py-2 px-4 shadow-lg rounded-md z-10 w-56" on:mouseenter={clearDropdownTimer} on:mouseleave={closeDropdown}>
								<li><a href="#" class="text-main-color hover:text-third-color text-md font-bold">Success Stories</a></li>
								<li><a href="/book" class="text-main-color hover:text-third-color text-md font-bold">Book Recommendations</a></li>
								<li><a href="/articles" class="text-main-color hover:text-third-color text-md font-bold">Financial Articles</a></li>
							</ul>
						{/if}
					</li>
					<li><a href="#" class="text-main-color hover:text-third-color text-md font-bold">Pricing</a></li>
				</ul>

			  	<!-- Add Navigation for Register and Login --> 
				<div>
					<ButtonLike inverse={true}>Login</ButtonLike>
					<ButtonLike>Register</ButtonLike>
				</div>
				<!--  -->
			</div>
		</nav>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
