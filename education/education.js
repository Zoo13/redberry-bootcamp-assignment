
// institute
let inputInstitute = document.getElementById('input_institute');
inputInstitute.addEventListener("input", function() {
    document.getElementById("institute_value").innerHTML = inputInstitute.value
});

// Degree
let inputDegree = document.getElementById('input_degree_select');
inputDegree.addEventListener("input", function() {
    document.getElementById("degree_value").innerHTML = inputDegree.value
});

// Education End Date
let inputEducEndDate = document.getElementById('input_educ_end_date');
inputEducEndDate.addEventListener("input", function() {
    document.getElementById("educ_date_value").innerHTML = inputEducEndDate.value
});

// Education Description
let inputEducDescription = document.getElementById('input_educ_descr');
inputEducDescription.addEventListener("input", function() {
    document.getElementById("educ_description_value").innerHTML = inputEducDescription.value
});

