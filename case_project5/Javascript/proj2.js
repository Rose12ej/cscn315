//2. Functions (must be names)

// Function to calculate the user's birth year
function calculateBirthYear(age) {
    const currentYear = new Date().getFullYear(); 
    return currentYear - age; 
}

// Function greeting user
function showGreeting() {

    // Get the results area

    const messagesDiv = document.getElementById("messages"); 
    
    //message
    const message = `
        <p>My name is Rosalia!</p>
        <p>The purpose of this page is for me to display everything that inspires me...</p>
        <p>I love movies, music, and coding.</p>
        <p>Thanks, for taking a look at my page,</p>
        <p>and for leaving a trace of your identity as well.</p>
        <p>Thank you!</p>
    `;

      // Display the message in the messages area
    messagesDiv.innerHTML = message; // Add message to the results div
}


// Function to show the message dynamically
function showResults(name, age, color) {
    
    // Get the results area

    const resultsDiv = document.getElementById("results"); 

    // message
    const message = `
        <p><br><br>Hello, <strong>${name}</strong>!</p>
        <p>You are <strong>${age}</strong> years old.</p>
        <p>Your favorite color is <strong>${color}</strong>.</p>
        <p>You were probably born in <strong>${calculateBirthYear(age)}</strong>.</p>
    `;

    // Display the message in the results area
    resultsDiv.innerHTML = message; 
}

//3. Display the results back to the user 
//6. Event Handling

// Add event listener to the form
document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    // Get user inputs
    const name = document.getElementById("name").value.trim();
    const age = parseInt(document.getElementById("age").value.trim());
    const color = document.getElementById("color").value.trim();

    // Check if inputs are valid
    if (!name || isNaN(age) || age <= 0 || !color) {
        alert("Age must be a positive number.");
        return; 
    }

    // 5. Log data to the console
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Favorite Color: ${color}`);
    console.log(`Birth Year: ${calculateBirthYear(age)}`);


    // Show results
    showResults(name, age, color);
    showGreeting();
    

});
