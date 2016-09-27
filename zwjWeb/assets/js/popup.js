/**
 * Created by guang on 2016/9/26.
 */
var popup=function(id,text,funOk,funNo){
    var atttext='<section class="popup"><div><h4>'+text+'</h4><h3><button id="popupOK">确定</button><button id="popupNO">取消</button></h3></div></section>'
    var $aa=document.getElementById(id)
    aa.innerHTML=atttext;
    var $popupOK=document.getElementById("popupOK")
    var $popupNO=document.getElementById("popupNO")
    $popupOK.onclick=function(){
        $aa.style.display="none"
        funOk()
    }
    $popupNO.onclick=function(){
        $aa.style.display="none"
        funNo()
    }
}