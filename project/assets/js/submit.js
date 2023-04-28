const form = document.getElementById("contact-form");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // prevent default form submission

  // Get form data
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;

  // Send form data to backend or API
  // ...

  // Clear form fields
  form.reset();

  // Display confirmation message to user
  alert("Thank you for your message! We will be in touch soon.");
});
