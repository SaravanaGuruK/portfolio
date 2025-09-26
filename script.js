function sendMail(event) {
    event.preventDefault(); // Stop form from refreshing

    // Get form values
    let name = document.getElementById("name").value.trim();
    let company = document.getElementById("company").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let message = document.getElementById("message").value.trim();

    let errorMessage = document.getElementById("error-message");

    // Validation: check if all fields are filled
    if (!name || !email || !phone || !message) {
        errorMessage.style.display = "block";
        errorMessage.innerText = "⚠️ Please fill in all required fields.";
        return false;
    }

    // Hide error if validation passes
    errorMessage.style.display = "none";

    // Parameters for EmailJS
    let parms = {
        name: name,
        company: company || "Not provided",
        email: email,
        phone: phone,
        message: message,
    };

    // Send email
    emailjs.send("service_pl3ztip", "template_gxy33ds", parms)
        .then(function (response) {
            alert("✅ Email sent successfully!");
            document.getElementById("contact-form").reset(); // Clear form
        }, function (error) {
            alert("❌ Failed to send email. Please try again later.");
            console.error("EmailJS Error:", error);
        });

    return true;
}
