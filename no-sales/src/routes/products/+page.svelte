<script>
	import { onMount } from 'svelte';
	import { chaosLevel, cartItems } from '$lib/stores/chaos.js';

	let products = [];
	let isLoading = true;
	let searchQuery = '';
	let selectedCategory = 'all';

	// Product categories
	const categories = [
		{ id: 'all', name: 'Tous les produits', icon: '🛍️' },
		{ id: 'electronics', name: 'Électronique', icon: '💻' },
		{ id: 'fashion', name: 'Mode', icon: '👕' },
		{ id: 'home', name: 'Maison', icon: '🏠' },
		{ id: 'sports', name: 'Sport', icon: '⚽' }
	];

	onMount(() => {
		// Simulate loading with chaos
		setTimeout(
			() => {
				products = [
					{
						id: 1,
						name: 'Ordinateur Portable Pro',
						price: 1299.99,
						originalPrice: 1599.99,
						category: 'electronics',
						image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400',
						rating: 4.8,
						reviews: 234,
						inStock: true
					},
					{
						id: 2,
						name: 'Casque Audio Premium',
						price: 199.99,
						originalPrice: 299.99,
						category: 'electronics',
						image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
						rating: 4.6,
						reviews: 145,
						inStock: true
					},
					{
						id: 3,
						name: 'Montre Connectée',
						price: 299.99,
						originalPrice: 399.99,
						category: 'electronics',
						image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
						rating: 4.9,
						reviews: 189,
						inStock: false
					},
					{
						id: 4,
						name: 'Sneakers Limitées',
						price: 159.99,
						originalPrice: 199.99,
						category: 'fashion',
						image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400',
						rating: 4.7,
						reviews: 92,
						inStock: true
					},
					{
						id: 5,
						name: 'Canapé Design',
						price: 899.99,
						originalPrice: 1199.99,
						category: 'home',
						image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400',
						rating: 4.5,
						reviews: 67,
						inStock: true
					},
					{
						id: 6,
						name: 'Ballon de Football',
						price: 29.99,
						originalPrice: 49.99,
						category: 'sports',
						image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400',
						rating: 4.3,
						reviews: 156,
						inStock: true
					}
				];
				isLoading = false;
			},
			$chaosLevel >= 2 ? Math.random() * 3000 + 1000 : 1000
		);
	});

	// Chaotic product name transformation
	function getProductName(product) {
		if ($chaosLevel >= 3) {
			const chaoticNames = {
				'Ordinateur Portable Pro': 'Machine à Conscience Artificielle',
				'Casque Audio Premium': 'Amplificateur de Pensées',
				'Montre Connectée': 'Portail Temporel Personnel',
				'Sneakers Limitées': 'Chaussures de Voyage Dimensionnel',
				'Canapé Design': 'Trône de Méditation Quantique',
				'Ballon de Football': 'Sphère de Réalité Alternative'
			};
			return chaoticNames[product.name] || product.name + ' 2.0 Édition Chaos';
		}
		return product.name;
	}

	// Erratic pricing
	let priceMultipliers = {};
	$: {
		if ($chaosLevel >= 2) {
			// Update price multipliers occasionally
			products.forEach((product) => {
				if (!priceMultipliers[product.id] || Math.random() < 0.1) {
					priceMultipliers[product.id] = Math.random() * 3 + 0.3;
				}
			});
		}
	}

	function getDisplayPrice(product) {
		if ($chaosLevel >= 2 && priceMultipliers[product.id]) {
			return (product.price * priceMultipliers[product.id]).toFixed(2);
		}
		return product.price.toFixed(2);
	}

	// Filter products
	$: filteredProducts = products.filter((product) => {
		const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
		const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
		return matchesCategory && matchesSearch;
	});

	// Add to cart with basketball animation
	function addToCart(product) {
		cartItems.update((items) => [...items, product]);

		if ($chaosLevel >= 1) {
			showSuccess(`🏀 SLAM DUNK! ${getProductName(product)} envoyé dans votre panier!`);
		} else {
			showSuccess(`✅ ${product.name} ajouté au panier`);
		}
	}

	// Success message system
	let successMessage = '';
	let showingSuccess = false;

	function showSuccess(message) {
		successMessage = message;
		showingSuccess = true;
		setTimeout(() => {
			showingSuccess = false;
		}, 3000);
	}

	// Fleeing buttons
	let fleeingButtons = new Set();

	function handleButtonHover(productId) {
		if ($chaosLevel >= 2 && Math.random() < 0.3) {
			fleeingButtons.add(productId);
			setTimeout(() => {
				fleeingButtons.delete(productId);
				fleeingButtons = new Set(fleeingButtons);
			}, 2000);
			fleeingButtons = new Set(fleeingButtons);
		}
	}
