const users = [
    { firstName: "Kristine", lastName: "Ma", email: "kma28@uic.edu", netID: "kma28" },
    // { username: "bob", email: "bob@email.com", password: "qwerty" },
    // { username: "charlie", email: "charlie@email.com", password: "pass456" }
  ];

  function checkForm(event) {
    event.preventDefault();
    const firstName = document.getElementById("firstNameInput").value.trim();
    const lastName = document.getElementById("lastNameInput").value.trim();
    const email = document.getElementById("emailInput").value.trim();
    const netID = document.getElementById("netIDInput").value;

    const role = document.getElementById("myDropdown").value;

    // if (!role) {
    //     alert("Please select Student or Employee.");
    //     return false; // prevents redirection
    //   }

    // const message = document.getElementById("message");

    const match = users.find(user =>
      user.firstName === firstName &&
      user.lastName === lastName &&
      user.email === email &&
      user.netID === netID
    );

    let hasError = false;

    if (match) {
        // Remove red borders if input is valid
        firstNameInput.classList.remove("input-error");
        lastNameInput.classList.remove("input-error");
        emailInput.classList.remove("input-error");
        netIDInput.classList.remove("input-error");
    
        // Optionally redirect or show a message here
    } else {
    // Check and mark fields that are incorrect

        hasError = true;
        const userMatch = users[0];

        if (userMatch.firstName !== firstName) {
            firstNameInput.classList.add("input-error");
        } else {
            firstNameInput.classList.remove("input-error");
        }

            if (userMatch.firstName !== firstName) {
                firstNameInput.classList.add("input-error");
                document.getElementById("errorFirstName").textContent = "Try Again";
            } else {
                firstNameInput.classList.remove("input-error");
                document.getElementById("errorFirstName").textContent = "";
            }

        if (userMatch.lastName !== lastName) {
            lastNameInput.classList.add("input-error");
        } else {
            lastNameInput.classList.remove("input-error");
        }

            if (userMatch.lastName !== lastName) {
                lastNameInput.classList.add("input-error");
                document.getElementById("errorLastName").textContent = "Try Again";
            } else {
                lastNameInput.classList.remove("input-error");
                document.getElementById("errorLastName").textContent = "";
            }

        if (userMatch.email !== email) {
            emailInput.classList.add("input-error");
        } else {
            emailInput.classList.remove("input-error");
        }

            if ((userMatch.email !== email) && (userMatch.firstName == firstName && userMatch.lastName == lastName)){
                emailInput.classList.add("input-error");
                document.getElementById("errorEmail").textContent = "Do you mean kma28@uic.edu?";
            }
            else if (userMatch.email !== email) {
                emailInput.classList.add("input-error");
                document.getElementById("errorEmail").textContent = "Try Again";
            } else {
                emailInput.classList.remove("input-error");
                document.getElementById("errorEmail").textContent = "";
            }

        if (userMatch.netID !== netID) {
            netIDInput.classList.add("input-error");
        } else {
            netIDInput.classList.remove("input-error");
        }

            if ((userMatch.netID !== netID) && (userMatch.firstName == firstName && userMatch.lastName == lastName && userMatch.email == email)){
                netIDInput.classList.add("input-error");
                document.getElementById("errorNetID").textContent = "Do you mean kma28?";
            }
            else if (userMatch.netID !== netID) {
                netIDInput.classList.add("input-error");
                document.getElementById("errorNetID").textContent = "Try Again";
            } else {
                netIDInput.classList.remove("input-error");
                document.getElementById("errorNetID").textContent = "";
            }
    }
    if (!hasError) {
        if (role === "Student") {
            window.location.href = "student.html";
        } else if (role === "Employee") {
            window.location.href = "employee.html";
        }
    }

    // if (match) {
    // //   message.textContent = `Welcome, ${match.username}!`;
    // //   message.className = "message success";
    // } else {
    // //   message.textContent = "Login failed. Please check your username, email, and password.";
    // //   message.className = "message error";
    // }
  }