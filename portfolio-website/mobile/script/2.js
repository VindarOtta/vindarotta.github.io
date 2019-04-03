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
  		if (window.location.href != "../") {	
  			window.location.href = "../";
  		}	
  	}
  // Активная полоска в меню 
  document.getElementById('white_line2').style.width = "65px"; 
}
/* Upload mobile version */
window.onresize = function(){
  if (window.innerWidth > 1050) {
    if (window.location.href != "../") {  
        window.location.href = "../";
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
