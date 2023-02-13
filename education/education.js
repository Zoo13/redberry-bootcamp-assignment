//  1/3 localStorage ------- > start

document.getElementById("firstName_value").innerHTML = localStorage.getItem('first_name')
document.getElementById("lasttName_value").innerHTML = localStorage.getItem('last_name')

if ('mail' in localStorage) {
    document.getElementById("mail_value").innerHTML = localStorage.getItem('mail')
    document.getElementById("mail_icon").style.display = 'block'
}
if ('mobile' in localStorage) {
    document.getElementById("mobile_value").innerHTML = localStorage.getItem('mobile')
    document.getElementById("phone_icon").style.display = 'block'
}
if ('about' in localStorage) {
    document.getElementById("about_me_value").innerHTML = localStorage.getItem('about')

} else {
    document.getElementById('about_me_title').style.display = 'none'
}

let imgURL = window.localStorage.getItem('imgURL')
if ('imgURL' in localStorage) {
    document.getElementById('profile_img').innerHTML = '<img src="' + imgURL + '" />';
}


//  1/3 localStorage ------- > ENd 
// 2/3 localStorage ------- > Start


// title
let experienceTitle = document.getElementById('experience_title')
// dash
const dash = document.getElementById('dash')

if ('position' in localStorage) {
    document.getElementById("position_value").innerHTML = localStorage.getItem('position')
    experienceTitle.style.display = 'block'
}
if ('employer' in localStorage) {
    document.getElementById("employer_value").innerHTML = localStorage.getItem('employer')
    experienceTitle.style.display = 'block'
}
if ('job_start' in localStorage) {
    document.getElementById("exp_start_date_value").innerHTML = localStorage.getItem('job_start')
    experienceTitle.style.display = 'block'
}
if ('job_end' in localStorage) {
    document.getElementById("exp_end_date_value").innerHTML = localStorage.getItem('job_end')
    experienceTitle.style.display = 'block'
}
if ('job_descr' in localStorage) {
    document.getElementById("job_description_value").innerHTML = localStorage.getItem('job_descr')
    experienceTitle.style.display = 'block'
}

// 2/3 localStorage ------- > End

// 3/3 localStorage ------- > Start
let educationTitle = document.getElementById('education_title')


if ('institute' in localStorage) {
    document.getElementById("institute_value").innerHTML = localStorage.getItem('institute')
    educationTitle.style.display = 'block'
}

if ('degree' in localStorage) {
    document.getElementById("degree_value").innerHTML = localStorage.getItem('degree')
    educationTitle.style.display = 'block'
}

if ('educ_date' in localStorage) {
    document.getElementById("educ_date_value").innerHTML = localStorage.getItem('educ_date')
    educationTitle.style.display = 'block'
}

if ('educ_descr' in localStorage) {
    document.getElementById("educ_description_value").innerHTML = localStorage.getItem('educ_descr')
    educationTitle.style.display = 'block'
}

// 3/3 localStorage ------- > End

function saveData(k, v) {
    window.localStorage.setItem(k, v)
}

function validation(word) {
    validLetter = word.length >= 2;
    console.log(validLetter)
    return validLetter
}
function addIcon(valid, input, selector) {
    if (valid === true) {
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
function clearLocalStorage() {
    localStorage.clear()
}
function chekAllvalidation() {
    if (validLetter == true) {
        success = true
    } else {
        success = false
    }
}
function getData(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject(xhr.statusText);
                }
            }
        };
        xhr.send();
    });
}

function displayDegrees(selectElId) {
    getData("https://resume.redberryinternship.ge/api/degrees").then(data => {
        let selectEl = document.getElementById(selectElId)

        for (const item of data) {
            let optionEl = document.createElement('option')
            optionEl.value = item.title
            optionEl.text = item.title
            selectEl.append(optionEl)
        }
    }).catch(error => {
        console.error(error);
    });
}

export function getLastEduNum() {
    let num = Number(localStorage.getItem('lastEduNumber')) + 1

    if (num > 1) {
        return num
    }

    return 0
}

function buildInstituteEl(elId, currentEduNumber) {
    let instituteEl = document.createElement('div')
    let titleEl = document.createElement('h3')
    let inputEl = document.createElement('input')
    let warningEl = document.createElement('h5')

    instituteEl.setAttribute('class', 'institute')

    titleEl.setAttribute('class', 'inputDescr')
    titleEl.textContent = 'სასწავლებელი'

    inputEl.setAttribute('placeholder', 'სასწავლებელი')
    inputEl.setAttribute('id', elId)

    warningEl.setAttribute('class', 'validDescr')

    instituteEl.append(titleEl)
    instituteEl.append(inputEl)
    instituteEl.append(warningEl)

    inputEl.addEventListener('input', function () {
        let instituteValue = inputEl.value
        document.getElementById(`institute_value-${currentEduNumber}`).innerText = instituteValue
        educationTitle.style.display = 'block'
        saveData(`institute-${getLastEduNum()}` , instituteValue)
        addIcon(validation(instituteValue) , inputEl , '.institute')
    })

    return instituteEl
}

