
// FirstName
let inputFirstName = document.getElementById('input_firstName');
inputFirstName.addEventListener("input", function() {
    document.getElementById("firstName_value").innerHTML = inputFirstName.value
});
// LastName
let inputLastName = document.getElementById('input_lastName');
inputLastName.addEventListener("input", function() {
    document.getElementById("lasttName_value").innerHTML = inputLastName.value
});
// About Me 
let inputaAboutMe = document.getElementById('input_aboutMe');
inputaAboutMe.addEventListener("input", function() {
    document.getElementById("about_me_value").innerHTML = inputaAboutMe.value
});
// Mail
let inputMail = document.getElementById('input_mail');
inputMail.addEventListener("input", function() {
    document.getElementById("mail_value").innerHTML = inputMail.value
});
// Mobile
let inputMobile = document.getElementById('input_mobile');
inputMobile.addEventListener("input", function() {
    document.getElementById("mobile_value").innerHTML = inputMobile.value
});

// Upload Image

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




