function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function calculate() {
    let display = document.getElementById('display').value;
    fetch('/calculate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ expression: display }),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('display').value = data.result;
    })
    .catch((error) => {
        console.error('Error:', error);
        document.getElementById('display').value = 'Error';
    });
}
