function handleSubmit(event) {
      event.preventDefault();
      const fullName    = document.getElementById("fullName").value.trim();
      const phoneNumber = document.getElementById("phoneNumber").value.trim();
      const emailAddress = document.getElementById("emailAddress").value.trim();

      const text =
        `Hello Blessing, I am interested in the London full tuition funding offer.%0A%0A` +
        `Full Name: ${encodeURIComponent(fullName)}%0A` +
        `Phone Number: ${encodeURIComponent(phoneNumber)}%0A` +
        `Email: ${encodeURIComponent(emailAddress)}%0A%0A` +
        `Please contact me with the next step.`;

      window.open(`https://api.whatsapp.com/send?phone=2348052138102&text=${text}`, "_blank");
    }