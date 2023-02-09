
//  1/3 localStorage ------- > start
document.getElementById('about_me_title').style.display = 'none'

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
  document.getElementById('about_me_title').style.display = 'block'
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




// position
let inputPosition = document.getElementById('input_position');
inputPosition.addEventListener("input", function() {
    let positionValue = inputPosition.value
    document.getElementById("position_value").innerHTML = positionValue
    experienceTitle.style.display = 'block'
    saveData('position' , positionValue)
});
// employer
let inputEmployer = document.getElementById('input_employer');
inputEmployer.addEventListener("input", function() {
  let employerValue = inputEmployer.value
  document.getElementById("employer_value").innerHTML = employerValue
  experienceTitle.style.display = 'block'
  saveData('employer',employerValue)
});
// Job Start Date
let inputStartDate = document.getElementById('input_exp_start_date');
inputStartDate.addEventListener("input", function() {
  let startDateValue =  inputStartDate.value
  document.getElementById("exp_start_date_value").innerHTML = startDateValue
  experienceTitle.style.display = 'block'
  dash.style.display = 'block'
  saveData('job_start' , startDateValue)
});
// Job End Date
let inputEndDate = document.getElementById('input_exp_end_date');
inputEndDate.addEventListener("input", function() {
  let endDateValue = inputEndDate.value
  document.getElementById("exp_end_date_value").innerHTML = endDateValue
  experienceTitle.style.display = 'block'
  dash.style.display = 'block'
  saveData('job_end' , endDateValue)
});
// Job Description
let inputJobDescription = document.getElementById('input_job_description');
inputJobDescription.addEventListener("input", function() {
  let jobDescriptionValue = inputJobDescription.value
  document.getElementById("job_description_value").innerHTML = jobDescriptionValue
  experienceTitle.style.display = 'block'
  saveData('job_descr' , jobDescriptionValue)
});


//  Local Storage
function saveData(k , v) {
  window.localStorage.setItem(k , v)
}


