<!-- 定义全局变量，可以使用fss.slideTo(2)方法直接跳转到相应页面-->
var fss;
var loadImage=function (url,ele,left,top) {
        var img = new Image();
        img.src = url;
        img.onload = function(){ //图片下载完毕时异步调用callback函数。
            //第五页图片动态加载完毕后进行图片大小以及位置的处理
            var sr=img.src;
            $("."+ele).attr("src",sr)
            $("."+ele).css({
                left: left,
                top:top,
            })
        };
    }

$(function() {
    fss = new ddfullscreenslider({
        sliderid: 'dowebok',
        addHash:true,
        onslide:function($slide,index){
            console.log(index)
            switch (index){
                case 0:{

                } break;
                case 1:{
                    //加载第三页图片
                    $(".ys_1").attr("src","images/ys_1.png")
                    $(".ys_2").attr("src","images/ys_2.png")
                    $(".ys_3").attr("src","images/ys_3.png")
                    $(".ys_4").attr("src","images/ys_4.png")
                    $(".ys_5").attr("src","images/ys_5.png")
                    $(".ys_6").attr("src","images/ys_6.png")
                } break;
                case 2:{
                    //加载第三页图片
                    $(".ys_1").attr("src","images/ys_1.png")
                    $(".ys_2").attr("src","images/ys_2.png")
                    $(".ys_3").attr("src","images/ys_3.png")
                    $(".ys_4").attr("src","images/ys_4.png")
                    $(".ys_5").attr("src","images/ys_5.png")
                    $(".ys_6").attr("src","images/ys_6.png")
                    $(".section3_img1").addClass("section3_img1s")
                    $(".section3_img2").addClass("section3_img2s")
                    $(".section3_img3").addClass("section3_img3s")
                    $(".section3_img4").addClass("section3_img4s")
                    $(".section3_img5").addClass("section3_img5s")
                    $(".section3_img6").addClass("section3_img6s")
                    //加载第四页图片
                    $(".sec4_img1").attr("src","images/1.gif")
                    $(".sec4_img2").attr("src","images/2.gif")
                    $(".sec4_img3").attr("src","images/3.gif")
                    $(".sec4_img4").attr("src","images/41.png")
                    $(".sec4_img5").attr("src","images/42.png")
                    $(".sec4_img6").attr("src","images/51.png")
                    $(".sec4_img7").attr("src","images/5.gif")
                    $(".sec4_img8").attr("src","images/6.gif")
                    $(".sec4_img9").attr("src","images/61.gif")
                    $(".sec4_img10").attr("src","images/7.gif")
                    $(".sec4_img11").attr("src","images/8.gif")
                    $(".sec4_img12").attr("src","images/81.png")
                    //    加载第五页
                    loadImage("../images/aqy.png","sec5_logo1","20%","10%")
                    loadImage("../images/aqy.png","sec5_logo2","10%","20%")
                    loadImage("../images/aqy.png","sec5_logo3","30%","50%")
                    loadImage("../images/aqy.png","sec5_logo4","82%","20%")
                    loadImage("../images/aqy.png","sec5_logo5","80%","60%")
                    loadImage("../images/aqy.png","sec5_logo6","90%","90%")
                }break;
                case 3:{
                    //加载第四页图片
                    $(".sec4_img1").attr("src","images/1.gif")
                    $(".sec4_img2").attr("src","images/2.gif")
                    $(".sec4_img3").attr("src","images/3.gif")
                    $(".sec4_img4").attr("src","images/41.png")
                    $(".sec4_img5").attr("src","images/42.png")
                    $(".sec4_img6").attr("src","images/51.png")
                    $(".sec4_img7").attr("src","images/5.gif")
                    $(".sec4_img8").attr("src","images/6.gif")
                    $(".sec4_img9").attr("src","images/61.gif")
                    $(".sec4_img10").attr("src","images/7.gif")
                    $(".sec4_img11").attr("src","images/8.gif")
                    $(".sec4_img12").attr("src","images/81.png")
                    $(".sec4_img1").addClass("sec4_img1ss")
                    $(".sec4_img2").addClass("sec4_img2ss")
                    $(".sec4_img3").addClass("sec4_img3ss")
                    $(".sec4_img4").addClass("sec4_img4ss")
                    $(".sec4_img5").addClass("sec4_img5ss")
                    $(".sec4_img6").addClass("sec4_img6ss")
                    $(".sec4_img7").addClass("sec4_img7ss")
                    $(".sec4_img8").addClass("sec4_img8ss")
                    $(".sec4_img9").addClass("sec4_img9ss")
                    $(".sec4_img10").addClass("sec4_img10ss")
                    $(".sec4_img11").addClass("sec4_img11ss")
                    $(".sec4_img12").addClass("sec4_img12ss")

                } break;
                case 4:{
                    loadImage("../images/aqy.png","sec5_logo1","20%","10%")
                    loadImage("../images/aqy.png","sec5_logo2","10%","20%")
                    loadImage("../images/aqy.png","sec5_logo3","30%","50%")
                    loadImage("../images/aqy.png","sec5_logo4","82%","20%")
                    loadImage("../images/aqy.png","sec5_logo5","80%","60%")
                    loadImage("../images/aqy.png","sec5_logo6","90%","90%")

                    //                    添加缓慢聚拢类名
                    setTimeout(function(){
                        $(".sec5_img_div>img").each(function(){
                            $(this).addClass("slow_to_center")
                        })
                    },1000)

                } break;
            }
        }
    });
});
window.onload=function (){
    //二维码旋转
    $(".rotate").hover(function(){
        $(".back").addClass("bshow")
        $(".font").addClass("fhid")
    },function(){
        $(".back").removeClass("bshow")
        $(".font").removeClass("fhid")
    })
    goerweima()
    var $html="";
    var $w=document.documentElement.clientWidth;
    var $h=document.documentElement.clientHeight;
    $(".section1_button").click(function(e){
        fss.slideTo(1)
    })
    $(".head_phone").hover(function(){
        $(".head_phone_num").css("display","block")
    },function(){
        $(".head_phone_num").css("display","none")
    })
    $(".head_wx").hover(function(){
        $(".wxhead").css("display","block")
    },function(){
        $(".wxhead").css("display","none")
    })
    var scla_w=$w/1920;
    var scla_h=$h/1920;
    pao1(25)
    pao2(15)
    pao3(10)
    pao4(25)
    sec2_phone(10)
//        第三页创建泡泡
    $(".section3_pao").each(function(index){
        sec3_pao("section3_pao"+(index+1),10)
        $(".section3_pao"+(index+1)+" img").each(function(i){
            var eles="section3_pao"+(index+1)+i
            $html+=float_nosacle(eles)
        })
    })
//        第四页创建泡泡
    sec4_pao("sec4pao",40)

//        第五页改变中心logo的位置
//        第五页创建泡泡
    sec5_pao("sec5_img_div",10,center)

    //$(".section1_yzyy").css({"margin-top":scla_w*250+"px"})
    $(".section1_button").css({"margin-top":scla_w*100+"px"})

    for(var i=0; i<$(".pao1").length;i++){
        $html+=float_fn("a1"+i)
    }
    for(var i=0; i<$(".pao2").length;i++){
        $html+=float_fn("a2"+i)
    }
    for(var i=0; i<$(".pao3").length;i++){
        $html+=float_fn("a3"+i)
    }
    for(var i=0; i<$(".pao4").length;i++){
        $html+=float_fn("a4"+i)
    }
    for(var i=0; i<$(".sec2_pao_img").length-1;i++){
        $html+=float_fn_nosacle("sec2_pao_a"+i)
    }
    for(var i=1; i<=$(".pao_z").length;i++){
        $html+=float_fn_nosacle("pao_zi"+i)
    }
    for(var i=0; i<$(".sec4pao>img").length;i++){
        $html+=float_nosacle("sec4pao"+i)
    }
    $html+=float_fn_nosacle("sec2_phone")
    $("#keyframes").html(float_fn("sheyingji")+float_fn("youxi")+float_fn("phone_float")+float_fn("shoutao")+$html)


}
//二维码旋转
var goerweima=function(){
    var state=true;
    setInterval(function(){
        if(state){
            $(".flip").addClass("flips")
            //state=false;
        }
        setTimeout(function(){
            $(".flip").removeClass("flips")
        },2000)


    },5000)
}
//    摄像机的泡泡；
function pao1(lengths){
    var $w=document.documentElement.clientWidth;
    var $h=document.documentElement.clientHeight;
    var scla_w=$w/1920;
    var scla_h=$h/1920;
    var $le=$(".pao_1").position().left-(1920-$w)/2;
    var $to=scla_w*$(".pao_1").position().top;
    if($le<=0){
        $le=20;
    }
    $(".pao_1").css({"width":scla_w*600+"px","height":scla_w*800+"px","left":$le+"px","top":$to+"px"})
    for(var i=0; i<lengths; i++){
        $(".pao_1").html($(".pao_1").html()+'<img src="images/pao.png" alt="" style="width:'+Math.ceil(Math.random()*30+10)+'px;left:'+Math.ceil(Math.random()*600)+'px;top:'+Math.ceil(Math.random()*500+100)+'px" class="pao pao1 a1'+i+' a1'+i+'s"/>')

    }
}
//    游戏的泡泡
function pao2(lengths){
    var $w=document.documentElement.clientWidth;
    var $h=document.documentElement.clientHeight;
    var scla_w=$w/1920;
    var scla_h=$h/1920;
    var $le=$(".pao_2").position().left-(1920-$w)/2;
    var $to=scla_w*$(".pao_2").position().top;
    if($le<=0){
        $le=20;
    }
    $(".pao_2").css({"width":scla_w*500+"px","height":scla_w*300+"px","left":$le+"px","top":$to+"px"})
    for(var i=0; i<lengths; i++){
        $(".pao_2").html($(".pao_2").html()+'<img src="images/pao.png" alt="" style="width:'+Math.ceil(Math.random()*30+10)+'px;left:'+Math.ceil(Math.random()*500)+'px;top:'+Math.ceil(Math.random()*300)+'px" class="pao  pao2 a2'+i+' a2'+i+'s"/>')

    }
}
//    游戏的泡泡
function pao3(lengths){
    var $w=document.documentElement.clientWidth;
    var $h=document.documentElement.clientHeight;
    var scla_w=$w/1920;
    var scla_h=$h/1920;
    var $le=$(".pao_3").position().left-(1920-$w)/2;
    var $to=scla_w*$(".pao_3").position().top;
    if($le<=0){
        $le=20;
    }
    $(".pao_3").css({"width":scla_w*500+"px","height":scla_w*400+"px","left":$le+"px","top":$to+"px"})
    for(var i=0; i<lengths; i++){
        $(".pao_3").html($(".pao_3").html()+'<img src="images/pao.png" alt="" style="width:'+Math.ceil(Math.random()*30+10)+'px;left:'+Math.ceil(Math.random()*500)+'px;top:'+Math.ceil(Math.random()*400)+'px" class="pao pao3 a3'+i+' a3'+i+'s"/>')

    }
}
//    游戏的泡泡
function pao4(lengths){
    var $w=document.documentElement.clientWidth;
    var $h=document.documentElement.clientHeight;
    var scla_w=$w/1920;
    var scla_h=$h/1920;
    var $le=$(".pao_4").position().left-(1920-$w)/2;
    var $to=scla_w*$(".pao_4").position().top;
    if($le<=0){
        $le=20;
    }
    $(".pao_4").css({"width":scla_w*500+"px","height":scla_w*400+"px","left":$le+"px","top":$to+"px"})
    for(var i=0; i<=lengths; i++){
        $(".pao_4").html($(".pao_4").html()+'<img src="images/pao.png" alt="" style="width:'+Math.ceil(Math.random()*30+10)+'px;left:'+Math.ceil(Math.random()*500)+'px;top:'+Math.ceil(Math.random()*400)+'px" class="pao pao4 a4'+i+' a4'+i+'s"/>')

    }
}
//    第二屏手机的泡泡
function sec2_phone(lengths){
    var $w=document.documentElement.clientWidth;
    var $h=document.documentElement.clientHeight;
    var scla_w=$w/1920;
    var scla_h=$h/1920;
    var $le=$(".sec2_pao").position().left;
    var $to=scla_w*$(".sec2_pao").position().top;
    if($le<=0){
        $le=20;
    }
    $(".sec2_pao").css({"width":scla_w*500+"px","height":scla_w*400+"px","left":$le+"px","top":$to+"px"})
    for(var i=0; i<=lengths; i++){
        $(".sec2_pao").html($(".sec2_pao").html()+'<img src="images/pao.png" alt="" style="width:'+Math.ceil(Math.random()*50+10)+'px;left:'+Math.ceil(Math.random()*500)+'px;top:'+Math.ceil(Math.random()*400)+'px" class="pao sec2_pao_img sec2_pao_a'+i+' sec2_pao_a'+i+'s"/>')

    }
}
//    第三屏公用泡泡创建；
function sec3_pao(ele,lengths){

    for(var i=0; i<=lengths; i++){
        $("."+ele).html( $("."+ele).html()+'<img src="images/pao.png" alt="" style="width:'+Math.ceil(Math.random()*20+10)+'px;left:'+Math.ceil(Math.random()*300)+'px;top:'+Math.ceil(Math.random()*240)+'px" class="pao sec3_pao_img '+ele+i+' '+ele+i+'s"/>')

    }
}
//    第四屏公用泡泡创建；
function sec4_pao(ele,lengths){
    for(var i=0; i<=lengths; i++){
        $("."+ele).html( $("."+ele).html()+'<img src="images/pao.png" alt="" style="width:'+Math.ceil(Math.random()*40+10)+'px;left:'+Math.ceil(Math.random()*100)+'%;top:'+Math.ceil(Math.random()*100)+'%" class="pao sec4_pao_img '+ele+i+' '+ele+i+'s"/>')

    }
}
//    第五屏公用泡泡创建；
function sec5_pao(ele,lengths,fn){
    var $h=document.documentElement.clientHeight;
    for(var i=0; i<=lengths; i++){
        $("."+ele).html( $("."+ele).html()+'<img src="images/pao.png" alt="" style="width:'+Math.ceil(Math.random()*20+10)+'px;left:'+Math.ceil(Math.random()*100)+'%;top:'+Math.ceil(Math.random()*100)+'%; -webkit-transition:all 1s; -moz-transition:all 1s; -ms-transition:all 1s; -o-transition:all 1s;" class="pao sec5_pao_img '+ele+i+' '+ele+i+'s"/>')
    }
    fn()
}
//    没有任何缩放的浮动模块；
function float_nosacle(ele){

    var $le=$("."+ele+"").position().left;
    var $to=$("."+ele+"").position().top;
    var num=[0,4,8,12,16,-4,-8,-12,-16]
    var html_every="@-webkit-keyframes "+ele+"{0%{left:"+($le)+"px;top:"+($to)+"px}12%{left:"+($le+num[Math.ceil(Math.random()*8)])+"px;top:"+($to+num[Math.ceil(Math.random()*8)])+"px}24%{left:"+($le+num[Math.ceil(Math.random()*8)])+"px;top:"+($to+num[Math.ceil(Math.random()*8)])+"px}36%{left:"+($le+num[Math.ceil(Math.random()*8)])+"px;top:"+($to+num[Math.ceil(Math.random()*8)])+"px}48%{left:"+($le+num[Math.ceil(Math.random()*8)])+"px;top:"+($to+num[Math.ceil(Math.random()*8)])+"px}60%{left:"+($le+num[Math.ceil(Math.random()*8)])+"px;top:"+($to+num[Math.ceil(Math.random()*8)])+"px}72%{left:"+($le+num[Math.ceil(Math.random()*8)])+"px;top:"+($to+num[Math.ceil(Math.random()*8)])+"px}85%{left:"+($le+num[Math.ceil(Math.random()*8)])+"px;top:"+($to+num[Math.ceil(Math.random()*8)])+"px}100%{left:"+($le)+"px;top:"+($to)+"px}} ."+ele+"s{-webkit-animation: "+ele+" 15s infinite ;-webkit-animation-timing-function:linear;}@-moz-keyframes "+ele+"{0%{left:"+($le)+"px;top:"+($to)+"px}12%{left:"+($le+num[Math.ceil(Math.random()*8)])+"px;top:"+($to+num[Math.ceil(Math.random()*8)])+"px}24%{left:"+($le+num[Math.ceil(Math.random()*8)])+"px;top:"+($to+num[Math.ceil(Math.random()*8)])+"px}36%{left:"+($le+num[Math.ceil(Math.random()*8)])+"px;top:"+($to+num[Math.ceil(Math.random()*8)])+"px}48%{left:"+($le+num[Math.ceil(Math.random()*8)])+"px;top:"+($to+num[Math.ceil(Math.random()*8)])+"px}60%{left:"+($le+num[Math.ceil(Math.random()*8)])+"px;top:"+($to+num[Math.ceil(Math.random()*8)])+"px}72%{left:"+($le+num[Math.ceil(Math.random()*8)])+"px;top:"+($to+num[Math.ceil(Math.random()*8)])+"px}85%{left:"+($le+num[Math.ceil(Math.random()*8)])+"px;top:"+($to+num[Math.ceil(Math.random()*8)])+"px}100%{left:"+($le)+"px;top:"+($to)+"px}} ."+ele+"s{-moz-animation: "+ele+" 15s infinite ;-moz-animation-timing-function:linear;}@-ms-keyframes "+ele+"{0%{left:"+($le)+"px;top:"+($to)+"px}12%{left:"+($le+num[Math.ceil(Math.random()*8)])+"px;top:"+($to+num[Math.ceil(Math.random()*8)])+"px}24%{left:"+($le+num[Math.ceil(Math.random()*8)])+"px;top:"+($to+num[Math.ceil(Math.random()*8)])+"px}36%{left:"+($le+num[Math.ceil(Math.random()*8)])+"px;top:"+($to+num[Math.ceil(Math.random()*8)])+"px}48%{left:"+($le+num[Math.ceil(Math.random()*8)])+"px;top:"+($to+num[Math.ceil(Math.random()*8)])+"px}60%{left:"+($le+num[Math.ceil(Math.random()*8)])+"px;top:"+($to+num[Math.ceil(Math.random()*8)])+"px}72%{left:"+($le+num[Math.ceil(Math.random()*8)])+"px;top:"+($to+num[Math.ceil(Math.random()*8)])+"px}85%{left:"+($le+num[Math.ceil(Math.random()*8)])+"px;top:"+($to+num[Math.ceil(Math.random()*8)])+"px}100%{left:"+($le)+"px;top:"+($to)+"px}} ."+ele+"s{-ms-animation: "+ele+" 15s infinite ;-ms-animation-timing-function:linear;}@-o-keyframes "+ele+"{0%{left:"+($le)+"px;top:"+($to)+"px}12%{left:"+($le+num[Math.ceil(Math.random()*8)])+"px;top:"+($to+num[Math.ceil(Math.random()*8)])+"px}24%{left:"+($le+num[Math.ceil(Math.random()*8)])+"px;top:"+($to+num[Math.ceil(Math.random()*8)])+"px}36%{left:"+($le+num[Math.ceil(Math.random()*8)])+"px;top:"+($to+num[Math.ceil(Math.random()*8)])+"px}48%{left:"+($le+num[Math.ceil(Math.random()*8)])+"px;top:"+($to+num[Math.ceil(Math.random()*8)])+"px}60%{left:"+($le+num[Math.ceil(Math.random()*8)])+"px;top:"+($to+num[Math.ceil(Math.random()*8)])+"px}72%{left:"+($le+num[Math.ceil(Math.random()*8)])+"px;top:"+($to+num[Math.ceil(Math.random()*8)])+"px}85%{left:"+($le+num[Math.ceil(Math.random()*8)])+"px;top:"+($to+num[Math.ceil(Math.random()*8)])+"px}100%{left:"+($le)+"px;top:"+($to)+"px}} ."+ele+"s{-o-animation: "+ele+" 15s infinite ;-o-animation-timing-function:linear;}"
    return html_every;
}
//不针对全屏缩放，只针对内容去缩放的浮动；
function float_fn_nosacle(ele){
//        console.log(ele)
    var $w=document.documentElement.clientWidth;
    var $h=document.documentElement.clientHeight;
    var scla_w=$w/1920;
    var scla_h=$h/1920;
//        console.log($("."+ele+""))
    var $le=$("."+ele+"").position().left;
    if($le<=0){
        $le=20;
    }
    var $to=$("."+ele+"").position().top;

    var num=[0,4,8,12,16,-4,-8,-12,-16]
    var html_every="@-webkit-keyframes "+ele+"{0%{left:"+($le)+"px;top:"+($to)+"px}12%{left:"+($le+num[Math.ceil(Math.random()*8)])+"px;top:"+($to+num[Math.ceil(Math.random()*8)])+"px}24%{left:"+($le+num[Math.ceil(Math.random()*8)])+"px;top:"+($to+num[Math.ceil(Math.random()*8)])+"px}36%{left:"+($le+num[Math.ceil(Math.random()*8)])+"px;top:"+($to+num[Math.ceil(Math.random()*8)])+"px}48%{left:"+($le+num[Math.ceil(Math.random()*8)])+"px;top:"+($to+num[Math.ceil(Math.random()*8)])+"px}60%{left:"+($le+num[Math.ceil(Math.random()*8)])+"px;top:"+($to+num[Math.ceil(Math.random()*8)])+"px}72%{left:"+($le+num[Math.ceil(Math.random()*8)])+"px;top:"+($to+num[Math.ceil(Math.random()*8)])+"px}85%{left:"+($le+num[Math.ceil(Math.random()*8)])+"px;top:"+($to+num[Math.ceil(Math.random()*8)])+"px}100%{left:"+($le)+"px;top:"+($to)+"px}} ."+ele+"s{-webkit-animation: "+ele+" 15s infinite ;-webkit-animation-timing-function:linear;}@-moz-keyframes "+ele+"{0%{left:"+($le)+"px;top:"+($to)+"px}12%{left:"+($le+num[Math.ceil(Math.random()*8)])+"px;top:"+($to+num[Math.ceil(Math.random()*8)])+"px}24%{left:"+($le+num[Math.ceil(Math.random()*8)])+"px;top:"+($to+num[Math.ceil(Math.random()*8)])+"px}36%{left:"+($le+num[Math.ceil(Math.random()*8)])+"px;top:"+($to+num[Math.ceil(Math.random()*8)])+"px}48%{left:"+($le+num[Math.ceil(Math.random()*8)])+"px;top:"+($to+num[Math.ceil(Math.random()*8)])+"px}60%{left:"+($le+num[Math.ceil(Math.random()*8)])+"px;top:"+($to+num[Math.ceil(Math.random()*8)])+"px}72%{left:"+($le+num[Math.ceil(Math.random()*8)])+"px;top:"+($to+num[Math.ceil(Math.random()*8)])+"px}85%{left:"+($le+num[Math.ceil(Math.random()*8)])+"px;top:"+($to+num[Math.ceil(Math.random()*8)])+"px}100%{left:"+($le)+"px;top:"+($to)+"px}} ."+ele+"s{-moz-animation: "+ele+" 15s infinite ;-moz-animation-timing-function:linear;}@-ms-keyframes "+ele+"{0%{left:"+($le)+"px;top:"+($to)+"px}12%{left:"+($le+num[Math.ceil(Math.random()*8)])+"px;top:"+($to+num[Math.ceil(Math.random()*8)])+"px}24%{left:"+($le+num[Math.ceil(Math.random()*8)])+"px;top:"+($to+num[Math.ceil(Math.random()*8)])+"px}36%{left:"+($le+num[Math.ceil(Math.random()*8)])+"px;top:"+($to+num[Math.ceil(Math.random()*8)])+"px}48%{left:"+($le+num[Math.ceil(Math.random()*8)])+"px;top:"+($to+num[Math.ceil(Math.random()*8)])+"px}60%{left:"+($le+num[Math.ceil(Math.random()*8)])+"px;top:"+($to+num[Math.ceil(Math.random()*8)])+"px}72%{left:"+($le+num[Math.ceil(Math.random()*8)])+"px;top:"+($to+num[Math.ceil(Math.random()*8)])+"px}85%{left:"+($le+num[Math.ceil(Math.random()*8)])+"px;top:"+($to+num[Math.ceil(Math.random()*8)])+"px}100%{left:"+($le)+"px;top:"+($to)+"px}} ."+ele+"s{-ms-animation: "+ele+" 15s infinite ;-ms-animation-timing-function:linear;}@-o-keyframes "+ele+"{0%{left:"+($le)+"px;top:"+($to)+"px}12%{left:"+($le+num[Math.ceil(Math.random()*8)])+"px;top:"+($to+num[Math.ceil(Math.random()*8)])+"px}24%{left:"+($le+num[Math.ceil(Math.random()*8)])+"px;top:"+($to+num[Math.ceil(Math.random()*8)])+"px}36%{left:"+($le+num[Math.ceil(Math.random()*8)])+"px;top:"+($to+num[Math.ceil(Math.random()*8)])+"px}48%{left:"+($le+num[Math.ceil(Math.random()*8)])+"px;top:"+($to+num[Math.ceil(Math.random()*8)])+"px}60%{left:"+($le+num[Math.ceil(Math.random()*8)])+"px;top:"+($to+num[Math.ceil(Math.random()*8)])+"px}72%{left:"+($le+num[Math.ceil(Math.random()*8)])+"px;top:"+($to+num[Math.ceil(Math.random()*8)])+"px}85%{left:"+($le+num[Math.ceil(Math.random()*8)])+"px;top:"+($to+num[Math.ceil(Math.random()*8)])+"px}100%{left:"+($le)+"px;top:"+($to)+"px}} ."+ele+"s{-o-animation: "+ele+" 15s infinite ;-o-animation-timing-function:linear;}"
    return html_every;
}
//固定大模块的浮动；
function float_fn(ele){
//        console.log(ele)
    var $w=document.documentElement.clientWidth;
    var $h=document.documentElement.clientHeight;
    var scla_w=$w/1920;
    var scla_h=$h/1920;
//        console.log($("."+ele+""))
    var $le=$("."+ele+"").position().left-(1920-$w)/2;
    if($le<=0){
        $le=20;
    }
    var $to=scla_w*$("."+ele+"").position().top;
    var $wd=scla_w* $("."+ele+"").width();
    $("."+ele+"").css({
        "left":$le+"px",
        "top":$to+"px",
        "width":$wd+"px"
    })
    var num=[0,4,8,12,16,-4,-8,-12,-16]
    var html_every="@-webkit-keyframes "+ele+"{0%{left:"+($le)+"px;top:"+($to)+"px}12%{left:"+($le+num[Math.ceil(Math.random()*8)])+"px;top:"+($to+num[Math.ceil(Math.random()*8)])+"px}24%{left:"+($le+num[Math.ceil(Math.random()*8)])+"px;top:"+($to+num[Math.ceil(Math.random()*8)])+"px}36%{left:"+($le+num[Math.ceil(Math.random()*8)])+"px;top:"+($to+num[Math.ceil(Math.random()*8)])+"px}48%{left:"+($le+num[Math.ceil(Math.random()*8)])+"px;top:"+($to+num[Math.ceil(Math.random()*8)])+"px}60%{left:"+($le+num[Math.ceil(Math.random()*8)])+"px;top:"+($to+num[Math.ceil(Math.random()*8)])+"px}72%{left:"+($le+num[Math.ceil(Math.random()*8)])+"px;top:"+($to+num[Math.ceil(Math.random()*8)])+"px}85%{left:"+($le+num[Math.ceil(Math.random()*8)])+"px;top:"+($to+num[Math.ceil(Math.random()*8)])+"px}100%{left:"+($le)+"px;top:"+($to)+"px}} ."+ele+"s{-webkit-animation: "+ele+" 15s infinite ;-webkit-animation-timing-function:linear;}@-moz-keyframes "+ele+"{0%{left:"+($le)+"px;top:"+($to)+"px}12%{left:"+($le+num[Math.ceil(Math.random()*8)])+"px;top:"+($to+num[Math.ceil(Math.random()*8)])+"px}24%{left:"+($le+num[Math.ceil(Math.random()*8)])+"px;top:"+($to+num[Math.ceil(Math.random()*8)])+"px}36%{left:"+($le+num[Math.ceil(Math.random()*8)])+"px;top:"+($to+num[Math.ceil(Math.random()*8)])+"px}48%{left:"+($le+num[Math.ceil(Math.random()*8)])+"px;top:"+($to+num[Math.ceil(Math.random()*8)])+"px}60%{left:"+($le+num[Math.ceil(Math.random()*8)])+"px;top:"+($to+num[Math.ceil(Math.random()*8)])+"px}72%{left:"+($le+num[Math.ceil(Math.random()*8)])+"px;top:"+($to+num[Math.ceil(Math.random()*8)])+"px}85%{left:"+($le+num[Math.ceil(Math.random()*8)])+"px;top:"+($to+num[Math.ceil(Math.random()*8)])+"px}100%{left:"+($le)+"px;top:"+($to)+"px}} ."+ele+"s{-moz-animation: "+ele+" 15s infinite ;-moz-animation-timing-function:linear;}@-ms-keyframes "+ele+"{0%{left:"+($le)+"px;top:"+($to)+"px}12%{left:"+($le+num[Math.ceil(Math.random()*8)])+"px;top:"+($to+num[Math.ceil(Math.random()*8)])+"px}24%{left:"+($le+num[Math.ceil(Math.random()*8)])+"px;top:"+($to+num[Math.ceil(Math.random()*8)])+"px}36%{left:"+($le+num[Math.ceil(Math.random()*8)])+"px;top:"+($to+num[Math.ceil(Math.random()*8)])+"px}48%{left:"+($le+num[Math.ceil(Math.random()*8)])+"px;top:"+($to+num[Math.ceil(Math.random()*8)])+"px}60%{left:"+($le+num[Math.ceil(Math.random()*8)])+"px;top:"+($to+num[Math.ceil(Math.random()*8)])+"px}72%{left:"+($le+num[Math.ceil(Math.random()*8)])+"px;top:"+($to+num[Math.ceil(Math.random()*8)])+"px}85%{left:"+($le+num[Math.ceil(Math.random()*8)])+"px;top:"+($to+num[Math.ceil(Math.random()*8)])+"px}100%{left:"+($le)+"px;top:"+($to)+"px}} ."+ele+"s{-ms-animation: "+ele+" 15s infinite ;-ms-animation-timing-function:linear;}@-o-keyframes "+ele+"{0%{left:"+($le)+"px;top:"+($to)+"px}12%{left:"+($le+num[Math.ceil(Math.random()*8)])+"px;top:"+($to+num[Math.ceil(Math.random()*8)])+"px}24%{left:"+($le+num[Math.ceil(Math.random()*8)])+"px;top:"+($to+num[Math.ceil(Math.random()*8)])+"px}36%{left:"+($le+num[Math.ceil(Math.random()*8)])+"px;top:"+($to+num[Math.ceil(Math.random()*8)])+"px}48%{left:"+($le+num[Math.ceil(Math.random()*8)])+"px;top:"+($to+num[Math.ceil(Math.random()*8)])+"px}60%{left:"+($le+num[Math.ceil(Math.random()*8)])+"px;top:"+($to+num[Math.ceil(Math.random()*8)])+"px}72%{left:"+($le+num[Math.ceil(Math.random()*8)])+"px;top:"+($to+num[Math.ceil(Math.random()*8)])+"px}85%{left:"+($le+num[Math.ceil(Math.random()*8)])+"px;top:"+($to+num[Math.ceil(Math.random()*8)])+"px}100%{left:"+($le)+"px;top:"+($to)+"px}} ."+ele+"s{-o-animation: "+ele+" 15s infinite ;-o-animation-timing-function:linear;}"
    return html_every;
}
////    第五页鼠标浮上全部聚合动画
function center(){
    $(".sec5_center").hover(function(){
        $(".sec5_img_div>img").each(function(){
            $(this).removeClass("slow_to_center")
        })
    },function(){
        $(".sec5_img_div>img").each(function(){
            $(this).addClass("slow_to_center")
        })
    })
}