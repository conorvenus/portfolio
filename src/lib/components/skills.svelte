<script>
    import Carousel from "./carousel.svelte"
</script>

<section class="min-h-screen py-32 flex flex-col gap-12" id="skills">
    <h2 class="text-3xl font-bold text-content">Skills</h2>
    <Carousel images={[
        {
            alt: 'html',
            src: 'https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png'
        },
        {
            alt: 'css',
            src: 'https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png'
        },
        {
            alt: 'javascript',
            src: 'https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png'
        },
        {
            alt: 'typescript',
            src: 'https://user-images.githubusercontent.com/25181517/183890598-19a0ac2d-e88a-4005-a8df-1ee36782fde1.png'
        },
        {
            alt: 'c#',
            src: 'https://user-images.githubusercontent.com/25181517/121405384-444d7300-c95d-11eb-959f-913020d3bf90.png'
        },
        {
            alt: 'java',
            src: 'https://user-images.githubusercontent.com/25181517/117201156-9a724800-adec-11eb-9a9d-3cd0f67da4bc.png'
        },
        {
            alt: 'python',
            src: 'https://user-images.githubusercontent.com/25181517/183423507-c056a6f9-1ba8-4312-a350-19bcbc5a8697.png'
        },
        {
            alt: 'rust',
            src: 'https://user-images.githubusercontent.com/25181517/192599922-3a8ceb1c-ff1d-40bc-b73c-99ea1182d8ad.png'
        },
        {
            alt: 'go',
            src: 'https://user-images.githubusercontent.com/25181517/192149581-88194d20-1a37-4be8-8801-5dc0017ffbbe.png'
        }
    ]} />
</section>