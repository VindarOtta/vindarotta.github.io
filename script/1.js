/* (All) Pre-loader */
$(document).ready(function() {
	typeWriter();
  setTimeout(typeLoadWriter, 1210);
});
$(window).on('load', function () {
    var $preloader = $('#p_prldr'),
        $svg_anm   = $preloader.find('.svg_anm');
    $svg_anm.fadeOut();
    $preloader.delay(150).fadeOut(190);
});
/* Тогл кнопка и смена языка */
var toggleNumber, set_lang;

$(function() {
    var dictionary;
    dictionary = {
        "english": {
            "_contact": "Contact",
            "_corporate": "Corporate Website",
            "_ecommerce": "e-Commerce Website",
            "_personal": "Personal Website",
            "_websites": "And I make websites",
        },
        "russian": {
            "_contact": "Написать",
            "_corporate": "Корпоративный сайт",
            "_ecommerce": "Интернет-магазин",
            "_personal": "Личный сайт",
            "_websites": "И я делаю сайты",
        }
    };
    set_lang = function (dictionary) {
        $("[data-translate]").text(function () {
            var key = $(this).data("translate");
            if (dictionary.hasOwnProperty(key)) {
                return dictionary[key];
            }
        });
    };
  document.getElementById('container').addEventListener('click', function() {
    toggleNumber = !toggleNumber;
    if (toggleNumber) {
      document.getElementById('toggle-container').style.clipPath = 'inset(0 0 0 50%)';
      localStorage.langData = 'en';
      set_lang(dictionary.english);
      document.getElementById('gr_one').innerHTML = "<b>Hi, I'm <span>Vindar</span></b>"
      document.getElementById('gr_one').style.fontSize = "35px";
      document.getElementById('gr_one').style.marginBottom = "0px";
      document.getElementById('gr_two').style.fontSize = "22px";
      document.getElementById('gr_two').style.letterSpacing = "0px";
    } else {
      document.getElementById('toggle-container').style.clipPath = 'inset(0 50% 0 0)';
      localStorage.langData = 'ru';
      set_lang(dictionary.russian);
      document.getElementById('gr_one').innerHTML = "<b>Хай, я <span>Виндар</span></b>"
      document.getElementById('gr_one').style.fontSize = "31px";
      document.getElementById('gr_one').style.marginBottom = "2px";
      document.getElementById('gr_two').style.fontSize = "24px";
      document.getElementById('gr_two').style.letterSpacing = "1px";
      document.getElementById('gr_two').style.paddingLeft = "0px";
    }
  });
/* Animations onLoad */
  window.onload = function loadAnim(){ 
  	document.getElementById("gr_line").classList.add('load-anim4');
    if($(window).width() > 800){
  	 document.getElementById("mockup1").classList.add('load-anim5');
  	 document.getElementById("mockup2").classList.add('load-anim6');
  	 document.getElementById("mockup3").classList.add('load-anim7');
    }
   // Запоминание языка
    if(localStorage.getItem('langData') == 'ru') {
      document.getElementById('toggle-container').style.clipPath = 'inset(0 50% 0 0)';
      set_lang(dictionary.russian);
      document.getElementById('gr_one').innerHTML = "<b>Хай, я <span>Виндар</span></b>";
      document.getElementById('gr_one').style.fontSize = "31px";
      document.getElementById('gr_one').style.marginBottom = "2px";
      document.getElementById('gr_two').style.fontSize = "24px";
      document.getElementById('gr_two').style.letterSpacing = "1px";
      document.getElementById('gr_two').style.paddingLeft = "0px";
    } else {
      document.getElementById('toggle-container').style.clipPath = 'inset(0 0 0 50%)';
      toggleNumber = !toggleNumber;
    } 
  	setTimeout(animStop, 500);
  }
}); // ЭТО КОНЕЦ ОГРОМНОЙ ФУНКЦИИ

/* Ссылки */
function linkOpen(url) {
  //window.open(url); в новой вкладке
  window.location.assign(url);
}
/* Easter egg link */
function eggOpen(){
	if(window.matchMedia('(min-width: 800px)').matches) {
 	 	window.open('terminal.html');
	}
}
/* Copy on click */
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
/* 'Copied' sign */
function copied(id){
  document.getElementById(id).classList.add('copy-anim');
  setTimeout(animStop, 1700);
} 
/* Remove animations */
function animStop() {
	document.getElementById("gr_line").classList.remove('load-anim4');
}
/* typing */
var c=0;var t=0;var t1=0;
var vindar = 'Vindar';
var etta = 'etta';
var ovs = 'ovs';
var iezel = 'iezel';
var ar = 'ar';
var vindetta = 'Vindetta';
var vindovs = 'Vindovs';
var vindiezel = 'Vindiezel';
var speed = 200;
var VindarFactor = 0;
var loadVindarFactor = 0;

