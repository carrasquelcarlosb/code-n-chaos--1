<script>
	// Individual product page
	import { page } from '$app/stores';
	
	$: productId = $page.params.id;
	
	// TODO: Load product from API
	let product = {
		id: productId,
		name: `Product #${productId}`,
		price: 99.99,
		description: 'An extraordinary product that doesn\'t really exist'
	};
</script>

<h1>{product.name}</h1>

<div class="product-details">
	<div class="product-image">
		<!-- TODO: Add product image -->
		<div>[Product Image]</div>
	</div>
	
	<div class="product-info">
		<p class="price">Prix: ${product.price}</p>
		<p class="description">{product.description}</p>
		
		<button>Ajouter au panier</button>
	</div>
</div>

<a href="/products">← Retour aux produits</a>