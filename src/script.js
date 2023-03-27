// Get input elements from the form
const monthlyIncome = document.getElementById("monthly-income");
const additionalIncome = document.getElementById("additional-income");
const housingExpense = document.getElementById("housing-expense");
const transportationExpense = document.getElementById("transportation-expense");
const foodExpense = document.getElementById("food-expense");
const utilitiesExpense = document.getElementById("utilities-expense");
const emergencyFund = document.getElementById("emergency-fund");
const retirementFund = document.getElementById("retirement-fund");

// Add event listener to the income form
document.forms[0].addEventListener("submit", function(event) {
  console.log("HI")
  event.preventDefault(); // prevent form submission

  // Calculate total income
  const totalIncome = parseInt(monthlyIncome.value) + parseInt(additionalIncome.value);

  // Display total income
  alert("Total Income: $" + totalIncome);
});

// Add event listener to the expenses form
document.forms[1].addEventListener("submit", function(event) {
  event.preventDefault(); // prevent form submission

  // Calculate total expenses
  const totalExpenses = parseInt(housingExpense.value) + parseInt(transportationExpense.value) + parseInt(foodExpense.value) + parseInt(utilitiesExpense.value);

  // Display total expenses
  alert("Total Expenses: $" + totalExpenses);
});

// Add event listener to the savings form
document.forms[2].addEventListener("submit", function(event) {
  event.preventDefault(); // prevent form submission

  // Calculate total savings
  const totalSavings = parseInt(emergencyFund.value) + parseInt(retirementFund.value);

  // Display total savings
  alert("Total Savings: $" + totalSavings);
});
