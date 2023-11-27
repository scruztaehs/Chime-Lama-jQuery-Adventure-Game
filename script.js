
$(".yes-button").click(function() {
  $(".plushmiku").hide();
  $(".figurine").show();
});

$(".restart").click(function() {
  $(".plushmiku").show();
  $(".bad").hide();
});

$(".no-button").click(function() {
  $(".plushmiku").hide();
  $(".bad").show();
});

$(".real-img").dblclick(function() {
    $(".pass").text("Woo Hoo you were correct!");
    $(".figurine").hide();
    $(".hide").show();
    
});

$(".booty-img").dblclick(function() {
    $(".pass").text("DOOOOOOMMMMM!");
    $(".figurine").hide();
    $(".bad").show();
    
});

$("img").hover(function(){
    $(".fake-noodle1").toggle();
    $(".fake-noodle2").toggle();
    $(".fake-noodle3").toggle();
    $(".mikuu").click(function(){
        $(".hide").hide();
        $(".hair").show();
    });
});


 
$('body').on('keydown', function (e) {
    if(e.keyCode === 84){
       $(".hair").hide();
       $(".yay").show();
    }
    else {
        $(".hair").hide();
        $(".bad").show();
    }
});



