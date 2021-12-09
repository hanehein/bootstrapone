// Start Navbar 
    // for navbutton
    const navbuttons = document.querySelector(".navbuttons");
        navbuttons.addEventListener('click',()=>navbuttons.classList.toggle('changes'));

    // for navbar
    const navbar = document.querySelector('.navbar');
        window.addEventListener('scroll',()=>{
            const getscrolly = window.scrollY;
            // console.log(getscrolly);

            if(getscrolly >= 200){     // 200(custom) ဆိုတာ scroll ဆွဲလိုက်ရင် ဘယ်လောက်မှာ ပြောင်းလဲမလဲဆိုတာ
                navbar.classList.add('navmenus');
            }else{
                navbar.classList.remove('navmenus');
            }
        });
// End Navbar


// Start Gallery Section
    const gallerylists = document.querySelectorAll('.gallerylists');
    const filternews = document.querySelectorAll('.filters.new'),
            filterfrees = document.querySelectorAll('.filters.free'),
            filterpros = document.querySelectorAll('.filters.pro');
    
    gallerylists.forEach((gallerylist)=>{               
        // console.log(gallerylist);

        let datafilter = gallerylist.getAttribute('data-filter');   // custom attribute ပေးပြီးခေါ်ပြတာ, ပုံမှန် innerhtml နဲ့လဲတိုက်စစ်ရ
        // console.log(datafilter);

        gallerylist.addEventListener('click',(e)=>{
            // console.log(datafilter);

            removeactiveitem();
            e.target.classList.add('activeitems');


            if(datafilter === "all"){
                filternews.forEach(filternew=>{
                    filternew.style.display = "inline-block";
                });
                filterfrees.forEach(filterfree=>{
                    filterfree.style.display = "inline-block";
                });
                filterpros.forEach(filterpro=>{
                    filterpro.style.display = "inline-block";
                });

            }else if(datafilter === "new"){
                filternews.forEach(filternew=>{
                    filternew.style.display = "inline-block";
                });

                filterfrees.forEach(filterfree=>{
                    filterfree.style.display = "none";
                });
                filterpros.forEach(filterpro=>{
                    filterpro.style.display = "none";
                });

            }else if(datafilter === "free"){
                filterfrees.forEach(filterfree=>{
                    filterfree.style.display = "inline-block";
                });

                filternews.forEach(filternew=>{
                    filternew.style.display = "none";
                });
                filterpros.forEach(filterpro=>{
                    filterpro.style.display = "none";
                });
                
            }else{
                filterpros.forEach(filterpro=>{
                    filterpro.style.display = "inline-block";
                });

                filternews.forEach(filternew=>{
                    filternew.style.display = "none";
                });
                filterfrees.forEach(filterfree=>{
                    filterfree.style.display = "none";
                });
            }
        });
    });

    // Remove current active item
    function removeactiveitem(){
        gallerylists.forEach(gallerylist=>{
            gallerylist.classList.remove('activeitems');
        })
    }

// End Gallery Section


// Start Footer Section
const showyear = document.getElementById('showayear');
const getfullyear = new Date().getUTCFullYear();
showyear.textContent = getfullyear;
// End Footer Section