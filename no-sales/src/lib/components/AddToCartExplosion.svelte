<script lang="ts">
  import { onMount } from 'svelte';
  import { fly, scale } from 'svelte/transition';

  let showExplosion = false;

  onMount(() => {
    showExplosion = true;
    setTimeout(() => showExplosion = false, 1500); // Durée du délire
  });

  const random = (min, max) => Math.random() * (max - min) + min;
</script>

<style>
  .explosion {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
    animation: screenShake 0.15s infinite;
    z-index: 9999;
  }

  @keyframes screenShake {
    0% { transform: translate(1px, -2px) rotate(-1deg); }
    20% { transform: translate(-3px, 0px) rotate(1deg); }
    40% { transform: translate(2px, 3px) rotate(0deg); }
    60% { transform: translate(0px, -3px) rotate(1deg); }
    80% { transform: translate(-1px, 2px) rotate(-1deg); }
    100% { transform: translate(1px, -1px) rotate(0deg); }
  }

  .particle {
    position: absolute;
    font-size: 2rem;
    animation: spin 0.6s linear infinite;
  }

  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  .sniper {
    position: absolute;
    width: 60px;
    animation: shoot 0.3s ease-in infinite;
  }

  @keyframes shoot {
    0% { transform: translateY(0); opacity: 1; }
    100% { transform: translateY(-50vh) scale(0.2); opacity: 0; }
  }
</style>

{#if showExplosion}
  <div class="explosion">
    {#each Array(20) as _, i}
      <div
        class="particle"
        style="left: {random(0, 100)}vw; top: {random(0, 100)}vh; color: hsl({random(0, 360)}, 100%, 50%)"
        transition:fly="{{ x: random(-200, 200), y: random(-200, 200), duration: 800 }}"
      >
        💥
      </div>
    {/each}

    {#each Array(5) as _, i}
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/3/36/Sniper_rifle_icon.png"
        class="sniper"
        style="left: {random(10, 90)}vw; top: {random(20, 80)}vh; transform: rotate({random(0, 360)}deg);"
        transition:scale
      />
    {/each}
  </div>
{/if}
