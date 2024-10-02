$(function () {
  $(document).scroll(function () {
    var $nav = $(".sticky-outer-wrapper");
    $nav.toggleClass('sticky-nav-active', $(this).scrollTop() > $nav.height());
  });
});
const dropdownBtn = document.querySelectorAll(".dropdown-btn");
const hamburgerCloseBtn = document.querySelector(".reusecore-drawer__close");

const dropdown = document.querySelectorAll(".dropdown");
const hamburgerBtn = document.getElementById("hamburger");
const navMenu = document.querySelector(".menu");
const links = document.querySelectorAll(".dropdown a");

function setAriaExpandedFalse() {
  dropdownBtn.forEach((btn) => btn.setAttribute("aria-expanded", "false"));
}

function closeDropdownMenu() {
  dropdown.forEach((drop) => {
    drop.classList.remove("active");
    drop.addEventListener("click", (e) => e.stopPropagation());
  });
}


function toggleHamburger() {
   
    document.querySelector('.drawer').removeAttribute('style');
  //navMenu.classList.toggle("show");
}

dropdownBtn.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const dropdownIndex = e.currentTarget.dataset.dropdown;
    const dropdownElement = document.getElementById(dropdownIndex);

    dropdownElement.classList.toggle("active");
    dropdown.forEach((drop) => {
      if (drop.id !== btn.dataset["dropdown"]) {
        drop.classList.remove("active");
      }
    });
    e.stopPropagation();
    btn.setAttribute(
      "aria-expanded",
      btn.getAttribute("aria-expanded") === "false" ? "true" : "false"
    );
  });
});

// close dropdown menu when the dropdown links are clicked
links.forEach((link) =>
  link.addEventListener("click", () => {
    closeDropdownMenu();
    setAriaExpandedFalse();
    //toggleHamburger();
  })
);

// close dropdown menu when you click on the document body
document.documentElement.addEventListener("click", () => {
  closeDropdownMenu();
  setAriaExpandedFalse();
});

// close dropdown when the escape key is pressed
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeDropdownMenu();
    setAriaExpandedFalse();
  }
});

// toggle hamburger menu
hamburgerBtn.addEventListener("click", toggleHamburger);
hamburgerCloseBtn.addEventListener("click", function(){
    document.querySelector('.drawer').style.display = 'none';
});
////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

$(document).ready(function() {
  var timer;//will be interval timer
var transition_time = 1000; // 1 second
var time_between_slides = 4000; // 4 seconds
var counter = 1; //use to set slide ids
  var numslides = $("#carousel-container div").length;
  
  var current = $("#carousel-container div[aria-hidden='false']");
  $("#carousel-container").attr("aria-label","You are navigating a sliding carousel, you are at slide "+counter+" of "+numslides+ " carousel.");
  const dots = $('.app-containers-Carousel-carousel__dot--Zd7ra');
  autoPlay = "on";

//Add ids to all carousel items
$("#carousel-container div").each(function (){
  $(this).attr("id","slide"+counter);
  $(this).attr("data-slidenumber",counter);
  counter++;
  });
      $(window).on('load', function(){
          console.log("Page loaded - AutoPlay Value is: "+autoPlay);
          if(autoPlay == "on"){
              if(!timer){
                  timer=setInterval(function(){shownext(numslides);},time_between_slides); // every 4 secs next slide
              }
          }
      });  
      
      dots.each(function (item, index) {
        //  item++;
          var f = 'slide'+counter;
          $(this).click( function() {
              console.log(item)
              showSingle(item); 
          })
         
          $(this).attr("id", 'carousel-homepage-option'+counter);
         //counter++;
      })
      
      //Function to show the next slide

// add keyboard accessibility for all buttons, enter makes it click...
$("button").keypress(function(ev) {
  if (ev.which ==13)  {
       $(this).click();
        ev.preventDefault(); 
        return (false);
       }
});

$("button#go").click(function(){

console.log("Play Button pressed, turning autoplay on - AutoPlay Value is:"+autoPlay);
if(autoPlay == "on"){
  timer= window.clearInterval(timer);
  autoPlay = "off";
  //$("#go").text("Play");
      $("#go").html(' <img alt="" role="presentation" src="images/16824a607db2752105ad.svg">')
}
else if(autoPlay == "off"){
  if(!timer){
  timer=window.setInterval(function(){shownext(numslides);},time_between_slides);
  autoPlay = "on";
  //$("#go").text("Pause");
      $("#go").html(' <img alt="" role="presentation" src="images/269d61205ffd47a2ed46.svg">')
  }
}	
});



});

