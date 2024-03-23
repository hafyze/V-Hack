<script lang="ts">
    import { onMount } from 'svelte';
  
    interface Card {
        title: string
        location: string
        date: string
        eventNumber: number
    }
  
    let cards: Card[] = [
        { title: "Investing 101: How to start", location: "Cyberjaya, Selangor", date: "1/4/2024", eventNumber: 1},
        { title: "Islamic Trading Principles", location: "Cyberjaya, Selangor", date: "2/4/2024", eventNumber: 2},
        { title: "Guide on starting a Business", location: "Puchong, Selangor", date: "5/4/2024", eventNumber: 3}
    ];
  
    let filteredCards: Card[] = []
    let searchValue: string = ''
  
    function filterCards() {
        filteredCards = cards.filter(card =>
            card.location.toLowerCase().includes(searchValue.toLowerCase())
        );
    }

    function getImage(eventNumber: number): string {
        return `src/lib/event${eventNumber}.jpg`
    }
  
    onMount(() => {
        filteredCards = [...cards]
    });
</script>
  
<!-- EVENTS -->
<div class="flex items-center justify-center"> 
        <h1 class="my-4 text-3xl"><strong>Upcoming Events</strong></h1>
    </div>
    <!-- Search Section -->
    <div class="flex items-center justify-center">
    <label class="label">
      <input bind:value={searchValue} on:input={filterCards} class="input w-full md:w-72 mr-4" type="text" placeholder="Enter a city or region" />
    </label>
    
    <label class="label">
      <select class="select" placeholder="Event Topics">
        <option value="0" disabled selected>Event Topics</option>
        <option value="1">Takaful</option>
        <option value="2">Suku</option>
        <option value="3">Budget</option>
        <option value="4">Business</option>
      </select>
    </label>
</div>
  
<div class="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 m-10">
    {#each filteredCards as card}
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
  