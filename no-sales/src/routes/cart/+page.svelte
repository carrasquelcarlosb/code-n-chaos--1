<script>
	import { cartItems, chaosLevel } from '$lib/stores/chaos.js';

	// Mock some cart items for demo
	let mockCartItems = [
		{
			id: 1,
			name: 'Ordinateur Quantique',
			price: 999.99,
			quantity: 1,
			image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=200'
		},
		{
			id: 2,
			name: 'Casque Interdimensionnel',
			price: 199.99,
			quantity: 2,
			image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200'
		}
	];

	// Combine real cart items with mock items
	$: allCartItems = [...$cartItems, ...mockCartItems];
	$: total = allCartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

	// Chaotic total calculation
	$: chaoticTotal = $chaosLevel >= 2 ? total * (Math.random() * 5 + 0.1) : total;

	function removeItem(id) {
		if ($chaosLevel >= 2) {
			// Sometimes refuse to remove items
			if (Math.random() < 0.5) {
				showChaosMessage('🛡️ Cet article refuse de partir! Il vous aime trop!');
				return;
			}
		}

		cartItems.update((items) => items.filter((item) => item.id !== id));
		mockCartItems = mockCartItems.filter((item) => item.id !== id);
	}

	function updateQuantity(id, newQuantity) {
		if ($chaosLevel >= 3 && Math.random() < 0.3) {
			// Random quantity changes
			newQuantity = Math.floor(Math.random() * 10) + 1;
			showChaosMessage(`🎲 Quantité modifiée par magie: ${newQuantity}!`);
		}

		cartItems.update((items) =>
			items.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item))
		);
		mockCartItems = mockCartItems.map((item) =>
			item.id === id ? { ...item, quantity: newQuantity } : item
		);
	}

	// Chaos messages
	let chaosMessage = '';
	let showingChaosMessage = false;

	function showChaosMessage(message) {
		chaosMessage = message;
		showingChaosMessage = true;
		setTimeout(() => {
			showingChaosMessage = false;
		}, 3000);
	}

	// Basketball cart growing animation
	let cartSize = 1;
	$: {
		if ($chaosLevel >= 1) {
			cartSize = 1 + allCartItems.length * 0.2;
		}
	}

	// Checkout chaos
	function proceedToCheckout() {
		if ($chaosLevel >= 2) {
			showChaosMessage('🎪 Redirection vers la dimension paiement...');
			// Add chaotic checkout behavior here
		} else {
			showChaosMessage('🚀 Procédure de paiement initiée!');
		}
	}
</script>