function shownext(numslides){
var current = $("#carousel-container div[aria-hidden='false']");
  var currentDot = $(".app-containers-Carousel-carousel__dot--Zd7ra[aria-hidden='false']");
  var slideBack = $(".app-components-CrossfadeImage-crossfadeimage__fader--aXX5X[aria-hidden='false']");
  var next1 = currentDot.next("button");
var next = current.next("div");
  var next2 = slideBack.next("div");

if(next.length)
{
  current = next;
      currentDot = next1;
      slideBack = next2
     
      $(slideBack).attr("aria-hidden","false");
  $(slideBack).removeClass("hidden");
      $(slideBack).siblings(".app-components-CrossfadeImage-crossfadeimage__fader--aXX5X").attr("aria-hidden","true");
  $(current).siblings(".app-components-CrossfadeImage-crossfadeimage__fader--aXX5X").addClass("hidden");
       
      $(currentDot).attr("aria-hidden","false");
  $(currentDot).removeClass("app-containers-Carousel-carousel__active--F2DLc");
      $(currentDot).html('<img alt="" role="presentation"  src="images/55ffc2fbf44c4c00c360.svg">')
     
      
  $(currentDot).siblings('button').attr("aria-hidden","true");
  $(currentDot).siblings(".app-containers-Carousel-carousel__dot--Zd7ra").addClass("app-containers-Carousel-carousel__active--F2DLc");
      $(currentDot).siblings(".app-containers-Carousel-carousel__dot--Zd7ra").html('<img alt="" role="presentation"  src="images/4cdb620f13093dcffa1e.svg">')

  $(current).attr("aria-hidden","false");
  $(current).removeClass("hidden");
  $(current).siblings("#carousel-container div").attr("aria-hidden","true");
  $(current).siblings("#carousel-container div").addClass("hidden");
}
else
{
      currentDot = $(".app-containers-Carousel-carousel__dot--Zd7ra:first");
  $(currentDot).attr("aria-hidden","false");
      $(currentDot).html('<img alt="" role="presentation"  src="images/55ffc2fbf44c4c00c360.svg">')
  $(currentDot).removeClass("app-containers-Carousel-carousel__active--F2DLc");
  $(currentDot).siblings(".app-containers-Carousel-carousel__dot--Zd7ra").addClass("app-containers-Carousel-carousel__active--F2DLc");
      $(currentDot).siblings(".app-containers-Carousel-carousel__dot--Zd7ra").html('<img alt="" role="presentation"  src="images/4cdb620f13093dcffa1e.svg">')

  current = $("#carousel-container div:first");
  $(current).attr("aria-hidden","false");
  $(current).removeClass("hidden");
  $(current).siblings("#carousel-container div").attr("aria-hidden","true");
  $(current).siblings("#carousel-container div").addClass("hidden");


      slideBack = $(".app-components-CrossfadeImage-crossfadeimage__fader--aXX5X:first");
  $(slideBack).attr("aria-hidden","false");
  $(slideBack).removeClass("hidden");
  $(slideBack).siblings(".app-components-CrossfadeImage-crossfadeimage__fader--aXX5X").attr("aria-hidden","true");
  $(slideBack).siblings(".app-components-CrossfadeImage-crossfadeimage__fader--aXX5X").addClass("hidden");
}
  $("#carousel-container").attr("aria-label","You are navigating a sliding carousel, you are at slide "+current.attr('data-slidenumber')+" of "+numslides+ " carousel.");

}


