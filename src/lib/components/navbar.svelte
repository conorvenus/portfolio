<script>
    import Braces from 'lucide-svelte/icons/braces';
    import FolderCode from 'lucide-svelte/icons/folder-code';
    import GitHub from 'lucide-svelte/icons/github';
    import LinkedIn from 'lucide-svelte/icons/linkedin';
</script>

<header class="fixed max-w-7xl py-6 px-12 w-full left-[50%] -translate-x-[50%] z-10 navbar">
    <div
    class="fixed inset-0 -z-10 size-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"
    ></div>

    <nav class="flex justify-between items-center">
        <a href="/" class="text-2xl font-semibold flex items-center gap-4 text-primary">
            <Braces class="w-8 h-8" strokeWidth="3" />
            <span class="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Conor Venus</span>
        </a>
        <ul class="flex gap-16 items-center">
            <li>
                <a href="/projects" class="text-lg text-content/65 flex items-center gap-3 hover:text-content transition-colors duration-200">
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
    </nav>
</header>

<style lang="postcss">
    .navbar {
        backdrop-filter: blur(5px);
    }
</style>