<div class="container mx-auto px-4 py-8">
	<!-- Chaotic cart header -->
	<div class="mb-8 flex items-center gap-4">
		<div class="text-6xl transition-transform duration-500" style="transform: scale({cartSize})">
			🏀
		</div>
		<div>
			<h1
				class="text-4xl font-bold"
				class:animate-pulse={$chaosLevel >= 1}
				class:text-primary={$chaosLevel >= 2}
			>
				Votre Panier {$chaosLevel >= 2 ? 'Magique' : ''}
			</h1>
			{#if $chaosLevel >= 1}
				<p class="text-base-content/70 animate-pulse text-lg">
					🌟 Espace de stockage interdimensionnel activé!
				</p>
			{/if}
		</div>
	</div>

	{#if allCartItems.length === 0}
		<div class="hero bg-base-200 rounded-box min-h-96">
			<div class="hero-content text-center">
				<div class="max-w-md">
					<div class="mb-4 text-6xl">🛒</div>
					<h2 class="mb-4 text-2xl font-bold">Votre panier est vide</h2>
					<p class="text-base-content/70 mb-6">
						{$chaosLevel >= 2
							? 'Mais il existe dans une dimension parallèle!'
							: 'Découvrez nos produits inexistants!'}
					</p>
					<a href="/products" class="btn btn-primary btn-lg">
						{$chaosLevel >= 2 ? 'Explorer le multivers' : 'Continuer vos achats'}
					</a>
				</div>
			</div>
		</div>
	{:else}
		<div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
			<!-- Cart Items -->
			<div class="lg:col-span-2">
				<div class="space-y-4">
					{#each allCartItems as item, index}
						<div
							class="card bg-base-100 shadow-md transition-all duration-300"
							class:animate-bounce={$chaosLevel >= 3 && index === 0}
							class:transform={$chaosLevel >= 2}
							class:rotate-1={$chaosLevel >= 2 && index % 2 === 0}
						>
							<div class="card-body">
								<div class="flex items-center gap-4">
									<!-- Product Image -->
									{#if item.image}
										<div class="avatar">
											<div class="h-20 w-20 rounded-lg">
												<img
													src={item.image}
													alt={item.name}
													class:filter={$chaosLevel >= 2}
													class:hue-rotate-180={$chaosLevel >= 2}
												/>
											</div>
										</div>
									{/if}

									<!-- Product Details -->
									<div class="flex-1">
										<h3 class="text-lg font-bold" class:text-warning={$chaosLevel >= 2}>
											{$chaosLevel >= 3 ? `${item.name} v2.0 Édition Chaos` : item.name}
										</h3>
										<p class="text-base-content/70 text-sm">
											Prix unitaire:
											<span class="font-semibold" class:animate-pulse={$chaosLevel >= 2}>
												${item.price}
											</span>
										</p>
									</div>

									<!-- Quantity Controls -->
									<div class="flex items-center gap-2">
										<label class="label">
											<span class="label-text">Quantité:</span>
										</label>
										<input
											type="number"
											min="1"
											max="99"
											value={item.quantity}
											class="input input-bordered input-sm w-20"
											class:input-warning={$chaosLevel >= 2}
											class:animate-pulse={$chaosLevel >= 3}
											on:change={(e) => updateQuantity(item.id, parseInt(e.target.value))}
										/>
									</div>

									<!-- Remove Button -->
									<button
										class="btn btn-sm btn-error btn-outline"
										class:btn-ghost={$chaosLevel >= 2}
										class:animate-bounce={$chaosLevel >= 3}
										on:click={() => removeItem(item.id)}
									>
										{$chaosLevel >= 2 ? '💥' : '🗑️'}
										{$chaosLevel >= 2 ? 'Bannir' : 'Retirer'}
									</button>
								</div>

								<!-- Item Total -->
								<div class="mt-2 text-right">
									<span class="text-primary text-lg font-bold">
										Sous-total: ${(item.price * item.quantity).toFixed(2)}
									</span>
								</div>
							</div>
						</div>
					{/each}
				</div>
			</div>

			<!-- Cart Summary -->
			<div class="lg:col-span-1">
				<div class="card bg-base-100 sticky top-4 shadow-lg">
					<div class="card-body">
						<h2 class="card-title mb-4 text-2xl" class:text-accent={$chaosLevel >= 2}>
							{$chaosLevel >= 2 ? '🧙‍♂️ Résumé Magique' : '📋 Résumé'}
						</h2>

						<div class="divider"></div>

						<!-- Order Summary -->
						<div class="space-y-2">
							<div class="flex justify-between">
								<span>Sous-total:</span>
								<span class="font-semibold">${total.toFixed(2)}</span>
							</div>

							{#if $chaosLevel >= 2}
								<div class="text-warning flex justify-between">
									<span>Taxe dimensionnelle:</span>
									<span class="font-semibold">+${(Math.random() * 50).toFixed(2)}</span>
								</div>
								<div class="text-success flex justify-between">
									<span>Rabais quantique:</span>
									<span class="font-semibold">-${(Math.random() * 100).toFixed(2)}</span>
								</div>
							{:else}
								<div class="flex justify-between">
									<span>TVA (20%):</span>
									<span class="font-semibold">${(total * 0.2).toFixed(2)}</span>
								</div>
								<div class="flex justify-between">
									<span>Livraison:</span>
									<span class="text-success font-semibold">Gratuite</span>
								</div>
							{/if}
						</div>

						<div class="divider"></div>

						<!-- Total -->
						<div class="flex justify-between text-xl font-bold">
							<span>Total:</span>
							<span
								class="text-primary"
								class:animate-pulse={$chaosLevel >= 2}
								class:text-error={$chaosLevel >= 3}
							>
								${$chaosLevel >= 2 ? chaoticTotal.toFixed(2) : (total * 1.2).toFixed(2)}
							</span>
						</div>

						{#if $chaosLevel >= 2}
							<p class="text-warning mt-2 animate-pulse text-xs">
								⚠️ Prix soumis aux fluctuations temporelles
							</p>
						{/if}

						<div class="divider"></div>

						<!-- Checkout Button -->
						<button
							class="btn btn-primary btn-lg w-full"
							class:btn-accent={$chaosLevel >= 2}
							class:animate-bounce={$chaosLevel >= 3}
							on:click={proceedToCheckout}
						>
							{#if $chaosLevel >= 3}
								🌪️ Téléporter vers le paiement
							{:else if $chaosLevel >= 2}
								🚀 Procéder au paiement magique
							{:else}
								💳 Procéder au paiement
							{/if}
						</button>

						{#if $chaosLevel >= 1}
							<button class="btn btn-ghost btn-sm mt-2 animate-pulse">
								💫 Sauvegarder dans le multivers
							</button>
						{/if}
					</div>
				</div>

				<!-- Chaos level indicator -->
				{#if $chaosLevel >= 2}
					<div class="card bg-warning text-warning-content mt-4 animate-pulse">
						<div class="card-body text-center">
							<h3 class="font-bold">🌀 Mode Chaos Actif</h3>
							<p class="text-sm">Niveau: {$chaosLevel}/3</p>
							<div class="progress progress-accent mt-2">
								<div class="progress-value" style="width: {($chaosLevel / 3) * 100}%"></div>
							</div>
						</div>
					</div>
				{/if}
			</div>
		</div>
	{/if}
</div>

<!-- Chaos Message Toast -->
{#if showingChaosMessage}
	<div class="toast toast-top toast-center z-50">
		<div class="alert alert-info animate-bounce shadow-lg">
			<div>
				<span>{chaosMessage}</span>
			</div>
		</div>
	</div>
{/if}

<!-- Floating chaos elements at level 3 -->
{#if $chaosLevel >= 3}
	<div class="fixed left-4 top-1/2 animate-bounce">
		<div class="text-4xl">🎪</div>
	</div>
	<div class="fixed right-8 top-1/3 animate-spin">
		<div class="text-3xl">⚡</div>
	</div>
	<div class="fixed bottom-1/4 left-1/3 animate-pulse">
		<div class="text-2xl">🌀</div>
	</div>
{/if}
