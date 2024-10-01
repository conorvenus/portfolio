<script>
    import Link from 'lucide-svelte/icons/link';
</script>

<section class="min-h-screen py-32" id="projects">
    <h2 class="text-3xl font-bold mb-8 text-content">Projects</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="bg-white shadow-lg rounded-lg p-6">
            <h3 class="text-xl font-semibold">SnapShare</h3>
            <p class="text-content/65 mb-4">
                SnapShare is an image sharing platform that allows users to create events (i.e., photo buckets), share a QR code with attendees, and collates all images taken during the event in one place.
            </p>
            <a href="https://snapshare.uk" class="text-primary hover:underline flex items-center gap-2">
                <Link class="w-5 h-5" />
                View Project
            </a>
        </div>
    </div>
</section>