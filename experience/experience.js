
let experienceTitle = document.getElementById('experience_title')
const dash = document.getElementById('dash')
// position
let inputPosition = document.getElementById('input_position');
inputPosition.addEventListener("input", function() {
    document.getElementById("position_value").innerHTML = inputPosition.value
    experienceTitle.style.display = 'block'
});
// employer
let inputEmployer = document.getElementById('input_employer');
inputEmployer.addEventListener("input", function() {
    document.getElementById("employer_value").innerHTML = inputEmployer.value
    experienceTitle.style.display = 'block'
});
// Job Start Date
let inputStartDate = document.getElementById('input_exp_start_date');
inputStartDate.addEventListener("input", function() {
    document.getElementById("exp_start_date_value").innerHTML = inputStartDate.value
    experienceTitle.style.display = 'block'
    dash.style.display = 'block'
});
// Job End Date
let inputEndDate = document.getElementById('input_exp_end_date');
inputEndDate.addEventListener("input", function() {
    document.getElementById("exp_end_date_value").innerHTML = inputEndDate.value
    experienceTitle.style.display = 'block'
    dash.style.display = 'block'
});
// Job Description
let inputJobDescription = document.getElementById('input_job_description');
inputJobDescription.addEventListener("input", function() {
    document.getElementById("job_description_value").innerHTML = inputJobDescription.value
    experienceTitle.style.display = 'block'
});