</script>

<div class="container mx-auto px-4 py-8">
	<!-- Page Header -->
	<div class="mb-12 text-center">
		<h1
			class="mb-4 text-4xl font-bold"
			class:animate-pulse={$chaosLevel >= 1}
			class:text-primary={$chaosLevel >= 2}
		>
			{$chaosLevel >= 2 ? '🌟 Nos Produits Magiques' : 'Nos Produits'}
		</h1>
		<p class="text-base-content/70 text-lg" class:animate-bounce={$chaosLevel >= 3}>
			{$chaosLevel >= 3
				? 'Explorez notre catalogue interdimensionnel de merveilles inexistantes!'
				: 'Explorez notre catalogue de produits inexistants'}
		</p>
	</div>

	<!-- Search and Filters -->
	<div class="card bg-base-100 mb-8 shadow-md">
		<div class="card-body">
			<div class="flex flex-col items-center gap-4 md:flex-row">
				<!-- Search Bar -->
				<div class="form-control flex-1">
					<div class="input-group">
						<input
							type="text"
							placeholder={$chaosLevel >= 2
								? 'Chercher dans le multivers...'
								: 'Rechercher un produit...'}
							class="input input-bordered flex-1"
							class:input-primary={$chaosLevel >= 1}
							class:animate-pulse={$chaosLevel >= 3}
							bind:value={searchQuery}
						/>
						<button class="btn btn-square btn-primary" class:animate-bounce={$chaosLevel >= 2}>
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

				<!-- Category Filter -->
				<div class="form-control">
					<select
						class="select select-bordered"
						class:select-accent={$chaosLevel >= 2}
						bind:value={selectedCategory}
					>
						{#each categories as category}
							<option value={category.id}>
								{category.icon}
								{category.name}
							</option>
						{/each}
					</select>
				</div>
			</div>
		</div>
	</div>

	<!-- Loading State -->
	{#if isLoading}
		<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each Array(6) as _}
				<div class="card bg-base-100 animate-pulse shadow-md">
					<div class="card-body">
						<div class="bg-base-300 mb-4 h-48 rounded-lg"></div>
						<div class="bg-base-300 mb-2 h-6 rounded"></div>
						<div class="bg-base-300 mb-4 h-4 rounded"></div>
						<div class="bg-base-300 h-10 rounded"></div>
					</div>
				</div>
			{/each}
		</div>
	{:else}
		<!-- Products Grid -->
		<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each filteredProducts as product, index}
				<div
					class="card bg-base-100 shadow-md transition-all duration-300 hover:shadow-xl"
					class:animate-bounce={$chaosLevel >= 3 && index === 0}
					class:transform={$chaosLevel >= 2}
					class:rotate-1={$chaosLevel >= 2 && index % 3 === 0}
					class:-rotate-1={$chaosLevel >= 2 && index % 3 === 1}
					class:scale-105={$chaosLevel >= 3 && index % 3 === 2}
				>
					<figure class="px-4 pt-4">
						<img
							src={product.image}
							alt={product.name}
							class="h-48 w-full rounded-lg object-cover transition-all duration-500"
							class:filter={$chaosLevel >= 2}
							class:hue-rotate-90={$chaosLevel >= 2 && index % 2 === 0}
							class:hue-rotate-180={$chaosLevel >= 2 && index % 2 === 1}
							class:animate-pulse={$chaosLevel >= 3}
						/>

						<!-- Stock badge -->
						<div class="absolute left-6 top-6">
							{#if product.inStock}
								<div class="badge badge-success badge-sm">En stock</div>
							{:else}
								<div class="badge badge-error badge-sm animate-pulse">Rupture</div>
							{/if}
						</div>

						<!-- Chaos badge -->
						{#if $chaosLevel >= 2}
							<div class="absolute right-6 top-6">
								<div class="badge badge-warning badge-sm animate-spin">⚡</div>
							</div>
						{/if}
					</figure>

					<div class="card-body">
						<h3 class="card-title text-base" class:text-accent={$chaosLevel >= 2}>
							{getProductName(product)}
						</h3>

						<!-- Rating -->
						<div class="mb-2 flex items-center gap-1">
							<div class="rating rating-sm">
								{#each Array(5) as _, i}
									<input
										type="radio"
										class="mask mask-star-2 bg-orange-400"
										checked={i < Math.floor(product.rating)}
										disabled
									/>
								{/each}
							</div>
							<span class="text-base-content/70 text-sm">
								({product.reviews} avis)
							</span>
						</div>

						<!-- Price -->
						<div class="mb-4 flex items-center gap-2">
							<span
								class="text-primary text-2xl font-bold"
								class:animate-pulse={$chaosLevel >= 2}
								class:text-error={$chaosLevel >= 3}
							>
								${getDisplayPrice(product)}
							</span>
							<span class="text-base-content/50 text-sm line-through">
								${product.originalPrice}
							</span>
							{#if $chaosLevel >= 2}
								<span class="text-warning animate-ping text-xs">📈</span>
							{/if}
						</div>

						<!-- Chaos price warning -->
						{#if $chaosLevel >= 2}
							<div class="alert alert-warning alert-sm mb-4 animate-pulse">
								<span class="text-xs">⚠️ Prix en fluctuation temporelle</span>
							</div>
						{/if}

						<div class="card-actions justify-between">
							<a href="/products/{product.id}" class="btn btn-outline btn-sm"> 👁️ Voir </a>

							<button
								class="btn btn-primary btn-sm transition-all duration-300"
								class:btn-error={$chaosLevel >= 3}
								class:animate-bounce={$chaosLevel >= 1}
								class:transform={fleeingButtons.has(product.id)}
								class:translate-x-10={fleeingButtons.has(product.id)}
								class:-translate-y-5={fleeingButtons.has(product.id)}
								disabled={!product.inStock}
								on:mouseenter={() => handleButtonHover(product.id)}
								on:click={() => addToCart(product)}
							>
								{#if fleeingButtons.has(product.id)}
									🏃‍♂️ Fuite!
								{:else if $chaosLevel >= 2}
									🏀 Dunker
								{:else}
									🛒 Ajouter
								{/if}
							</button>
						</div>
					</div>
				</div>
			{/each}
		</div>

		<!-- No products found -->
		{#if filteredProducts.length === 0}
			<div class="hero bg-base-200 rounded-box min-h-96">
				<div class="hero-content text-center">
					<div class="max-w-md">
						<div class="mb-4 text-6xl">🔍</div>
						<h2 class="mb-4 text-2xl font-bold">Aucun produit trouvé</h2>
						<p class="text-base-content/70 mb-6">
							{$chaosLevel >= 2
								? 'Ces produits existent dans une autre dimension!'
								: 'Essayez de modifier vos critères de recherche.'}
						</p>
						<button
							class="btn btn-primary"
							on:click={() => {
								searchQuery = '';
								selectedCategory = 'all';
							}}
						>
							🔄 Réinitialiser les filtres
						</button>
					</div>
				</div>
			</div>
		{/if}
	{/if}
</div>

<!-- Success Toast -->
{#if showingSuccess}
	<div class="toast toast-top toast-center z-50">
		<div class="alert alert-success animate-bounce shadow-lg">
			<div>
				<span>{successMessage}</span>
			</div>
		</div>
	</div>
{/if}

<!-- Floating chaos elements -->
{#if $chaosLevel >= 3}
	<div class="fixed left-10 top-20 animate-spin text-3xl">🌪️</div>
	<div class="fixed right-10 top-1/2 animate-bounce text-2xl">⚡</div>
	<div class="fixed bottom-20 left-1/3 animate-pulse text-4xl">🎪</div>
{/if}
