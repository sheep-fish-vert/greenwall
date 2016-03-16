try{

    function interiorSlider(){

        $('.interior-slider').slick({
            dots:true,
            slidesToShow:1,
            slidesToScroll:1,
            adaptiveHeight: true,
            draggable:false,
            responsive: [
                {
                    breakpoint: 666,
                    settings:{
                        arrows:false
                    }
                }
            ]
        });

    };

    $(document).ready(function(){

        interiorSlider();

    });

    $(window).load(function(){

    });

    $(window).resize(function(){

    });

}
catch(e){

    console.log('develop_1.js \n Error! '+e.name+':'+e.message+'\n'+e.stack);

}