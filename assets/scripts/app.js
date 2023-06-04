let buttons = document.querySelectorAll("#header .buttons div");
let cvLink = document.getElementById("cvLink");
let cvIcon = document.getElementById("fa-download");

let projectbutton = document.getElementById("project-button");
let skillsbutton = document.getElementById("skill-button");

let project = document.getElementById("project");
let skills = document.getElementById("skills");

let contact = document.getElementById("contact");

projectbutton.addEventListener('click', function() {

    skills.style.display = "none";
    project.style.display = "flex";
    // skillsbutton.classList.remove("change-color");
    // projectbutton.classList.add("change-color");
    skillsbutton.style.backgroundColor = "#171f26";
    projectbutton.style.backgroundColor = "#0c151d";
})
skillsbutton.addEventListener('click', function() {

    project.style.display = "none";
    skills.style.display = "flex";
    // skillsbutton.classList.add("change-color");
    // projectbutton.classList.remove("change-color");
    skillsbutton.style.backgroundColor = "#0c151d";
    projectbutton.style.backgroundColor = "#171f26";
})

const sendMail = () => {
    const emailAddress = "eltajgafarli@mail.ru";
    const emailSubject = "Portfolio Mail";
    const emailBody = "Replace this text with the desired email body content";
    const encodedSubject = encodeURIComponent(emailSubject);
    const encodedBody = encodeURIComponent(emailBody);
    window.location.href = `mailto:${emailAddress}?subject=${encodedSubject}&body=${encodedBody}`;
};


contact.addEventListener('click', sendMail);


//links

let employee = document.getElementById("employee");

let calculator = document.getElementById("det-calculator");

let blog = document.getElementById("blog");

let spotify = document.getElementById("spotify");

let meladora = document.getElementById("meladora");

let sorting = document.getElementById("sorting");


employee.addEventListener('click', function() {
    window.open("https://github.com/EltajGafarli/EmployeeManagement", "_blank");
});

calculator.addEventListener('click', function() {
    window.open("https://github.com/EltajGafarli/DeterminantCalculator", "_blank")
})

blog.addEventListener('click', function() {
    window.open("https://github.com/EltajGafarli/blog-app-flask", "_blank")
})


spotify.addEventListener('click', function() {
    window.open("https://github.com/EltajGafarli/spotify-music-recommender", "_blank")
})

meladora.addEventListener('click', function() {
    window.open("https://github.com/EltajGafarli/meladora", "_blank")
})


sorting.addEventListener('click', function() {
    window.open("https://github.com/EltajGafarli/illustration-of-sorting-algorithms", "_blank")
})