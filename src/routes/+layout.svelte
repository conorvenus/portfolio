<script>
    import Navbar from '$lib/components/navbar.svelte';
    import '../app.css';
</script>

<svelte:head>
    <title>Conor Venus - Portfolio</title>
</svelte:head>

<div
  class="fixed inset-0 -z-10 size-full bg-base bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"
></div>

<Navbar />

<main class="max-w-7xl mx-auto px-12 flex flex-col gap-16">
  <slot />
</main>