/**
 * 
 * 
 * 20160829
 * ������js������ӵ���󣬲������Ӧע��
 * ������js������ӵ���󣬲������Ӧע��
 * ������js������ӵ���󣬲������Ӧע��
 * ������js������ӵ���󣬲������Ӧע��
 * ������js������ӵ���󣬲������Ӧע��
 * ������js������ӵ���󣬲������Ӧע��
 * ������js������ӵ���󣬲������Ӧע��
 * 
 * 
 * 
 * 
 */


//��껬��������Ч��
function col_on(i) {
	var col=document.getElementById("col"+i);
	col.style.backgroundColor="#d6e7f7";
}
	
function col_out(i) {
	var col=document.getElementById("col"+i);
	col.style.backgroundColor="";
}

//TABѡ�Ч��
function selectTag(showContent,selfObj){
	// ������ǩ
	var tag = document.getElementById("tags").getElementsByTagName("li");
	var taglength = tag.length;
	for(i=0; i<taglength; i++){
		tag[i].className = "";
	}
	selfObj.parentNode.className = "selectTag";
	// ��������
	for(i=0; j=document.getElementById("tagContent"+i); i++){
		j.style.display = "none";
	}
	document.getElementById(showContent).style.display = "block";
	
}


// ��ʾ���ز�
function select_changed(){  
   document.getElementById("list_search_div").style.display= document.getElementById("list_search_div").style.display=="none"? "":"none";
} 

//��ѡ��ȫѡЧ��
function CheckAll()
{     
  for (var k=0;k<document.event_type.elements.length;k++)
    {
      var e = document.event_type.elements[k];
      if (e.name != 'allbox')
	e.checked = document.event_type.allbox.checked;
    }
}




function onlyCheckOne(){
	var elementGroup = event.srcElement.parentElement.getElementsByTagName("INPUT");
		for (var i=0;i<elementGroup.length;i++){
			if (elementGroup.item(i)!=event.srcElement 
					&& elementGroup.item(i).type=="checkbox" 
					&& elementGroup.item(i).name== event.srcElement.name ){
				elementGroup.item(i).checked = false;
			}
		}
	}


//�˷������������õ���ȷ�ĳ˷����
//˵����javascript�ĳ˷������������������������˵�ʱ���Ƚ����ԡ�����������ؽ�Ϊ��ȷ�ĳ˷������
//���ã�accMul(arg1,arg2)
//����ֵ��arg1����arg2�ľ�ȷ���
function accMul(arg1,arg2)
{
	if(!isNaN(arg1) && !isNaN(arg2)){
		arg1=String(arg1);var i=arg1.length-arg1.indexOf(".")-1;i=(i>=arg1.length)?0:i
		arg2=String(arg2);var j=arg2.length-arg2.indexOf(".")-1;j=(j>=arg2.length)?0:j
		return (arg1.replace(".","")*arg2.replace(".","")/Math.pow(10,i+j)).toFixed(4)
	}else return 0
}

//�ӷ������������õ���ȷ�ļӷ����
//˵����javascript�ļӷ������������������������ӵ�ʱ���Ƚ����ԡ�����������ؽ�Ϊ��ȷ�ļӷ������
//���ã�accAdd(arg1,arg2)
//����ֵ��arg1����arg2�ľ�ȷ���
function accAdd(arg1,arg2,num){
	if(accAdd.arguments.length < 3) num = 4;
	if(!isNaN(arg1) && !isNaN(arg2)){
		var r1,r2,m;
		try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0}
		try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0}
		m=Math.pow(10,Math.max(r1,r2))
		return ((arg1*m+arg2*m)/m) .toFixed(num)
	}else return 0
}

//���������������õ���ȷ�ļӷ����
//˵����javascript�ļ�����������������������������ʱ���Ƚ����ԡ�����������ؽ�Ϊ��ȷ�ļ��������
//���ã�accSub(arg1,arg2)
//����ֵ��arg1����arg2�ľ�ȷ���
function accSub(arg1,arg2){
	if(!isNaN(arg1) && !isNaN(arg2)){
		var r1,r2,m;
		try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0}
		try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0}
		m=Math.pow(10,Math.max(r1,r2))
		return ((arg1*m-arg2*m)/m).toFixed(4)
	}else return 0
}