function buildDegreeEndDateEl(selectId, inputId, currentEduNumber) {
    let degreeEndDateEl = document.createElement('div')
    let degreeEl = document.createElement('div')
    let degreeTitleEl = document.createElement('h3')
    let degreeSelEl = document.createElement('select')
    let endDateEl = document.createElement('div')
    let endDateTitleEl = document.createElement('h3')
    let endDateInputEl = document.createElement('input')
    degreeEndDateEl.setAttribute('class', 'degree_endDate')
    degreeEl.setAttribute('class', 'degree')
    degreeTitleEl.setAttribute('class', 'inputDescr')
    degreeTitleEl.textContent = 'ხარისხი'
    degreeSelEl.setAttribute('id', selectId)
    endDateEl.setAttribute('class', 'endDate')
    endDateTitleEl.setAttribute('class', 'inputDescr')
    endDateTitleEl.textContent = 'დამთავრების რიცხვი'
    endDateInputEl.setAttribute('type', 'date')
    endDateInputEl.setAttribute('id', inputId)
    degreeEndDateEl.append(degreeEl)
    degreeEl.append(degreeTitleEl)
    degreeEl.append(degreeSelEl)
    degreeEndDateEl.append(endDateEl)
    endDateEl.append(endDateTitleEl)
    endDateEl.append(endDateInputEl)

    degreeSelEl.addEventListener("input", function () {
        let degreeValue = degreeSelEl.value
        document.getElementById(`degree_value-${currentEduNumber}`).textContent = degreeValue
        educationTitle.style.display = 'block'

        saveData(`degree-${getLastEduNum()}`, degreeValue)
        addIcon(validation(degreeValue), degreeSelEl, '.degree')
    });

    endDateInputEl.addEventListener("input", function () {
        let educEndDateValue = endDateInputEl.value
        document.getElementById(`educ_date_value-${currentEduNumber}`).textContent = educEndDateValue
        educationTitle.style.display = 'block'

        saveData(`educ_date-${getLastEduNum()}`, educEndDateValue)
        addIcon(validation(educEndDateValue), endDateInputEl, '.input_educ_end_date')
    });

    return degreeEndDateEl
}

function buildDescriptionEl(elId, currentEduNumber) {
    let descriptionEl = document.createElement('div')
    let descriptionTitleEl = document.createElement('h3')
    let descriptionEduEl = document.createElement('textarea')
    descriptionEl.setAttribute('class', 'description')
    descriptionTitleEl.setAttribute('class', 'inputDescr')
    descriptionEl.textContent = 'აღწერა'
    descriptionEduEl.setAttribute('placeholder', 'განათლების აღწერა')
    descriptionEduEl.setAttribute('id', elId)
    descriptionEl.append(descriptionTitleEl)
    descriptionEl.append(descriptionEduEl)

    descriptionEduEl.addEventListener("input", function () {
        let educDescrValue = descriptionEduEl.value
        document.getElementById(`educ_description_value-${currentEduNumber}`).innerText = educDescrValue
        educationTitle.style.display = 'block'
        saveData(`educ_descr-${getLastEduNum()}`, educDescrValue)
        addIcon(validation(educDescrValue), descriptionEduEl, '.description')
    });

    return descriptionEduEl
}

export function buildEducationBox(lastNumber) {
    let mainEduEl = document.createElement('div')
    mainEduEl.setAttribute('class', 'education_box')

    let eduTitleEl = document.createElement('h2')
    eduTitleEl.setAttribute('id', `education_title-${lastNumber}`)
    eduTitleEl.style.display = 'none'
    eduTitleEl.textContent = 'განათლება'

    let degreeEl = document.createElement('div')
    let instValEl = document.createElement('h3')
    let degreeValEl = document.createElement('h3')
    degreeEl.setAttribute('class', 'institute_degree')
    instValEl.setAttribute('id', `institute_value-${lastNumber}`)
    degreeValEl.setAttribute('id', `degree_value-${lastNumber}`)
    degreeEl.append(instValEl)
    degreeEl.append(degreeValEl)

    let eduDateEl = document.createElement('div')
    let eduDateTitleEl = document.createElement('h4')
    eduDateEl.setAttribute('class', 'educ_date')
    eduDateTitleEl.setAttribute('id', `educ_date_value-${lastNumber}`)
    eduDateEl.append(eduDateTitleEl)

    let eduDescriptionEl = document.createElement('div')
    let eduDescParaEl = document.createElement('p')
    eduDescriptionEl.setAttribute('class', 'educ_description')
    eduDescParaEl.setAttribute('id', `educ_description_value-${lastNumber}`)
    eduDescriptionEl.append(eduDescParaEl)

    mainEduEl.append(eduTitleEl)
    mainEduEl.append(degreeEl)
    mainEduEl.append(eduDateEl)
    mainEduEl.append(eduDescriptionEl)

    return mainEduEl
}

