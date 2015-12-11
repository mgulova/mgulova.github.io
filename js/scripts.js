$(function() {

    $('.instagram-lite').instagramLite({
        clientID: '624415625',
        username: 'tenthousandmoths',
        list: false,
        urls: false,
        load_more: '.load-more',
        success: function() {
            console.log('The request was successful!');
        },
        error: function(errorCode, errorMessage) {

            console.log('There was an error with the request');

            if(errorCode && errorMessage) {
                console.log(errorCode +': '+ errorMessage);
            }
        }
    });

});



