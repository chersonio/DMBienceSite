$(function(){
    $("#nav-placeholder").load("NavBar.html");
    $("#banner-placeholder").load("banner.html");
    $("#mainbody-placeholder").load("mainbody.html");
});

window.onload = function()
{
// the $ is posible because of the inclusion of jquery
// another way is document.getElementsByTagName('from')[0]; etc

  var theForm = $("form")[0];

  var inputElements = $(".contact-input-text");

  for (var i = 0; i < inputElements.length; i++)
  {
    inputElements[i].addEventListener('input', function(){
      if (this.value.length == 0)
      {
        
        this.classList.add("error");
      }
      else
      {
        this.classList.remove("error");
      }
    });
  }  
}

function validateForm() {

    var theForm = document.getElementsByTagName("form")[0];

    var inputElements = theForm.getElementsByClassName("contact-input-text");

    for(var i = 0; i < inputElements.length; i++)
    {

      var el = inputElements[i];
      if(el.value.length == 0)
      {
        
        el.classList.add("error");
      }
      else
      {el.classList.remove("error");}

    }
    // this should normally stop the procedure if an error occurs.
    // by doing theFrom.submit() it continues.
      theForm.submit();
  }