document.addEventListener('DOMContentLoaded', function(){
    const resultElement = document.getElementById('result');
    let currentInput = '0';

    function updateDisplay() {
        resultElement.innerText = currentInput;
    }

    function handleButtonClick(event) {
        const button = event.target;
        const action = button.getAttribute('data-action');
        const value = button.getAttribute('data-value');

        if (action) {
            switch (action) {
                case 'clear':
                    currentInput = '0';
                    break;
                case 'clear-entry':
                    currentInput = currentInput.slice(0, -1) || '0';
                    break;
                case 'delete':
                    currentInput = '0';
                        break;
                case 'calculate':
                        try {
                    currentInput = eval(currentInput).toString();
                        } catch {
                            currentInput = 'Error';
                        }
                        break;
                case 'memory-recall':
                    currentInput = memory.toString();
                        break;
                case 'memory-add':
                    memory += parseFloat('currentInput');
                        break;
                case 'memory-subtract':
                    memory -= parseFloat('currentInput');
                        break;
                case 'memory-store':
                    memory = parseFloat('currentInput');
                     break;
        }
    } else if (value) {
        if (currentInput === '0' || currentInput === 'error') {
            currentInput = value;
            } else {
                currentInput += value;
        }
    }
    updateDisplay();
    }

    document.querySelectorAll('.button').forEach(button => {
        button.addEventListener('click', handleButtonClick);
    });

    updateDisplay();
});