//���������������õ���ȷ�ĳ������
//˵����javascript�ĳ�����������������������������ʱ���Ƚ����ԡ�����������ؽ�Ϊ��ȷ�ĳ��������
//���ã�accDiv(arg1,arg2)
//����ֵ��arg1����arg2�ľ�ȷ���
function accDiv(arg1,arg2){
	if(!isNaN(arg1) && !isNaN(arg2)){
		var t1=0,t2=0,r1,r2;
		try{t1=arg1.toString().split(".")[1].length}catch(e){}
		try{t2=arg2.toString().split(".")[1].length}catch(e){}
		with(Math){
			r1=Number(arg1.toString().replace(".",""))
			r2=Number(arg2.toString().replace(".",""))
			return ((r1/r2)*pow(10,t2-t1)).toFixed(4);
		}
	}else return 0;
}
//��ʽ�����ݺ�����������ʽ������
//����ֵ��arg��ʽ����Ľ��
function formatValue(arg,num){
	if(!isNaN(arg)){
		var r,m;
		try{r=arg.toString().split(".")[1].length}catch(e){r=0}
		m=Math.pow(10,Math.max(r))
		return ((arg*m)/m).toFixed(num)
	}else{
		return arg;
	}
}
//��ʽ�����ݺ�����������ʽ������
//����ֵ��arg��ʽ����Ľ��
function showValue(id,num){
	var arg = document.getElementById(id).value;
	if(!isNaN(arg)){
		document.getElementById(id).value = formatValue(arg,num);
	}
}


//��ѯʱform�����ύ
//add by zhangxiaoman
function queryFormSubmit(queryDiv,resultTblId) {
	var input = $("#"+queryDiv+"").find('input');
	var param = new Object();
	for (var i=0; i < input.length; i++) {
		if(input[i].value != "") {					
			if(param[input[i].name] != null)
				param[input[i].name] += ";"+input[i].value;
			else
				param[input[i].name] = input[i].value;
		}
	}
	$("#"+resultTblId+"").commonGrid("reload",param);
}

//add by zhangxiaoman(���datagrid����Ӧ����)
function resizeGrid(listTbl){
	$('#'+listTbl+'').datagrid('resize', {
		width:function(){return document.body.clientWidth-10;}
	});
}

//��ȡ����datagrid��ͷ��title
function getColTitles(grid){
	var frofs=grid.datagrid("getColumnFields",false);
	var fsstr="";
	for(var i=0;i<frofs.length;i++){
		var fo=grid.datagrid("getColumnOption",frofs[i]);
		if(fo.title!="����"){
			if(fsstr==""){
				fsstr=fo.title;	
			}else {
			fsstr=fsstr+","+fo.title;
			}	
		}
	}
	return fsstr;
}
//��ȡ����datagrid��ͷ��id
function getColFields(grid){
	var fs = grid.datagrid("getColumnFields",false);
	var tmp = fs.pop();
	if(tmp!="operate"){
		fs.push(tmp);
	}
	return fs;
}










/**
 * ��������������
 * ��������������
 * ��������������
 * ��������������
 * ��������������
 * ��������������
 */
//���ؿ�Ȱٷֱ�
function countWidth(widthPercent,browseWidth){
	return (widthPercent*browseWidth)/100;
}



