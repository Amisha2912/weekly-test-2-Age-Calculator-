function calculateAge() {
    const dobInput = document.getElementById('dob').value;
    const dob = new Date(dobInput); // Get the selected date
    const today = new Date(); // Get the current date

    // Check if a valid date is selected
    if (dobInput === '') {
        alert('Please select your date of birth');
        return;
    }

    let age = today.getFullYear() - dob.getFullYear(); // Calculate the difference in years
    const monthDifference = today.getMonth() - dob.getMonth();
    const dayDifference = today.getDate() - dob.getDate();

    // Adjust age if the birthday hasn't occurred yet this year
    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }

    // Display the age in the HTML
    const ageDisplay = document.getElementById('ageDisplay');
    ageDisplay.textContent = `Your age is ${age} years old!!🎉`;
}

// Add event listener to the button
document.getElementById('calculateBtn').addEventListener('click', calculateAge);