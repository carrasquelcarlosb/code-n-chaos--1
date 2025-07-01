<script>
	import { onMount } from 'svelte';
	import { chaosLevel, cartItems } from '$lib/stores/chaos.js';
	import { tick } from 'svelte';

	// Featured products (ready for chaos)
	let featuredProducts = [
		{
			id: 1,
			name: 'Ordinateur Professionnel',
			price: 999.99,
			originalPrice: 1299.99,
			image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400',
			rating: 4.8,
			reviews: 124
		},
		{
			id: 2,
			name: 'Casque Sans Fil',
			price: 199.99,
			originalPrice: 249.99,
			image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
			rating: 4.6,
			reviews: 89
		},
		{
			id: 3,
			name: 'Montre Intelligente',
			price: 299.99,
			originalPrice: 399.99,
			image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
			rating: 4.9,
			reviews: 203
		},
		{
			id: 4,
			name: 'Souris Gaming',
			price: 79.99,
			originalPrice: 99.99,
			image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400',
			rating: 4.7,
			reviews: 156
		}
	];

	// Price chaos system
	let priceMultipliers = featuredProducts.map(() => 1);

	onMount(() => {
		// Erratic pricing system
		const priceInterval = setInterval(() => {
			if ($chaosLevel >= 2) {
				priceMultipliers = priceMultipliers.map(
					() => Math.random() * 10 + 0.1 // Random multiplier between 0.1 and 10.1
				);
				featuredProducts = [...featuredProducts]; // Trigger reactivity
			}
		}, 2000);

		return () => clearInterval(priceInterval);
	});

	// Basketball cart animation
	/*function addToCart(product, index) {
		// Add dramatic cart animation here later
		cartItems.update((items) => [...items, product]);

		// Show achievement popup
		if ($chaosLevel >= 1) {
			showRandomAchievement();
		}

		console.log(`🏀 DUNK! ${product.name} ajouté au panier!`);
	}*/

	// Random achievement popups
	let showingAchievement = false;
	let achievementText = '';

	function showRandomAchievement() {
		const achievements = [
			'🎉 Félicitations! Vous avez regardé un produit! Vous êtes maintenant un VIP!',
			'🏆 Incroyable! Vous avez cliqué sur un bouton! Maître du shopping!',
			'🌟 Extraordinaire! Votre curseur a bougé! Expertise certifiée!',
			'🎊 Fantastique! Vous respirez encore! Continuez comme ça!',
			'🚀 Légendaire! Vous existez! Achievement débloqué!'
		];

		achievementText = achievements[Math.floor(Math.random() * achievements.length)];
		showingAchievement = true;

		setTimeout(() => {
			showingAchievement = false;
		}, 3000);
	}

	// Shape-shifting product names (chaos level 3)
	function getProductName(product, index) {
		if ($chaosLevel >= 3) {
			const transformedNames = [
				'Machine à Rêves Quantique',
				'Amplificateur de Pensées',
				'Montre Temporelle Interdimensionnelle',
				'Dispositif de Pointage Mystique'
			];
			return transformedNames[index] || product.name;
		}
		return product.name;
	}

	// Get chaotic price
	function getDisplayPrice(product, index) {
		if ($chaosLevel >= 2) {
			return (product.price * priceMultipliers[index]).toFixed(2);
		}
		return product.price.toFixed(2);
	}


let showExplosion = false;
let snipers = [];

async function triggerChaosExplosion() {
	//if ($chaosLevel < 3) return;

	showExplosion = true;
	snipers = [];

	for (let i = 0; i < 6; i++) {
		snipers.push({
			top: Math.random() * 80 + 'vh',
			left: Math.random() * 80 + 'vw',
			rotation: Math.random() * 360,
			delay: Math.random() * 500,
			image: '/sniperTaGrandMere.png'
		});
	}

	await tick();
	setTimeout(() => {
		showExplosion = false;
		snipers = [];
	}, 1500);
}

