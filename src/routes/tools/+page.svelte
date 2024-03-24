<script>
    import { Stepper, Step } from '@skeletonlabs/skeleton';
    let incomes = [{name: "Salary", value : 0}, {name: "Rental Income", value : 0}];
    let expenses = [
        {name: "Debt", value : 0},
        {name: "Entertainment", value : 0},
        {name: "Food", value : 0}, 
        {name: "Housing", value : 0},
        {name: "Insurance", value : 0},
        {name: "Transportation", value : 0},
        {name: "Utilities", value : 0},
    ];

    $: totalIncome =  incomes[0].value + incomes[1].value;
    $: totalExpenses =  expenses[0].value + expenses[1].value + expenses[2].value + expenses[3].value + expenses[4].value + expenses[5].value + expenses[6].value;
    $: balance = totalIncome - totalExpenses;

</script>

<div class="stepper-container py-8">
    <Stepper>
        <Step>
            <svelte:fragment slot="header">Monthly Income</svelte:fragment>
            {#each incomes as income}
            <div class="bg-green-400 p-6">
                <div class="flex items-center">
                    <div class="w-48">
                        <label class="block text-main-color font-bold text-center text-lg" for="inline-salary">
                            {income.name}
                        </label>
                    </div>
                    <div>
                        <input 
                            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                            id="inline-salary" type="number" bind:value={income.value}
                        >
                    </div>
                </div>
            </div>
            {/each}
        </Step>
        <Step>
            <svelte:fragment slot="header">Monthly Expenses</svelte:fragment>
            {#each expenses as expense}
            <div class="bg-red-300 p-6">
                <div class="flex items-center">
                    <div class="w-48">
                        <label class="block text-main-color font-bold text-center text-lg" for="expense-salary">
                            {expense.name}
                        </label>
                    </div>
                    <div>
                        <input 
                            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                            id="inline-expense" type="number" bind:value={expense.value}
                        >
                    </div>
                </div>
            </div>
            {/each}
        </Step>
        <Step>
            <svelte:fragment slot="header">Result</svelte:fragment>
            <div class="bg-yellow-300 text-black text-xl p-6">
                <div class="font-bold pb-3 mb-3 border-b-4 border-black">
                    <div class="mb-2">
                        <p>Your monthly income:</p>
                        <p>RM {totalIncome}</p>
                    </div>
                    <div>
                        <p>Your monthly expenses:</p>
                        <p>RM {totalExpenses}</p>
                    </div>
                </div>
                <div class="font-bold">
                    <p>
                        Balance: RM 
                        <span class="{balance < 0 ? 'text-red-700' : 'text-green-700'}">
                        {balance}
                    </span>
                    </p>
                </div>
            </div>
        </Step>
    </Stepper>
</div>

<style>
    .stepper-container {
        margin-left: auto;
        margin-right: auto;
        max-width: 500px; /* Adjust the maximum width as needed */
    }
</style>