//�����µ�DIV��Ŀǰ������㣬����index.jsp��չ
//layerNo��������������1��ʼ��number����
//dwidth������div�Ŀ�ȣ�string�ͣ��ٷֱ�or���أ���֧��auto
//dheight������div�ĸ߶ȣ�string�ͣ��ٷֱ�or����or auto
//fsrc��div��iframe��src
//fwidth(�Ǳ���)��div��iframe��ȣ�string�ͣ��ٷֱ�or����or auto
//fheight(�Ǳ���)��div��iframe�߶ȣ�string�ͣ��ٷֱ�or����or auto
//divCss(�Ǳ���)���������⣬��Ҫ��չ��DIV����ʽ��object����
//���ӣ�openInNewFrame(layerNo,"800.8px","60%","600","90.8%","/test.jsp",{"background-color":"#aaaaaa"});
function openInNewFrame(layerNo,dwidth,dheight,fsrc,fwidth,fheight,divCss){
	var winH = document.body.clientHeight;
	fwidth = fwidth || "100%";
	fheight = fheight || "100%";
	divCss = divCss || {};
	var dmargin = -parseFloat(dwidth)/2;
	var dmargin_top = -parseFloat(dheight)/2;
	var divClass = "newDiv-" + layerNo;
	var newFrameName = "newFrame-"+layerNo;
	$("div."+divClass, top.document).fadeIn(300);
	$("."+divClass+" .pop-box", top.document)
		.css({"z-index":layerNo*1000,"width":dwidth,"height":dheight,"margin-left":dmargin})
		.css(divCss)
		.stop(true, true).animate({
			top : winH/2 + dmargin_top,
			opacity : "1"
			}, 300);
	var fsrcTmp = $("."+divClass+" .pop-box iframe", top.document).attr("src");
	if(fsrc.indexOf("_query")==-1){//����ǲ�ѯҳ��
		$("."+divClass+" .pop-box iframe", top.document).remove();
		$("."+divClass+" .pop-box", top.document).append("<iframe id='"+newFrameName+"' name='"+newFrameName+"' frameborder='0' scrolling='no' width='"+fwidth+"'  height='"+fheight+"' src='"+fsrc+"' ></iframe>");
	}else{
		if(fsrc != fsrcTmp){
			$("."+divClass+" .pop-box iframe", top.document).remove();
			$("."+divClass+" .pop-box", top.document).append("<iframe id='"+newFrameName+"' name='"+newFrameName+"' frameborder='0' scrolling='no' width='"+fwidth+"' height='"+fheight+"' src='"+fsrc+"' ></iframe>");
		}
	}
}

//�رո��ֵ�DIV
//target(�Ǳ���):��������DIV��ʱ��layerNo����������ֵ��Ĭ�Ϲرն���DIV��֧�����鷽ʽһ�ιرն��DIV
//���ӣ�closeFrame()�رն���;closeFrame(2)�رյڶ���;closeFrame([1,2])�ر�1,2��
function closeFrame(target){
	//���ֶ������������ʱ���û������Ů����û���氲����󣬱�Ҫɾ����ʱid��ӵ���Ů
	var pidTemp = $("#pidTemp").val();
	if(pidTemp){
		$.post("/careChildren/deleteCareChildrenByPid",{pid:pidTemp},function(data){
			//alert(pidTemp+data);
		});
	}
	var targetArr = (target instanceof Array) ? target : [];
	if (target && targetArr.length==0) {
		targetArr.push(target);
	}
	var $divs = $("#hiddenDiv",top.document).find("div.pop.inuse");
	var $divArr = [];
	for( var i=0; i<$divs.length; i++) {
		var $div = $divs.eq(i);
		if($div.css("display")=="block"){
			$divArr.push($div);
		}
	}
	if (targetArr.length == 0) {
		if ($divArr.length==0) {
			top.close();
		}else{
			$divArr[$divArr.length-1].fadeOut(300);
		}
		return;
	}
	for (var j = 0; j < targetArr.length; j++) {
		$divArr[targetArr[j]-1].fadeOut(300);
	}
}



/*ȫ����һ���´���*/
function openAllscreenwin(winURL)
{
	var Allscreenwin = window.open(winURL,"","height=720,width=1015,top=0,left=0,toolbar=no,menubar=no,scrollbars=yes,resizable=yes,location=no,status=no");
	Allscreenwin.resizeTo(screen.availWidth, screen.availHeight);
}
function openFullWindow(winURL)
{
	window.open(winURL,"", "width=" + screen.availWidth + ",height=" + screen.availHeight + ",top=0,left=0,toolbar=yes,menubar=yes,scrollbars=yes,resizable=yes,location=yes,status=yes");
}
/*���д�һ���´��ڣ��߶ȣ�����Զ���*/
function openWindowInCenter(winURL,height,width)
{
	var top = (750 - height)/2;
	var left = (1259 - width)/2;
	var InCenterwin = window.open(winURL,"","height=" + height + ",width=" + width + ",top=" + top + ",left=" + left + ",toolbar=no,menubar=no,scrollbars=yes,resizable=yes,location=no,status=no");

}
//���ظ���
function annexDivLoad(annexDivId,typeId,businessId){
	if(businessId!=null&&businessId!=""&&businessId!=undefined){//�޸�
		  $("#"+annexDivId).load("../../../../mhpm/common/annex_forward.jsp?autoUpload=Y&checkbox=Y&type=list&typeId="+typeId+"&bussinessId="+businessId+"&random="+Math.random()*1000);
	}else{//����
		  $("#"+annexDivId).load("../../../../mhpm/common/annex_forward.jsp?completeFunc=completeAnnexFunc&autoUpload=N&checkbox=Y&type=list&typeId="+typeId+"&bussinessId="+businessId+"&random="+Math.random()*1000);
	}
}

