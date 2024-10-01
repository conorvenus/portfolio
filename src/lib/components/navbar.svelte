<script>
    import Braces from 'lucide-svelte/icons/braces';
    import FolderCode from 'lucide-svelte/icons/folder-code';
    import GitHub from 'lucide-svelte/icons/github';
    import LinkedIn from 'lucide-svelte/icons/linkedin';
    import Menu from 'lucide-svelte/icons/menu';
    import { onMount } from 'svelte';

    import { fade } from 'svelte/transition';

    let open = false;

    onMount(() => {
        if (window.innerWidth > 768) {
            open = true;
        }
    })
</script>

<header class="fixed max-w-7xl py-6 px-8 md:px-12 w-full left-[50%] -translate-x-[50%] z-10 navbar">
    <div
    class="fixed inset-0 -z-10 size-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"
    ></div>

    <nav class="flex flex-col gap-4 md:flex-row justify-between items-start md:items-center relative">
        <a href="/" class="text-2xl font-semibold flex items-center gap-4 text-primary">
            <Braces class="w-8 h-8" strokeWidth="3" />
            <span class="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Conor Venus</span>
        </a>
        <button class="absolute top-0 right-0 text-secondary md:hidden" on:click={() => open = !open}>
            <Menu class="w-8 h-8" strokeWidth="3" />
        </button>
        {#if open} 
        <ul transition:fade={{ duration: 500 }} class={`${!open ? 'hidden' : 'flex'} flex flex-col gap-4 md:flex-row md:gap-16 items-start md:items-center`}>
            <li>
                <a href="/#projects" class="text-lg text-content/65 flex items-center gap-3 hover:text-content transition-colors duration-200">
                    <FolderCode class="w-5 h-5" />
                    Projects
                </a>
            </li>
            <li>
                <a href="https://www.github.com/conorvenus" target="_blank" class="text-lg text-content/65 flex items-center gap-3 hover:text-content transition-colors duration-200">
                    <GitHub class="w-5 h-5" />
                    GitHub
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/conorvenus" target="_blank" class="text-lg text-content/65 flex items-center gap-3 hover:text-content transition-colors duration-200">
                    <LinkedIn class="w-5 h-5" />
                    LinkedIn
                </a>
            </li>
        </ul>
        {/if}
    </nav>
</header>

<style lang="postcss">
    .navbar {
        backdrop-filter: blur(5px);
    }

    ul {
        transition: all 1s;
    }
</style>