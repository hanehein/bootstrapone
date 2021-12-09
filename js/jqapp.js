$(document).ready(function(){
// Start Navbar 
    // for navbutton
    $('.navbuttons').click(function(){
        $('.navbuttons').toggleClass('changes');
    });

    // for navbar
    $(window).scroll(function(){
        let getscrolly = $(this).scrollTop();
        // console.log(getscrolly);

        if(getscrolly >= 200){
            $('.navbar').addClass('navmenus');
        }else{
            $('.navbar').removeClass('navmenus');
        }
    });
// End Navbar


// Start Mission Section
    $(window).scroll(function(){
        let getscrolly = $(this).scrollTop();
        // console.log(getscrolly);

        if(getscrolly >= 680){
            $('.cameraimgs').addClass('.fromlefts');
            $('.missiontexts').addClass('.fromrights');
        }else{
            $('.cameraimgs').removeClass('.fromlefts');
            $('.missiontexts').removeClass('.fromrights');
        }

    });
// End Mission Section

// Start Gallery Section
$('.gallerylists').click(function(){
    let datafilter = $(this).attr('data-filter');
    // console.log(datafilter);

    if(datafilter === "all"){
        $('.filters').show(400);
    }else{
        $('.filters').not('.' + datafilter).hide(400);

        $('.filters').filter('.' + datafilter).show(400);
    }

}); 

     // Remove current active item
    $('.gallerylists').click(function(){
        $(this).addClass('activeitems').siblings().removeClass('activeitems');
    });
// End Gallery Section


// Start Pricing Section
    $(window).scroll(function(){
        let getscrolly = $(this).scrollTop();
        // console.log(getscrolly);

        if(getscrolly >= 4300){
            $('.cardones').addClass('movefromlefts');
            $('.cardtwos').addClass('movefrombottoms');
            $('.cardthrees').addClass('movefromrights');
        }else{
            $('.cardones').removeClass('movefromlefts');
            $('.cardtwos').removeClass('movefrombottoms');
            $('.cardthrees').removeClass('movefromrights');
        }
    })
// End Pricing Section


// Start Footer Section
const showyear = document.getElementById('showayear');
const getfullyear = new Date().getUTCFullYear();
showyear.textContent = getfullyear;
// End Footer Section
});

