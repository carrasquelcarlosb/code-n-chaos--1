<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { onMount } from 'svelte';
	import { chaosLevel, timeOnSite } from '$lib/stores/chaos.js';

	let { children } = $props();

	// Chaos progression timer
	onMount(() => {
		const interval = setInterval(() => {
			timeOnSite.update((time) => {
				const newTime = time + 1;
				// Progressive corruption levels
				if (newTime > 30) chaosLevel.set(1); // Subtle glitches
				if (newTime > 120) chaosLevel.set(2); // Moderate chaos
				if (newTime > 300) chaosLevel.set(3); // Total chaos
				return newTime;
			});
		}, 1000);

		return () => clearInterval(interval);
	});
</script>

<!-- Add chaos classes based on level -->
<div
	class="bg-base-100 min-h-screen"
	class:chaos-level-1={$chaosLevel >= 1}
	class:chaos-level-2={$chaosLevel >= 2}
	class:chaos-level-3={$chaosLevel >= 3}
>
	<Header />

	<main class="min-h-screen">
		{@render children()}
	</main>

	<Footer />
</div>

<style>
	/* Progressive chaos animations */
	.chaos-level-1 {
		animation: subtle-glitch 2s infinite;
	}

	.chaos-level-2 {
		animation: moderate-glitch 1s infinite;
	}

	.chaos-level-3 {
		animation: intense-glitch 0.3s infinite;
		filter: hue-rotate(45deg);
	}

	@keyframes subtle-glitch {
		0%,
		100% {
			transform: translate(0);
		}
		50% {
			transform: translate(1px, -1px);
		}
	}

	@keyframes moderate-glitch {
		0%,
		100% {
			transform: translate(0);
		}
		25% {
			transform: translate(-2px, 2px);
		}
		75% {
			transform: translate(2px, -2px);
		}
	}

	@keyframes intense-glitch {
		0%,
		100% {
			transform: translate(0);
		}
		10% {
			transform: translate(-5px, 5px);
		}
		20% {
			transform: translate(5px, -5px);
		}
		30% {
			transform: translate(-5px, -5px);
		}
		40% {
			transform: translate(5px, 5px);
		}
		50% {
			transform: translate(-5px, 5px);
		}
		60% {
			transform: translate(5px, -5px);
		}
		70% {
			transform: translate(-5px, -5px);
		}
		80% {
			transform: translate(5px, 5px);
		}
		90% {
			transform: translate(-5px, 5px);
		}
	}
</style>
