/**
 * Created by davem on 27/11/2016.
 */
var learnjavascript={};

learnjavascript.showView = function() {
    var questionView = $('<div class="question-view">').text('Arriving Soon!');
    $('view-container').empty().append(questionView);
};

learnjavascript.showView = function(hash){
    var routes = {
        '#question': learnjavascript.questionView
    };

    var hashParts = hash.split('-');
    var viewFn = routes[hashParts[0]];
    if (viewFn) {
        $('.view-container').empty().append(viewFn(hashParts[1]));
    }
};