//������
var Winpop = (function($,window){
	var document = window.document,
		topdocument = window.top.document;
	var HTMLS = {
		prompt : '<div class="top-prompt"><span></span></div>',
		dialog : '<div class="pop check"><div class="pop-box">'
				+'<div class="move"><span class="pop-close">&times;</span></div>'
				+"<iframe src='' id='check-iframe' name='check-frame' frameborder='0' scrolling='no' width='100%'></iframe>"
				+'</div></div>'
	};

	/* ��ʾ�� */
	var tips = function(str,time){
		var body = $(document.body);
		var prompt = $(HTMLS.prompt).appendTo(body);
		prompt.html('<span>'+str+'</span>');
		
		time = time?time:3000;
    	prompt.stop(true,true)
			.animate({top:0,opacity:"0.5"},500)
			.delay(time)
			.animate({top:-30,opacity:"0"},500,function(){
				prompt.remove();
			});
	};

	/* �Ի��� */
	var dialog = function(url,options){
		var defaults = {
			title : '',
			icon : '',
			content : '',
			height:'570'
		};
		var _options = {};
		$.extend(_options,defaults,options);

		var _dialog = initDialog(_options);
		openDialog(_dialog,url);
		return {
			close: close
		}
	};
	// �رմ���
	dialog.close = function(){
		$(".pop",topdocument).fadeOut(500);
		$(".pop-box",topdocument).stop(true,true).animate({top:0,opacity:"0"},500,function(){dialog.remove()});
	}

    var initDialog = function(options){
		var body = $(topdocument.body);
		var	dialog = $(HTMLS.dialog).appendTo(body);
		dialog.find('iframe').attr("height",options.height);
		
		// �رհ�ť
        dialog.find('.pop-close').on('click',function(e){
            $(this).parents(".pop").fadeOut(500);
            $(this).parents(".pop-box").stop(true,true).animate({top:0,opacity:"0"},500,function(){dialog.remove()});
			return false;
        });

		// �϶�
        var dragging = false,iX, iY,helfMove;
        dialog.find(".move").on('mousedown',function(e) {
            dragging = true;
			// ��¼�����handle�ϵ�λ��
            iX = e.clientX - $(this).parent().offset().left;
            iY = e.clientY - $(this).parent().offset().top;
            helfMove = $(this).parent().width()/2;
            $(this).parent().addClass("move-now");
			// ����iframe��mouse�¼�����Ӧ����ֹ�������iframe���²�����
			dialog.find("iframe").each(function() {
				$("<div class='dragable-iframeFix' style='background: #fff;'></div>")
				.css({width: this.offsetWidth+"px", height: this.offsetHeight+"px",position: "absolute", opacity: "0.001", zIndex: 1000})
				.css({top:40,left:0})
				.appendTo(dialog.find('.pop-box'));
			});
        });
        $(topdocument).on('mousemove', function(e) {
            if (dragging) {
				// ���㱻�϶����ڵ�λ��
                var oX = e.clientX - iX;
                var oY = e.clientY - iY;
				// Լ���϶���Χ
				oX=oX<0?0:oX;
				oY=oY<0?0:oY;
				oY=oY>($(window).height()-10)?$(window).height()-10:oY;

                dialog.find(".move-now").css({left:oX+helfMove, top:oY });
            }
        });
        $(topdocument).on('mouseup',function(e) {
            dragging = false;
			dialog.find('iframe').show();
            dialog.find(".move-now").removeClass("move-now");
			dialog.find("div.dragable-iframeFix").each(function() {
				this.parentNode.removeChild(this);
			});
        });
		return dialog;
    }

    var openDialog = function(dialog,url){
		dialog.fadeIn(300);
        dialog.find('.pop-box').animate({top:20,opacity:"1"},300,function(){
			dialog.find('iframe').attr('src',url);
			dialog.find('iframe').load(function() { 
				isOnLoad = false;// iframe�������
				dialog.find('iframe').show();
			}); 
		});
    
    }
	
    return {
		tips : tips,
		dialog : dialog
	};
})(jQuery,window);