try{
    function contactsMapInit(){
            function initialize() {
                var myLatlng = new google.maps.LatLng(cordX,cordY);
                var myOptions = {
                    zoom: 17,
                    center: myLatlng,
                    disableDefaultUI: true,
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    zoomControlOptions: {
                       position: google.maps.ControlPosition.LEFT_BOTTOM
                    }
                }
                var map = new google.maps.Map(document.getElementById('map'), myOptions);

                var marker = new google.maps.Marker({
                    position: myLatlng,
                    map: map,
                    animation: google.maps.Animation.DROP,
                });
        }
        initialize();
    };

    function scrollReveal(){
        window.sr = ScrollReveal();

        sr.reveal('.scroll-anim', { duration: 200 });
    }

    function fancybox(){
        $('.fancybox').fancybox({
            padding:0,
            fitToView:false,
            wrapCSS:'popupWrap',
            autoSize:true,
        })
    }

    function fixedHeader(){
        if( $(window).width() >= 480 ){
            function fHead(){
                if( $(window).scrollTop()>0 ){
                    $('header').addClass('fixed');
                }else{
                    $('header').removeClass('fixed');
                }
                if( $(window).scrollTop()>$('.exemple').offset().top && $(window).scrollTop() < $('.exemple').offset().top + $('.exemple').outerHeight() - 200 || $(window).scrollTop()>$('.phitomodule').offset().top && $(window).scrollTop() < $('.phitomodule').offset().top + $('.phitomodule').outerHeight() - 100 || $(window).scrollTop()>$('.roskosh').offset().top && $(window).scrollTop() < $('.roskosh').offset().top + $('.roskosh').outerHeight() - 100 || $(window).scrollTop()>$('.production').offset().top-50 && $(window).scrollTop() < $('.production').offset().top + $('.production').outerHeight() - 100){
                    $('header nav , .addres, .logo').addClass('reverse');
                }else{
                    $('header nav , .addres, .logo').removeClass('reverse');
                }
            };
            fHead();
            $(window).scroll(function(event) {
                fHead();
            });
        }
    }

    function productionTabs(){
        $('.production .tabItem').not(':first').hide();
        $('.production .tab').click(function(){
            $('.production .tab').removeClass('active').eq($(this).index()).addClass('active');
            $('.production .tabItem').hide().eq($(this).index()).fadeIn();
        }).eq(0).addClass('active');
    }

    $(document).ready(function(){
        productionTabs();
        fixedHeader();
        fancybox();
        scrollReveal();
    });

    $(window).load(function(){
        contactsMapInit();
    });

    $(window).resize(function(){

    });

}
catch(e){

    console.log('develop_4.js \n Error! '+e.name+':'+e.message+'\n'+e.stack);

}