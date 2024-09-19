$('.rating>div').on('click',function(){
    $('.rating>div').css('background-color','hsl(220, 15%, 24%)');
    $(this).css('background-color','hsl(0, 0%, 100%)');
    let clickedElementId=$(this).attr('id');
    console.log(clickedElementId);

    $('.submit-button').on('click',function(){
        $('.div-1').addClass('hide');
        $('.div-2').removeClass('hide');
        $(' .text-1>p ').text(' You selected '+clickedElementId+' out of 5');
    });
});

