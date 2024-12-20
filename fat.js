document.getElementById('numTanks').addEventListener('input', function () {
    const numTanks = parseInt(this.value) || 0;
    const tankInputs = document.getElementById('tankInputs');
    tankInputs.innerHTML = '';

    for (let i = 1; i <= numTanks; i++) {
        const volumeInput = document.createElement('div');
        volumeInput.className = 'form-group';
        volumeInput.innerHTML = `
            <label for="volume${i}">Volume of Milk in Tank ${i} (in liters):</label>
            <input type="number" id="volume${i}" min="0" step="0.01" placeholder="Enter volume in liters">
        `;
        const fatInput = document.createElement('div');
        fatInput.className = 'form-group';
        fatInput.innerHTML = `
            <label for="fat${i}">Fat Percentage of Milk in Tank ${i}:</label>
            <input type="number" id="fat${i}" min="0" step="0.1" placeholder="Enter fat percentage">
        `;
        tankInputs.appendChild(volumeInput);
        tankInputs.appendChild(fatInput);
    }
});

function calculateAverageFat() {
    const numTanks = parseInt(document.getElementById('numTanks').value) || 0;
    let totalFat = 0;
    let totalVolume = 0;

    for (let i = 1; i <= numTanks; i++) {
        const volume = parseFloat(document.getElementById(`volume${i}`).value) || 0;
        const fatPercentage = parseFloat(document.getElementById(`fat${i}`).value) || 0;
        totalFat += (fatPercentage / 100) * volume;
        totalVolume += volume;
    }

    const averageFat = totalVolume > 0 ? (totalFat / totalVolume) * 100 : 0;
    document.getElementById('result').textContent = `The average fat percentage is: ${averageFat.toFixed(2)}%`;
}
