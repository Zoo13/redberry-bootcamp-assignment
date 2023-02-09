// Set values from local storage if we have it
document.getElementById('about_me_title').style.display = 'none'

document.getElementById("firstName_value").innerHTML = localStorage.getItem('first_name')
document.getElementById("lasttName_value").innerHTML = localStorage.getItem('last_name')
document.getElementById("about_me_value").innerHTML = localStorage.getItem('about')


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


// FirstName
// -------------------------------------------------------------------
// -------------------------------------------------------------------
let inputFirstName = document.getElementById('input_firstName');

inputFirstName.addEventListener("input", function() {

    let firstNameValue = inputFirstName.value
    document.getElementById("firstName_value").innerHTML = firstNameValue
    // dict['firstName']=firstNameValue
    saveData('first_name' , firstNameValue)
});


// LastName
// -------------------------------------------------------------------
// -------------------------------------------------------------------
let inputLastName = document.getElementById('input_lastName');
inputLastName.addEventListener("input", function() {
    let lastNameValue = inputLastName.value
    document.getElementById("lasttName_value").innerHTML = lastNameValue
    saveData('last_name' , lastNameValue)
});


// About Me 
// -------------------------------------------------------------------
// -------------------------------------------------------------------

let inputAboutMe = document.getElementById('input_aboutMe');
inputAboutMe.addEventListener("input", function() {
  let aboutMeValue = inputAboutMe.value
  document.getElementById("about_me_value").innerHTML = aboutMeValue
  if(inputAboutMe && aboutMeValue) {
    document.getElementById('about_me_title').style.display = 'block'
  }else {
    document.getElementById('about_me_title').style.display = 'none'
  }
  saveData('about' , aboutMeValue)
});



// Mail
// -------------------------------------------------------------------
// -------------------------------------------------------------------

let inputMail = document.getElementById('input_mail');
inputMail.addEventListener("input", function() {
    let MailValue = inputMail.value
    document.getElementById("mail_value").innerHTML = MailValue
    if(inputMail && MailValue ) {
      document.getElementById("mail_icon").style.display = 'block'
    }else {
      document.getElementById("mail_icon").style.display = 'none'
    }
    saveData('mail' , MailValue)
});

// Mobile
// -------------------------------------------------------------------
// -------------------------------------------------------------------
let inputMobile = document.getElementById('input_mobile');
inputMobile.addEventListener("input", function() {
  let MobileValue = inputMobile.value
  document.getElementById("mobile_value").innerHTML = MobileValue
  if(inputMobile && MobileValue ) {
    document.getElementById("phone_icon").style.display = 'block'
  }else {
    document.getElementById("phone_icon").style.display = 'none'
  }
  saveData('mobile' , MobileValue)
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
        window.localStorage.setItem('imgURL' , fileReader.result)
      });
  
    }
  }


// Save Data in local Storage
function saveData(k , v) {
  window.localStorage.setItem(k , v)
}



document.getElementById('next').addEventListener('click' , function() {
  
  document.getElementById('next').setAttribute("href" , "../experience/experience.html")
})