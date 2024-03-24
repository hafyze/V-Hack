<script lang="ts">
    import { SvelteComponentTyped } from "svelte";
  
    let score: number = 0;
  
    function checkAnswers(): void {
      const answers: string[] = ["b", "c", "c", "a", "c"];
      score = 0;
  
      const allLabels: NodeListOf<HTMLLabelElement> = document.querySelectorAll('label');
      allLabels.forEach(label => {
        label.style.backgroundColor = '';
        label.classList.remove('variant-filled-success', 'variant-filled-error', 'variant-filled-tertiary');
      });
  
      for (let i = 1; i <= 5; i++) {
        const selectedAnswer: string | undefined = (document.querySelector(`input[name="q${i}"]:checked`) as HTMLInputElement)?.value;
        const answerElement: HTMLElement | null = document.querySelector(`input[name="q${i}"]:checked + label`);
  
        if (selectedAnswer === answers[i - 1]) {
          score++;
          if (answerElement) {
            answerElement.classList.add('variant-filled-success');
          }
        } else {
          if (answerElement) {
            answerElement.classList.add('variant-filled-error');
          }
        }
      }
  
      const resultDiv: HTMLElement | null = document.getElementById('result');
      if (resultDiv) {
        resultDiv.textContent = `Your score is: ${score}/5`;
      }
    }
  
    function Selected(event: MouseEvent): void {
  const target = event.target as HTMLInputElement;
  if (target.checked) {

    const questionNumber = target.name.slice(1); 
    const labelsInSameQuestion = document.querySelectorAll(`input[name="q${questionNumber}"] + label`);
    labelsInSameQuestion.forEach(label => {
      label.classList.remove('variant-filled-tertiary');
    });

    const label = document.querySelector(`input[id="${target.id}"] + label`);
    if (label) {
      label.classList.add('variant-filled-tertiary');
    }
  }
}
  </script>
  
  
  <div class="body h-screen justify-items-center text-center grid font-sans">
    <div class="w-3/4 h-3/4 m-auto">
      <form id="quizForm">
        <ol>
          <li class="text-2xl m-10">
            <h1 class="mb-10">Which is a short-term investment?</h1>
            <ul class="flex space-x-6 justify-center">
              <li>
                <input type="radio" name="q1" on:click={Selected} value="a" id="q1a" data-button-id="checkButton" class="hidden">
                <label for="q1a" class="btn variant-filled flex items-center"><span class="radio-icon inline-block"></span>Government bonds</label>
              </li>
              <li>
                <input type="radio" name="q1"  on:click={Selected}  value="b" id="q1b" data-button-id="checkButton" class="hidden">
                <label for="q1b" class="btn variant-filled flex items-center"><span class="radio-icon inline-block"></span>Certificate of deposit (CD)</label>
              </li>
              <li>
                <input type="radio" name="q1"  on:click={Selected}  value="c" id="q1c" data-button-id="checkButton" class="hidden">
                <label for="q1c" class="btn variant-filled flex items-center"><span class="radio-icon inline-block"></span>Startup stocks</label>
              </li>
              <li>
                <input type="radio" name="q1"  on:click={Selected}  value="d" id="q1d" data-button-id="checkButton" class="hidden">
                <label for="q1d" class="btn variant-filled flex items-center"><span class="radio-icon inline-block"></span>Real estate</label>
              </li>
            </ul>
          </li>
          <li class="text-2xl m-10">
            <h1 class="mb-10">What does APR stand for?</h1>
            <ul class="flex space-x-6 justify-center">
              <li>
                <input type="radio" name="q2"  on:click={Selected}  value="a" id="q2a" data-button-id="checkButton" class="hidden">
                <label for="q2a" class="btn variant-filled flex items-center"><span class="radio-icon inline-block"></span>Annual Percentage Return</label>
              </li>
              <li>
                <input type="radio" name="q2"  on:click={Selected}  value="b" id="q2b" data-button-id="checkButton" class="hidden">
                <label for="q2b" class="btn variant-filled flex items-center"><span class="radio-icon inline-block"></span>Annual Profit Rate</label>
              </li>
              <li>
                <input type="radio" name="q2" on:click={Selected}   value="c" id="q2c" data-button-id="checkButton" class="hidden">
                <label for="q2c" class="btn variant-filled flex items-center"><span class="radio-icon inline-block"></span>Annual Percentage Rate</label>
              </li>
              <li>
                <input type="radio" name="q2" on:click={Selected}   value="d" id="q2d" data-button-id="checkButton" class="hidden">
                <label for="q2d" class="btn variant-filled flex items-center"><span class="radio-icon inline-block"></span>Average Profit Ratio</label>
              </li>
            </ul>
          </li>
          <li class="text-2xl m-10">
            <h1 class="mb-10">What's the main purpose of a credit score?</h1>
            <ul class="flex space-x-6 justify-center">
              <li>
                <input type="radio" name="q3"  on:click={Selected}  value="a" id="q3a" data-button-id="checkButton" class="hidden">
                <label for="q3a" class="btn variant-filled flex items-center"><span class="radio-icon inline-block"></span>Measure wealth</label>
              </li>
              <li>
                <input type="radio" name="q3"  on:click={Selected}  value="b" id="q3b" data-button-id="checkButton" class="hidden">
                <label for="q3b" class="btn variant-filled flex items-center"><span class="radio-icon inline-block"></span>Determine government assistance</label>
              </li>
              <li>
                <input type="radio" name="q3"  on:click={Selected}  value="c" id="q3c" data-button-id="checkButton" class="hidden">
                <label for="q3c" class="btn variant-filled flex items-center"><span class="radio-icon inline-block"></span>Assess creditworthiness</label>
              </li>
              <li>              
                <input type="radio" on:click={Selected}   name="q3" value="d" id="q3d" data-button-id="checkButton" class="hidden">
                <label for="q3d" class="btn variant-filled flex items-center"><span class="radio-icon inline-block"></span>Track spending habits</label>
              </li>
            </ul>
          </li>
          <li class="text-2xl m-10">
            <h1 class="mb-10">What's the difference between a Traditional IRA and a Roth IRA?</h1>
            <ul class="flex space-x-6 justify-center">
              <li>
                <input type="radio" name="q4"  on:click={Selected}  value="a" id="q4a" data-button-id="checkButton" class="hidden">
                <label for="q4a" class="btn variant-filled flex items-center"><span class="radio-icon inline-block"></span>Traditional: tax-deductible contributions, Roth: not</label>
              </li>
              <li>
                <input type="radio" name="q4" on:click={Selected}   value="b" id="q4b" data-button-id="checkButton" class="hidden">
                <label for="q4b" class="btn variant-filled flex items-center"><span class="radio-icon inline-block"></span>Roth: tax-deductible contributions, Traditional: not</label>
              </li>
              <li>
                <input type="radio" name="q4"  on:click={Selected}  value="c" id="q4c" data-button-id="checkButton" class="hidden">
                <label for="q4c" class="btn variant-filled flex items-center"><span class="radio-icon inline-block"></span>Traditional: tax-free withdrawals, Roth: not</label>
              </li>
              <li>
                <input type="radio" name="q4" on:click={Selected}  value="d" id="q4d" data-button-id="checkButton" class="hidden">
                <label for="q4d" class="btn variant-filled flex items-center"><span class="radio-icon inline-block"></span>Roth: tax-free withdrawals, Traditional: not</label>
              </li>
            </ul>
          </li>
          <li class="text-2xl m-10">
            <h1 class="mb-10">Which is a fixed expense?</h1>
            <ul class="flex space-x-6 justify-center">
              <li>
                <input type="radio" name="q5" on:click={Selected}  value="a" id="q5a" data-button-id="checkButton" class="hidden">
                <label for="q5a" class="btn variant-filled flex items-center"><span class="radio-icon inline-block"></span>Groceries</label>
              </li>
              <li>
                <input type="radio" name="q5" on:click={Selected}  value="b" id="q5b" data-button-id="checkButton" class="hidden">
                <label for="q5b" class="btn variant-filled flex items-center"><span class="radio-icon inline-block"></span>Entertainment</label>
              </li>
              <li>
                <input type="radio" name="q5" on:click={Selected}  value="c" id="q5c" data-button-id="checkButton" class="hidden">
                <label for="q5c" class="btn variant-filled flex items-center"><span class="radio-icon inline-block"></span>Rent/mortgage</label>
              </li>
              <li>
                <input type="radio" name="q5" on:click={Selected}  value="d" id="q5d" data-button-id="checkButton" class="hidden">
                <label for="q5d" class="btn variant-filled flex items-center"><span class="radio-icon inline-block"></span>Dining out</label>
              </li>
            </ul>
          </li>
        </ol>
        <button type="button" on:click={checkAnswers} id="checkButton" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Check Answers</button>
        <div id="result" class="mt-4 text-2xl"></div>
      </form>
    </div>
  </div>
  