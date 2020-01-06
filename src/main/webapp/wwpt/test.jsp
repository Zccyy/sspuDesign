<%@ page language="java" contentType="text/html; charset=GBK"
         pageEncoding="GBK" %>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<base href="<%=basePath%>">
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
    <name>�߼�����</name>
    <%@ include file="/common/include_header.jsp" %>
    <script>

        /*�ر�iframe*/
        function cancle() {
            closeFrame();
        }

    </script>
</head>
<body>
<div class="pop-name">�߼�����</div>
<div class="pop-box-content" style="width: 780px">
    <form id="ff">
        <div class="h400" style="height: 350px">
            <table border="0" bordercolor="" cellpadding="0" cellspacing="1" class="list bg-grey" width="100%">
                <tr class="tr_tit">
                    <td width="20%" class="td_tit"><label>��λ��װλ��</label></td>
                    <td width="30%" class="td_det">
                        <input class="easyui-validatebox" name="pointAddr" id="pointAddr" result="text"
                               style="width: 96.7%"/>
                    </td>
                    <td width="20%" class="td_tit"><label>��λ״̬</label></td>
                    <td width="30%" class="td_det">
                        <input class="easyui-validatebox" name="pointStatusText" id="pointStatusText" result="text"
                               style="width: 96.7%"/>
                    </td>
                </tr>
                <tr class="tr_tit">
                    <td class="td_tit" width="20%">
                        <lable>��װʱ��</lable>
                    </td>
                    <td class="td_det" width="30%">
                        <input class="easyui-datebox " name="startInstalDate" id="startDate" result="text"
                               style="width: 43.7%"/>
                        ��
                        <input class="easyui-datebox " name="endInstalDate" id="endDate" result="text"
                               style="width: 43.7%"/>
                    </td>
                    <td class="td_tit" width="20%">
                        <lable>��ص�����</lable>
                    </td>
                    <td class="td_det" width="30%">
                        <input class="easyui-validatebox" name="pointName" id="pointName" result="text"
                               style="width: 96.7%"/>
                    </td>
                </tr>
                <tr class="tr_tit">
                    <td class="td_tit">
                        <lable>���Ŀ��</lable>
                    </td>
                    <td class="td_det">
                        <input class="easyui-validatebox" name="cameraTarget" id="cameraTarget" result="text"
                               style="width: 96.7%"/>
                    </td>
                    <td class="td_tit">
                        <lable>�ɳ���ODF���</lable>
                    </td>
                    <td class="td_det">
                        <input class="easyui-validatebox " name="odfNo" id="odfNo" result="text" style="width: 96.7%"/>
                    </td>
                </tr>
                <tr class="tr_tit">
                    <td class="td_tit">
                        <lable>����</lable>
                    </td>
                    <td class="td_det">
                        <input class="easyui-validatebox" name="deviceTypeText" id="deviceTypeText" result="text"
                               style="width: 96.7%"/>
                    </td>
                    <td class="td_tit">
                        <lable>���ʱ��</lable>
                    </td>
                    <td class="td_det">
                        <input class="easyui-validatebox " name="gbNo" id="gbNo" result="text" style="width: 96.7%"/>
                    </td>
                </tr>
                <tr class="tr_tit">
                    <td class="td_tit">
                        <lable>ʩ����λ</lable>
                    </td>
                    <td class="td_det">
                        <br/>
                        <select class="select-sgdw" name="sgdw" id="sgdw" style="width: 96.7%"></select>
                    </td>
                    <td class="td_tit">
                        <lable>������λ</lable>
                    </td>
                    <td class="td_det">
                        <select class="select-police" name="police" id="police" style="width: 96.7%"></select>
                    </td>
                </tr>
                <tr class="tr_tit">
                    <td class="td_tit" width="20%">
                        <lable>����޸�����</lable>
                    </td>
                    <td class="td_det" width="30%">
                        <input class="easyui-datebox " name="lastMDateStart" result="text" style="width: 43.7%"/>
                        ��
                        <input class="easyui-datebox " name="lastMDateEnd" result="text" style="width: 43.7%"/>
                    </td>
                    <td class="td_tit" width="20%"> <lable>��װ״̬ </lable></td>
                    <td class="td_det" width="30%">
                        <select class = "easyui-combobox" name="stateCode" id="stateCode" style="width: 96.7%" value="">
                            <option value=""></option>
                            <option value="10021">������</option>
                            <option value="10002">�걨����</option>
                            <option value="10010">�����</option>
                            <option value="10020">����װ</option>
                            <option value="10030">������ȷ��</option>
                            <option value="10040">��ҵ��ȷ��</option>
                            <option value="10050">�����</option>
                        </select>
                    </td>
                </tr>
            </table>
        </div>
        <div class="table-btn-box">
            <a class="easyui-linkbutton l-btn-blue pd10" onclick="doQuery()" style="height: 28px;">��ѯ</a>
            <a class="easyui-linkbutton pd10" onclick="cancle()" style="height: 30px;">ȡ��</a>
        </div>
    </form>
</div>

</body>
</html>