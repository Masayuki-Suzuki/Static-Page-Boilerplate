/*======================================================================*/
/*																		*/
/*		�y�A�R�[�f�B�I�����j���[���ʉ�js�z								*/
/*																		*/
/*		acmenu.css��acmenu.js�i��js�j���ꏏ�ɑg�ݍ���ł�������			*/
/*		������css���ɋL�ڂ���Ă��铯���̃N���X�����L�q���邾���ł�		*/
/*																		*/
/*		AC_contents1�`AC_contents5�݂͌��Ɋ������Ȃ����߂̂��̂�		*/
/*		�A�R�[�f�B�I�����j���[�̓�����݂��Ɋ����������Ȃ��ꍇ��		*/
/*		�ႤAC_contents�̔ԍ������蓖�ĂĂ��������i�T��ނ܂ŉ\�j		*/
/*																		*/
/*		�J�����ςȂ��ɂ������ꍇ�́wAC_contentsS�x���������Ă�������	*/
/*																		*/
/*																		*/
/*		�����X�|���V�u�Ή����������ꍇ��								*/
/*		AC_contents1R�`AC_contents5R�AAC_contentsRR���g�p���Ă�������	*/
/*		�������ɔ��p�啶���uR�v�����܂��B								*/
/*		SP���݂̂ɋ@�\����悤�ɂȂ�܂�								*/
/*																		*/
/*																		*/
/*======================================================================*/


$(window).load(function(){
	accordionmenu()
});
$(window).resize(function(){
	accordionmenu()
});

function accordionmenu(){
	if (
	($('.AC_trriger1R').css('display')=="inline-block")	||
	($('.AC_trriger2R').css('display')=="inline-block")	||
	($('.AC_trriger3R').css('display')=="inline-block")	||
	($('.AC_trriger4R').css('display')=="inline-block")	||
	($('.AC_trriger5R').css('display')=="inline-block")	||
	($('.AC_trrigerRR').css('display')=="inline-block")
	){
		/*SP��PC:�R���e���c�����*/
		$(".AC_contents1R").removeAttr("style");
		$(".AC_contents2R").removeAttr("style");
		$(".AC_contents3R").removeAttr("style");
		$(".AC_contents4R").removeAttr("style");
		$(".AC_contents5R").removeAttr("style");
		$(".AC_contentsRR").removeAttr("style");
		$(".AC_trriger1R").removeClass("AC_open1R");
		$(".AC_trriger2R").removeClass("AC_open2R");
		$(".AC_trriger3R").removeClass("AC_open3R");
		$(".AC_trriger4R").removeClass("AC_open4R");
		$(".AC_trriger5R").removeClass("AC_open5R");
		$(".AC_trrigerRR").removeClass("AC_openRR");
	}
}

$(function(){
	/*�A�R�[�f�B�I�����j���[�P*/
$(".AC_trriger1").click(function(){
	$(".AC_contents1").slideUp();
	$(".AC_trriger1").removeClass("AC_open1");
	if($(this).next(".AC_contents1").css("display")=="none"){
		$(this).next(".AC_contents1").slideDown();
		$(this).addClass("AC_open1");
	}
});

/*�A�R�[�f�B�I�����j���[�Q*/
$(".AC_trriger2").click(function(){
	$(".AC_contents2").slideUp();
	$(".AC_trriger2").removeClass("AC_open2");
	if($(this).next(".AC_contents2").css("display")=="none"){
		$(this).next(".AC_contents2").slideDown();
		$(this).addClass("AC_open2");
	}
});

/*�A�R�[�f�B�I�����j���[�R*/
$(".AC_trriger3").click(function(){
	$(".AC_contents3").slideUp();
	$(".AC_trriger3").removeClass("AC_open3");
	if($(this).next(".AC_contents3").css("display")=="none"){
		$(this).next(".AC_contents3").slideDown();
		$(this).addClass("AC_open3");
	}
});

/*�A�R�[�f�B�I�����j���[�S*/
$(".AC_trriger4").click(function(){
	$(".AC_contents4").slideUp();
	$(".AC_trriger4").removeClass("AC_open4");
	if($(this).next(".AC_contents4").css("display")=="none"){
		$(this).next(".AC_contents4").slideDown();
		$(this).addClass("AC_open4");
	}
});

/*�A�R�[�f�B�I�����j���[�T*/
$(".AC_trriger5").click(function(){
	$(".AC_contents5").slideUp();
	$(".AC_trriger5").removeClass("AC_open5");
	if($(this).next(".AC_contents5").css("display")=="none"){
		$(this).next(".AC_contents5").slideDown();
		$(this).addClass("AC_open5");
	}
});

/*�A�R�[�f�B�I�����j���[�J�����ςȂ�Ver*/
$(".AC_trrigerS").click(function(){
	    $(this).next(".AC_contentsS").slideToggle();
	    $(this).toggleClass("AC_openS");
});

/*======================================================================*/
/*		���X�|���V�u�Ή���												*/
/*======================================================================*/
/*�A�R�[�f�B�I�����j���[�P*/
$(".AC_trriger1R").click(function(){
	if($(".AC_trriger1R").css("display")=="block"){
		$(".AC_contents1R").slideUp();
		$(".AC_trriger1R").removeClass("AC_open1R");
		if($(this).next(".AC_contents1R").css("display")=="none"){
			$(this).next(".AC_contents1R").slideDown();
			$(this).addClass("AC_open1R");
		}
	}
});

/*�A�R�[�f�B�I�����j���[�Q*/
$(".AC_trriger2R").click(function(){
	$(".AC_contents2R").slideUp();
	$(".AC_trriger2R").removeClass("AC_open2R");
	if($(this).next(".AC_contents2R").css("display")=="none"){
		$(this).next(".AC_contents2R").slideDown();
		$(this).addClass("AC_open2R");
	}
});

/*�A�R�[�f�B�I�����j���[�R*/
$(".AC_trriger3R").click(function(){
	$(".AC_contents3R").slideUp();
	$(".AC_trriger3R").removeClass("AC_open3R");
	if($(this).next(".AC_contents3R").css("display")=="none"){
		$(this).next(".AC_contents3R").slideDown();
		$(this).addClass("AC_open3R");
	}
});

/*�A�R�[�f�B�I�����j���[�S*/
$(".AC_trriger4R").click(function(){
	$(".AC_contents4R").slideUp();
	$(".AC_trriger4R").removeClass("AC_open4R");
	if($(this).next(".AC_contents4R").css("display")=="none"){
		$(this).next(".AC_contents4R").slideDown();
		$(this).addClass("AC_open4R");
	}
});

/*�A�R�[�f�B�I�����j���[�T*/
$(".AC_trriger5R").click(function(){
	$(".AC_contents5R").slideUp();
	$(".AC_trriger5R").removeClass("AC_open5R");
	if($(this).next(".AC_contents5R").css("display")=="none"){
		$(this).next(".AC_contents5R").slideDown();
		$(this).addClass("AC_open5R");
	}
});

/*�A�R�[�f�B�I�����j���[�J�����ςȂ�Ver*/
$(".AC_trrigerRR").click(function(){
	    $(this).next(".AC_contentsRR").slideToggle();
	    $(this).toggleClass("AC_openRR");
});
	
	
});