/* При загрузке */
function typeWriter() {
  if (c < vindar.length) {
    document.getElementById("demo").innerHTML += vindar.charAt(c);
    c++;
    setTimeout(typeWriter, speed);
  }
}
function typeLoadWriter() {
    document.getElementById("demo").classList.add('loadCross');
    document.getElementById("demo").classList.add('after_crossLoad');
    setTimeout(typeCleaner1, 2420);
    t1 = 0;
    if (loadVindarFactor == 0) { 
      setTimeout(typeLoadWriter1, 2490); 
    } else if (loadVindarFactor == 1) { 
      setTimeout(typeLoadWriter2, 2490);
    } else if (loadVindarFactor == 2) {
      setTimeout(typeLoadWriter3, 2490);
    } else if (loadVindarFactor == 3) {
      setTimeout(typeLoadWriter4, 2490);
    }
}
function typeLoadWriter1() {
  if (t1 < vindetta.length) {
    document.getElementById("demo").innerHTML += vindetta.charAt(t1);
    t1++;
    setTimeout(typeLoadWriter1, speed);
  } else {
    typeLoadWriter();
  }
  loadVindarFactor = 1;
}
function typeLoadWriter2() {
  if (t1 < vindovs.length) {
    document.getElementById("demo").innerHTML += vindovs.charAt(t1);
    t1++;
    setTimeout(typeLoadWriter2, speed);
  } else {
    typeLoadWriter();
  }
  loadVindarFactor = 2;
}
function typeLoadWriter3() {
  if (t1 < vindiezel.length) {
    document.getElementById("demo").innerHTML += vindiezel.charAt(t1);
    t1++;
    setTimeout(typeLoadWriter3, speed);
  } else {
    typeLoadWriter();
  }
  loadVindarFactor = 3;
}
function typeLoadWriter4() {
  if (t1 < vindar.length) {
    document.getElementById("demo").innerHTML += vindar.charAt(t1);
    t1++;
    setTimeout(typeLoadWriter4, speed);
  } else {
    typeLoadWriter();
  }
  loadVindarFactor = 0;
}
/* На самой странице */
function typeReWriter() {
  if (VindarFactor != 4) {
  	document.getElementById("ar").classList.add('cross');
  	document.getElementById("ar").classList.add('after_cross');
  	setTimeout(typeCleaner, 1420);
    t = 0;
  	if (VindarFactor == 0) { 
  		setTimeout(typeAfterWriter1, 1490);
  		document.getElementById("imgBtn").style.pointerEvents = 'none';
  		setTimeout(nonClick, 2300);	
  	} else if (VindarFactor == 1) { 
  		setTimeout(typeAfterWriter2, 1490);
  		document.getElementById("imgBtn").style.pointerEvents = 'none';
  		setTimeout(nonClick, 2100);
  	} else if (VindarFactor == 2) {
  		setTimeout(typeAfterWriter3, 1490);
  		document.getElementById("imgBtn").style.pointerEvents = 'none';
  		setTimeout(nonClick, 2600);
  	} else if (VindarFactor == 3) {
  		setTimeout(typeAfterWriter4, 1490);
  		document.getElementById("imgBtn").style.pointerEvents = 'none';
  		setTimeout(nonClick, 2000);
  	}
  } else {
  	window.scroll(0, 250);
  	setTimeout(afterScroll, 1);
  }
}
function typeAfterWriter1() {
  if (t < etta.length) {
    document.getElementById("ar").innerHTML += etta.charAt(t);
    t++;
    setTimeout(typeAfterWriter1, speed);
  }
  VindarFactor = 1;
}
function typeAfterWriter2() {
  if (t < ovs.length) {
    document.getElementById("ar").innerHTML += ovs.charAt(t);
    t++;
    setTimeout(typeAfterWriter2, speed);
  }
  VindarFactor = 2;
}
function typeAfterWriter3() {
  if (t < iezel.length) {
    document.getElementById("ar").innerHTML += iezel.charAt(t);
    t++;
    setTimeout(typeAfterWriter3, speed);
  }
  VindarFactor = 3;
}
function typeAfterWriter4() {
  if (t < ar.length) {
    document.getElementById("ar").innerHTML += ar.charAt(t);
    t++;
    setTimeout(typeAfterWriter4, speed);
  }
  VindarFactor = 0;
}
/* Клинеры */
function nonClick() {
	document.getElementById("imgBtn").style.pointerEvents = 'auto';
}	
function typeCleaner() {
  document.getElementById("ar").innerHTML = "";
  document.getElementById("ar").classList.remove('cross');
  document.getElementById("ar").classList.remove('after_cross');
}
function typeCleaner1() {
  document.getElementById("demo").innerHTML = "";
  document.getElementById("demo").classList.remove('loadCross');
  document.getElementById("demo").classList.remove('after_crossLoad');
}
/* Скролл вверх, как у телеграма */
var j;
function toTop() {
  if (window.pageYOffset >= 800) {
    window.scroll(0, 200);
    setTimeout(afterScroll, 1);
  } else {
    setTimeout(afterScroll, 1);
  }
}
function afterScroll() {
  var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
  if(top > 0) {
    window.scrollBy(0, -6);
    j = setTimeout('afterScroll()', 1);
  } else clearTimeout(j);
  return false;
}
/* Reverse sticky кнопка наверх */
var scrolled;
var lastScrollTop = 0;
var arrowTop = document.getElementById('arrowTop');

// Касание на мобилках при скролле
arrowTop.addEventListener('touchstart', toTop); 

$(window).scroll(function(event){
    scrolled = true;
});
setInterval(function() {
    if (scrolled) {
        hasScrolled();
        scrolled = false;
    }
}, 100);

function hasScrolled() {
  var check = $(this).scrollTop();
  // появление стрелки при касании дна сайта
  /* if($(window).scrollTop() + $(window).height() > $(document).height() - 10) {
    $(arrowTop).css({"top": "20px"});
  } else */
  // появление при скролле вверх
  if (window.pageYOffset >= 300) {    
    if(Math.abs(lastScrollTop - check) <= 5)
        return;    
    if (check > lastScrollTop && check > 40){
        // Scroll Down
        $(arrowTop).css({"top": "-50px", "transition": "top 0.15s ease-in"});
    } else {
        // Scroll Up
        if(check + $(window).height() < $(document).height()) {
            $(arrowTop).css({"top": "30px", "transition": "top 0.3s ease"});
        }
      } 
  } else {
    $(arrowTop).css({"top": "-50px", "transition": "top 0.15s ease-in"});
  }   
  lastScrollTop = check;
}