function showSingle(numberslide) {
  var nos = $("#carousel-container div") 
  var dos = $(".app-containers-Carousel-carousel__dot--Zd7ra") 
  var sos = $(".app-components-CrossfadeImage-crossfadeimage__fader--aXX5X") 
  console.log(nos[numberslide]);
  var ms = nos[numberslide];
  var ds = dos[numberslide];
  var ss = sos[numberslide];
     $(ms).attr("aria-hidden","false");
  $(ms).removeClass("hidden");
  $(ms).siblings("#carousel-container div").attr("aria-hidden","true");
  $(ms).siblings("#carousel-container div").addClass("hidden");

      $(ss).attr("aria-hidden","false");
  $(ss).removeClass("hidden");
  $(ss).siblings(".app-components-CrossfadeImage-crossfadeimage__fader--aXX5X").attr("aria-hidden","true");
  $(ss).siblings(".app-components-CrossfadeImage-crossfadeimage__fader--aXX5X").addClass("hidden");

      $(ds).attr("aria-hidden","false");
      $(ds).html('<img alt="" role="presentation"  src="images/55ffc2fbf44c4c00c360.svg">')
  $(ds).removeClass("app-containers-Carousel-carousel__active--F2DLc");
  $(ds).siblings(".app-containers-Carousel-carousel__dot--Zd7ra").addClass("app-containers-Carousel-carousel__active--F2DLc");
      $(ds).siblings(".app-containers-Carousel-carousel__dot--Zd7ra").html('<img alt="" role="presentation"  src="images/4cdb620f13093dcffa1e.svg">')
  

}



///////////////////////////////////////


