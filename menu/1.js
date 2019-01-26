window.onload = function loadAnim(){ 
	document.getElementById("first").classList.add('load-anim2');
	document.getElementById("second").classList.add('load-anim3');
	document.getElementById("third").classList.add('load-anim1');
	setTimeout(animStop, 350);
}
function animStop() {
	document.getElementById("first").classList.remove('load-anim2');
	document.getElementById("second").classList.remove('load-anim3');
	document.getElementById("third").classList.remove('load-anim1');
}

$(document).ready(function(){
	$('#nav-icon').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    $('#nav-icon').toggleClass('open');
    $('#sidebar').toggleClass('active');
    if($('#nav-icon span').hasClass('whiteLine')){
    	$('#nav-icon span').addClass('blackLine');
    	$('#nav-icon span').removeClass('whiteLine');
    } else {
    	$('#nav-icon span').addClass('whiteLine');
    	$('#nav-icon span').removeClass('blackLine');
    }	

    $(document).one('click', function closeMenu(e){
        if($('#sidebar').has(e.target).length === 0){
            $('#sidebar').removeClass('active');
            $('#nav-icon').removeClass('open');
        } else {
            $(document).one('click', closeMenu);
        }
    });
});
$(document).on('keydown', function(e){
        if(e.keyCode === 27){ // ESC
            $('#sidebar').removeClass('active');
            $('#nav-icon').removeClass('open');
        }
    });
});
