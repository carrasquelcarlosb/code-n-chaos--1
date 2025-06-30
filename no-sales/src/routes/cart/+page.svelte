<script>
	// Cart page
	let cartItems = [
		{ id: 1, name: 'Test Product', price: 99.99, quantity: 1 }
	];
	
	$: total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
	
	function removeItem(id) {
		cartItems = cartItems.filter(item => item.id !== id);
	}
	
	function updateQuantity(id, newQuantity) {
		cartItems = cartItems.map(item => 
			item.id === id ? { ...item, quantity: newQuantity } : item
		);
	}
</script>

<h1>Votre Panier</h1>

{#if cartItems.length === 0}
	<p>Votre panier est vide</p>
	<a href="/products">Continuer vos achats</a>
{:else}
	<div class="cart-items">
		{#each cartItems as item}
			<article>
				<h3>{item.name}</h3>
				<p>Prix: ${item.price}</p>
				<label>
					Quantité:
					<input 
						type="number" 
						min="1" 
						value={item.quantity}
						on:change={(e) => updateQuantity(item.id, parseInt(e.target.value))}
					/>
				</label>
				<button on:click={() => removeItem(item.id)}>Retirer</button>
			</article>
		{/each}
	</div>
	
	<div class="cart-total">
		<h2>Total: ${total.toFixed(2)}</h2>
		<button>Procéder au paiement</button>
	</div>
{/if}