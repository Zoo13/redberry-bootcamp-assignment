

// create Element img for Valid And Invalid Icons 
const invalid_icon = document.createElement("img");
invalid_icon.src = "../icons/invalid.svg";
invalid_icon.setAttribute("class", "invalid_icon")

const valid_icon = document.createElement("img");
valid_icon.src = "../icons/valid.svg";
valid_icon.setAttribute("class", "valid_icon")




// this function adds icons
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

// Define input variables and their validations 

let inputMail = document.getElementById('input_mail');
let validMail = false

let inputFirstName = document.getElementById('input_firstName');
let validLetter = false


let inputLastName = document.getElementById('input_lastName');



let inputMobile = document.getElementById('input_mobile');
let phoneValid = false

let inputAboutMe = document.getElementById('input_aboutMe');

let imgValid = false

// Set values from local storage if we have it
document.getElementById('about_me_title').style.display = 'none'


if ('first_name' in localStorage) {
  document.getElementById("firstName_value").innerHTML = localStorage.getItem('first_name')
}
if ('last_name' in localStorage) {
  document.getElementById("lasttName_value").innerHTML = localStorage.getItem('last_name')
}

if ('mail' in localStorage) {
  document.getElementById("mail_value").innerHTML = localStorage.getItem('mail')
  validationMail(localStorage.getItem('mail'))
  if (localStorage.getItem('mail').length > 0) {
    document.getElementById("mail_icon").style.display = 'block'
  }
}
if ('mobile' in localStorage) {
  document.getElementById("mobile_value").innerHTML = localStorage.getItem('mobile')
  phoneValidation(localStorage.getItem('mobile'))
  if (localStorage.getItem('mobile').length > 0) {
    document.getElementById("phone_icon").style.display = 'block'
  }
}
if ('about' in localStorage) {
  document.getElementById("about_me_value").innerHTML = localStorage.getItem('about')
  if (localStorage.getItem('about').length > 0) {
    document.getElementById('about_me_title').style.display = 'block'
    inputAboutMe.style.borderColor = '#98E37E'
    inputAboutMe.style.outlineColor = '#98E37E'
  }
}

let imgURL = window.localStorage.getItem('imgURL')
if ('imgURL' in localStorage) {
  document.getElementById('profile_img').innerHTML = '<img src="' + imgURL + '" />';
  imgValid = true
}




// FirstName
// -------------------------------------------------------------------
// -------------------------------------------------------------------

inputFirstName.addEventListener("input", function () {
  let firstNameValue = inputFirstName.value
  document.getElementById("firstName_value").innerHTML = firstNameValue
  saveData('first_name', firstNameValue)
  validation(firstNameValue, letters)
  addIcon(validLetter, inputFirstName, '.firstName')
  if (validLetter == true) { valid_icon.style.left = '92.5%' }
});



// LastName
// -------------------------------------------------------------------
// -------------------------------------------------------------------

inputLastName.addEventListener("input", function () {
  let lastNameValue = inputLastName.value
  document.getElementById("lasttName_value").innerHTML = lastNameValue
  saveData('last_name', lastNameValue)
  validation(lastNameValue, letters)
  addIcon(validLetter, inputLastName, '.lastName')
  if (validLetter == true) { valid_icon.style.left = '92.5%' }
});


// About Me 
// -------------------------------------------------------------------
// -------------------------------------------------------------------


inputAboutMe.addEventListener("input", function () {
  let aboutMeValue = inputAboutMe.value
  document.getElementById("about_me_value").innerHTML = aboutMeValue
  if (inputAboutMe && aboutMeValue) {
    document.getElementById('about_me_title').style.display = 'block'
  } else {
    document.getElementById('about_me_title').style.display = 'none'
  }
  saveData('about', aboutMeValue)
  inputAboutMe.style.borderColor = '#98E37E'
  inputAboutMe.style.outlineColor = '#98E37E'
});



