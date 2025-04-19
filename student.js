const majorsByCollege = {
    cs: [
        { value: "cs", text: "Computer Science" },
        { value: "data-sci", text: "Data Science" },
        { value: "des", text: "Computer Science + Design" }
    ],
    math: [
        { value: "applied-math", text: "Applied Mathematics" },
        { value: "pure-math", text: "Pure Mathematics" },
        { value: "statistics", text: "Statistics" },
    ],
    bs: [
        { value: "bio", text: "Biological Sciences" },
        { value: "neuro", text: "Neuroscience" },
        { value: "biochem", text: "Biochemistry" },
    ],
    chem: [
        { value: "chem", text: "Chemistry" },
        { value: "biochem-chem", text: "Biochemistry" },
        { value: "chem-eng", text: "Chemical Engineering" }
    ],
    lit: [
        { value: "english", text: "English" },
        { value: "linguistics", text: "Linguistics" }
    ]
};

function updateMajors() {
    const collegeSelect = document.getElementById("myDropdown");
    const majorSelect = document.getElementById("majorDropdown");
    const selectedCollege = collegeSelect.value;

    
    majorSelect.innerHTML = '<option value="" disabled selected>Select</option>';

   
    if (majorsByCollege[selectedCollege]) {
        majorsByCollege[selectedCollege].forEach(major => {
            const option = document.createElement("option");
            option.value = major.value;
            option.textContent = major.text;
            majorSelect.appendChild(option);
        });
    }
}