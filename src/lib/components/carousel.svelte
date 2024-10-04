<script lang="ts">
    export let images: {
        alt: string,
        src: string
    }[];
</script>

<div class="flex flex-col gap-4 bg-content/5 p-8 rounded-md">
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

<style lang="postcss">
    .image-container img {
        min-width: 100px;
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