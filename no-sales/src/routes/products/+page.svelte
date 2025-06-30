<script>
	// Products page
	import { onMount } from 'svelte';
	
	let products = [];
	
	onMount(() => {
		// TODO: Load products from API
		products = [
			{ id: 1, name: 'Test Product 1', price: 99.99 },
			{ id: 2, name: 'Test Product 2', price: 149.99 },
			{ id: 3, name: 'Test Product 3', price: 199.99 }
		];
	});
</script>

<h1>Nos Produits</h1>
<p>Explorez notre catalogue de produits inexistants</p>

<div class="products-grid">
	{#each products as product}
		<article>
			<h3>{product.name}</h3>
			<p>Prix: ${product.price}</p>
			<a href="/products/{product.id}">Voir le produit</a>
			<button>Ajouter au panier</button>
		</article>
	{/each}
</div>