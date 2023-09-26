
// $(function(){
// // bgchange("gray", "열리자마자실행", 2) 확인용

//     const btnea = $(".btns button").length;   //버튼갯수 받아와라   앞에서 바뀌어도 자동으로 변경
//     let btnaction = 0;   //버튼 활성화 번호

//     $(".btns button").click(function(){ //이벤트와 선택자에 귀속된 함수      두번째 읽음  2
//         var bgc = $(this).data('color');
//         var textinfo = $(this).data('event');
//         var idx = $(this).index();
//         bgchange(bgc, textinfo, idx)
//     })

//     //화면이 열리자마자 1버튼 클릭해라      위로 못올라감   세번째 읽음 3
//     $(".btns button").eq(0).click() 
   
    
//     //색상과 컨텐츠 삽입함수
//     //1:색상   2:글자  3:버튼번호        젤먼저 읽음 1
//     function bgchange(c, t, count){
//         $(".btns button").eq(count).addClass('on').siblings().removeClass('on')
//         $(".target").css("background",c).html(t);

//     }
// })



$(function(){
   
    // 독립시켜서 스피드 빠르게 ... 왜냐면 setInterval 써야함으로
        const btnea = $(".btns button").length;  
        let btnaction = 0;   //버튼 활성화 번호
    
        $(".btns button").click(function(){
            clearInterval(roiing);
            btnaction = $(this).index();
            btnfun(btnaction);
        })
        // var를 넣고 하면 클릭하면 할수록 속도가 점점 빨라짐  var를 빼야함   ,3초뒤에 터짐
            roiing = setInterval(function(){            
            btnaction++;
            btnaction %= btnea; 
            btnfun(btnaction);
         },3000)
    
        //화면이 열리자마자 1버튼 클릭해라   
        btnfun(btnaction);
       

        var roiing = setInterval(function(){
            btnaction++;
            btnaction %= btnea; 
            btnfun(btnaction);
        },3000)



        function btnfun(num){ //이벤트와 선택자에 귀속된 함수     
            var obj = $(".btns button").eq(num);
            var bgc = obj.data('color');
            var textinfo = obj.data('event');
            bgchange(bgc, textinfo, num);
        }
        
        //색상과 컨텐츠 삽입함수
        //1:색상   2:글자  3:버튼번호        젤먼저 읽음 1
        function bgchange(c, t, count){
            $(".btns button").eq(count).addClass('on').siblings().removeClass('on')
            $(".target").css("background",c).html(t);
    
        }
    })