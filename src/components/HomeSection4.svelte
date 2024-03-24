<script>
    import ButtonLike from "./ButtonLike.svelte";
</script>

<div class="bg-second-color text-black pb-10">
    <div class="mx-10 pt-6 pb-10"> 
        <h1 class="text-3xl font-semibold">Find Inspiration and Strategies</h1>
    </div>
    <div class="grid grid-cols-2 mx-10 gap-10">
        <div>
            <h4 class="font-bold text-xl">Success Stories</h4>
            <p class="my-4">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.</p>
            <ButtonLike hrefLink="/stories">Learn More</ButtonLike>
        </div>
        <div>
            <h4 class="font-bold text-xl">Book Recommendations</h4>
            <p class="my-4">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.</p>
            <ButtonLike hrefLink="/book">Learn More</ButtonLike>
        </div>
        <div>
            <h4 class="font-bold text-xl">Financial Strategies & Articles</h4>
            <p class="my-4">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.</p>
            <ButtonLike hrefLink="/articles">Learn More</ButtonLike>
        </div>
    </div>
</div>