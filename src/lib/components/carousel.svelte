<script lang="ts">
    export let images: {
        alt: string,
        src: string
    }[];

    export let title: string;
</script>

<div class="flex flex-col gap-4">
    <h3 class="title bg-gradient-to-r from-primary to-secondary rounded-lg text-base font-semibold text-2xl w-fit px-8 py-4">{title}</h3>
    <div class="flex flex-col gap-4 bg-content/5 p-8 rounded-md relative">
        <div class="parent cursor-pointer w-full overflow-hidden flex gap-8">
            {#each [...Array(10)] as _}
                <div class="images flex gap-8">
                    {#each images as image}
                        <div class="image-container">
                            <img src={image.src} alt={image.alt} title={image.alt} />
                        </div>
                    {/each}
                </div>
            {/each}
        </div>
    </div>
</div>

<style lang="postcss">
    .title {
        @apply relative;
    }

    .title::after {
        content: '';
        @apply absolute bg-gradient-to-r from-secondary to-primary box-content w-full h-full top-0 left-0 blur-xl -z-10 opacity-25;
    }
    
    .image-container img {
        min-width: 100px;
        aspect-ratio: 1/1;
        object-fit: contain;
    }

    .image-container {
        @apply bg-content/10 p-8 rounded-lg relative;
    }

    .images {
        animation: scroll 20s 0.5s linear infinite;
    }

    .parent:hover .images {
        animation-play-state: paused;
    }

    @keyframes scroll {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(-100%);
        }
    }
</style>