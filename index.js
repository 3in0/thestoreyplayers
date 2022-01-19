document.addEventListener("DOMContentLoaded", function(event) { 

    document.getElementById( "st-nav" ).classList.remove( "st-nojs" )
    document.getElementById( "st-nav" ).classList.add( "st-js" )
    
	const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", mobileMenu);

    function mobileMenu() {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    }

} );


