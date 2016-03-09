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

    $(document).ready(function(){

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