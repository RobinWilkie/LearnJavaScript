/**
 * Created by davem on 27/11/2016.
 */
'use strict';
var learnjavascript={};

learnjavascript.questionView = function(problemNumber) {
    var title = 'Question #' + problemNumber + 'Arriving Soon!!';
    return $('<div class="question-view">').text(title);
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

learnjavascript.appOnReady = function(){
    window.onhashchange = function(){
    learnjavascript.showView(window.location.hash);
};
    learnjavascript.showView(window.location.hash);
};