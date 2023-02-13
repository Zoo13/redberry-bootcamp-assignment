
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
    validation(positionValue)
    addIcon(validLetter , inputPosition , '.position')
});
// employer
let inputEmployer = document.getElementById('input_employer');
inputEmployer.addEventListener("input", function() {
  let employerValue = inputEmployer.value
  document.getElementById("employer_value").innerHTML = employerValue
  experienceTitle.style.display = 'block'
  saveData('employer',employerValue)
  validation(employerValue)
  addIcon(validLetter , inputEmployer , '.employer')

});
// Job Start Date
let inputStartDate = document.getElementById('input_exp_start_date');
inputStartDate.addEventListener("input", function() {
  let startDateValue =  inputStartDate.value
  document.getElementById("exp_start_date_value").innerHTML = startDateValue
  experienceTitle.style.display = 'block'
  dash.style.display = 'block'
  saveData('job_start' , startDateValue)
  if(startDateValue != 'undefind'){
    inputStartDate.style.borderColor = '#98E37E'
    inputStartDate.style.outlineColor = '#98E37E'
  }
});
// Job End Date
let inputEndDate = document.getElementById('input_exp_end_date');
inputEndDate.addEventListener("input", function() {
  let endDateValue = inputEndDate.value
  document.getElementById("exp_end_date_value").innerHTML = endDateValue
  experienceTitle.style.display = 'block'
  dash.style.display = 'block'
  saveData('job_end' , endDateValue)
  if(endDateValue != 'undefind'){
    inputEndDate.style.borderColor = '#98E37E'
    inputEndDate.style.outlineColor = '#98E37E'
  }
});
// Job Description
let inputJobDescription = document.getElementById('input_job_description');
inputJobDescription.addEventListener("input", function() {
  let jobDescriptionValue = inputJobDescription.value
  document.getElementById("job_description_value").innerHTML = jobDescriptionValue
  experienceTitle.style.display = 'block'
  saveData('job_descr' , jobDescriptionValue)
  if(jobDescriptionValue.length > 0 ){
    inputJobDescription.style.borderColor = '#98E37E'
    inputJobDescription.style.outlineColor = '#98E37E'
  }

});


//  Local Storage
function saveData(k , v) {
  window.localStorage.setItem(k , v)
}



// Validation 
let validLetter = false

function validation(word) {
  if (word.length >= 2) {
        validLetter = true
      } else {
        validLetter = false
      }
    }






// create Element img for Valid And Invalid Icons 
const invalid_icon = document.createElement("img");
invalid_icon.src = "../icons/invalid.svg";
invalid_icon.setAttribute("class", "invalid_icon")

const valid_icon = document.createElement("img");
valid_icon.src = "../icons/valid.svg";
valid_icon.setAttribute("class", "valid_icon")


function addIcon(valid, input, selector) {
  if (valid == true) {
    document.querySelector(selector).appendChild(valid_icon)
    input.style.borderColor = '#98E37E'
    input.style.outlineColor = '#98E37E'
    if (document.querySelector(selector).contains(invalid_icon)) {
      document.querySelector(selector).removeChild(invalid_icon)
    }
  } else {
    input.style.borderColor = '#EF5050'
    input.style.outlineColor = '#EF5050'
    document.querySelector(selector).appendChild(invalid_icon)
    if (document.querySelector(selector).contains(valid_icon)) {
      document.querySelector(selector).removeChild(valid_icon)
    }
  }
}



// clear local storage
function clearLocalStorage() {
  localStorage.clear()
}


// Next button validations must be true
let success = false
function chekAllvalidation () {
  if (validLetter == true) {
    success = true
  } else {
    success = false
  }
}

document.getElementById('next').addEventListener('click', function () {
  chekAllvalidation ()
  if(success == true) {
    document.getElementById('next').setAttribute("href", "../education/education.html")
  }
  
})