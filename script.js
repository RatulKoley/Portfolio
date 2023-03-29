//Header Menu-Icon when clicking
let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuicon.onclick=()=>{
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

                
// Navbar Actve Effect Upon Scrolling
let sections = document.querySelectorAll('section');
let navLinks= document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height= sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' +id+']').classList.add('active');
            });
        };
    });

    // Header Nabar Button Border
    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY>100);

    
    //close Menu-Icon after clicking link
    menuicon.classList.remove('bx-x');
    navbar.classList.remove('active');

};


//Parallax Effect
let photo = document.getElementById('photo')

            window.addEventListener('scroll',function(){
                let value = window.scrollY;
                photo.style.top = value * 1.05 + 'px';
})


//Scroll Reaveal Bouncy Effect
ScrollReveal({
    reset:true,
   distance:'80px',
   duration:2000,
   delay:200 
});
ScrollReveal().reveal('.home-content, .heading',{origin:'top'});
ScrollReveal().reveal(' .about-content,.services-container, .portfolio-box, .contact form',{origin:'bottom'});
ScrollReveal().reveal('.about-img, .home-content h1',{origin:'left'});
ScrollReveal().reveal(' .home-content .social-media',{origin:'right'});


//Type Effect
var typed = new Typed('.multiple-text', {
    strings: ['Web Designer','Fivem Developer', '.Net Developer'],
    typeSpeed: 70,
    backspeed:100,
    backdelay:1000,
    loop:true
  });

  //About Section Tab Links Open
  var tablinks = document.getElementsByClassName("links");
  var tabcontents = document.getElementsByClassName("tab-contents");

  function opentab(tabname){
        for(tablink of tablinks){
            tablink.classList.remove("active");  
        }
        for(tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab");  
        }
        event.currentTarget.classList.add("active");
        document.getElementById(tabname).classList.add("active-tab");
  }

  //Contact Form Google Sheet Submittion Data
  const scriptURL = 'https://script.google.com/macros/s/AKfycbz5cDsdsuw_w7NHEzN0VAspw50w21aLK1udAXpg1KhkPVYDbzVVB2SdE0AAgdQcUeNk3w/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg");

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {msg.innerHTML="Massage Succesfully Submit"
    setTimeout(function(){msg.innerHTML=""},5000) 
    form.reset()})
      .catch(error => {msg.innerHTML="Massage Failed To Submit"
      setTimeout(function(){msg.innerHTML="Try Again"},5000) 
      form.reset()})
  })