// get references to the form and displayy area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
// handle form submissionn
form.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent page reload
    // collect input value
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // generate resume content dynamically
    var resumeHTML = "\n    <h2><b>Resume</b></h2>\n    <h3>Persnal Information</h3>\n    <p><b>Name:</b?".concat(name, "</p>\n    <p><b>Email:</b?").concat(email, "</p>\n    <p><b>Phone:</b?").concat(phone, "</p>\n\n    <h3>Education</h3>\n    <p>").concat(education, "</p>\n\n    <h3>experience</h3>\n    <p>").concat(experience, "</p>\n\n    <h3>skills</h3>\n    <p>").concat(skills, "</p>\n    ");
    // display generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing.');
    }
});
