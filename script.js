document.addEventListener('DOMContentLoaded', () => {
    // Loading screen logic
    const loader = document.querySelector('.loader-container');
    setTimeout(() => {
        loader.classList.add('hidden');
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }, 3000);

    // Existing calculator logic
    const hourlyWageInput = document.getElementById('hourlyWage');
    const hoursWorkedInput = document.getElementById('hoursWorked');
    const grossEarningsDisplay = document.getElementById('grossEarnings');
    const socialDeductionsDisplay = document.getElementById('socialDeductions');
    const netEarningsDisplay = document.getElementById('netEarnings');

    function calculateEarnings() {
        const hourlyWage = parseFloat(hourlyWageInput.value) || 0;
        const hoursWorked = parseFloat(hoursWorkedInput.value) || 0;
        
        const grossEarnings = hourlyWage * hoursWorked;
        const socialDeductions = grossEarnings * 0.0771;
        const netEarnings = grossEarnings - socialDeductions;

        grossEarningsDisplay.textContent = `${grossEarnings.toFixed(2)} CHF`;
        socialDeductionsDisplay.textContent = `${socialDeductions.toFixed(2)} CHF`;
        netEarningsDisplay.textContent = `${netEarnings.toFixed(2)} CHF`;
    }

    hourlyWageInput.addEventListener('input', calculateEarnings);
    hoursWorkedInput.addEventListener('input', calculateEarnings);
});