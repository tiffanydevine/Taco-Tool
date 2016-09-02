
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // .val() will grab the text in jquery
    // changing text is $theThing.text('someText or ' + $aJqueryObj)
    //$greeting.text('yes'); 
    
    var $theStreet = $('#street').val();  
    var $theCity = $('#city').val(); 
    var $theAddress = $theStreet + ', ' + $theCity; 
    $greeting.text('Information about ' + $theAddress); 
    var url = 'http://maps.googleapis.com/maps/api/streetview?size=600x300&location=' + $theAddress;
    var response = $.ajax(url); 
    $body.append('<img>' + '</img>'); 
    


    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview

    // YOUR CODE GOES HERE!

    return false;
};

// call function loadData once submit is clicked?  More research 
$('#form-container').submit(loadData);

// http://maps.googleapis.com/maps/api/streetview?size=600x300&location=3325 southeast main street, portland 






