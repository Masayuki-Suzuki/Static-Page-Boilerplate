<!--�E�B���h�E�Ϗ���-->
<!--���l�Ɉˑ����Ȃ������Ȃ̂ŉ�ʕ��̒�����spmode-map.css�ɂ�-->

/*[.btn_acmap]SP�p�A�R�[�f�B�I�����j���[�̃g���K�[*/
$(window).load(function(){
	accordionmap()
});

$(window).resize(function(){
	accordionmap()
});

function accordionmap(){
	/*SP��PC:�n�}��\�������j���[�����*/
	if (($('.btn_acmap').css('display') == 'none')){
		$("div.submap").show();
		$(".btn_acmap").removeClass("openmap");
	}
	/*SP��SP:���j���[�J�����͈ێ�����(PC���[�h�Ɉڍ�����܂�)*/
	else if (($(".btn_acmap").hasClass('openmap')) ){
		return true;
	}
	/*PC��SP:�n�}����������*/
	else{
		$("div.submap").hide();	
	}
}

// �A�R�[�f�B�I�����j���[(�f�t�H���g�n�}�j
$(function(){
		$(".btn_acmap").click(function(){
			$('div.submap').slideUp();
			$(".btn_acmap").removeClass('openmap');
			if($(this).next('div.submap').css("display") == 'none'){
				$(this).next('div.submap').slideDown();
				$(this).addClass('openmap');	
			}
		});
});