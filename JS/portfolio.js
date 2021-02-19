


//jQuery ANIMATE//
$("#profpic2").ready(             //function loads when ready 
    function(){
       $("#profpic").animate({left: '180px'}, 1000); // how to move image and what rate
    }),        
$("#profpic2").ready(  
    function(){
        $("#profpic2").animate({left: '180px'}, 5000); //move image to overlay second image, but at a slower rate
    });



//POP UP FORM//
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
//END POP UP FORM//