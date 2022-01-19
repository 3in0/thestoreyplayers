

document.addEventListener("DOMContentLoaded", function (event) {

    document.getElementById( "st-nav" ).classList.remove( "st-nojs" )
    document.getElementById( "st-nav" ).classList.add( "st-js" )
    
	const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", mobileMenu);

    function mobileMenu() {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    }

    document.querySelector('#st-btn-donate').addEventListener
        ('click', function () {
            ShoutLightbox.renderTo(window.parent, {
                // production
                //client_token: '7a25e395-fa54-43f6-9f21-36257974957d',
                client_token: 'e725c247-b871-4a89-b72e-bb7e4677e834',

                onComplete: function (response) {
                    // Handle the response here, when the Shout Button returns success / failure response
                    console.log( "complete" );
                },
                onCancel: function (response) {
                    // Handle the cancel response here
                    console.log( "cancel" );
                },
                onError: function (reponse) {
                 // Handle the error here, when it fails to render the Shout Button lightbox
                console.log( "error" );
                }
            });
        });


});


