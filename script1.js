document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission for demonstration
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    
    // Check if the fields are empty
    if (name === "" || email === "" || message === "") {
        alert("कृपया सभी फ़ील्ड भरें।"); // Alert if any field is empty
        return; // Prevent form submission if validation fails
    }
    
    // If validation passes, you can proceed with form submission or other actions.
    alert("संदेश भेजा गया!"); // Display success message (for now, before actual submission)
    
    // Simulate form submission (you can replace this part with actual submission logic)
    console.log("Form Data: ", { name, email, message });
    
    // You can also reset the form after submission (optional)
    document.getElementById("contact-form").reset();
});
