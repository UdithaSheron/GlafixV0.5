/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 

const header = document.querySelector('.l-header');
let prevScrollPos = window.pageYOffset;

window.addEventListener('scroll', () => {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
        // User is scrolling up, show the header
        header.classList.remove('nav-hidden');
    } else {
        // User is scrolling down, hide the header
        header.classList.add('nav-hidden');
    }

    prevScrollPos = currentScrollPos;
});

    function validateForm() {
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        const errorMessage = document.querySelector('.error-message');
        const successMessage = document.querySelector('.success-message');

        // Reset previous error message and success message
        errorMessage.style.display = 'none';
        successMessage.style.display = 'none';

        if (nameInput.value === '' || emailInput.value === '' || messageInput.value === '') {
            errorMessage.style.display = 'block';
            return false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            errorMessage.style.display = 'block';
            errorMessage.textContent = 'Please enter a valid email address.';
            return false;
        }

        // Display the success message
        successMessage.style.display = 'block';

        // Clear form fields
        nameInput.value = '';
        emailInput.value = '';
        messageInput.value = '';

        // Hide the success message and error message after 5 seconds
        setTimeout(function() {
            successMessage.style.display = 'none';
            errorMessage.style.display = 'none';
        }, 5000); // 5000 milliseconds = 5 seconds

        // Prevent form submission
        return false;
    }

    // Get the reference to the link element
    const glafixLink = document.getElementById("glafixLink");

    // Add a click event listener
    glafixLink.addEventListener("click", function(event) {
        // Prevent the default link behavior (preventing the page from jumping to the top)
        event.preventDefault();

        // Reload the page
        location.reload();
    });     
/* Demo purposes only */
$(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );
