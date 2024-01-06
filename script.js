function submitForm() {
    // Get form values
    var name = document.getElementById("name").value;
    var username = document.getElementById("username").value;
    var comments = document.getElementById("comments").value;

    // Create an object to store the form data
    var formData = {
        name: name,
        username: username,
        comments: comments
    };

    // Convert the object to a JSON string and store it in local storage
    localStorage.setItem("formData", JSON.stringify(formData));

    // Display the form data on the page
    displayFormData();
}

function displayFormData() {
    // Retrieve the form data from local storage
    var storedData = localStorage.getItem("formData");

    // Parse the JSON string back to an object
    var formData = JSON.parse(storedData);

    // Display the form data on the page
    var displayArea = document.getElementById("submittedData");
    displayArea.innerHTML = "<h3>Your Query was sent!</h3>" +
        "<p><strong>Name:</strong> " + formData.name + "</p>" +
        "<p><strong>Email:</strong> " + formData.username + "</p>" +
        "<p><strong>Queries:</strong> " + formData.comments + "</p>";
}