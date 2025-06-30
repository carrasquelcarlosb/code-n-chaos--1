<script>
	import { cartItems, chaosLevel } from '$lib/stores/chaos.js';

	let searchQuery = '';
	let isSearchFocused = false;

	// Absurd search corrections (will be activated later)
	function handleSearch() {
		if ($chaosLevel >= 2) {
			// Transform search into something absurd
			const absurdTransforms = {
				laptop: 'machine à rêves portative',
				phone: 'cristal de communication rectangulaire',
				chaussures: 'prisons à pieds anti-gravité',
				livre: 'portail dimensionnel en papier',
				café: "potion d'éveil mystique"
			};

			const transformed =
				absurdTransforms[searchQuery.toLowerCase()] || `${searchQuery} mais en version quantique`;
			searchQuery = transformed;
		}
		console.log('Recherche pour:', searchQuery);
	}

	// Mouse-evading behavior for cart (activated at chaos level 2+)
	let cartButton;
	let isFleeingFromMouse = false;

	function handleCartHover() {
		if ($chaosLevel >= 2 && !isFleeingFromMouse) {
			isFleeingFromMouse = true;
			setTimeout(() => {
				isFleeingFromMouse = false;
			}, 1000);
		}
	}
	let menuOpen = false;
</script>

<header class="bg-white shadow-md sticky top-0 z-50">
	<nav class="container mx-auto flex items-center justify-between p-4">
		<a href="/" class="logo text-2xl font-bold text-pink-600">NoSales</a>

		<button class="md:hidden p-2 rounded focus:outline-none focus:ring" on:click={() => menuOpen = !menuOpen} aria-label="Ouvrir le menu">
			<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
			</svg>
		</button>

		<ul class="hidden md:flex space-x-6 text-lg">
			<li><a href="/" class="hover:text-pink-600 transition">Accueil</a></li>
			<li><a href="/products" class="hover:text-pink-600 transition">Produits</a></li>
			<li><a href="/cart" class="hover:text-pink-600 transition">Panier</a></li>
			<li><a href="/demo" class="hover:text-pink-600 transition">Demo</a></li>
		</ul>
	</nav>
	<!-- Menu mobile -->
	{#if menuOpen}
		<ul class="md:hidden bg-white border-t border-gray-200 px-4 py-2 space-y-2 shadow">
			<li><a href="/" class="block py-2 hover:text-pink-600 transition" on:click={() => menuOpen = false}>Accueil</a></li>
			<li><a href="/products" class="block py-2 hover:text-pink-600 transition" on:click={() => menuOpen = false}>Produits</a></li>
			<li><a href="/cart" class="block py-2 hover:text-pink-600 transition" on:click={() => menuOpen = false}>Panier</a></li>
			<li><a href="/demo" class="block py-2 hover:text-pink-600 transition" on:click={() => menuOpen = false}>Demo</a></li>
		</ul>
	{/if}
</header>

<!-- Chaos notification (appears at higher levels) -->
{#if $chaosLevel >= 2}
	<div class="alert alert-warning mb-4 animate-pulse shadow-lg">
		<svg class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.082 16.5c-.77.833.192 2.5 1.732 2.5z"
			></path>
		</svg>
		<span>⚠️ Le site expérimente des anomalies temporelles... C'est normal! 🌀</span>
	</div>
{/if}
