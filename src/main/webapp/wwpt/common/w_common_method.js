//��ȡ��ַ������
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}

function timestampToTime(timestamp) {
    var date = new Date(timestamp);//ʱ���Ϊ10λ��*1000��ʱ���Ϊ13λ�Ļ������1000
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    var D = date.getDate() + ' ';
    /* var h = date.getHours() + ':';
   ??? var m = date.getMinutes() + ':';
   ??? var s = date.getSeconds();*/
    return Y + M + D;//����ʾʱ����
}
function uuid() {
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = "-";

    var uuid = s.join("");
    return uuid;
}


//���ݴ��ݹ����Ĳ���name��ȡ��Ӧ��ֵ
function getParameter(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = location.search.substr(1).match(reg);
    if (r != null) return (r[2]);
    return null;
}

Date.prototype.Format = function (fmt) { //author: meizz
    var o = {
        "M+": this.getMonth() + 1, //�·�
        "d+": this.getDate(), //��
        "H+": this.getHours(), //Сʱ
        "m+": this.getMinutes(), //��
        "s+": this.getSeconds(), //��
        "q+": Math.floor((this.getMonth() + 3) / 3), //����
        "S": this.getMilliseconds() //����
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
//��ʽ������
Date.prototype.format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1,                 //�·�
        "d+": this.getDate(),                    //��
        "h+": this.getHours(),                   //Сʱ
        "m+": this.getMinutes(),                 //��
        "s+": this.getSeconds(),                 //��
        "q+": Math.floor((this.getMonth() + 3) / 3), //����
        "S": this.getMilliseconds()             //����
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    return fmt;
}

function footerChangeDetail() {

    var indexMainHL = $(".infoBox-l").outerHeight(true);
    var indexMainHR = $(".infoBox-r").outerHeight(true);
    if (indexMainHL <= 700 && indexMainHR <= 700) {
        $(".whiteBox").css("height", 700 + 100);
        $(".footerBox").css("top", 700 + 90);
    } else {
        if (indexMainHL <= indexMainHR) {
            $(".whiteBox").css("height", indexMainHR + 100);
            $(".footerBox").css("top", indexMainHR + 90);
        } else {
            $(".whiteBox").css("height", indexMainHL + 100);
            $(".footerBox").css("top", indexMainHL + 90);
        }
    }
}


function clickHandle() {
    labelAllH = $(".labelAll").outerHeight(true);
    if (labelAllH == "76") {
        $(".searchWrap").css({"height": "200px"});
        $(".labelDown").css("top", "84px");
    } else if (labelAllH == "114") {
        $(".searchWrap").css({"height": "240px"});
        $(".labelDown").css("top", "124px");
    } else {
        $(".searchWrap").css({"height": "152px"});
        $(".labelDown").css("top", "44px");
    }
}

//ɾ������ָ��Ԫ��
function removeByValue(arr, val) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == val) {
            arr.splice(i, 1);
            break;
        }
    }
}


function tagfind() {
    // ��ǩģ����ѯ
    // ģ����ѯ����Ӻţ�input�������ʾ
    $(".addBtn").click(function () {
        $(".fuzzyBox").css("display", "inline-block");
        $(".labelDown").fadeIn();
        clickHandle();
    })
    $("#txt1").keyup(function () {
        // $(".fuzzyData").fadeIn();//ֻҪ�������ʾ�б��

        if ($("#txt1").val().length <= 0) {
            // $(".spanItem").css('display', 'block');//���ʲô��û�����������ȫ����ʾ״̬
            // $(".span").css('display', 'block');//���ʲô��û�����������ȫ����ʾ״̬
            $(".span").removeAttr("style");//���ʲô��û�����������ȫ����ʾ״̬
            $(".tabConItem").removeAttr("style");//���ʲô��û�����������ȫ����ʾ״̬
            return;
        }

        $(".span").css('display', 'none');//������ˣ��Ƚ����е�ѡ������

        for (var i = 0; i < $(".tabConItem").length; i++) {
            //ģ��ƥ�䣬������ƥ������ʾ
            var flag = true;
            for (var j = 0; j < $(".tabConItem").eq(i).find(".span").length; j++) {
                if ($(".tabConItem").eq(i).find(".span").eq(j).text().indexOf($("#txt1").val()) != -1) {
                    // $(".tabConItem").eq(i).find(".span").eq(j).css('display', 'inline-block');
                    $(".tabConItem").eq(i).find(".span").eq(j).removeAttr("style");
                    // $(".tabConItem").eq(i).css('display', 'block');
                    $(".tabConItem").eq(i).removeAttr("style");
                    flag = false;
                }
            }
            //û�б�ǩ������
            if (flag) {
                $(".tabConItem").eq(i).css('display', 'none');
            }
        }
    });
    // ��-���ʵ��-�¼��л�
    $(".tabName div").mouseenter(function () {
        $(this).addClass("active").siblings().removeClass("active");
        $(".tabCon").children().eq($(this).index()).removeClass("displayNone").siblings().addClass("displayNone");
    })
    // ��ǩ�����ر�
    $(".labelCloseBtn").click(function () {
        $("#txt1").val("");
        $("#txt1").keyup();
        $(".labelDown").fadeOut();
        $(".fuzzyBox").css("display", "none");
    })
}
function openNewWindow(url,target) {
/*
    //window.open("", target);
    var f = document.createElement("form");
    document.body.appendChild(f);
    f.action = url;
    f.method = "post";
    f.target = target;
    f.submit();
    document.removeChild(f);*/
    if(target==null){
        target="_target";
    }
    window.open("",target);
    var f = document.createElement("form");
    document.body.appendChild(f);
    f.action = url;
    f.method = "post";
    f.target = target;
    f.submit();
    document.removeChild(f);
}

function location_href(url) {
    var f = document.createElement("form");
    document.body.appendChild(f);
    f.action = url;
    f.method = "post";
    f.target = "_self";
    f.submit();
}
