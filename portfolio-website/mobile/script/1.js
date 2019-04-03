 /* (All) Pre-loader */
 $(window).on('load', function () {
    var $preloader = $('#p_prldr'),
        $svg_anm   = $preloader.find('.svg_anm');
    $svg_anm.fadeOut();
    $preloader.delay(150).fadeOut(190);
});
 /* onload */
window.onload = function() {
	// Upload mobile version
	if (window.innerWidth > 1050) {	
  		if (window.location.href != "../index.html") {	
  			window.location.href = "../index.html";
  		}	
  	}
  	// Trigger lazy load
  	window.scrollBy(0, 1);
  	/// Открытие последней вкладки при загрузке
	if(localStorage.getItem('tabData') != null){
		document.getElementById(localStorage.getItem('tabData')).click();
	} else {
		document.getElementById('Illustration').click();
	}
	// Активная полоска в меню 
  	document.getElementById('white_line').style.width = "87px";	
}
/* Upload mobile version */
window.onresize = function(){
	if (window.innerWidth > 1050) {
		if (window.location.href != "../index.html") {	
  			window.location.href = "../index.html";
  		}	
  	}
}
/* Menu */
var navPar = 0;
document.getElementById('nav-container').addEventListener("click", function(){
	if (navPar == 0) {
		document.getElementById('menu').style.display = "block";
		setTimeout(sidebarOpenAnimation, 10);
		document.getElementById('nav-icon').style.opacity = "0";
		navPar = 1;
	}
});
document.getElementById('nav-close').addEventListener("click", function(){
	if (navPar == 1) {
		document.getElementById('menu').style.right = "-195px";
		setTimeout(sidebarCloseAnimation, 300);
		navPar = 0;
	}
});	
function sidebarOpenAnimation() {
	document.getElementById('menu').style.right = "0px";
}
function sidebarCloseAnimation() {
	document.getElementById('menu').style.display = "none";
	document.getElementById('nav-icon').style.opacity = "1";
}	
/* Доп способы закрыть меню */
$(document).on('keydown', function(e){
    if(e.keyCode === 27 && navPar == 1) { // ESC
        $('#menu').css({"right": "-195px"});
        setTimeout(sidebarCloseAnimation, 300);
        navPar = 0;
    }
});
$(document).mouseup(function (e) {
   	if (!$('#menu').is(e.target) && !$('.text').is(e.target) && !$('.list').is(e.target) && navPar == 1) {
   		$('#menu').css({"right": "-195px"});
        setTimeout(sidebarCloseAnimation, 300);
        navPar = 0;
  	}
});
/* Открытие ссылок при клике */
function linkOpen(url) {
  window.open(url);
}
/* Открытие вкладок */
function openTab(evt, tabName) {
	// Смена красного цвета текста 
	tab = document.getElementsByClassName("tab");
  	for (i = 0; i < tab.length; i++) {
    	tab[i].className = tab[i].className.replace(" active", "");
  	} 
	document.getElementById(tabName).className += " active";
	// Бегающая линия
	var line = document.getElementById("tabLine");	
  	if (tabName == "Illustration") {
  			line.style.left = "8%";
  	} else if (tabName == "Animation") {
		if (window.innerWidth > 400) {
			line.style.left = "calc(8% + 100px)";
		} else if (window.innerWidth <= 400 && window.innerWidth > 310) {
			line.style.left = "calc(8% + 85px)";
		} else if (window.innerWidth <= 310) {
			line.style.left = "calc(8% + 67px)";
		}
  	} else {
		if (window.innerWidth > 400) {
			line.style.left = "calc(8% + 200px)";
		} else if (window.innerWidth <= 400 && window.innerWidth > 310) {
			line.style.left = "calc(8% + 170px)";
		} else if (window.innerWidth <= 310) {
			line.style.left = "calc(8% + 134px)";
		}
  	}
  	// Убирать другие вкладки
  	var i, tabcontent, tab;
  	tabcontent = document.getElementsByClassName("row");
  	for (i = 0; i < tabcontent.length; i++) {
    	tabcontent[i].style.display = "none";
  	}
  	// Открыть выбранную вкладку
  	document.getElementById(tabName + "Content").style.display = "flex";
  	// Сохранение вкладки при перезагрузке
  	localStorage.tabData = tabName + "Open";
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