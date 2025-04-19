const jobOptions = {
    cs: [
        { value: "peer", text: "Peer Tutor" },
        { value: "uresearch", text: "Undergraduate researcher" },
        { value: "prof", text: "Professor" },
        { value: "grsearch", text: "Graduate researcher" }
    ],
    math: [
        { value: "peer", text: "Peer Tutor" },
        { value: "prof", text: "Professor" }
    ],
    bs: [
        { value: "uresearch", text: "Undergraduate researcher" },
        { value: "grsearch", text: "Graduate researcher" },
        { value: "prof", text: "Professor" }
    ],
    lit: [
        { value: "peer", text: "Peer Tutor" },
        { value: "prof", text: "Professor" }
    ],
    chem: [
        { value: "uresearch", text: "Undergraduate researcher" },
        { value: "grsearch", text: "Graduate researcher" },
        { value: "prof", text: "Professor" }
    ],
    fac: [
        { value: "cust", text: "Custodian" }
    ]
};

function updateJobTitles() {
    const college = document.getElementById("collegeDropdown").value;
    const jobDropdown = document.getElementById("jobDropdown");

    
    jobDropdown.innerHTML = '<option value="" disabled selected>Select</option>';

   
    if (jobOptions[college]) {
        jobOptions[college].forEach(job => {
            const option = document.createElement("option");
            option.value = job.value;
            option.text = job.text;
            jobDropdown.appendChild(option);
        });
    }
}

function validateForm() {
    const college = document.getElementById('collegeDropdown').value;
    const job = document.getElementById('jobDropdown').value;
    // const hireYear = document.getElementById('hireYear').value;
    const hireYearInput = document.getElementById('hireYear'); // actual element
    const hireYear = hireYearInput.value;
    const tool = document.getElementById('myDropdown').value;

    let hasError = false;

    if (!college || !job || !hireYear || !tool) {
        hasError = true;
        alert('Please fill out all required fields.');
        return false;
    }

    if (!/^\d{4}$/.test(hireYear)) {
        hasError = true;
        alert("Please enter a valid 4-digit hire year.");
        return false;
    }

  
    if (parseInt(hireYear) == 2022) {
        hasError = false;
        hireYearInput.classList.remove("input-error");
        document.getElementById("errorHireYear").textContent = "";
    } else {
        hasError = true;
        hireYearInput.classList.add("input-error");
        document.getElementById("errorHireYear").textContent = "No match found for hire year";
        return false;
    }

    if (!hasError) {
       
        window.location.href = "thank_you.html";
        
    }

    

    return true; 
}