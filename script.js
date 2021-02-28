$(function () { /*document ready function*/
    
    $('.hamburger-menu').on('click', function () {
        $('.toggle').toggleClass('open');
        $('.nav-list').toggleClass('open');
    });

    // $('.proj').on('click',function() {

    // });

    $("#cont-form").validate({
        highlight: function(element, errorClass, validClass) {
            $(element).addClass(errorClass).removeClass(validClass);
            console.log('element');
            console.log(element);
            console.log(element.classList);
            console.log(element.form);
            // $(element.form).find(element.id).addClass(errorClass);
          },
        //   unhighlight: function(element, errorClass, validClass) {
        //     $(element).removeClass(errorClass).addClass(validClass);
        //     $(element.form).find("label[for=" + element.id + "]")
        //       .removeClass(errorClass);
        //   },
        rules: {
        fname : {
            required: true,
            lettersonly: true,
            minlength: 3,
        },
        lname : {
            required: true,
            lettersonly: true,
            minlength: 3,
        },
        email: {
            required: true,
            email: true,
        },

        }
        });

    //validateform();


});


// function validateform(){  
//     console.log("validate function");

//     var $contactForm = $('#cont-form');
//     //console.log($contactForm);
//     $contactForm.submit(function(e){
//         // alert("clicked submit with invalid form");
//         //console.log("write sth");
//         var errcode = 0;

//         var fname=$('#cont-form.fname').value;  
//         console.log(fname);
//         if(fname==null || fname == ""){
//             $('#fname').css("background-color","pink");
//             errcode = 1;
//         }

        

//         var lname=$('#cont-form.lname').value;  
//         console.log(lname);
//         if(fname==null || fname == ""){
//             $('#lname').css("background-color","pink");
//             errcode = 1;
//         }

//         var email=$('#cont-form.email').value;  
//         console.log(email);
//         if(email==null || email == ""){
//             $('#email').css("background-color","pink");
//             errcode = 1;
//         }

//         var subject=$('#cont-form.subject').value;  
//         console.log(subject);
//         if(subject==null || subject == ""){
//             $('#subject').css("background-color","pink");
//             errcode = 1;
//         }

//         var message=$('#cont-form.message').value;  
//         console.log(message);
//         if(message==null || message == ""){
//             $('#message').css("background-color","pink");
//             errcode = 1;
//         }

//         switch(errcode){
//             case 0:
//                 errmsg = "";
//             case 1:
//                 errmsg = "ERROR: field can't be blank";
//         }

//         console.log($('#form-error-msg').text(errmsg));

//         if(errcode!=0){
//             //give err don't send form
//         }

//         return false;
//     });




//}

// (function() {
//     console.log("inside form validation");

//     var $contactForm = $('#contactForm');
//     // VALIDATE FORM
//     $contactForm.validate();
//     $contactForm.submit(function(e) {
//     //     if ($(this).valid())
//     //          {...}
//     //    return false;
//      });
// })();


// let body = document.getElementsByClassName('body');
// console.log('sth');
// console.log(body);
