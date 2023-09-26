// $(function(){
//     // $('body').html('')

//     bgchange("red");
//     function bgchange(c){
//         $(".target").css("background",c);

//     }
// })

$(function(){
   
    var count = 0;


    //실행함수
    $(".btns button").click(function(){
        //버튼이 클릭해야지만 실행되는 이름없는 함수
        $(this).addClass('on').siblings().removeClass('on');
        
        //지금상황에서 var대신 let 이나 const로 사용안됨  
        var cdata = $(this).data("color");
        var t = $(this).data("event");
        bgchange(cdata, t);
    })
    
    //위치 절대 위로 못옮김  화면이 열리자마자
    $(".btns button").eq(count).click();

    setInterval(function(){
        //3초마다
        count++;
        count %=4;
        $(".btns button").eq(count).click();
    },3000)

    //선언적함수(콜백함수)   독립체 어디에 써도 젤먼저 실행됨
    function bgchange(c,t){
        $(".target").css("background",c).html(t);

    }
})