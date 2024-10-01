<script>
    import Link from 'lucide-svelte/icons/link';
</script>

<section class="min-h-screen py-32" id="projects">
    <h2 class="text-3xl font-bold mb-8 text-content">Projects</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center gap-6">
            <img class="h-10" alt="SnapShare Logo" src="snapshare.png">
            <p class="text-content/80 text-center text-lg font-medium">
                Create photo buckets for events, share a QR code, and collect all event photos in one place.
            </p>
            <a target="_blank" href="https://snapshare.uk" class="text-primary flex items-center gap-2 bg-blue-100 py-2 px-8 rounded-md text-sm">
                <Link class="w-4 h-4" />
                View Project
            </a>
        </div>

        <div class="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center gap-6">
            <img class="h-10 rounded-md shadow-xl" alt="TwitchIRC Logo" src="twitchirc.png">
            <p class="text-content/80 text-center text-lg font-medium">
                An IRC client for developing Twitch chat bots, focusing on ease-of-use and simplicity.
            </p>
            <a target="_blank" href="https://www.github.com/conorvenus/TwitchIRC" class="text-primary flex items-center gap-2 bg-blue-100 py-2 px-8 rounded-md text-sm">
                <Link class="w-4 h-4" />
                View Project
            </a>
        </div>
    </div>
</section>