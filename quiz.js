    // TODO 1: Declare & assign variables pointing to the corresponding element(s)
    // statement should be the "statement" div
    // optionButtons should be all the elements within the "options" div
    // explanation should be the "explanation" div
    const statementElement = document.getElementById("statement");
    const optionButtons = document.getElementById("options").children;
    const explainEl = document.getElementById ("explanation");

    // TODO 2: Declare & assign a variable called fact
    // Its value should be an object with a statement, true/false answer, and explanation 
    const fact = {
        statement: "The sky is blue.",
        answer: "true",
        explanation: "During the day, when there are no clouds, the sky appears blue due to Rayleigh scattering."
    }

    
    // TODO 3: Set the text of the statement element to the fact's statement
    // Set the text of the statement element to the fact's statement
    statementElement.textContent = fact.statement;
    


        

    // TODO 4: Declare disable & enable functions to set or remove the "disabled" attribute from a given button element
    // disable(button) should set the button element's attribute "disabled" to the value ""
    // enable(button) should remove the attribute "disabled" from the button element
    // Declare disable & enable functions to set or remove the "disabled" attribute from a given button element
   // Function to disable a button
    function disable(button) {
        button.setAttribute("disabled", "");
    }

    // Function to enable a button
    function enable(button) {
        button.removeAttribute("disabled");
    }



    // TODO 5: Declare an isCorrect function that compares a guess to the right answer
    // isCorrect(guess) should return true if the guess matches the fact's answer
    function isCorrect(guess) {
    return guess === fact.answer;
    }


    // TODO 6A: Use a for loop to add a click event listener to each of the optionButtons
    for (let i = 0; i < optionButtons.length; i++) {
    const button = optionButtons[i];

    // TODO 6B: Within the event handler function, display the fact's explanation by setting the text of the explanation element
    button.addEventListener("click", function() {
        // explanation.textContent = fact.explanation;

        // TODO 7: Within the event handler function, use a for loop to disable all the option buttons
        for (let j = 0; j < optionButtons.length; j++) {
            disable(optionButtons[j]);
        }

        // TODO 8: Within the event handler function, Get the guessed value from the clicked button
        const guess = button.value;

        // Use a conditional to compare the guess to the fact's answer
        // and add the "correct"/"incorrect" class as appropriate
        if (isCorrect(guess)) {
            button.classList.add("correct");
        } else {
            button.classList.add("incorrect");
        }
    });
    }
 
    
