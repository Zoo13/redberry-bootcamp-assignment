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
    validation(instituteValue)
    addIcon(validLetter , inputInstitute , '.institute')
});

// Degree
let inputDegree = document.getElementById('input_degree_select');
inputDegree.addEventListener("input", function() {
    let degreeValue = inputDegree.value
    document.getElementById("degree_value").innerHTML = degreeValue
    educationTitle.style.display = 'block'
    saveData('degree' , degreeValue)
    if(degreeValue.length > 0 ){
      inputDegree.style.borderColor = '#98E37E'
      inputDegree.style.outlineColor = '#98E37E'
    }
});

// Education End Date
let inputEducEndDate = document.getElementById('input_educ_end_date');
inputEducEndDate.addEventListener("input", function() {
    let educEndDateValue = inputEducEndDate.value
    document.getElementById("educ_date_value").innerHTML = educEndDateValue
    educationTitle.style.display = 'block'
    saveData('educ_date',educEndDateValue)
    if(educEndDateValue.length > 0 ){
      inputEducEndDate.style.borderColor = '#98E37E'
      inputEducEndDate.style.outlineColor = '#98E37E'
    }
});

// Education Description
let inputEducDescription = document.getElementById('input_educ_descr');
inputEducDescription.addEventListener("input", function() {
    let educDescrValue =  inputEducDescription.value
    document.getElementById("educ_description_value").innerHTML = educDescrValue
    educationTitle.style.display = 'block'
    saveData('educ_descr' , educDescrValue)
    if(educDescrValue.length > 0 ){
      inputEducDescription.style.borderColor = '#98E37E'
      inputEducDescription.style.outlineColor = '#98E37E'
    }
});

// Save Data in local Storage
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
    document.getElementById('next').setAttribute("href", "../resume/resume.html")
  }
  
})