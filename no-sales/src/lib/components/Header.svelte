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
</script>

<header class="navbar bg-base-100 sticky top-0 z-50 shadow-lg">
	<div class="navbar-start">
		<!-- Mobile menu -->
		<div class="dropdown">
			<div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
				<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h8m-8 6h16"
					></path>
				</svg>
			</div>
			<ul
				tabindex="0"
				class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
			>
				<li><a href="/" class="hover:text-primary">Accueil</a></li>
				<li><a href="/products" class="hover:text-primary">Produits</a></li>
				<li><a href="/cart" class="hover:text-primary">Panier</a></li>
			</ul>
		</div>

		<!-- Logo -->
		<a href="/" class="btn btn-ghost text-xl font-bold">
			🛒 <span class="text-primary">NoSales</span>
		</a>
	</div>

	<!-- Desktop navigation -->
	<div class="navbar-center hidden lg:flex">
		<ul class="menu menu-horizontal px-1">
			<li><a href="/" class="hover:text-primary transition-colors">Accueil</a></li>
			<li><a href="/products" class="hover:text-primary transition-colors">Produits</a></li>
			<li><a href="/cart" class="hover:text-primary transition-colors">Panier</a></li>
		</ul>
	</div>

	<!-- Search and Cart -->
	<div class="navbar-end gap-2">
		<!-- Search Bar -->
		<div class="form-control">
			<div class="input-group">
				<input
					type="text"
					placeholder="Chercher des produits..."
					class="input input-bordered w-24 transition-all duration-300 md:w-auto"
					class:animate-pulse={$chaosLevel >= 1 && isSearchFocused}
					class:border-error={$chaosLevel >= 2}
					bind:value={searchQuery}
					on:focus={() => (isSearchFocused = true)}
					on:blur={() => (isSearchFocused = false)}
					on:keypress={(e) => e.key === 'Enter' && handleSearch()}
				/>
				<button
					class="btn btn-square btn-primary hover:btn-secondary transition-colors"
					class:animate-bounce={$chaosLevel >= 2}
					on:click={handleSearch}
				>
					<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						></path>
					</svg>
				</button>
			</div>
		</div>

		<!-- Cart Button (with fleeing behavior) -->
		<div class="dropdown dropdown-end">
			<div
				tabindex="0"
				role="button"
				class="btn btn-ghost btn-circle transition-transform duration-300"
				class:animate-bounce={$chaosLevel >= 1}
				class:transform={isFleeingFromMouse}
				class:translate-x-20={isFleeingFromMouse}
				class:-translate-y-10={isFleeingFromMouse}
				bind:this={cartButton}
				on:mouseenter={handleCartHover}
			>
				<div class="indicator">
					<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m10-5v6a1 1 0 01-1 1H9a1 1 0 01-1-1v-6m8 0V9a1 1 0 00-1-1H9a1 1 0 00-1-1v6z"
						></path>
					</svg>
					<span
						class="badge badge-sm indicator-item badge-primary"
						class:animate-pulse={$chaosLevel >= 1}
					>
						{$cartItems.length}
					</span>
				</div>
			</div>

			<!-- Cart dropdown -->
			<div
				tabindex="0"
				class="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
			>
				<div class="card-body">
					<span class="text-lg font-bold">{$cartItems.length} Articles</span>
					<span class="text-info">Sous-total: $999.99</span>
					<div class="card-actions">
						<a href="/cart" class="btn btn-primary btn-block">Voir le panier</a>
					</div>
				</div>
			</div>
		</div>
	</div>
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