//��֤����Ϣ,(��Ҫ���easyui-validateboxʹ�ã�
//���߼���֤�ı���Ҫ����displayName���ԣ�
//�ǿ���֤�ı���ҪmissingMessage����)
//����validType:
//"empty"=���ǿ���֤;
//"logic"=���߼���֤;
//�ջ򲻴�=���ֶ���֤
function validateForm(validType){
	var flag = true;
	var $validEle = $(".easyui-validatebox");
	$validEle.each(function(index){
		if(!$(this).validatebox('isValid')){
			if((this.getAttribute('required')=="true" || this.getAttribute('required')=="required") && (this.value==null || this.value=="")){
				if (validType && validType!="empty") {
					return;
				}
				alert(this.getAttribute('missingMessage'));
				this.focus();
			}else{
				if (validType && validType!="logic") {
					return;
				}
				alert(this.getAttribute('displayName')+"�����Ϲ淶");
				var value = this.value;
				this.value = "";
				this.focus();
				this.value = value;
			}
			flag = false;
			return false;
		}
	});
	return flag;
}

/**************************
*Desc:�ύ����ʱ����
*Argument:type=0 ȫ���� 1�ֲ���
*Version:1.0.0
**************************/
 (function ($) { 
    $.fn.jqLoading =function(option) {
        var defaultVal = {
            backgroudColor: "#ECECEC",//����ɫ
            backgroundImage: "/azbj/images/loading.gif",//����ͼƬ
            text: "���ڼ����У������ĵȴ�....",//���� 
            width: 150,//���
            height: 60,//�߶�
            type:0 //0ȫ���ڣ�1 �ֲ���
             
        };
        var opt = $.extend({}, defaultVal, option);
        if (opt.type == 0) {
            //ȫ����
            openLayer();
        } else {
            //�ֲ���(��ǰ����ӦΪ��Ҫ���ڵ��Ķ���)
            openPartialLayer(this);
        }
         
        //���ٶ���
        if (option === "destroy") {
            closeLayer();
        }
         
        //���ñ������
        function height () {
            var scrollHeight, offsetHeight;
            // handle IE 6
            if ($.support.boxModel && $.support.leadingWhitespace) {
                scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
                offsetHeight = Math.max(document.documentElement.offsetHeight, document.body.offsetHeight);
                if (scrollHeight < offsetHeight) {
                    return $(window).height();
                } else {
                    return scrollHeight;
                }
                // handle "good" browsers
            }
            else if ($.support.objectAll) {
                return $(document).height() - 4;
            }
            else {
                return $(document).height();
            }
        };
         
        //���ñ������
        function width() {
            var scrollWidth, offsetWidth;
            // handle IE
            if ($.support.boxModel) {
                scrollWidth = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth);
                offsetWidth = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth);
                if (scrollWidth < offsetWidth) {
                    return $(window).width();
                } else {
                    return scrollWidth;
                }
                // handle "good" browsers
            }
            else {
                return $(document).width();
            }
        };
         
        /*==========ȫ������=========*/
        function openLayer() {
            //�������ֲ�
            var layer = $("<div id='layer'></div>");
            layer.css({
                zIndex:9998,
                position: "absolute",
                height: height() + "px",
                width: width() + "px",
                background: "black",
                top: 0,
                left: 0,
                filter: "alpha(opacity=30)",
                opacity: 0.3
               
            });
            
           //ͼƬ�����ֲ�
            var content = $("<div id='content_zzc'></div>");
            content.css({
                textAlign: "left",
                position:"absolute",
                zIndex: 9999,
                height: opt.height + "px",
                width: opt.width + "px",
                top: "50%",
                left: "50%",
                verticalAlign: "middle",
                background: opt.backgroudColor,
                borderRadius:"8px",
                fontSize:"13px"
            });
             
            content.append("<img style='vertical-align:middle;margin:"+(opt.height/4)+"px; 0 0 5px;margin-right:5px;' src='" + opt.backgroundImage + "' /><span style='text-align:center; vertical-align:middle;'>" + opt.text + "</span>");
            $("body").append(layer).append(content);
            var top = content.css("top").replace('px','');
            var left = content.css("left").replace('px','');
            content.css("top",(parseFloat(top)-opt.height/2)).css("left",(parseFloat(left)-opt.width/2));
             
           return this;
        }
        //���ٶ���
        function closeLayer() {
            $("#layer,#content_zzc,#partialLayer").remove();
            return this;
        }
         
        /*==========�ֲ�����=========*/
        function openPartialLayer(obj) {
          
            var eheight = $(obj).css("height");//Ԫ�ش�px�ĸ߿��
            var ewidth = $(obj).css("width");
            var top = $(obj).offset().top; // Ԫ�����ĵ���λ�� ��������Ӱ��
            var left = $(obj).offset().left;
            var layer = $("<div id='partialLayer'></div>");
            layer.css({
                style: 'z-index:9998',
                position: "absolute",
                height: eheight,
                width: ewidth,
                background: "black",
                top: top,
                left: left,
                filter: "alpha(opacity=60)",
                opacity: 0.6,
                borderRadius:"3px",
                dispaly: "block"
            });
            $("body").append(layer);
            return this;
        }
    };
     
})(jQuery)