export function displayEduFromLocalStorage() {
    let itemsToAppend = [];

    let endsWithNumber = /^.*-\d+$/;

    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i)
        if (endsWithNumber.test(key)) {
            let regex = /-\d+$/;
            let lastNumber = parseInt(key.match(regex)[0].slice(1))

            if (itemsToAppend[lastNumber]) {
                let myAsscArr = {}
                myAsscArr[key] = localStorage.getItem(key)
                itemsToAppend[lastNumber].push(myAsscArr)
            } else {
                let myAsscArr = {}
                myAsscArr[key] = localStorage.getItem(key)
                itemsToAppend[lastNumber] = [myAsscArr]
            }
        }
    }

    let rightSideEl = document.getElementById('rightSide')
    let redberry_star = document.getElementById('redberry-star')

    for (let i = 0; i < itemsToAppend.length; i++) {
        let item = itemsToAppend[i]

        if (item !== undefined) {
            rightSideEl.insertBefore(buildEducationBox(i), redberry_star)

            for (let j = 0; j < item.length; j++) {
                let finalItem = item[j]

                if (finalItem[`institute-${i}`]) {
                    document.getElementById(`institute_value-${i}`).textContent = finalItem[`institute-${i}`]
                } else if (finalItem[`degree-${i}`]) {
                    document.getElementById(`degree_value-${i}`).textContent = finalItem[`degree-${i}`]
                } else if (finalItem[`educ_date-${i}`]) {
                    document.getElementById(`educ_date_value-${i}`).textContent = finalItem[`educ_date-${i}`]
                } else if (finalItem[`educ_descr-${i}`]) {
                    document.getElementById(`educ_description_value-${i}`).textContent = finalItem[`educ_descr-${i}`]
                }
            }
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    displayDegrees('input_degree_select')
    displayEduFromLocalStorage()

    let eduCounter = getLastEduNum()
    let newEduButton = document.getElementById('addDescrBtn')
    let leftSideEl = document.getElementById('left_side')
    let rightSideEl = document.getElementById('rightSide')
    let redberry_star = document.getElementById('redberry-star')

    newEduButton.addEventListener('click', function () {
        let eduBox = buildEducationBox(eduCounter)
        rightSideEl.insertBefore(eduBox, redberry_star)

        let mainDiv = document.createElement('main')
        let instituteEl = buildInstituteEl(`input_institute-${eduCounter}`, eduCounter)
        let degreeEndDateEl = buildDegreeEndDateEl(`input_degree_select-${eduCounter}`, `input_educ_end_date-${eduCounter}`, eduCounter)
        let descriptionEl = buildDescriptionEl(`input_educ_descr-${eduCounter}`, eduCounter)

        mainDiv.append(instituteEl)
        mainDiv.append(degreeEndDateEl)
        mainDiv.append(descriptionEl)

        leftSideEl.insertBefore(mainDiv, newEduButton)

        displayDegrees(`input_degree_select-${eduCounter}`)

        eduCounter++
        saveData('lastEduNumber', eduCounter)
    })
});

let inputInstitute = document.getElementById('input_institute');
// institute
inputInstitute.addEventListener("input", function () {
    let instituteValue = inputInstitute.value
    document.getElementById("institute_value").innerHTML = instituteValue
    educationTitle.style.display = 'block'
    saveData('institute', instituteValue)
    addIcon(validation(instituteValue), inputInstitute, '.institute')
});

let inputDegree = document.getElementById('input_degree_select');
// Degree
inputDegree.addEventListener("input", function () {
    let degreeValue = inputDegree.value
    document.getElementById("degree_value").innerHTML = degreeValue
    educationTitle.style.display = 'block'
    saveData('degree', degreeValue)
    addIcon(validation(degreeValue), inputDegree, '.degree')
});

// Education End Date
let inputEducEndDate = document.getElementById('input_educ_end_date');
inputEducEndDate.addEventListener("input", function () {
    let educEndDateValue = inputEducEndDate.value
    document.getElementById("educ_date_value").innerHTML = educEndDateValue
    educationTitle.style.display = 'block'
    saveData('educ_date', educEndDateValue)
    addIcon(validation(educEndDateValue), inputEducEndDate, '.input_educ_end_date')
});

// Education Description
let inputEducDescription = document.getElementById('input_educ_descr');
inputEducDescription.addEventListener("input", function () {
    let educDescrValue = inputEducDescription.value
    document.getElementById("educ_description_value").innerHTML = educDescrValue
    educationTitle.style.display = 'block'
    saveData('educ_descr', educDescrValue)
    addIcon(validation(educDescrValue), inputEducDescription, '.description')
});

// Save Data in local Storage

// Validation
let validLetter = false

// create Element img for Valid And Invalid Icons
const invalid_icon = document.createElement("img");
invalid_icon.src = "../icons/invalid.svg";
invalid_icon.setAttribute("class", "invalid_icon")

const valid_icon = document.createElement("img");
valid_icon.src = "../icons/valid.svg";
valid_icon.setAttribute("class", "valid_icon")

// clear local storage

// Next button validations must be true
let success = false

document.getElementById('next').addEventListener('click', function () {
    chekAllvalidation()
    if (success == true) {
        document.getElementById('next').setAttribute("href", "../resume/resume.html")
    }

})
