<script>

  import { goto } from "$app/navigation";

</script>
<div class=" w-full p-8">
    <span class="h1">Financial Articles</span>
</div>

<div class="w-full h-full flex items-center flex-col">
    <!-- ITEM 1 -->
    <span class="horizontalLine my-12"/>
    <div class="flex flex-row px-32">
        <div class="flex flex-col basis-4/5 justify-center">
            <div>
                <span>
                    20/3/2024 
                </span>
                <span class="badge variant-filled ml-2 rounded-sm">Member Only</span>
            </div>
            <span class="text-4xl py-4 font-bold">
                Equity Crowdfunding Malaysia
            </span>
            <p class="pt-2 mr-5">
                The Securities Commission (SC) made equity crowdfunding legal in Malaysia in 2015 but only through approved operators. pitchIN is a Registered Market Operator (RMO) approved by the Securities Commission to offer equity crowdfunding. The laws governing equity crowdfunding in Malaysia is the Guidelines on Recognized Markets (‘ECF Guidelines’) issued by the SC.
            </p>
            <button type="button" class="btn variant-filled w-48 mt-12" on:click={() => {goto("/articles/crowdfunding")}}>Read More</button>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg basis-1/5" src="/src/lib/equityCrowdfunding.png" alt="">
        </div>
    </div>
    <!-- END ITEM 1 -->
    <!-- ITEM 2 -->
    <span class="horizontalLine my-12"/>
    <div class="flex flex-row px-32">
        <div class="flex flex-col basis-4/5 justify-center">
            <div>
                <span>
                    20/3/2024 
                </span>
                <span class="badge variant-filled ml-2 rounded-sm">Member Only</span>
            </div>
            <span class="text-4xl py-4 font-bold">
                Equity Crowdfunding Malaysia
            </span>
            <p class="pt-2 mr-5">
                The Securities Commission (SC) made equity crowdfunding legal in Malaysia in 2015 but only through approved operators. pitchIN is a Registered Market Operator (RMO) approved by the Securities Commission to offer equity crowdfunding. The laws governing equity crowdfunding in Malaysia is the Guidelines on Recognized Markets (‘ECF Guidelines’) issued by the SC.
            </p>
            <button type="button" class="btn variant-filled w-48 mt-12" on:click={() => {goto("/articles/crowdfunding")}}>Read More</button>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg basis-1/5" src="/src/lib/equityCrowdfunding.png" alt="">
        </div>
    </div>
    <!-- END ITEM 2 -->

</div>

<style>
    .horizontalLine {  
        height:2px;
        width:95%;
        border: none; 
        border-bottom: 1px solid rgba(220, 220, 220, 0.459);  
    }
</style>