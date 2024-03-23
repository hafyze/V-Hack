<script>
    import ButtonLike from "./ButtonLike.svelte";
</script>

<div class="bg-white">
    <div class="flex gap-x-12 p-8">
        <img src="/src/lib/budget-calculator.png" alt="budget-calculator-img">
        <div class="self-center">
            <h4 class="text-black font-bold text-xl">Budget Calculator</h4>
            <p class="text-black my-4">A budget calculator is a tool that tracks income and expenses to help manage finances effectively. By inputting financial data, users can create a budget plan tailored to their needs and goals.</p>
            <ButtonLike>Budget Calculator</ButtonLike>
        </div>
    </div>
</div>

<style>
    img {
        width: 50%;
    }
    p {
        width: 90%;
        text-align: justify;
    }
</style>