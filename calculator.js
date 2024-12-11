const resultInput = document.getElementById('result');

function appendValue(value) {
    resultInput.value += value;
}

function clearResult() {
    resultInput.value = '';
}

function calculate() {
    try {
        // Ensure the input is valid before evaluating
        const expression = resultInput.value.trim();
        if (!expression) {
            alert('Please enter a valid expression');
            return;
        }
        // Use Function constructor for a safer evaluation
        const result = new Function(`return (${expression})`)();
        resultInput.value = result;
    } catch (error) {
        alert('Invalid Expression');
        resultInput.value = '';
    }
}
    
