<!-- src/routes/blog/+page.svelte -->
<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
</script>

<div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-6">Blog Posts</h1>
    <ul class="grid grid-cols-2 gap-5">
        {#each data.posts as post (post.id)}
            <li class="p-6 bg-white rounded-lg shadow-md hover:bg-gray-100 transition">
                <a href="/blog" class="text-2xl font-semibold text-blue-800 hover:underline">
                    {post.title}
                </a>
                <p class="mt-2 text-gray-700">{post.body.substring(0, 100)}...</p>
            </li>
        {/each}
    </ul>
</div>