// ��Date����չ���� Date ת��Ϊָ����ʽ��String   
// ��(M)����(d)��Сʱ(h)����(m)����(s)������(q) ������ 1-2 ��ռλ����   
// ��(y)������ 1-4 ��ռλ��������(S)ֻ���� 1 ��ռλ��(�� 1-3 λ������)   
// ���ӣ�   
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423   
// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18   
Date.prototype.Format = function(fmt)   
{  
  var o = {   
    "M+" : this.getMonth()+1,                 //�·�   
    "d+" : this.getDate(),                    //��   
    "h+" : this.getHours(),                   //Сʱ   
    "m+" : this.getMinutes(),                 //��   
    "s+" : this.getSeconds(),                 //��   
    "q+" : Math.floor((this.getMonth()+3)/3), //����   
    "S"  : this.getMilliseconds()             //����   
  };   
  if(/(y+)/.test(fmt))   
    fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));   
  for(var k in o)   
    if(new RegExp("("+ k +")").test(fmt))   
  fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));   
  return fmt;   
}  
 
 

$.fn.serializeObject = function()
{
   var o = {};
   var a = this.serializeArray();
   $.each(a, function() {
       if (o[this.name]) {
           if (!o[this.name].push) {
               o[this.name] = [o[this.name]];
           }
           o[this.name].push(this.value || '');
       } else {
           o[this.name] = this.value || '';
       }
   });
   return o;
};

//wegov2�ֵ�----------------start-------------------
function dictSelectChange(thisSelect,nullText){
	if($(thisSelect).find("option:selected").text()!=nullText){
		$(thisSelect).next("input").val($(thisSelect).find("option:selected").text());
	}else{
		$(thisSelect).next("input").val("");
	}
}


function dictComboTreeChange(target,textName){
	
}

function dictCheckBoxChange(object,textName){
	var checkboxs=new Array();
	var inputName=$(object).attr("name");
	if(inputName!=null&&inputName!=""){
		$("input[name='"+inputName+"'][type='checkbox']:checked").each(function(){
			checkboxs.push($(this).next("label").text());
		});
		$("input[name='"+textName+"']").val(checkboxs.join(","));
	}
}

function dictRadioChange(object,textName){
	var radioName=$(object).attr("name");
	if(radioName!=null&&radioName!=""){
		$("input[name='"+radioName+"'][type='radio']:checked").each(function(){
			$("input[name='"+textName+"']").val($(this).next("label").text());
		});
	}
}

//wegov2�ֵ�----------------end-------------------

