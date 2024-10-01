<script>
    import Mail from 'lucide-svelte/icons/mail';
</script>

<section class="min-h-screen flex items-center w-full py-32">
    <div class="flex-col lg:flex-row flex max-w-screen-xl mx-auto gap-8 lg:py-16 w-full">
        <div class="mr-auto place-self-center flex-1">
            <h1 class="hero-title max-w-2xl mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
                Conor Venus
            </h1>
            <p class="text-2xl font-medium mb-4">Software Engineer | Machine Learning Enthusiast</p>
            <p class="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-content/50">
                A self-taught programmer of nearly a decade, I have a genuine passion for designing, building and learning.
            </p>
            <a href="mailto:conorvenus@gmail.com" class="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100">
                <Mail class="w-6 h-6 mr-4" />
                Contact Me
            </a> 
        </div>
        <div class="lg:mt-0 lg:flex face">
            <img src="face.png" alt="Conor Venus" class="object-contain rounded-full max-h-[400px]" style="mask-image: radial-gradient(circle, white 40%, transparent 100%);">
        </div>
    </div>
</section>

<style lang="postcss">
    .face, .hero-title {
        position: relative;
    }

    .face::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        @apply aspect-square;
        @apply rounded-full;
        @apply bg-gradient-to-r from-primary to-secondary;
    }

    .face::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        @apply rounded-full aspect-square;
        @apply bg-gradient-to-r from-primary to-secondary;
        @apply blur-3xl -z-10 opacity-75;
    }

    .hero-title::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        @apply bg-gradient-to-r from-primary to-secondary/25;
        @apply blur-3xl -z-10 opacity-50 rounded-full;
    }
</style>