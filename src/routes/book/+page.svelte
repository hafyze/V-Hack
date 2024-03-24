<script>

  import { goto } from "$app/navigation";

</script>
<div class=" w-full p-8 pb-0">
    <span class="h1">Book Recommendations</span>
</div>

<div class="w-full h-full flex items-center flex-col">
    <!-- ITEM 1 -->
    <span class="horizontalLine my-12"/>
    <div class="flex flex-row px-32 gap-8">
        <div class="items-center">
            <img class="h-72 w-auto rounded-lg basis-1/5" src="/src/lib/atomicHabits.webp" alt="">
        </div>
        <div class="flex flex-col basis-4/5 align-start">
            <span class="text-2xl py-4 font-bold">
                Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones 
            </span>
            <p class="pt-2">
                Atomic Habits will reshape the way you think about progress and success, and give you the tools and strategies you need to transform your habits--whether you are a team looking to win a championship, an organization hoping to redefine an industry, or simply an individual who wishes to quit smoking, lose weight, reduce stress, or achieve any other goal.
            </p>
            <a target="_blank" href="https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299">
                <button type="button" class="btn variant-filled w-48 mt-12">Shop Now</button>
            </a>
        </div>
    </div>
    <!-- END ITEM 1 -->
    <!-- ITEM 2 -->
    <span class="horizontalLine my-12"/>
    <div class="flex flex-row px-32 gap-8">
        <div class="items-center">
            <img class="h-72 w-auto rounded-lg basis-1/5" src="/src/lib/rdpd.jpg" alt="">
        </div>
        <div class="flex flex-col basis-4/5 align-start">
            <span class="text-2xl py-4 font-bold">
                Rich Dad Poor Dad
            </span>
            <p class="pt-2">
                Rich Dad Poor Dad is a 1997 book written by Robert T. Kiyosaki and Sharon Lechter. It advocates the importance of financial literacy, financial independence and building wealth through investing in assets, real estate investing, starting and owning businesses, as well as increasing one's financial intelligence.
            </p>
            <a target="_blank" href="https://www.amazon.com/Rich-Dad-Poor-Teach-Middle/dp/1612680194">
                <button type="button" class="btn variant-filled w-48 mt-12">Shop Now</button>
            </a>
        </div>
    </div>
    <!-- END ITEM 2 -->
    <!-- ITEM 3 -->
    <span class="horizontalLine my-12"/>
    <div class="flex flex-row px-32 gap-8">
        <div class="items-center">
            <img class="h-72 w-auto rounded-lg basis-1/5" src="/src/lib/flr.jpeg" alt="">
        </div>
        <div class="flex flex-col basis-4/5 align-start">
            <span class="text-2xl py-4 font-bold">
                ADVANCING FINANCIAL LITERACY AND RESILIENCE IN POST-PANDEMIC MALAYSIA
            </span>
            <p class="pt-2">
                
The COVID-19 crisis has heightened financial challenges in Malaysia, emphasizing the need for improved financial literacy. "Advancing Financial Literacy and Resilience in Post-Pandemic Malaysia" addresses these issues, aiming to empower individuals with the knowledge needed for informed financial decisions, ultimately fostering greater financial resilience.
            </p>
            <a target="_blank" href="https://www.umpress.com.my/index.php?route=product/product&product_id=968">
                <button type="button" class="btn variant-filled w-48 mt-12">Shop Now</button>
            </a>
        </div>
    </div>
    <!-- END ITEM 3 -->
</div>

<style>
    .horizontalLine {  
        height:2px;
        width:95%;
        border: none; 
        border-bottom: 1px solid rgba(220, 220, 220, 0.459);  
    }
</style>