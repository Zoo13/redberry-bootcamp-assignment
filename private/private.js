
// FirstName
// -------------------------------------------------------------------
// -------------------------------------------------------------------
let inputFirstName = document.getElementById('input_firstName');

inputFirstName.addEventListener("input", function() {
    let firstNameValue = inputFirstName.value
    document.getElementById("firstName_value").innerHTML = firstNameValue
});



// LastName
// -------------------------------------------------------------------
// -------------------------------------------------------------------
let inputLastName = document.getElementById('input_lastName');
inputLastName.addEventListener("input", function() {
    document.getElementById("lasttName_value").innerHTML = inputLastName.value
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
      });    
    }
  }




