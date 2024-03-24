<script lang="ts">
    import { goto } from '$app/navigation'


    interface Card {
        id: string
        title: string
        details: string
        author: string
        storyNumber: number
    }

    let storyCard: Card[] =[
        {
            id: "1", 
            title: "How it started from the streets", 
            author: "Daniel", 
            storyNumber: 1,
            details: "Starting with nothing but determination and resilience, John Doe rose from homelessness on the streets to become a thriving entrepreneur, leveraging his life experiences to build a successful business empire. Through sheer grit and unwavering focus, he turned adversity into opportunity, inspiring countless others along the way with his journey from homelessness to prosperity"
        },
        {
            id: "2", 
            title: "Fashion is the way", 
            author: "Daniel", 
            storyNumber: 2,
            details: "Sarah Smith, a passionate advocate for sustainability, founded her own fashion brand after witnessing the environmental impact of the fashion industry. Starting from her garage with a small collection of eco-friendly designs, Sarah's brand quickly gained traction for its stylish yet sustainable clothing. Through innovative materials and ethical manufacturing practices, she not only built a profitable business but also became a leader in the sustainable fashion movement, inspiring change across the industry"
        },
        {
            id: "3", 
            title: "Tech startup and tech savy", 
            author: "Daniel", 
            storyNumber: 3,
            details: "Carlos Rodriguez, a tech-savvy visionary, launched his tech startup from his college dorm room. Fueled by a desire to revolutionize how people interact with technology, Carlos developed a groundbreaking app that quickly gained millions of users worldwide. With strategic partnerships and a focus on user experience, his startup became a household name in the tech industry, attracting significant investment and ultimately leading to a successful IPO. Carlos's story showcases the power of innovation and perseverance in the competitive world of tech entrepreneurship."
        },
    ] 

    function getImage(storyNumber: number): string {
        return `src/lib/story${storyNumber}.jpg`;
    }

    function handleCardClick(card: Card) {
        const url = `stories/details?title=${card.title}&id=${card.id}&author=${card.author}&storyNumber=${card.storyNumber}&details=${card.details}`;
        goto(url);
    }
</script>

<div class="ml-6 mt-10">
    <h1 class="text-4xl w-6/12">Success stories</h1>

    <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-24 m-10">
        {#each storyCard as card}
            <a href="#top" on:click|preventDefault={() => handleCardClick(card)} class="card card-hover text-center">
                <img class="rounded-lg max-h-full" src={getImage(card.storyNumber)} alt="">
                <h1 class="text-2xl m-2 font-semibold">{card.title}</h1>

                <p>{card.details.slice(0, 150) + "..."}</p>

                <div class="card-footer mt-4">
                    <p class="text-right text-gray-500 disabled italic">author: {card.author}</p>
                </div>
             </a>
        {/each}
    </div>
</div>