// Appelle cette fonction dans addToCart
function addToCart(product, index) {
	cartItems.update((items) => [...items, product]);

		triggerChaosExplosion();


	/*if ($chaosLevel >= 1) {
		showRandomAchievement();
	}
	if ($chaosLevel >= 3) {
		triggerChaosExplosion();
	}*/

	console.log(`🏀 DUNK! ${product.name} ajouté au panier!`);
}
</script>

<!-- Hero Section -->
<div class="hero from-primary to-secondary min-h-96 bg-gradient-to-r">
	<div class="hero-content text-primary-content text-center flex justify-center">
		<div class="max-w-md">
			<h1
				class="mb-5 text-5xl font-bold"
				class:animate-pulse={$chaosLevel >= 1}
				class:animate-bounce={$chaosLevel >= 3}
			>
				Bienvenue chez NoSales
			</h1>
			<p class="mb-5 text-lg" class:chaos-text={$chaosLevel >= 2}>
				Le meilleur site pour ne rien acheter
			</p>
			<button class="btn btn-accent btn-lg hover:btn-secondary transition-colors">
				Découvrir l'Impossible
			</button>
		</div>
	</div>
</div>

<!-- Produits en vedette -->
<section class="bg-base-100 py-16">
	<div class="container mx-auto px-4">
		<div class="mb-12 flex items-center justify-between">
			<h2
				class="text-3xl font-bold"
				class:text-error={$chaosLevel >= 3}
				class:animate-pulse={$chaosLevel >= 2}
			>
				Produits en vedette
			</h2>
			<p class="text-base-content/70">
				Découvrez notre sélection exclusive de produits qui n'existent pas
			</p>
		</div>

		<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
			{#each featuredProducts as product, index}
				<div
					class="card bg-base-100 shadow-md transition-all duration-300 hover:shadow-xl"
					class:animate-bounce={$chaosLevel >= 3 && index === 0}
					class:transform={$chaosLevel >= 2}
					class:rotate-1={$chaosLevel >= 2 && index % 2 === 0}
					class:-rotate-1={$chaosLevel >= 2 && index % 2 === 1}
				>
					<figure class="px-4 pt-4">
						<img
							src={product.image}
							alt={product.name}
							class="h-48 w-full rounded-lg object-cover transition-all duration-300"
							class:filter={$chaosLevel >= 2}
							class:hue-rotate-90={$chaosLevel >= 2}
							class:animate-pulse={$chaosLevel >= 3}
						/>
					</figure>

					<div class="card-body">
						<h3 class="card-title text-base" class:text-warning={$chaosLevel >= 2}>
							{getProductName(product, index)}
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
							<span class="text-base-content/70 text-sm">({product.reviews})</span>
						</div>

						<!-- Price (with chaos) -->
						<div class="mb-4 flex items-center gap-2">
							<span
								class="text-primary text-2xl font-bold"
								class:animate-pulse={$chaosLevel >= 2}
								class:text-error={$chaosLevel >= 3}
							>
								${getDisplayPrice(product, index)}
							</span>
							<span class="text-base-content/50 text-sm line-through">
								${product.originalPrice}
							</span>
							{#if $chaosLevel >= 2}
								<span class="text-warning animate-ping text-xs">📈</span>
							{/if}
						</div>

						<div class="card-actions justify-end">
							<button
								class="btn btn-primary w-full transition-all duration-300"
								class:btn-error={$chaosLevel >= 3}
								class:animate-bounce={$chaosLevel >= 1}
								on:click={() => addToCart(product, index)}
							>
								🏀 Ajouter au panier
							</button>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Offres spéciales -->
<section class="bg-primary text-primary-content py-16">
	<div class="container mx-auto px-4 text-center">
		<h2 class="mb-4 text-3xl font-bold" class:animate-bounce={$chaosLevel >= 2}>
			Offres spéciales
		</h2>
		<p class="mb-8 text-lg" class:animate-pulse={$chaosLevel >= 1}>-100% sur rien du tout!</p>

		<!-- Chaos level indicators -->
		{#if $chaosLevel >= 2}
			<div class="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
				<div class="card bg-accent text-accent-content animate-pulse">
					<div class="card-body">
						<h3 class="card-title">🌪️ Offre Tornade</h3>
						<p>Tout s'envole à -200%!</p>
					</div>
				</div>
				<div class="card bg-secondary text-secondary-content animate-bounce">
					<div class="card-body">
						<h3 class="card-title">⚡ Lightning Deal</h3>
						<p>Plus rapide que la lumière!</p>
					</div>
				</div>
				<div class="card bg-warning text-warning-content animate-spin">
					<div class="card-body">
						<h3 class="card-title">🌀 Deal Quantique</h3>
						<p>Existe et n'existe pas!</p>
					</div>
				</div>
			</div>
		{/if}
	</div>
</section>

<!-- Achievement Popup -->
{#if showingAchievement}
	<div class="toast toast-top toast-center z-50">
		<div class="alert alert-success animate-bounce shadow-lg">
			<div>
				<span class="text-sm">{achievementText}</span>
			</div>
		</div>
	</div>
{/if}

<!-- Random chaos popups at level 3 -->
{#if $chaosLevel >= 3}
	<div class="fixed bottom-4 right-4 z-50">
		<div class="chat chat-end">
			<div class="chat-bubble chat-bubble-primary animate-pulse">
				🤖 Système en mode chaos! Tout va bien!
			</div>
		</div>
	</div>
{/if}

{#if showExplosion}
	<div class="chaos-overlay fixed inset-0 pointer-events-none z-50">
		<div class="absolute inset-0 animate-epileptic-flash"></div>
		{#each snipers as s}
			<img
				src={s.image}
				class="absolute sniper-img"
				style="
					top: {s.top};
					left: {s.left};
					transform: rotate({s.rotation}deg);
					animation-delay: {s.delay}ms;
				"
			/>
		{/each}
	</div>
{/if}



<style>
	.chaos-text {
		animation: glitch 0.3s infinite;
	}

	@keyframes glitch {
		0% {
			transform: translate(0);
		}
		20% {
			transform: translate(-2px, 2px);
		}
		40% {
			transform: translate(-2px, -2px);
		}
		60% {
			transform: translate(2px, 2px);
		}
		80% {
			transform: translate(2px, -2px);
		}
		100% {
			transform: translate(0);
		}
	}

	.sniper-img {
		width: 100px; /* ← rétrécis ici */
		height: auto;
		animation: moveSniper 0.3s ease-in-out infinite alternate;
	}

	.chaos-overlay {
	animation: chaosFlash 2s infinite; /* ← moins fréquent et plus doux */
}

@keyframes chaosFlash {
	0% { background-color: transparent; }
	50% { background-color: rgba(255, 0, 255, 0.1); }
	100% { background-color: transparent; }
}


@keyframes chaosScreenShake {
	0% { transform: translate(0, 0) scale(1); }
	25% { transform: translate(-10px, 10px) scale(1.05); }
	50% { transform: translate(10px, -10px) scale(0.95); }
	75% { transform: translate(-10px, -10px) scale(1.1); }
	100% { transform: translate(10px, 10px) scale(0.9); }
}

@keyframes epilepticFlash {
	0%   { background-color: red; }
	25%  { background-color: yellow; }
	50%  { background-color: blue; }
	75%  { background-color: lime; }
	100% { background-color: magenta; }
}

.animate-epileptic-flash {
	width: 100%;
	height: 100%;
	animation: epilepticFlash 2s infinite;
	opacity: 0.7;
	mix-blend-mode: difference;
}

@keyframes sniperSpin {
	from { transform: rotate(0deg); }
	to { transform: rotate(360deg); }
}

.sniper-img {
	width: 100px;
	height: auto;
	position: absolute;
	animation: sniperSpin 2s linear infinite;
}

@keyframes moveSniper {
	0% {
		transform: translate(0, 0) scale(1);
	}
	100% {
		transform: translate(20px, -20px) scale(1.2);
	}
}

</style>
