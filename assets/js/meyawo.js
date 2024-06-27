/*!
=========================================================
* Meyawo Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});
$(document).ready(function(){
    $('#enquiry').validate({
        rules:{
            fname:{
                required:true,
                minlength:4
            },
            emailaddress:{
                required:true,
                email:true
            },
            comment:{
                required:true,
                minlength:16
            }
        }
    })
})
function sendMail(){
    var params= {
        fname:document.getElementById('name').value,
        emailaddress:document.getElementById('email').value,
        comment:document.getElementById('comment').value
    };
    const serviceId ="service_ynw64wt";
const templateId ="template_dsou8pg";

emailjs.send(serviceId,templateId,params)
.then((res) =>{
    document.getElementById("name").value="";
    document.getElementById("email").value="";
    document.getElementById("comment").value="";
    console.log(res);
    alert("Massage sent succesfully");
})
.catch((err) => console.log(err));
}
