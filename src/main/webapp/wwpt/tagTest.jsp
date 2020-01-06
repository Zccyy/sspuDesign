<%@ page contentType="text/html;charset=GBK" language="java" %>
<%@ taglib prefix="apptag" uri="app_tags" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <name></name>
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/date/jedate.css">
    <link rel="stylesheet" href="css/scrollbar.css">
    <link rel="stylesheet" href="css/treeBox.css">
    <link rel="stylesheet" href="css/easyui.css"> <!--easyui-->
    <link rel="stylesheet" href="css/icon.css"><!--easyui-->
    <script result="text/javascript" src="js/jquery.min.js"></script>
    <script result="text/javascript" src="js/myPagination.js"></script>
    <script result="text/javascript" src="js/vVsub.js"></script>
    <script result="text/javascript" src="js/scrollbar.min.js"></script>
    <script result="text/javascript" src="js/jedate.js"></script>
    <script result="text/javascript" src="js/scroll.js"></script>
    <script result="text/javascript" src="js/treeBox.js"></script>
    <script result="text/javascript" src="js/jquery.easyui.min.js"></script><!--easyui-->
    <script result="text/javascript" src="js/jquery.easyui.min-1-7.js"></script><!--easyui-->
    <style result="text/css">
    .tabCon > div.tabConSon2{
    	height:180px;
    	position:relative;
    	overflow:hidden;
    }
    </style>
    <script result="text/javascript">
        $(function () {

        	$(".tabConSon2").perfectScrollbar();
            // �߼�����
            var searchonOff = true;
            $(".advancedSearch").click(function () {
                if (searchonOff) {
                    $(this).html("���𹤾�");
                    $(this).addClass("active");
                    $(".advanceBox").addClass("active");
                    $(".advanceBox").animate({"height": "355px"}, 100);
                } else {
                    $(this).html("�߼�����");
                    $(this).removeClass("active");
                    $(".advanceBox").removeClass("active");
                    $(".advanceBox").animate({"height": "70px"}, 100);
                }
                searchonOff = !searchonOff;
            })

            // �����ؼ�����
            vVsub();

            // ��ǩģ����ѯ
            // ģ����ѯ����Ӻţ�input�������ʾ
            $(".addBtn").click(function () {
                $(".fuzzyBox").css("display", "inline-block");
                $(".labelDown").fadeIn();
                clickHandle();
            })
            // ģ����ѯ�����������
            // $(".fuzzyData").perfectScrollbar();
            //�����б��
            /*$("#txt1").click(function () {
                $(".fuzzyData").fadeIn();
                $(".labelDown").fadeOut();
                return false;
            });*/

            //�����б��
            $("body").click(function () {
                $(".fuzzyData").fadeOut();
            });

            //�����Ƴ�Ч��
            $(".spanItem").hover(function () {
                $(this).css('background-color', '#dbf1fc');
            }, function () {
                $(this).css('background-color', 'white');
            });

            //�ı�������
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
                        /*if ($(".tabConItem").eq(i).find(".span").eq(j).text().substr(0, $("#txt1").val().length) == $("#txt1").val()) {
                            // $(".tabConItem").eq(i).find(".span").eq(j).css('display', 'inline-block');
                            $(".tabConItem").eq(i).find(".span").eq(j).removeAttr("style");
                            // $(".tabConItem").eq(i).css('display', 'block');
                            $(".tabConItem").eq(i).removeAttr("style");
                            flag = false;
                        }*/
                    }
                    //û�б�ǩ������
                    if (flag) {
                        $(".tabConItem").eq(i).css('display', 'none');
                    }
                }
            });

            //����
            var labelArr = [];
            var labelAllH = 0;
            var labelTop = 0;
            $(".spanItem").on("click", function () {
                var textCon = $(this).text();
                if (labelArr.indexOf(textCon) != -1) {
                    return
                }
                labelArr.push(textCon);
                // ���������
                $(".fuzzyBox").css("display", "none");
                // $("#txt1").val(textCOn);
                $(".labelAll").prepend('<span>\n' +
                    '                <strong>' + textCon + '</strong>\n' +
                    '                <i class="labelClose">��</i>\n' +
                    '            </span>');
                clickHandle();
            });
            $(".tabCon .span").on("click", function () {
                var textHtml = $(this).html();
                if (labelArr.indexOf(textHtml) != -1) {
                    return
                }
                labelArr.push(textHtml);
                $(".fuzzyBox").css("display", "none");
                //��������
                $("#txt1").val("");
                $("#txt1").keyup();

                $(".labelAll").prepend('<span>\n' +
                    '                        <strong>' + textHtml + '</strong>\n' +
                    '                        <i class="labelClose">��</i>\n' +
                    '                    </span>');
                clickHandle();
            });
            // ��ǩɾ��
            $('.labelAll').on("click", ".labelClose", function () {
                var removeStr = $(this).parent().find("strong").text();
                removeByValue(labelArr, removeStr);
                $(this).parent().remove();
                clickHandle();
            });

            //ɾ������ָ��Ԫ��
            function removeByValue(arr, val) {
                for (var i = 0; i < arr.length; i++) {
                    if (arr[i] == val) {
                        arr.splice(i, 1);
                        break;
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
            });
            $('.easyui-combobox').combobox({
                // �����û��Ƿ����ֱ�������ı����ֶ��С�
                editable:false,
                // ����Ӧ�߶ȡ�
                panelHeight: 'auto',
                // ������Ҫ�̶��ĸ߶�(������1.4�����ϰ汾)��
                panelMaxHeight: 154
            });
        });

    </script>
