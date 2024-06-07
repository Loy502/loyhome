//팝업 자동 띄우기	https://tyson.tistory.com/90 참고
jQuery(document).ready(function() {
	$('.').show();
});

//Esc로 팝업창을 닫기
window.onkeyup = function(e) {
	var key = e.keyCode ? e.keyCode : e.which;

	if(key == 27) {
		$("#popup_bg").fadeOut(90);
		$("body").css({overflow:''}).unbind('popup_bg');
	}
}

/* 외부영역 클릭시 팝업 닫기 
$(document).mouseup(function (e){
	if($("#popup_bg").has(e.target).length === 0){
		$("#popup_bg").hide();
	}
}); */

//팝업 닫기
popup_bg.querySelector('.close').addEventListener('click', function() {
	popup_bg.style.display = 'none';
});



//오늘 하루 보지 않기	https://slyeee.tistory.com/30 참고
$( document ).ready(function() {
	cookiedata = document.cookie;

if ( cookiedata.indexOf("ncookie=done") < 0 ){
	document.getElementById('popup_bg').style.display = "inlineblock";
$("#wrap").prepend('<div id="dimm-cookie" onclick="dimm_close();" class="black" />');
	} else {
	document.getElementById('popup_bg').style.display = "none";
}
});

function setCookie( name, value, expiredays ) { 
	var todayDate = new Date();
todayDate.setDate( todayDate.getDate() + expiredays );
document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";"
}

function closeWin() {
	document.getElementById('popup_bg').style.display = "none";
$("#dimm-cookie").remove();
}

function todaycloseWin() {
	setCookie("ncookie", "done", 1);
document.getElementById('popup_bg').style.display = "none";
$("#dimm-cookie").remove();
}

function dimm_close() {
	$("#dimm-cookie").remove();
document.getElementById('popup_bg').style.display = "none";
}