// Mail
// -------------------------------------------------------------------
// -------------------------------------------------------------------


inputMail.addEventListener("input", function () {
  let MailValue = inputMail.value
  document.getElementById("mail_value").innerHTML = MailValue
  if (inputMail && MailValue) {
    document.getElementById("mail_icon").style.display = 'block'
  } else {
    document.getElementById("mail_icon").style.display = 'none'
  }
  saveData('mail', MailValue)
  validationMail(MailValue)
  addIcon(validMail, inputMail, ".mail")

});

// Mobile
// -------------------------------------------------------------------
// -------------------------------------------------------------------

inputMobile.addEventListener("input", function () {
  inputMobile.maxLength = 17;
  inputMobile.onkeydown = function (e) {
    if (e.key !== 'Backspace' && e.key !== "Delete") {
      if (inputMobile.value.length == 4 || inputMobile.value.length == 8 ||
        inputMobile.value.length == 11 || inputMobile.value.length == 14) {
        inputMobile.value += ' '
      }
    }
  }
  let MobileValue = inputMobile.value
  document.getElementById("mobile_value").innerHTML = inputMobile.value
  if (inputMobile && MobileValue) {
    document.getElementById("phone_icon").style.display = 'block'
  } else {
    document.getElementById("phone_icon").style.display = 'none'
  }
  saveData('mobile', MobileValue)
  phoneValidation(inputMobile.value)
  addIcon(phoneValid, inputMobile, ".mobile")
});

// Upload Image
// -------------------------------------------------------------------
// -------------------------------------------------------------------
const chooseFile = document.getElementById("getFile");
const imgPreview = document.getElementById("profile_img");


chooseFile.addEventListener("change", function () {
  getImgData();
});
function getImgData() {
  const files = chooseFile.files[0];
  if (files) {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(files);
    fileReader.addEventListener("load", function () {
      imgPreview.innerHTML = '<img src="' + this.result + '" />';
      window.localStorage.setItem('imgURL', fileReader.result)
    });
    imgValid = true
  }
}


// Save Data in local Storage
function saveData(k, v) {
  window.localStorage.setItem(k, v)
}

// Next button validations must be true
let success = false
function chekAllvalidation () {
  if (validLetter == true && validMail == true &&  phoneValid == true && imgValid == true) {
    success = true
  } else {
    success = false
  }

}

document.getElementById('next').addEventListener('click', function () {
  chekAllvalidation ()
  if(success == true) {
    document.getElementById('next').setAttribute("href", "../experience/experience.html")
  }
  
})


// Validation 

const letters = ['ა', 'ბ', 'გ', 'დ', 'ე', 'ვ', 'ზ', 'თ', 'ი', 'კ', 'ლ', 'მ', 'ნ', 'ო', 'პ',
  'ჟ', 'რ', 'ს', 'ტ', 'უ', 'ფ', 'ქ', 'ღ', 'ყ', 'შ', 'ჩ', 'ც', 'ძ', 'წ', 'ჭ', 'ხ', 'ჯ', 'ჰ']

function validation(word, list) {
  if (word.length >= 2) {
    for (let i = 0; i < word.length; i++) {
      if (list.includes(word[i])) {
        validLetter = true
      } else {
        validLetter = false
        break;
      }
    }
  } else {
    validLetter = false
  }
}

// Validation Mail

function validationMail(mail) {
  const valid = '@redberry.ge'
  if (mail.length >= 13) {
    let chek = mail.slice(-12)
    if (chek == valid) {
      validMail = true
    } else {
      validMail = false
    }
  } else {
    validMail = false
  }
}


// Valid Phone Number 
function phoneValidation(num) {
  const validNumStart = '+995'
  let chek = num.slice(0, 4)
  if (chek == validNumStart && num.length == 17) {
    phoneValid = true
  } else {
    phoneValid = false
  }
}



// clear local storage
function clearLocalStorage() {
  localStorage.clear()
}