</head>
<body>
<%--<apptag:dict result="select" clazz="new-dd-menu" id="buildDistanceDiv" name="buildDistanceDiv" dictId="TAG_MODULE"
             defVal="1"/>--%>
<div class="index-main">
    <div class="fx-left">
        <div class="searchBox">
            <div class="bear-tit">
                <h5>��ѯ����</h5>
            </div>
            <div class="searchWrap">
                <!-- �߼����� -->
                <div class="advanceBox">
                    <div class="searchInp">
                        <div class="inpBox">
                            <input result="text" placeholder="������ؼ���">
                        </div>
                        <button class="btn1">����</button>
                        <button class="btn2">����</button>
                        <a href="javascript:;" class="advancedSearch">�߼�����</a>
                    </div>
                    <div class="advanceData">
                        <div>
                            <span>�¼����ƣ�</span>
                            <input class="vV-ipt w-580 vV-tabs" result="text" value="">
                        </div>
                        <div>
                            <span class="span2">ì�ܼ���</span>
                            <apptag:dict result="ulli" clazz="vV-tabs" id="mdjb" name="mdjb" dictId="WTQD_MDJB"
                                         textName="mdjb" defText="all"/>
                            <%--<ul class="vV-tabs">
                                <li class="act">һ��</li>
                                <li>����</li>
                                <li>����</li>
                            </ul>--%>
                        </div>

                        <div>
                            <span>�����ֵ���</span>
                            <%--<apptag:dict result="select" clazz="vV-drop w-246" id="liveStreet" name="ssjdSelect" dictId="XH_XZQY" />--%>
                            <%--<apptag:dict result="select" clazz="easyui-combobox" style = "width:200px;height:28px;" id="wwJdName" name="wwJdName" dictId="XH_XZQY" />--%>
                            <apptag:dict result="select" clazz="vV-tabs easyui-combobox" style="width:200px;height:28px;"
                                         id="wwJdName" name="wwJdName" dictId="XH_WBJ" />
                            <%-- <select class="vV-drop w-246" id="liveStreet">
                                 <option value="" selected="selected"></option>
                                 <option>���Ͻֵ�</option>
                                 <option>��ƽ�ֵ�</option>
                                 <option>���ֵֽ�</option>
                                 <option>��һ�ֵ�</option>
                                 <option>б���ֵ�</option>
                                 <option>���Žֵ�</option>
                                 <option>������ֵ�</option>
                                 <option>�����´�ֵ�</option>
                                 <option>��÷�ֵ�</option>
                                 <option>���ֵֽ�</option>
                                 <option>���ƽֵ�</option>
                                 <option>�����ֵ�</option>
                                 <option>������</option>
                             </select>--%>
                        </div>

                        <div>
                            <span>���������</span>
                            <div class="vV-drop w-246">
                                <apptag:dict result="select" clazz="scroll easyui-combobox" id="hjqk" name="hjqk" dictId="WTQD_SFHJ"/>
                                <%--<div class="view">��ѡ��</div>
                                <div class="drop">
                                    <div class="case">
                                        <div class="scroll">
                                            <a class="act">ѡ��һ</a>
                                            <a>ѡ���</a>
                                            <a>ѡ����</a>
                                        </div>
                                    </div>
                                </div>--%>
                            </div>
                            <%--<div class="vV-drop w-246">
                                <apptag:dict result="selectDiv" clazz="act" id="hjqk" name="hjqk" dictId="WTQD_SFHJ"/>
                                &lt;%&ndash;<div class="view">��ѡ��</div>
                                <div class="drop">
                                    <div class="case">
                                        <div class="scroll">
                                            <a class="act">ѡ��һ</a>
                                            <a>ѡ���</a>
                                            <a>ѡ����</a>
                                        </div>
                                    </div>
                                </div>&ndash;%&gt;
                            </div>--%>
                            <span class="span2">�����ֵ���</span>
                            <div class="vV-drop w-246">
                                <apptag:dict result="selectDiv" clazz="act" id="ssjdDiv" name="ssjdDiv" dictId="XH_XZQY"/>
                                <%--<div class="view">��ѡ��</div>
                                <div class="drop">
                                    <div class="case">
                                        <div class="scroll">
                                            <a class="act">ѡ��һ</a>
                                            <a>ѡ���</a>
                                            <a>ѡ����</a>
                                        </div>
                                    </div>
                                </div>--%>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="labelSearch">
                    <div class="clearfix">
                        <span class="labelText v-fl">��ǩ</span>
                        <div class="labelAdd v-fl">
                            <!-- ���б�ǩ -->
                            <div class="labelAll">
                                <!-- input�� -->
                                <div class="fuzzyBox">
                                    <input class="vV-ipt w-200" id="txt1" result="text" value="" placeholder="�������ǩ�ؼ���"
                                           autocomplete="off">
                                </div>
                                <!-- �Ӻ� -->
                                <strong class="addBtn">+</strong>
                            </div>
                        </div>
                    </div>
                    <!-- ����label -->
                    <div class="labelDown">
                        <i class="labelCloseBtn">��</i>
                        <apptag:dict result="tagDiv" clazz="tabName" id="tag" name="tag" dictId="TAG_MODULE"
                                     defVal="TAG_LABLE_PEOPLE"/>
                        <%--<div class="tabName">
                            <div>��</div>
                            <div class="active">���ʵ��</div>
                            <div>�¼�</div>
                        </div>
                        <div class="tabCon">
                            <div>
                                <div class="tabConItem">
                                    <strong class="">������ǩ</strong>
                                    <div class="everyTab ">
                                        <span class="span">�⼮</span>
                                        <span class="span">δ������</span>
                                        <span class="span">����</span>
                                        <span class="span">����Ժ��</span>
                                        <span class="span">�ŷ��ϻ�</span>
                                        <span class="span">�⼮</span>
                                        <span class="span">δ������</span>
                                        <span class="span">����</span>
                                        <span class="span">�ŷ��ϻ�2</span>
                                        <span class="span">�⼮3</span>
                                        <span class="span">δ������4</span>
                                        <span class="span">����5</span>
                                        <span class="span">�ŷ��ϻ�6</span>
                                        <span class="span">�⼮78</span>
                                        <span class="span">δ������876</span>
                                        <span class="span">����121</span>
                                    </div>
                                </div>
                                <div class="tabConItem">
                                    <strong class="">������</strong>
                                    <div class="everyTab ">
                                        <span class="span">������Ա��ػػ�</span>
                                        <span class="span">���ϼ�ͥ</span>
                                        <span class="span">�����ͥ</span>
                                        <span class="span">������ͯ</span>
                                        <span class="span">֧�ڻػ�</span>
                                        <span class="span">֧��ػ�</span>
                                        <span class="span">֧���ػ�</span>
                                        <span class="span">�ͱ�</span>
                                        <span class="span">֧�ڻػ�gsd</span>
                                        <span class="span">֧��ػ�gs</span>
                                        <span class="span">֧���ػ�ge</span>
                                        <span class="span">�ͱ�wr</span>
                                    </div>
                                </div>
                            </div>
                            <div class="displayNone">
                                <div class="tabConItem">
                                    <strong class="">������Ϣ</strong>
                                    <div class="everyTab ">
                                        <span class="span">�⼮</span>
                                        <span class="span">δ������</span>
                                        <span class="span">����</span>
                                        <span class="span">����Ժ��</span>
                                        <span class="span">�ŷ��ϻ�</span>
                                        <span class="span">�⼮</span>
                                        <span class="span">δ������</span>
                                        <span class="span">����</span>
                                    </div>
                                </div>
                                <div class="tabConItem">
                                    <strong class="">������</strong>
                                    <div class="everyTab ">
                                        <span class="span">������Ա��ػػ�</span>
                                        <span class="span">���ϼ�ͥ</span>
                                        <span class="span">�����ͥ</span>
                                        <span class="span">������ͯ</span>
                                        <span class="span">֧�ڻػ�</span>
                                        <span class="span">֧��ػ�</span>
                                        <span class="span">֧���ػ�</span>
                                        <span class="span">�ͱ�</span>
                                    </div>
                                </div>
                            </div>
                            <div class="displayNone">
                                <div class="tabConItem">
                                    <strong class="">���н���</strong>
                                    <div class="everyTab ">
                                        <span class="span">�⼮</span>
                                        <span class="span">δ������</span>
                                        <span class="span">����</span>
                                        <span class="span">����Ժ��</span>
                                        <span class="span">�ŷ��ϻ�</span>
                                        <span class="span">�⼮</span>
                                        <span class="span">δ������</span>
                                        <span class="span">����</span>
                                    </div>
                                </div>
                                <div class="tabConItem">
                                    <strong class="">������</strong>
                                    <div class="everyTab ">
                                        <span class="span">������Ա��ػػ�</span>
                                        <span class="span">���ϼ�ͥ</span>
                                        <span class="span">�����ͥ</span>
                                        <span class="span">������ͯ</span>
                                        <span class="span">֧�ڻػ�</span>
                                        <span class="span">֧��ػ�</span>
                                        <span class="span">֧���ػ�</span>
                                        <span class="span">�ͱ�</span>
                                    </div>
                                </div>
                            </div>
                        </div>--%>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</body>
</html>