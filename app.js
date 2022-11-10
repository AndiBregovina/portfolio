const portfolio = document.querySelector(".portfolio-div");
const skills = document.querySelector(".skills-div");
const about = document.querySelector(".about-div");
const contact = document.querySelector(".contact-div");

console.log(portfolio);
console.log(skills);
console.log(about);
console.log(contact);

function portfolioclick() {
  portfolio.classList.add("active-portfolio");
}

function exitportfolio() { 
  portfolio.classList.remove("active-portfolio")
}

function skillsclick() {
  skills.classList.add("active-skills");
}
function exitskills() {
    skills.classList.remove("active-skills")
}

function aboutclick() {
  about.classList.add("active-about");
}
function exitabout() {
    about.classList.remove("active-about")
}

function contactclick() {
  contact.classList.add("active-contact");
}
function exitcontact() {
    contact.classList.remove("active-contact");
  }