//��������
function jqLoadingSave(options){
	var defaultOptions = {
			height : 100,
			width : 240,
			text : "���ڱ��棬���Ժ�..."
		};
	$.extend(defaultOptions,options);
	$.fn.jqLoading(defaultOptions);
}
//����
function alertSaveSuccess(){
	$.messager.alert("ϵͳ��ʾ","����ɹ���");
}
//����ʧ��
function alertOperateFail(){
	$.messager.alert("ϵͳ��ʾ","����ʧ�ܣ���͹���Ա��ϵ��");
}

//���ÿ��checkbox�Ƿ�ȫδѡ������ǣ�����nameֵΪ���ַ���
function checkboxFilter(scope){
	$(".checkboxFilter",scope).each(function(){
		var scopeTemp = $(this);
		var count = 0;
		$("input[type='checkbox']:checked",scopeTemp).each(function(){
			count++;
		});
		if(count==0){
			var name = $("input:first-child",scopeTemp).attr("name");
			var html = "<input type='hidden' name='"+name+"' value=''>";
			scopeTemp.append(html);
		}
	});
}

//�鿴
function lookOperate(ff){
	//����font����ɫ��*�ţ�
	$(ff).find("font").each(function(index){
		$(this).hide();
	});
	$(ff).find("b").each(function(index){
		$(this).hide();
	});
	//checkbox/radio
	$(ff+" input[type=checkbox],"+ff+" input[type=radio]").each(function(){
		$(this).parent().prev().show();
		$(this).parent().hide();
	});
	//easyui combobox/datebox/combogrid ��ʾ�ı�
	$(ff+" select").each(function(){
		$(this).prev().show();
		$(this).combo("destroy");
	});
	$(ff).find(".areaClass").each(function(){
		$(this).parent().prev().show();
		$(this).parent().hide();
	});
	$(ff).find(".easyui-datebox").each(function(){
		$(this).prev().show();
		$(this).datebox("destroy");
	});
	$(ff).find(".easyui-numberbox").each(function(){
		$(this).prev().show();
		$(this).numberbox("destroy");
	});
	$(ff).find(".easyui-textbox.abdx-info").each(function(){
		$(this).prev().show();
		$(this).textbox("destroy");
	});
	$(ff).find(".easyui-textbox").each(function(){
		var val = $(this).textbox("getValue");
		$(this).parent().append(val);
		$(this).textbox("destroy");
	});
	//��ͨ�ı���
	$(ff+" input[type=text],"+ff+" textarea").each(function(index){
		var val = $(this).val();
		$(this).hide();
		$(this).parent().append(val);//�滻Ϊ�ı�
	});
	$(".easyui-linkbutton.pd10").hide();//���ذ�ť
}

//ʡ����������ʼ��
function initArea(parentId, areaId){
	var parentVal = $("#"+parentId).attr("defaultValue");
	var tcode = $("#"+parentId).attr("tcode");
	$("#"+parentId).combobox({
		url: '/azbj/easyui/areaCombobox?parentId='+tcode,
		value: parentVal,
		valueField: 'id',
		textField: 'text'
	});
	$("#"+areaId).attr("tcode", parentVal);
	var areaVal = $("#"+areaId).attr("defaultValue");
	$("#"+areaId).combobox({
		url: '/azbj/easyui/areaCombobox?parentId='+parentVal,
		value: areaVal,
		valueField: 'id',
		textField: 'text'
	});
}
//ʡ���������䶯
function changeArea(province, city, county){
	$("#"+province).combobox({
		onSelect: function(r1){
			var provinceCode = r1.id;
			$("#"+city).combobox({
				url: '/azbj/easyui/areaCombobox?parentId='+provinceCode,
				value: '',
				valueField: 'id',
				textField: 'text',
				onSelect: function(r2){
					var cityCode = r2.id;
					$("#"+county).combobox({
						url: '/azbj/easyui/areaCombobox?parentId='+cityCode,
						value: '',
						valueField: 'id',
						textField: 'text'
					});
				}
			});
			$("#"+county).combobox({//����combobox�ÿ�
				url: '/azbj/easyui/areaCombobox?parentId=',
				value: '',
				valueField: 'id',
				textField: 'text'
			});
		}
	});
}

