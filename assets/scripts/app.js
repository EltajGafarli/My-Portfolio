let buttons = document.querySelectorAll("#header .buttons div");
let cvLink = document.getElementById("cvLink");
let cvIcon = document.getElementById("fa-download");

let projectbutton = document.getElementById("project-button");
let skillsbutton = document.getElementById("skill-button");

let project = document.getElementById("project");
let skills = document.getElementById("skills");


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