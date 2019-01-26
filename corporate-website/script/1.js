/* (All) Pre-loader */
$(window).on('load', function () {
    var $preloader = $('#p_prldr'),
        $svg_anm   = $preloader.find('.svg_anm');
    $svg_anm.fadeOut();
    $('body').css('overflow', 'auto');
    $preloader.delay(10).fadeOut(50);
});
/* (Main) Counter */
$('.count').each(function (){
  $(this).prop('Counter', 0).animate({
    Counter:$(this).text()
  },{
    duration: 2000,
    easing: 'swing',
    step:function(now){
      $(this).text(Math.ceil(now));
    }
  });
});
/* (All) Menu */
function blogOpen(){
  window.location.href = 'blog';
}
function blog1Open(){
  window.location.href = 'article';
}
function indexOpen(){
  window.location.href = '/';
}
function faqOpen(){
  window.location.href = 'faq';
}
/* (All) Прокрутка вверх страницы */	
var t;
function up2() {
  var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
  if(top > 0) {
    window.scrollBy(0,-30);
    t = setTimeout('up2()',1);
  } else clearTimeout(t);
  return false;
}
/* (All) Обновление кнопки 'Copy' */
function tocopy(id){
  document.getElementById(id).innerHTML="Copied";
} 
/* (All) Копирование текста */
function copy(id, id2) {   
  window.getSelection().removeAllRanges();
  var Link = document.getElementById(id);  
  var range = document.createRange();  
  range.selectNode(Link);  
  window.getSelection().addRange(range);
window.getSelection().addRange(range);    
  try {  
    var successful = document.execCommand('copy');   
  } catch(err) {  
    console.log('Oops, unable to copy');  
  }
  window.getSelection().removeAllRanges();  
}
/* Очистка полей */
function sendMail(id1, id2, id3) {
  if (true) {
  document.getElementById(id1).value = "";
  document.getElementById(id2).value = "";
  document.getElementById(id3).value = "";
}
}
function sendMail2(id1) {
  if (true) {
  document.getElementById(id1).value = null;
}
}
/* (All) Прокрутка вверх на телефонах без # */
$("[href^='#']").click(function() {
var idtop = $($(this).attr("href")).offset().top;
$('html,body').animate(
    // Time animation
    {scrollTop: idtop}, 1200);
return false;
});
/* (Main) Progress Bar */
var loadTime = 2100;
function checker(){
    if (window.pageYOffset >= loadTime) {
      move();
      loadTime += 9000;
    }
}
function move() {
  var elem = document.getElementById("myBar");
  var elem2 = document.getElementById("myBar2");
  var elem3 = document.getElementById("myBar3");
  var width = 0;
  var id = setInterval(frame, 22);
  var id2 = setInterval(frame2, 22);
  var id3 = setInterval(frame3, 22);
  function frame() {
    if (width >= 80) {

    } else {
      width++; 
      elem.style.width = width + '%';
    }
  }
  function frame2() {
    if (width >= 91) {

    } else {
      width++;     
      elem2.style.width = width + '%';
    }
  }
  function frame3() {
    if (width >= 70) {

    } else {
      width++; 
      elem3.style.width = width + '%';
    }
  }   
}
/* (Blog) Lazy load */
$( document ).ready(function () {
    var i = 2;
    $(".moreBox").slice(0, 2).show();
    if ($(".blogBox:hidden").length != 0) {
      $("#loadMore").show();
      $("#hide").show();
    } 
    $("#loadMore").on('click', function (e) {
      e.preventDefault();
      $(".moreBox:hidden").slice(0, 1).load().slideDown();
      if ($(".moreBox:hidden").length == 0) {
        $("#loadMore").fadeOut('fast');
      }
      if ($(".moreBox:hidden").length > 0) {
        $("#hide").show();
      }
      i += 1;
    });
    $("#hide").on('click', function (e) {
      e.preventDefault();
      $(".moreBox").slice(i-1).slideUp();
      $("#loadMore").show();
      if ($(".moreBox:hidden").length == 3) {
        $("#hide").fadeOut('fast');
      }
      i -= 1;
    });
  });
/* (FAQ) Accordion */
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("acc_active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
/* (Article) Like Button */
function stop(){
  $('#counter').css("display", "none");
}
function handler(e){
  e.target.removeEventListener(e.type, arguments.callee);
  document.getElementById("counter").style.display = "block";
  document.getElementById("counter").classList.add('animation-thx');
  setTimeout(stop, 1500);
}
$(function(){
  $('.like-review').on('click', function(e) {
    if ($('.fa-heart').hasClass('far')) {
      $(this).children('.fa-heart').removeClass('re-animate-like');
      $(this).children('.fa-heart').addClass('animate-like');
      $(this).children('.fa-heart').removeClass('far');
      $(this).children('.fa-heart').addClass('fas');
      localStorage.likeData = 'red';
    } else {
      $(this).children('.fa-heart').removeClass('animate-like');
      $(this).children('.fa-heart').addClass('re-animate-like');
      $(this).children('.fa-heart').removeClass('fas');
      $(this).children('.fa-heart').addClass('far');
      localStorage.clear();
    }
  });
});
window.onload = function(){
  if(localStorage.getItem('likeData')!==null) {
    document.getElementById("heart").classList.remove('far');
    document.getElementById("heart").classList.add('fas');
    document.getElementById("heart").style.color = "#d65c59";
  } else {
    document.getElementById("heart").addEventListener("click", handler);
  }
}
/* (Article) Copy Btn Change Img */
function changeImg() {
  if ( document.getElementById("copyBtn").classList.contains('far') ) {
  document.getElementById("copyBtn").classList.add('fas');
  document.getElementById("copyBtn").classList.remove('far');
  } else {
  document.getElementById("copyBtn").classList.add('far');
  document.getElementById("copyBtn").classList.remove('fas');
  }  
}
/* (Article) Share Buttons */
var getWindowOptions = function() {
  var width = 500;
  var height = 350;
  var left = (window.innerWidth / 2) - (width / 2);
  var top = (window.innerHeight / 2) - (height / 2);

  return [
    'resizable,scrollbars,status',
    'height=' + height,
    'width=' + width,
    'left=' + left,
    'top=' + top,
  ].join();
};
var twitterBtn = document.querySelector('.twitter-share');
var text = encodeURIComponent('Any text you want to!');
var shareUrl = 'https://twitter.com/intent/tweet?url=' + location.href + '&text=' + text;
twitterBtn.href = shareUrl; 

twitterBtn.addEventListener('click', function(e) {
  e.preventDefault();
  var win = window.open(shareUrl, 'ShareOnTwitter', getWindowOptions());
  win.opener = null; 
});

var facebookBtn = document.querySelector('.facebook-share');
var title = encodeURIComponent('Any text you want to!');
var shareUrl2 = 'https://www.facebook.com/sharer/sharer.php?u=' + location.href;
facebookBtn.href = shareUrl2; 

facebookBtn.addEventListener('click', function(e) {
  e.preventDefault();
  var win = window.open(shareUrl2, 'ShareOnFacebook', getWindowOptions());
  win.opener = null; 
});
/* (Soc.Net + About) Back */
function goBack() {
    window.history.back();
}
