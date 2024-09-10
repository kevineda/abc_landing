$('header nav li').click(function(){
    // $('header nav li').removeClass('on')
    // $(this).addClass('on')

    $(this).addClass('on').siblings().removeClass('on')
})