/////////////////////////////////
let faqs = document.querySelectorAll(".faq");

      faqs.forEach((faq) => {
        const header = faq.querySelector("header");
        const content = faq.querySelector(".content");

        const contentHeight = content.children[0].offsetHeight;

        let isOpen = false;

        header.onclick = () => {
        
          if (isOpen) {
            content.style.height = "0px";
            faq.classList.remove("active");
            isOpen = false;
          } else {
            content.style.height = `${contentHeight}px`;
            faq.classList.add("active");
            isOpen = true;
          }
        };
      });
      ////////////////////////////////
      $(document).ready(function() {
   $('#parcelbtn').click(function(e) {
   e.preventDefault();
   $('#parcel').removeClass('hidden')
   $('#vehicle').addClass('hidden')
  $('#parcelform').get(0).reset();
  $('#vehicleform').get(0).reset();
  $('.nigeria1').addClass('hidden');
  $('.other1').addClass('hidden')
  //$('#vehicleform').reset();
   });
   $('#vehiclebtn').click(function(e) {
    e.preventDefault();
    $('#vehicle').removeClass('hidden')
    $('#parcel').addClass('hidden')
   // $('#parcelform').reset();
   $('#parcelform').get(0).reset();
  $('#vehicleform').get(0).reset();
  $('.nigeria').addClass('hidden');
  $('.other').addClass('hidden')
    });

        var fligt_class = $('input[name="flight-class"]:checked').val();

var selectcountry = $('.selectcountry');
selectcountry.change(function() {

  
  if(selectcountry.val() == 'Nigeria'){
    $('.nigeria').removeClass('hidden')
    $('.other').addClass('hidden')
  } else {
$('.nigeria').addClass('hidden')
$('.other').removeClass('hidden')
  }
})

var selectcountry1 = $('.selectcountry1');
selectcountry1.change(function() {

  
  if(selectcountry1.val() == 'Nigeria'){
    $('.nigeria1').removeClass('hidden')
    $('.other1').addClass('hidden')
  } else {
$('.nigeria1').addClass('hidden')
$('.other1').removeClass('hidden')
  }
})
var selectcountryfrom = $('.selectcountryfrom');
selectcountryfrom.change(function() {
  if(selectcountry.val() == selectcountryfrom.val() ) {
     alert('Sorry! You can not select '+selectcountryfrom.val()+' again.')
     selectcountryfrom.prop('selectedIndex', 0)
  }
})
var selectcountryfrom1 = $('.selectcountryfrom1');
selectcountryfrom1.change(function() {
  if(selectcountry.val() == selectcountryfrom1.val() ) {
     alert('Sorry! You can not select '+selectcountryfrom1.val()+' again.')
     selectcountryfrom1.prop('selectedIndex', 0)
  }
})
var selectcountryfrom2 = $('.selectcountryfrom2');
selectcountryfrom2.change(function() {
  if(selectcountry1.val() == selectcountryfrom2.val() ) {
     alert('Sorry! You can not select '+selectcountryfrom2.val()+' again.')
     selectcountryfrom2.prop('selectedIndex', 0)
  }
})
var selectcountryfrom3 = $('.selectcountryfrom3');
selectcountryfrom3.change(function() {
  if(selectcountry1.val() == selectcountryfrom3.val() ) {
     alert('Sorry! You can not select '+selectcountryfrom3.val()+' again.')
     selectcountryfrom3.prop('selectedIndex', 0)
  }
})

var deliveryto = $('.deliveryto');
deliveryto.change(function() {
 
  if(deliveryto.val() == 'Nigeria'){
    $('.deliverynigeria').removeClass('hidden')
    $('.deliveryother').addClass('hidden')
  } else {
$('.deliverynigeria').addClass('hidden')
$('.deliveryother').removeClass('hidden')
  }
})

var pick_up = $('.pick-up-country');
pick_up.change(function() {
 
  if(pick_up.val() == 'Nigeria'){
    $('.collectionnigeria').removeClass('hidden')
    $('.collectionother').addClass('hidden')
  } else {
$('.collectionnigeria').addClass('hidden')
$('.collectionother').removeClass('hidden')
  }
})
$('input[name="collection"]').click(function() {
  var collection = $('input[name="collection"]:checked').val();
  if(collection == 'yes'){
    $('.confirmcollection').removeClass('hidden')
  
  } else {
$('.confirmcollection').addClass('hidden')

  }
})

$('#vehicleform').submit(function(e) {
	e.preventDefault()
	window.location = 'thank-you.html';
})
$('#parcelform').submit(function(e) {
	e.preventDefault()
	window.location = 'thank-you.html';
})


/////////////////////////////////////
var maxGroup = 4;
	
	$(".addMore").click(function() {
		if($('body').find('.fieldGroup').length < maxGroup) {
			
			var fieldHTML = '<div class="fieldGroup">'+$('.fieldGroupCopy').html()+'</div>';
			
			$('body').find('.fieldGroupCopy:last').after(fieldHTML)
			var departdate1 = $('input[name="departdate[]"]');
			console.log(departdate1)
			departdate1.daterangepicker({
				singleDatePicker:true,
				//showDropdowns: true,
				autoApply: true,
				minDate: new Date(),
			});
		} else {
			$(".addMore").attr('disabled', true);
		}
	});
	$('body').on("click", ".removed", function() {
		$(this).parents(".fieldGroup").remove();
		$(".addMore").removeAttr('disabled');
	});


  $('#someone').click(function() {
    var t = $('input[name="someone"]:checked').val();
  if(t == 'yes') {
  $('#shipper').removeClass("hidden");

  
  } else {
    $('#shipper').addClass("hidden");
  }
 
  
})
var returndate = $('#pickupdate');
	returndate.daterangepicker({
		singleDatePicker:true,
		//showDropdowns: true,
		autoApply: true,
		minDate: new Date(),
	});
  var returndate = $('#preferreddate');
	returndate.daterangepicker({
		singleDatePicker:true,
		//showDropdowns: true,
		autoApply: true,
		minDate: new Date(),
	});
  var returndate = $('#collectiondate');
	returndate.daterangepicker({
		singleDatePicker:true,
		//showDropdowns: true,
		autoApply: true,
		minDate: new Date(),
	});
  var returndate = $('#collectdate');
	returndate.daterangepicker({
		singleDatePicker:true,
		//showDropdowns: true,
		autoApply: true,
		minDate: new Date(),
	});

      })