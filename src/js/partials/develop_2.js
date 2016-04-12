try{

    $(document).ready(function(){
        $('.slider-item').slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1
        });

        $(".fancybox-button").fancybox({
            prevEffect		: 'none',
            nextEffect		: 'none',
            closeBtn		: false,
            helpers		: {
                title	: { type : 'inside' },
                buttons	: {}
            }
        });

        $('.go-up').click(function(event) {
            $(scroller).animate({scrollTop:0},2000);
        });

    });

    $(window).load(function(){

    });

    $(window).resize(function(){

    });

}
catch(e){

    console.log('develop_2.js \n Error! '+e.name+':'+e.message+'\n'+e.stack);

}