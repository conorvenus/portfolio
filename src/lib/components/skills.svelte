<script>
    import Carousel from "./carousel.svelte"
</script>

<section class="min-h-screen py-32 flex flex-col gap-16" id="skills">
    <h2 class="text-3xl font-bold text-content">Skills</h2>
    <Carousel title="Languages" images={[
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
        // {
        //     alt: 'rust'
        //     src: 'https://user-images.githubusercontent.com/25181517/192599922-3a8ceb1c-ff1d-40bc-b73c-99ea1182d8ad.png'
        // },
        // {
        //     alt: 'go',
        //     src: 'https://user-images.githubusercontent.com/25181517/192149581-88194d20-1a37-4be8-8801-5dc0017ffbbe.png'
        // }
    ]} />
    <Carousel title="Technologies" images={[
        {
            alt: 'react',
            src: 'https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png'
        },
        {
            alt: 'svelte',
            src: 'https://raw.githubusercontent.com/sveltejs/svelte/29052aba7d0b78316d3a52aef1d7ddd54fe6ca84/site/static/images/svelte-android-chrome-512.png'
        },
        {
            alt: 'nestjs',
            src: 'https://static-00.iconduck.com/assets.00/nestjs-icon-2048x2040-3rrvcej8.png'
        },
        {
            alt: 'django',
            src: 'https://static-00.iconduck.com/assets.00/django-icon-1606x2048-lwmw1z73.png'
        },
        {
            alt: 'sql',
            src: 'https://static-00.iconduck.com/assets.00/sql-database-generic-icon-1521x2048-d0vdpxpg.png'
        },
        {
            alt: 'nginx',
            src: 'https://user-images.githubusercontent.com/25181517/183345125-9a7cd2e6-6ad6-436f-8490-44c903bef84c.png'
        },
        {
            alt: 'tailwindcss',
            src: 'https://user-images.githubusercontent.com/25181517/202896760-337261ed-ee92-4979-84c4-d4b829c7355d.png'
        },
        {
            alt: 'git',
            src: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png'
        },
        {
            alt: 'github',
            src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png'
        },
        {
            alt: 'vue',
            src: 'https://user-images.githubusercontent.com/25181517/117448124-a2da9800-af3e-11eb-85d2-bd1b69b65603.png'
        },
        {
            alt: 'pytorch',
            src: 'https://cdn-images-1.medium.com/max/1200/1*KKADWARPMxHb-WMxCgW_xA.png'
        }
    ]} />
</section>