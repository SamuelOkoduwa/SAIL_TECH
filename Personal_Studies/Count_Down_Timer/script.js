document.addEventListener("DOMContentLoaded", function() {
  // Check if there's saved event data in local storage
  const eventData = JSON.parse(localStorage.getItem("eventData")) || { date: new Date(), name: "Custom Event" };

  // Set initial values
  const eventNameElement = document.getElementById("event-name");
  const countdownElement = document.getElementById("countdown");

  eventNameElement.textContent = eventData.name;

  // Function to update countdown
  function updateCountdown() {
      const currentDate = new Date();
      const eventDate = new Date(eventData.date);

      const timeDifference = eventDate - currentDate;

      // Check if the event has already occurred
      if (timeDifference < 0) {
          countdownElement.textContent = "Event Completed!";
          // You can add more actions or animations here
      } else {
          const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
          const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

          countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
      }
  }

  // Initial countdown update
  updateCountdown();

  // Update countdown every second
  setInterval(updateCountdown, 1000);
});
