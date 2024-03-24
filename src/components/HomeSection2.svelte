<script>
    import ButtonLike from "./ButtonLike.svelte";
</script>

<div class="bg-second-color">
    <div class="flex gap-x-12 p-8">
        <div class="self-center">
            <h4 class="text-black font-bold text-xl">Learn Financial Literacy</h4>
            <p class="text-black my-4">Learn financial literacy by doing quiz; test your knowledge on budgeting, saving, and investing. Practice makes perfect - reinforce your understanding of personal finance concepts through interactive quizzes.</p>
            <ButtonLike>Take Quiz</ButtonLike>
        </div>
        <img src="/src/lib/budget-calculator.png" alt="budget-calculator-img">
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