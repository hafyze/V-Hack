<script lang="ts">
    let card = {
      title: '',
      location: '',
      topic: '',
      date: '',
      eventNumber: 0
    };
  
    const url = new URL(window.location.href);
    
    const titleParam = url.searchParams.get("title");
    const locationParam = url.searchParams.get("location");
    const topicParam = url.searchParams.get("topic");
    const dateParam = url.searchParams.get("date");
    const eventNumberParam = url.searchParams.get("eventNumber");
  
    card = {
      title: titleParam || '',
      location: locationParam || '',
      topic: topicParam || '',
      date: dateParam || '',
      eventNumber: eventNumberParam ? parseInt(eventNumberParam, 10) : 0
    };
  </script>
  
  <div>
    <h1>{card.title}</h1>
    <p>Location: {card.location}</p>
    <p>Topic: {card.topic}</p>
    <p>Date: {card.date}</p>
  </div>
  