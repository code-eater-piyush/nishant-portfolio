document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    fetch("http://localhost:3000/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
      })
    })
      .then((res) => res.text())
      .then((data) => {
        if (data === "success") {
          alert("Email sent successfully!");
        } else {
          alert("Failed to send email.");
        }
      });
  });
  