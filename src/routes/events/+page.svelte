<script lang="ts">
    import { goto } from '$app/navigation'
    import { onMount } from 'svelte'
  
    interface Card {
        title: string
        location: string
        topic: string
        date: string
        time: string
        venue: string
        price: number
        eventNumber: number
        details: string
    }
  
    let cards: Card[] = [
        { 
            title: "Investing 101: How to start", 
            location: "Cyberjaya, Selangor", 
            topic: "Business", 
            date: "1/4/2024", 
            time: "10:30AM",
            venue: "Cyberview", 
            price: 30, 
            eventNumber: 1,
            details: "This workshop aims to provide participants with fundamental knowledge and practical strategies to start investing wisely and build long-term wealth. Whether you are a complete beginner or looking to refine your investment skills, this workshop will equip you with the tools and confidence to make informed financial decisions."
        },{ 
            title: "Islamic Trading Principles", 
            location: "Cyberjaya, Selangor", 
            topic: "Budget", 
            date: "2/4/2024", 
            time: "9:30AM", 
            venue: "(Hybrid) Cyberview and Google Meet", 
            price: 0, 
            eventNumber: 2,
            details: "This workshop aims to provide participants with a comprehensive understanding of Islamic finance principles and ethical trading practices in accordance with Shariah law. Participants will learn about the core tenets of Islamic finance, the concept of Halal and Haram in investments, and practical strategies for creating a Shariah-compliant investment portfolio."
        },{ 
            title: "Guide on starting a Business", 
            location: "Puchong, Selangor", 
            topic: "Business", 
            date: "5/4/2024", 
            time: "8:00AM", 
            venue: "Dewan Awam Puchong", 
            price: 10, 
            eventNumber: 3,
            details: "This workshop is designed for aspiring entrepreneurs and individuals interested in starting their own businesses. Participants will learn the key steps involved in launching a business, from refining their business idea to developing a solid business plan, securing funding, and navigating legal and operational aspects."
        }
    ];
  
    let filteredCards: Card[] = []
    let searchValue: string = ""
    let selectedTopic: string = ""
  
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

    function handleCardClick(card: Card) {
        const url = `events/details?title=${card.title}&location=${card.location}&topic=${card.topic}&date=${card.date}&time=${card.time}&venue=${card.venue}&price=${card.price}&eventNumber=${card.eventNumber}&details=${card.details}`;
        goto(url);
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
  
<!-- EVENTS -->
<div class="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 m-10">
    {#each filteredCards as card}
        <a href="#top" on:click|preventDefault={() => handleCardClick(card)} class="card card-hover text-center">
            <img class="rounded-lg" src={getImage(card.eventNumber)} alt="">
            <p class="text-2xl m-2 font-semibold">{card.title}</p>
            <div class="flex card-footer">
                <p class="flex-grow text-left">{card.location}</p>
                <p class="text-right">{card.date}</p>
            </div>
         </a>
    {/each}
</div>

