<script lang="ts">
    import {getToastStore, type ToastSettings} from '@skeletonlabs/skeleton'

    let card = {
      title: '',
      location: '',
      topic: '',
      date: '',
      time: '',
      venue: '',
      price: '',
      eventNumber: 0,
      details: ''
    }
  
    const url = new URL(window.location.href)
    
    const titleParam = url.searchParams.get("title")
    const locationParam = url.searchParams.get("location")
    const topicParam = url.searchParams.get("topic")
    const dateParam = url.searchParams.get("date")
    const eventNumberParam = url.searchParams.get("eventNumber")
    const timeParam = url.searchParams.get("time")
    const venueParam = url.searchParams.get("venue")
    const priceParam = url.searchParams.get("price")
    const detailsParam = url.searchParams.get("details")
  
    card = {
      title: titleParam || '',
      location: locationParam || '',
      topic: topicParam || '',
      date: dateParam || '',
      time: timeParam || '',
      venue: venueParam || '',
      price: priceParam || '',
      details: detailsParam || '',
      eventNumber: eventNumberParam ? parseInt(eventNumberParam, 10) : 0
    };

    function getImage(eventNumber: number): string {
        return `/src/lib/event${card.eventNumber}.jpg`
    }

    const toastStore = getToastStore()
    
    
    function buttonClick(){
    const t: ToastSettings = {
        message: 'Registered Successfully',

    };
    toastStore.trigger(t);
    }

    function copyClipBoard(event: MouseEvent) {
        const target = event.currentTarget as HTMLTableRowElement
        const rowData = target.textContent?.trim() || ''
        
        navigator.clipboard.writeText(rowData).then(() => {
            const toast: ToastSettings = {
                message: 'Info copied '
            }
            toastStore.trigger(toast)
        }).catch(error => {
            console.error('Error copying to clipboard: ', error)
        })
    }
</script>

<div class="text-center m-6">
    <div class="text">
        <h1 class="lg:ml-10 mb-6 text-4xl font-bold">{card.title}</h1>
    </div>
    <hr class="!border-t-4" />

    <div class="flex flex-col lg:flex-row justify-center align-middle">
        <div class="lg:w-1/2 ml-10 mt-6">
            <img class="rounded-lg w-full" src={getImage(card.eventNumber)} alt="">
        </div>
        <div class="lg:w-1/2 lg:ml-10 mt-6 max-w-72 !sm:ml-10">
            <table class="table table-interactive table-compact">
                <thead>
                    <tr class="table-row-checked">
                        <th>Event Info</th>
                    </tr>
                </thead>
                <tbody>
                    <tr on:click={copyClipBoard} title="Click to copy" style="cursor: copy;"><td>Date: {card.date}</td></tr>
                    <tr on:click={copyClipBoard} title="Click to copy" style="cursor: copy;"><td>Time: {card.time}</td></tr>
                    <tr on:click={copyClipBoard} title="Click to copy" style="cursor: copy;"><td>Venue: {card.venue}</td></tr>
                    <tr on:click={copyClipBoard} title="Click to copy" style="cursor: copy;"><td>Price: RM {card.price}</td></tr>
                </tbody>
                <tfoot class="text-center p-3 bg-variant-filled">
                    <button on:click={buttonClick} type="button" class="btn variant-filled m-3">Register</button>
                </tfoot>
            </table>
        </div>
    </div>

    <!-- Create a wrapper div for centering -->
    <div class="mx-auto max-w-screen-sm">
        <div class="text-center ml-2 my-6">
            <h1 class="text-3xl font-bold mt-3 mb-3">About This Event</h1>
            <p>{card.details}</p>
        </div>
    </div>
</div>
