const portfolio = document.querySelector(".portfolio-div");
const skills = document.querySelector(".skills-div");
const about = document.querySelector(".about-div");
const contact = document.querySelector(".contact-div");
const div = document.querySelector(".div")
const contactmove = document.querySelector(".contact-move")

function portfolioclick() {
  portfolio.classList.add("active-portfolio");
  div.classList.add("activediv")
}

function exitportfolio() { 
  portfolio.classList.remove("active-portfolio")
  div.classList.remove("activediv")
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
  contactmove.classList.add("activecontact")

}
function exitcontact() {
    contact.classList.remove("active-contact");
    contactmove.classList.remove("activecontact")
  }

