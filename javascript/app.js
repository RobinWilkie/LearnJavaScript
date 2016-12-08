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
        '#question-1': learnjavascript.questionView
    };

    var viewFn = routes[hash];
    if (viewFn) {
        $('.view-container').empty().append(viewFn());
    }
};