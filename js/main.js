$(function(){

    //menu
    $(".main>li").hover(function(){
        $(this).find(".sub").stop().slideDown();
    },function(){
        $(".sub").stop().slideUp();
    })//hover
        


    //slide img
    var n = 0;
    setInterval(function(){
        if(n==3){
            n=0;
        }else{
            n++;
        }
        console.log(n)
        $(".top_move").animate({ top: n * (-400) + "px" }, 500);
    },2500)
    



    //tab

    $(".contents h2").click(function(){
        $(".contents h2").removeClass("on")
        $(this).addClass("on");
        $(".contents ul").hide();
        $(this).next().css({display : "flex"});
    })//click

    //pop
    $(".p_click").click(function(){
        $(".pop").show();
        $(".close").click(function(){
        $(".pop").hide();
    })
    })


})//j