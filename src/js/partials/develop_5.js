try{

    $(document).ready(function(){
        $('.sliderius').slick({
              dots: true,
              infinite: true,
              speed: 500

            });
    });

    $(window).load(function(){

    });

    $(window).resize(function(){

    });

}
catch(e){

    console.log('develop_5.js \n Error! '+e.name+':'+e.message+'\n'+e.stack);

}