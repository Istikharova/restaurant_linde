//Formular Validierung

// click event für button
document.querySelector("button").addEventListener("click", validateForm);

function validateForm(e) {
  e.preventDefault();

  if (document.querySelector("form span")) {
    document.querySelectorAll("form span").forEach((element) => {
      element.remove();
    });
  }

  // Input Data
  let data = {};
  // Error Messages
  let validationErrors = {};

  // Create properties for data object
  data.firstName = document.querySelector("#vorname").value;
  data.lastName = document.querySelector("#nachname").value;
  data.email = document.querySelector("#email").value;
  data.message = document.querySelector("textarea").value;

  // vorname
  if (!data.firstName) {
    console.error("No first name" + data.firstName);
    validationErrors.firstName = "Bitte tragen Sie den Vornamen ein";
  } else {
    console.info("First name: " + data.firstName);
  }

  // nachmane
  if (!data.lastName) {
    console.error("No last name" + data.lastName);
    validationErrors.lastName = "Bitte tragen Sie den Nachname ein";
  } else {
    console.info("Last Name: " + data.lastName);
  }

  // Email
  if (!data.email) {
    console.error("No email" + data.email);
    validationErrors.email = "Bitte tragen Sie die E-mail Adresse ein";
  } else {
    console.info("Email: " + data.email);
    let emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!emailRegExp.test(data.email)) {
      validationErrors.email = "Bitte tragen Sie Ihre Email ein.";
    } else {
      console.info("Email is valid");
    }
  }

  // mitteilung, hat es genug zeichen

  if (!data.message) {
    console.error("No message" + data.message);
    validationErrors.message = "Bitte tragen Sie Ihre Mitteilung ein.";
  } else {
    console.info("message: " + data.message);
    if (data.message.length < 5) {
      validationErrors.message =
        "Nicht genug Zeichen/Bitte tragen Sie das Textfeld ein (min 6)";
    } else {
      console.info("message has enough characters");
    }
  }

  // If there are errors
  if (Object.keys(validationErrors).length > 0) {
    // Display Error messages
    displayErrors(validationErrors);
  } else {
    // Send Form to backend
    console.log("sending form data");
  }
}

//function anzeige fals nichts eingetragen ist

function displayErrors(validationErrors) {
  if (validationErrors.firstName) {
    const errorContainer = document.createElement("span");
    errorContainer.innerHTML = validationErrors.firstName;
    document.querySelector("#vorname").after(errorContainer);
  }

  if (validationErrors.lastName) {
    const errorContainer = document.createElement("span");
    errorContainer.innerHTML = validationErrors.lastName;
    document.querySelector("#nachname").after(errorContainer);
  }

  if (validationErrors.email) {
    const errorContainer = document.createElement("span");
    errorContainer.innerHTML = validationErrors.email;
    document.querySelector("#email").after(errorContainer);
  }

  if (validationErrors.message) {
    const errorContainer = document.createElement("span");
    errorContainer.innerHTML = validationErrors.message;
    document.querySelector("textarea").after(errorContainer);
  }
}

// Event textarea zahlen

document.querySelector("textarea").addEventListener("input", (e) => {
  if (!document.querySelector(".counterBox")) {
    const counterBox = document.createElement("span");
    counterBox.setAttribute("class", "counterBox");
    counterBox.innerHTML = e.target.textLength;
    e.target.after(counterBox);
  } else {
    document.querySelector(".counterBox").innerHTML = e.target.textLength;
  }

  if (e.target.textLength < 5) {
    document.querySelector(".counterBox").style.color = "white";
  } else {
    document.querySelector(".counterBox").style.color = "#DBA16B";
  }
});
