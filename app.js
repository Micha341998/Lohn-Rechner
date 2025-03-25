document.addEventListener('DOMContentLoaded', () => {
    const hourlyRateInput = document.getElementById('hourlyRate');
    const hoursWorkedInput = document.getElementById('hoursWorked');
    const vacationRateInput = document.getElementById('vacationRate');
    const calculateButton = document.getElementById('calculate');
    const grossSalaryDisplay = document.getElementById('grossSalary');
    const deductionsDisplay = document.getElementById('deductions');
    const netSalaryDisplay = document.getElementById('netSalary');
    const vacationPayDisplay = document.getElementById('vacationPay');

    const DEDUCTION_RATE = 0.10316; // 10.316%

    calculateButton.addEventListener('click', calculateSalary);

    function calculateSalary() {
        const hourlyRate = parseFloat(hourlyRateInput.value) || 0;
        const hoursWorked = parseFloat(hoursWorkedInput.value) || 0;
        const vacationRate = parseFloat(vacationRateInput.value) || 0;
        
        const grossSalary = hourlyRate * hoursWorked;
        const deductions = grossSalary * DEDUCTION_RATE;
        const netSalary = grossSalary - deductions;
        const vacationPay = vacationRate * hoursWorked;
        
        // Format with Swiss format and CHF
        const formatCHF = (amount) => amount.toLocaleString('de-CH', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
        
        grossSalaryDisplay.textContent = 'CHF ' + formatCHF(grossSalary);
        deductionsDisplay.textContent = 'CHF ' + formatCHF(deductions);
        netSalaryDisplay.textContent = 'CHF ' + formatCHF(netSalary);
        vacationPayDisplay.textContent = 'CHF ' + formatCHF(vacationPay);
    }

    // Ermögliche Berechnung auch mit der Enter-Taste
    [hourlyRateInput, hoursWorkedInput, vacationRateInput].forEach(input => {
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                calculateSalary();
            }
        });
    });
});