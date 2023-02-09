//  1/3 localStorage ------- > start

document.getElementById("firstName_value").innerHTML = localStorage.getItem('first_name')
document.getElementById("lasttName_value").innerHTML = localStorage.getItem('last_name')

if('mail' in localStorage) {
  document.getElementById("mail_value").innerHTML = localStorage.getItem('mail')
  document.getElementById("mail_icon").style.display = 'block'
}
if('mobile' in localStorage) {
  document.getElementById("mobile_value").innerHTML = localStorage.getItem('mobile')
  document.getElementById("phone_icon").style.display = 'block'
}
if('about' in localStorage) {
  document.getElementById("about_me_value").innerHTML = localStorage.getItem('about')

}else {
  document.getElementById('about_me_title').style.display = 'none'
}

let imgURL = window.localStorage.getItem('imgURL')
if('imgURL' in localStorage ) {
  document.getElementById('profile_img').innerHTML = '<img src="' + imgURL + '" />';
}


//  1/3 localStorage ------- > ENd 
// 2/3 localStorage ------- > Start


// title
let experienceTitle = document.getElementById('experience_title')
// dash
const dash = document.getElementById('dash')

if('position' in localStorage){
  document.getElementById("position_value").innerHTML = localStorage.getItem('position')
  experienceTitle.style.display = 'block'
}
if('employer' in localStorage){
  document.getElementById("employer_value").innerHTML = localStorage.getItem('employer')
  experienceTitle.style.display = 'block'
}
if('job_start' in localStorage){
  document.getElementById("exp_start_date_value").innerHTML = localStorage.getItem('job_start')
  experienceTitle.style.display = 'block'
}
if('job_end' in localStorage){
  document.getElementById("exp_end_date_value").innerHTML = localStorage.getItem('job_end')
  experienceTitle.style.display = 'block'
}
if('job_descr' in localStorage){
  document.getElementById("job_description_value").innerHTML = localStorage.getItem('job_descr')
  experienceTitle.style.display = 'block'
}

// 2/3 localStorage ------- > End

// 3/3 localStorage ------- > Start
let educationTitle = document.getElementById('education_title')


if('institute' in localStorage){
    document.getElementById("institute_value").innerHTML = localStorage.getItem('institute')
    educationTitle.style.display = 'block'
}

if('degree' in localStorage){
    document.getElementById("degree_value").innerHTML = localStorage.getItem('degree')
    educationTitle.style.display = 'block'
}

if('educ_date' in localStorage){
    document.getElementById("educ_date_value").innerHTML = localStorage.getItem('educ_date')
    educationTitle.style.display = 'block'
}

if('educ_descr' in localStorage){
    document.getElementById("educ_description_value").innerHTML = localStorage.getItem('educ_descr')
    educationTitle.style.display = 'block'
}

// 3/3 localStorage ------- > End









// institute
let inputInstitute = document.getElementById('input_institute');
inputInstitute.addEventListener("input", function() {
    let instituteValue = inputInstitute.value
    document.getElementById("institute_value").innerHTML = instituteValue
    educationTitle.style.display = 'block'
    saveData('institute' , instituteValue)
});

// Degree
let inputDegree = document.getElementById('input_degree_select');
inputDegree.addEventListener("input", function() {
    let degreeValue = inputDegree.value
    document.getElementById("degree_value").innerHTML = degreeValue
    educationTitle.style.display = 'block'
    saveData('degree' , degreeValue)
});

// Education End Date
let inputEducEndDate = document.getElementById('input_educ_end_date');
inputEducEndDate.addEventListener("input", function() {
    let educEndDateValue = inputEducEndDate.value
    document.getElementById("educ_date_value").innerHTML = educEndDateValue
    educationTitle.style.display = 'block'
    saveData('educ_date',educEndDateValue)
});

// Education Description
let inputEducDescription = document.getElementById('input_educ_descr');
inputEducDescription.addEventListener("input", function() {
    let educDescrValue =  inputEducDescription.value
    document.getElementById("educ_description_value").innerHTML = educDescrValue
    educationTitle.style.display = 'block'
    saveData('educ_descr' , educDescrValue)
});

// Save Data in local Storage
function saveData(k , v) {
    window.localStorage.setItem(k , v)
  }