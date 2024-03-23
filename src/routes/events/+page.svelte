<script lang="ts">
    import { onMount } from 'svelte';
  
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
        { title: "Guide on starting a Business", location: "Puchong, Selangor", topic: "Business", date: "5/4/2024", eventNumber: 3}
    ];
  
    let filteredCards: Card[] = [];
    let searchValue: string = "";
    let selectedTopic: string = "";
  
    function filterCards() {
        filteredCards = cards.filter(card =>
            (card.location.toLowerCase().includes(searchValue.toLowerCase()) || searchValue === "") &&
            (card.topic === selectedTopic || selectedTopic === '')
        );
    }

    function resetFilters() {
        searchValue = "";
        selectedTopic = "";
        filterCards();
    }

    function getImage(eventNumber: number): string {
        return `src/lib/event${eventNumber}.jpg`;
    }
  
    onMount(() => {
        filteredCards = [...cards];
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
        <select bind:value={selectedTopic} on:change={filterCards} class="select">
            <option value="" disabled selected>Event Topics</option>
            <option value="Takaful">Takaful</option>
            <option value="Suku">Suku</option>
            <option value="Budget">Budget</option>
            <option value="Business">Business</option>
        </select>
    </label>

    <button class="btn variant-filled-secondary ml-2" on:click={resetFilters}>Reset</button>
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
