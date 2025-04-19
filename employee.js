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
    const hireYear = document.getElementById('hireYear').value;
    const tool = document.getElementById('myDropdown').value;

    if (!college || !job || !hireYear || !tool) {
        alert('Please fill out all required fields.');
        return false;
    }

    if (!/^\d{4}$/.test(hireYear)) {
        alert("Please enter a valid 4-digit hire year.");
        return false;
    }

    return true; 
}