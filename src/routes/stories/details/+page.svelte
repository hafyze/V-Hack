<script lang="ts">
    let card = {
        id: '',
        title: '',
        details: '',
        author: '',
        storyNumber: 0
    }

    const url = new URL(window.location.href)

    const idParam = url.searchParams.get("id")
    const titleParam = url.searchParams.get("title")
    const detailsParam = url.searchParams.get("details")
    const authorParam = url.searchParams.get("author")
    const storyNumberParam = url.searchParams.get("storyNumber")

    card = {
        id: idParam || '',
        title: titleParam || '',
        details: detailsParam || '',
        author: authorParam || '',
        storyNumber: storyNumberParam ? parseInt(storyNumberParam, 10) : 0
    }

    function getImage(storyNumber: number): string {
        return `/src/lib/story${card.storyNumber}.jpg`
    }
</script>

<button type="button" class="btn-icon variant-filled ml-12 mt-5" on:click={() => {history.back()}}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
    </svg>
</button>

<div class="ml-2">
    <div class="m-6 mx-auto max-w-screen-lg">
        <div class="text">
            <h1 class="lg:ml-10 mb-6 text-4xl font-bold">{card.title}</h1>
        </div>
        <hr class="!border-t-4" />
    
        <div class="flex flex-col lg:flex-row">
            <div class="lg:w-1/2 ml-10 mt-6">
                <img class="rounded-lg w-full" src={getImage(card.storyNumber)} alt="">
            </div>
            <div class="lg:w-1/2 lg:ml-10 mt-6 max-w-72 !sm:ml-10">
                
            </div>
        </div>
    
        <div class="ml-10 my-6 max-w-screen-sm">
            <h1 class="text-3xl font-bold mt-3 mb-3">Story</h1>
            <p>{card.details}</p>
        </div>
        <div>
            <p class="italic">Author: {card.author}</p>
        </div>
    </div>
</div>

