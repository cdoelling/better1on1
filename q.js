
// var _ = require("underscore");

var questions = ["What's the rock in your shoe? - Hannah Shain",
"Is the team communicating simply? - Chase Doelling",
"Is there a framework you think we should try - Chase Doelling",
"If we had to hire 10 copies of someone on your team, who and why? - Chase Doelling",
];

// var tellMe = _.sample(questions);

function newQuestion(questions) {
    for (var i = questions.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = questions[i];
        questions[i] = questions[j];
        questions[j] = temp;
    }
    return questions.pop([0]);
}


$(".new").hover(function() {
  $( this ).addClass("hover");
}, function() {
  $( this ).removeClass( "hover" );
});

$(".new").active(function() {
  $( this ).addClass("active");
}, function() {
  $( this ).removeClass( "active" );
});

$(".new").click(function() {
    console.log("questions");
});

$(".fee").click(function() {
    $(".payment-form").show();
    console.log("fail");
});
