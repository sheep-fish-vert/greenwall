try{

    $(document).ready(function(){
        console.log($('.slider-item').length);
        $('.slider-item').slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1
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