//����Ǩ�ơ��˻�����ֻ��ÿ��25�ŵ��¸���12�Ų��ܷ���
function createAble(){
	var date = new Date();
	var day = date.getDate();
	if(day<26 && day>12){
		$.messager.alert("ϵͳ��ʾ", "�ù��������ڵ���26�ŵ��¸���12��֮�����룡");
		return false;
	}else
		return true;
}

/**
 * ��ѡcheckbox����ѡ������ʱ����ʾ��д�򣬲�ѡ�ǣ�������д��
 * name checkbox��name����ֵ
 * nameQita ѡ����ʱ��д���name����ֵ
 * value checkboxѡ����ʱ��value����ֵ
 */
function checkboxSelectQita(name, nameQita, num){
	$("input[name='"+name+"']").bind("click",function(){
		var val = $(this).val();
		if(val == num){
			if($(this).prop("checked")){
				$("input[name='"+nameQita+"']").show();
			}else{
				$("input[name='"+nameQita+"']").val("");
				$("input[name='"+nameQita+"']").hide();
			}
		}
	});
}

function refreshPersonInfo(data){
	var rows = data.rows;
	for(var i=0; i<rows.length; i++){
		var row = rows[i];
		$.post("/personInfo/getPersonInfo",{id:row.pid},function(result){
			var personInfo = result.rows[0];
			$("."+personInfo.id).each(function(index,e){
				var attr = $(this).attr("attr");
				$(this).text(personInfo[attr]);
			});
		});
	}
}
//ͳ��checkBox
function setCheckboxValue(checkboxName,codeInputId,textInputId){
	var checkboxes = document.getElementsByName(checkboxName);
	var code = "";
	var text = "";
	for(var i=0;i<checkboxes.length;i++){
		if(checkboxes[i].checked){
			if(code==""){
				code = $(checkboxes[i]).attr("value");
				text = $(checkboxes[i]).attr("text");
			}else {
				code = code + "," + $(checkboxes[i]).attr("value");
				text = text + "," + $(checkboxes[i]).attr("text");
			}
		}
	}
	document.getElementById(codeInputId).value=code;
	document.getElementById(textInputId).value=text;
}

//��ʼ��Checkbox
function initCheckboxValue(checkboxName,codeInputId){
	var checkboxes = document.getElementsByName(checkboxName);
	var codeInput = document.getElementById(codeInputId);
	var codes = codeInput.value.split(",");
	for(var i=0;i<checkboxes.length;i++){
		if(inArr(checkboxes[i].value,codes)){
			checkboxes[i].checked=true;
		}
	}
}
function inArr(value,arr){
	for(var i=0;i<arr.length;i++){
		if(value==arr[i]){
			return true;
		}
	}
	return false;
}
/**
 * �������ڼ���Ƿ�������ɱ���
 * @return
 */
function checkReportDate(yearS,monthS){
	var yearI = parseInt(yearS);
	var monthI = parseInt(monthS);
	
	var today = new Date();
	var year = today.getFullYear();
	var month = today.getMonth()+1;
	var day = today.getDate();
	
	if(yearI>year
		|| yearI==year&&monthI>month
		|| yearI==year&&monthI==month&&day<25){
			alert("ֻ���ڵ��µ�25��֮��������ɸ��¹̶�������������������!")
			return false;
		}
	return true;
	
}

/**
 * ����¼���λ�Ƿ���ӱ���
 * @param num �����¼�������
 * @return
 */
function checkReportRow(num) {
	var isComplete;
	$.ajax({
		type:"POST",
		url:"/azbj/report/reportInfo/action/reportRowCompleteAction.jsp",
		data:{rowNum:num},
		async:false,
		success:function(data) {
			isComplete = data;
		}
	});
	return isComplete;
}

function checkReportQuarter(yearVal,quarterVal) {
	var endDay = new Date();
	
	if (quarterVal == 4) {
		endDay.setFullYear(+ yearVal + 1, 0, 1);
	} else {
		endDay.setFullYear(yearVal, quarterVal*3,1);
	}
	//�����ʱ��
	if(endDay>new Date()){
		$.messager.alert("ϵͳ��ʾ","���ڵ����Ƚ��������ɱ���");
		return false;
	}
	return true;
}