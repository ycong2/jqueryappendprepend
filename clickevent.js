// $(function(){
//     // $('body').html('')

//     bgchange("red");
//     function bgchange(c){
//         $(".target").css("background",c);

//     }
// })

$(function(){
   
    bgchange("red");


    //실행함수
    $(".btns button").click(function(){
        $(this).addClass('on').siblings().removeClass('on');
        
        //지금상황에서 var대신 let 이나 const로 사용안됨  
        var cdata = $(this).data("color");
        var t = $(this).data("event");
        bgchange(cdata, t);
    })

    $(".btns button").eq(2).click();

    //선언적함수(콜백함수)   독립체 어디에 써도 젤먼저 실행됨
    function bgchange(c,t){
        $(".target").css("background",c).html(t);

    }
})