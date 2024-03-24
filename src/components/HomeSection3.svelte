<script lang="ts">
    interface Card {
        title: string;
        location: string;
        topic: string;
        date: string;
        eventNumber: number;
    }
  
    let cards: Card[] = [
        { title: "Investing 101: How to start", location: "Cyberjaya, Selangor", topic: "Business", date: "1/4/2024", eventNumber: 1},
        { title: "Islamic Trading Principles", location: "Cyberjaya, Selangor", topic: "Budget", date: "2/4/2024", eventNumber: 2},
        { title: "Guide on starting a Business", location: "Puchong, Selangor", topic: "Business", date: "5/4/2024", eventNumber: 3},
        { title: "Guide on starting a Business", location: "Puchong, Selangor", topic: "Business", date: "10/4/2024", eventNumber: 4}
    ];

    function getImage(eventNumber: number): string {
        return `src/lib/event${eventNumber}.jpg`;
    }
</script>

<div class="bg-white">
    <div class="flex items-center justify-center text-black pt-6 pb-4"> 
        <h1 class="text-3xl font-semibold">Upcoming Events</h1>
    </div>
    <div>
        <p class="text-main-color mx-10 underline">
            <a href="/events">See all events</a>
        </p>
        <div class="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 mx-10 pt-4 pb-10">
            {#each cards as card}
                <a href="/events/details" class="card card-hover text-center">
                    <img class="rounded-lg" src={getImage(card.eventNumber)} alt="">
                    <p class="text-2xl m-2 font-semibold">{card.title}</p>
                    <div class="flex card-footer">
                        <p class="flex-grow text-left">{card.location}</p>
                        <p class="text-right">{card.date}</p>
                    </div>          
                 </a>
            {/each}
        </div>
    </div>
</div>