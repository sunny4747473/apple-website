document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-form");

  form.addEventListener("submit", function (event) {
      event.preventDefault();
      // Open a new tab
      const newTab = window.open("", "_blank");
      // Display the message in the new tab
      newTab.document.write("<h1>Thank you for your feedback.</h1><p>We will reach back to you shortly.</p>");
      // Close the new tab after 5 seconds
      setTimeout(function () {
          newTab.close();
      }, 5000);
  });
});
