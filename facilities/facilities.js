{
    //#region Facility
    var Facility = /** @class */ (function () {
        function Facility(singular, plural, article) {
            this.singular = singular;
            this.article = article;
            this.plural = plural;
        }
        return Facility;
    }());
    var facilities_1 = [
        new Facility("hospital", "hospitals", "a"),
        new Facility("park", "parks", "a"),
        new Facility("movie theater", "movie theaters", "a"),
        new Facility("cinema", "cinemas", "a"),
        new Facility("shopping mall", "shopping malls", "a"),
        new Facility("shopping center", "shopping centers", "a"),
        new Facility("shopping centre", "shopping centres", "a"),
        new Facility("grocery store", "grocery stores", "a"),
        new Facility("museum", "museums", "a"),
        new Facility("library", "libraries", "a"),
        new Facility("gas station", "gas stations", "a"),
        new Facility("restaurant", "restaurants", "a"),
        new Facility("train station", "train stations", "a"),
        new Facility("subway station", "subway stations", "a"),
        new Facility("bus station", "bus stations", "a"),
        new Facility("theater", "theaters", "a"),
        new Facility("university", "universities", "a"),
        new Facility("school", "schools", "a"),
        new Facility("gym", "gyms", "a"),
        new Facility("ice cream parlor", "ice cream parlors", "an"),
        new Facility("pizzeria", "pizzerias", "a"),
        new Facility("nightclub", "nightclubs", "a")
    ];
    function getRandomFacility() {
        return facilities_1[Math.floor(Math.random() * facilities_1.length)];
    }
    //#endregion
    //#region Questions
    var Question_1 = /** @class */ (function () {
        function Question(facility, isPlural, isFar, descriptionType, answerType) {
            this.description = this.buildQuestion(facility, isPlural, descriptionType, isFar);
            this.answer = this.buildQuestion(facility, isPlural, answerType, isFar);
        }
        Question.prototype.buildQuestion = function (facility, isPlural, type, isFar) {
            var article = isPlural ? "" : facility.article + " ";
            var fal = isPlural ? facility.plural : facility.singular;
            var pronoun = isPlural ? "these" : "this";
            if (isFar) {
                pronoun = isPlural ? "those" : "that";
            }
            var distance = isFar ? "far" : "near";
            var verb = isPlural ? "are" : "is";
            switch (type) {
                case 0: return Question.capitalizeFirstLetter(pronoun);
                case 1: return "".concat(verb, " ").concat(article).concat(fal, ".");
                case 2: return "".concat(verb, " ").concat(article).concat(fal, ". (").concat(distance, ")");
                case 3: return "".concat(Question.capitalizeFirstLetter(pronoun), " ").concat(verb, " ").concat(article).concat(fal, ".");
                case 4: return "".concat(fal, " (").concat(distance, ")");
                default: return "Error constructing the question.";
            }
        };
        Question.capitalizeFirstLetter = function (sentence) {
            return sentence.charAt(0).toUpperCase() + sentence.slice(1);
        };
        return Question;
    }());
    var questions_1 = [];
    for (var i = 0; i < 5; i++) {
        var isFar = false;
        var isPlural = Math.floor(Math.random() * 2) == 0;
        var facility = getRandomFacility();
        var question = new Question_1(facility, isPlural, isFar, 1, 0);
        questions_1.push(question);
    }
    for (var i = 0; i < 5; i++) {
        var isFar = true;
        var isPlural = Math.floor(Math.random() * 2) == 0;
        var facility = getRandomFacility();
        var question = new Question_1(facility, isPlural, isFar, 1, 0);
        questions_1.push(question);
    }
    for (var i = 0; i < 10; i++) {
        var isFar = Math.floor(Math.random() * 2) == 0;
        var isPlural = Math.floor(Math.random() * 2) == 0;
        var facility = getRandomFacility();
        var question = new Question_1(facility, isPlural, isFar, 2, 0);
        questions_1.push(question);
    }
    for (var i = 0; i < 10; i++) {
        var isFar = Math.floor(Math.random() * 2) == 0;
        var isPlural = Math.floor(Math.random() * 2) == 0;
        var facility = getRandomFacility();
        var question = new Question_1(facility, isPlural, isFar, 4, 3);
        questions_1.push(question);
    }
    //#endregion
    var answersElement_1 = document.getElementsByClassName("answer");
    var showButtons = document.getElementsByClassName("show-button");
    var checkButtons = document.getElementsByClassName("check-button");
    var resultElement_1 = document.getElementsByClassName("result");
    var InputElement_1 = document.querySelectorAll("input");
    var descriptionElement = document.getElementsByClassName("description");
    for (var i = 0; i < answersElement_1.length; i++) {
        answersElement_1[i].innerHTML = questions_1[i].answer;
    }
    for (var i = 0; i < descriptionElement.length; i++) {
        descriptionElement[i].innerHTML = questions_1[i].description;
    }
    var _loop_1 = function (i) {
        showButtons[i].addEventListener("click", function () { return showAnswer(i); });
        checkButtons[i].addEventListener("click", function () { return checkAnswer(i); });
    };
    for (var i = 0; i < showButtons.length; i++) {
        _loop_1(i);
    }
    function showAnswer(i) {
        answersElement_1[i].classList.toggle("answer--show");
    }
    function checkAnswer(i) {
        if (resultElement_1[i].classList.contains("result--right"))
            resultElement_1[i].classList.remove("result--right");
        if (resultElement_1[i].classList.contains("result--wrong"))
            resultElement_1[i].classList.remove("result--wrong");
        if (questions_1[i].answer == InputElement_1[i].value)
            resultElement_1[i].classList.add("result--right");
        else
            resultElement_1[i].classList.add("result--wrong");
    }
}
