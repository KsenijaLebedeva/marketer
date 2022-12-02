var span = document.getElementsByClassName("start")[0];
var modal = document.getElementsByClassName("modal")[0];
// close start window
span.onclick = function() {
  $(".modal").css("margin-top", "-1000%");
    $("body").css("overflow", "visible");
}


// show start window
$(window).on('load', function() {
    modal.style.display = "block";
    $("body").css("overflow", "hidden");
}); 



// hide anchors links 
$('a[href^="#"]').on('click', function(e) {
    e.preventDefault();

    var target = $(this.hash);
    $('html, body').stop().animate({
        'scrollTop': target.offset().top
    }, 500);
});


// ball animation
$(window).scroll(function() {
  if ($(this).width() >= 1300) {
    if ($(this).scrollTop() >= 4000) {
        $(".circle").animate({
            "top": "+550px"
        }, 4000);
    }
}
    if ($(this).width() < 1300) {
        if ($(this).scrollTop() >= 3000) {
            $(".circle").animate({
                "top": "+460px"
            }, 4000);
        }
    }
    if ($(this).width() < 1035) {
      if ($(this).scrollTop() >= 2000) {
          $(".circle").animate({
              "top": "+280px"
          }, 4000);
      }
  }
  if ($(this).width() < 642) {
    if ($(this).scrollTop() >= 1000) {
        $(".circle").animate({
            "top": "+145px"
        }, 4000);
    }
}

    
});


//when one solution is open, others are hidden
var solutions = $('.solutions');
solutions.on('show.bs.collapse', '.collapse', function() {
    solutions.find('.collapse.show').collapse('hide');
});



//slider 
function sliderbutton1() {
    $("#slide1").prop("checked", true);
}

function sliderbutton2() {
    $("#slide2").prop("checked", true);
}

function sliderbutton3() {
    $("#slide3").prop("checked", true);
}



//form
$(document).ready(function () {
    $("form").submit(function (event) {
      var formData = {
        email: $("#email").val(),
      };
  
      $.ajax({
        type: "POST",
        url: "process.php",
        data: formData,
        dataType: "json",
        encode: true,
      }).done(function (data) {
        console.log(data);


        //add message after submitting the form
        if (!data.success) {
          if (data.errors.email) {
            $(".form-message").html(
              '<span class="error">' + data.errors.email + "</span>"
            );
          }
        } else {
          $(".form-message").html(
            '<span class="success">' + data.message + "</span>"
          );
        }
  
      });
      //do not refresh the page after submitting
      event.preventDefault();
    });
  });
