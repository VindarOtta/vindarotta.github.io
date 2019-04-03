 /* (All) Pre-loader */
$(document).ready(function () {

});
$(window).on('load', function () {
    var $preloader = $('#p_prldr'),
        $svg_anm   = $preloader.find('.svg_anm');
    $svg_anm.fadeOut();
    $preloader.delay(150).fadeOut(190);
});
/* Upload mobile version */
window.onresize = function(){
	if (window.innerWidth <= 1050) {
		if (window.location.href != "mobile/index.html") {	
  			window.location.href = "mobile/index.html";
  		}	
  	} /*else {
  		if (window.location.href == "mobile/index.html") {
  			window.location.href = "../index.html";
  		}
  	}*/	
}
/* Load animations */
window.onload = function() {
	// Upload mobile version
	if (window.innerWidth <= 1050) {	
  		if (window.location.href != "mobile/index.html") {	
  			window.location.href = "mobile/index.html";
  		}	
  	}	
  	document.getElementById('Hi').classList.add('Hi-load');
  	document.getElementById('London').classList.add('London-load');
  	document.getElementById('Contact').classList.add('Contact-load');
  	document.getElementById('Arrow').classList.add('Arrow-load');
  	document.getElementById('Tumblr').classList.add('Tumblr-load');
  	document.getElementById('Behance').classList.add('Behance-load');
  	document.getElementById('Insta').classList.add('Insta-load');
  	document.getElementById('num1').classList.add('num1-load');
  	document.getElementById('num2').classList.add('num2-load');
  	document.getElementById('num3').classList.add('num3-load');
  	document.getElementById('line1').classList.add('line1-load');
  	document.getElementById('line2').classList.add('line2-load');
  	document.getElementById('line3').classList.add('line3-load');
  	//document.getElementById('Arrow').classList.add('Arrow-load');
  	/* Прятать меню над драконом */
  	if (window.pageYOffset >= 100 && window.pageYOffset < 850) {
		document.getElementById('hide').style.opacity = "0";
	} else {
		document.getElementById('hide').style.opacity = "1";
	}
	/* Параметры меню при загрузке */
  	if (window.pageYOffset < 600) {
  		document.getElementById('redOne').classList.add('redOne-load');
  		document.getElementById('redTwo').style.width = "0px";
  	} else if (window.pageYOffset >= 600) {
		document.getElementById('redTwo').classList.add('redTwo-load');
		document.getElementById('redOne').style.width = "0px";
		// Trigger lazy load
		window.scrollBy(0, -1);
	}
	/* Загрузка последнего открытого таба */
	if(localStorage.getItem('tabData') != null){
		document.getElementById(localStorage.getItem('tabData')).click();
	} else {
		document.getElementById('IllustrationOpen').click();
	}	
	/* Очистка анимаций */	
  	setTimeout(animStop, 910);
 }
 function animStop() {
	document.getElementById('Hi').classList.remove('Hi-load');
  	document.getElementById('London').classList.remove('London-load');
  	document.getElementById('Contact').classList.remove('Contact-load');
  	document.getElementById('Arrow').classList.remove('Arrow-load');
  	document.getElementById('Tumblr').classList.remove('Tumblr-load');
  	document.getElementById('Behance').classList.remove('Behance-load');
  	document.getElementById('Insta').classList.remove('Insta-load');
  	document.getElementById('num1').classList.remove('num1-load');
  	document.getElementById('num2').classList.remove('num2-load');
  	document.getElementById('num3').classList.remove('num3-load');
  	document.getElementById('line1').classList.remove('line1-load');
  	document.getElementById('line2').classList.remove('line2-load');
  	document.getElementById('line3').classList.remove('line3-load');
  	//document.getElementById('Arrow').classList.remove('Arrow-load');
  	document.getElementById('redOne').classList.remove('redOne-load');
  	document.getElementById('redTwo').classList.remove('redTwo-load');
}
/* Скролл между секциями */
$(window).on('mousewheel', function (e) {
	var lastScrollTop = $(this).scrollTop(); // текущий скролл
	var div1y = $('#one').offset().top;
	var div2y = $('#two').offset().top;
	var scrollDirection;

	if ( e.deltaY > 0 ) {
   		scrollDirection = 'up';
  	} else if ( e.deltaY <= 0 ) {
   	 	scrollDirection = 'down';
  	}

	if(lastScrollTop >= div1y && lastScrollTop <= div2y - 20 && scrollDirection == 'down'){
		var speed = 1; // У меня уже есть параметр scroll-behaviour, поэтому здесь speed = задержка
		var targetElement = $('#two');
		$('html, body').stop().animate(
    	{ scrollTop: targetElement.offset().top }, // move window so target element is at top of window
    	speed,
    	'swing'
 		);
	} else if(lastScrollTop < div2y - 1 && scrollDirection == 'up') {
		var speed = 1; // У меня уже есть параметр scroll-behaviour, поэтому здесь speed = задержка
		var targetElement = $('#one');
		$('html, body').stop().animate(
    	{ scrollTop: targetElement.offset().top },
    	speed,
    	'swing'
 		);
	}
});	
/* Исчезновение элементов при скролле + переходы меню */
window.onscroll = function() {
	// исчезновение элементов
	if (window.pageYOffset > 55) {   
		document.getElementById('Arrow').style.opacity = "0";
  		setTimeout(displayNone, 100);
	} else if (window.pageYOffset <= 20) {
  		setTimeout(displayBlock, 110);
  		setTimeout(opacityOne, 120);
	}
	// переходы меню
	if (window.pageYOffset >= window.innerHeight / 1.44) { // при высоте 1080 это 750
		document.getElementById('redTwo').style.width = "111px";
		document.getElementById('redOne').style.width = "0px";
	} else if (window.pageYOffset < window.innerHeight / 1.44) {
		document.getElementById('redOne').style.width = "105px";
		document.getElementById('redTwo').style.width = "0px";
	}
	if (window.pageYOffset >= window.innerHeight / 10.8 && window.pageYOffset <= window.innerHeight / 1.25) { // при высоте 1080 это 100 и 865
		document.getElementById('hide').style.opacity = "0";
	} else {
		document.getElementById('hide').style.opacity = "1";
	}
}
// исчезновение элементов
function displayNone() {
	document.getElementById('Arrow').style.display = "none";
}
function displayBlock() {
	document.getElementById('Arrow').style.display = "block";
}
function opacityOne() {
	document.getElementById('Arrow').style.opacity = "1";
}  	
/* Открытие ссылок при клике */
function linkOpen(url) {
  window.open(url);
}
/* Прокрутка вниз */
window.scrollTo({
    behavior: "smooth"
});
/*function anchor() {
	if(window.pageYOffset < 1020){
  		window.scrollBy(0, 10);
  		setTimeout(anchor, 1);
  	}
}*/
function anchor(i) {
	window.scrollTo(0, i)
}
/* Копирование при нажатии */
function copy(id) {   
  window.getSelection().removeAllRanges();
  var Link = document.getElementById(id);  
  var range = document.createRange();  
  range.selectNode(Link);  
  window.getSelection().addRange(range);  
  try {  
    var successful = document.execCommand('copy');   
  } catch(err) {  
    console.log('Oops, unable to copy');  
  }
  window.getSelection().removeAllRanges();  
}
/* Lazy IMG load https://css-tricks.com/the-complete-guide-to-lazy-loading-images/ */
document.addEventListener("DOMContentLoaded", function() {
  var lazyloadImages = document.querySelectorAll("img.lazy");    
  var lazyloadThrottleTimeout;
  
function lazyload() {
    if(lazyloadThrottleTimeout) {
      clearTimeout(lazyloadThrottleTimeout);
    }    
    
    lazyloadThrottleTimeout = setTimeout(function() {
        var scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function(img) {
            if(img.offsetTop < (window.innerHeight + scrollTop)) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
            }
        });
        if(lazyloadImages.length == 0) { 
          document.removeEventListener("scroll", lazyload);
        }
    }, 20);
  }
  document.addEventListener("scroll", lazyload);
  window.addEventListener("resize", lazyload);
  window.addEventListener("orientationChange", lazyload);
});
/* Enlarge IMG on click */
function modalImg(id){
  var modal = document.getElementById('myModal');
  var img = document.getElementById(id);
  var modalImg = document.getElementById("myImg");
  // var captionText = document.getElementById("caption");

  modal.style.display = "block";
  modalImg.src = img.src;
  // captionText.innerHTML = img.alt;

  var span = document.getElementsByClassName("close")[0];
  // Закрыть, когда клик
  document.onclick = function(e){
    if(e.target.id !== id){
       modal.style.display = "none";
    }	
  };
  // Закрыть при нажатии на ESC
  document.addEventListener('keydown', function(event) {
    const key = event.key; // const {key} = event; 
    if (key === "Escape") {
        modal.style.display = "none";
    }
  });
/*span.onclick = function closeCross() { 
    modal.style.display = "none";
  } */
}
/* Tabs (w3schools) */
function openTab(evt, tabName) {
  var i, tabcontent, tab;
  tabcontent = document.getElementsByClassName("row");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tab = document.getElementsByClassName("tab");
  for (i = 0; i < tab.length; i++) {
    tab[i].className = tab[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "flex";
  evt.currentTarget.className += " active";
  localStorage.tabData = tabName + "Open";
}
