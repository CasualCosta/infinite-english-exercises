{
    //#region subject
    var Subject = /** @class */ (function () {
        function Subject(name, pronoun) {
            this.name = name;
            this.pronoun = pronoun;
        }
        return Subject;
    }());
    var subjects_1 = [
        new Subject("I", "I"),
        new Subject("John", "he"),
        new Subject("Tom", "he"),
        new Subject("Edward", "he"),
        new Subject("Daniel", "he"),
        new Subject("Victor", "he"),
        new Subject("Will", "he"),
        new Subject("Mary", "she"),
        new Subject("Carey", "she"),
        new Subject("Janet", "she"),
        new Subject("Susie", "she"),
        new Subject("Lisa", "she"),
        new Subject("Lisa and Tom", "they"),
        new Subject("Michael and Charlie", "they"),
        new Subject("Sandra and Ruby", "they"),
        new Subject("Matt and Vickie", "they"),
        new Subject("Pam and Ashley", "they"),
        new Subject("Jerry and Tom", "they"),
        new Subject("Victor and Ryan", "they"),
        new Subject("Bob and John", "they"),
        new Subject("Danny and Emily", "they")
    ];
    //#endregion
    var verbs_1 = [
        "dance",
        "swim",
        "sing",
        "run",
        "play guitar",
        "play the piano",
        "play keyboard",
        "play the drums",
        "drive",
        "ride a bike",
        "play tennis",
        "drive a car",
        "ride a truck",
        "ride a horse",
        "ride a bike",
        "program",
        "juggle",
        "skate",
        "surf",
        "moonwalk",
        "cook",
        "do Math",
        "speak Japanese",
        "draw",
        "paint",
        "act",
        "read",
        "write poetry",
        "understand Russian",
        "bake",
        "teach English",
        "buy a house",
        "fight karate",
        "hike"
    ];
    var Question_1 = /** @class */ (function () {
        function Question(subject, verb, descriptionType, answerType) {
            this.description = this.buildSentence(subject, verb, descriptionType);
            this.answer = this.buildSentence(subject, verb, answerType);
        }
        Question.prototype.buildSentence = function (subject, verb, type) {
            switch (type) {
                case 0: return "".concat(subject.name, " can ").concat(verb, ".");
                case 1: return "".concat(subject.name, " can't ").concat(verb, ".");
                case 2: return "Can ".concat(subject.name, " ").concat(verb, "?");
                case 3: return "Yes, ".concat(subject.pronoun, " can.");
                case 4: return "No, ".concat(subject.pronoun, " can't.");
                default: return "";
            }
        };
        return Question;
    }());
    function buildQuestions(amount, descriptionType, answerType) {
        var questions = [];
        for (var i = 0; i < amount; i++) {
            var index = Math.floor(Math.random() * subjects_1.length);
            var s = subjects_1[index];
            index = Math.floor(Math.random() * verbs_1.length);
            var v = verbs_1[index];
            var question = new Question_1(s, v, descriptionType, answerType);
            questions.push(question);
        }
        return questions;
    }
    var questions_1 = buildQuestions(5, 0, 1);
    questions_1 = questions_1.concat(buildQuestions(5, 0, 2));
    var isAffirmative = [];
    for (var i = 0; i < 5; i++) {
        var type = Math.floor(Math.random() * 2) + 3;
        isAffirmative.push(type == 3);
        questions_1 = questions_1.concat(buildQuestions(1, 2, type));
    }
    var answersElement_1 = document.getElementsByClassName("answer");
    var showButtons = document.getElementsByClassName("show-button");
    var checkButtons = document.getElementsByClassName("check-button");
    var resultElement_1 = document.getElementsByClassName("result");
    var InputElement_1 = document.querySelectorAll("input");
    var descriptionElement = document.getElementsByClassName("description");
    var thumbsElement = document.getElementsByClassName("thumbs");
    for (var i = 0; i < answersElement_1.length; i++) {
        answersElement_1[i].innerHTML = questions_1[i].answer;
    }
    for (var i = 0; i < descriptionElement.length; i++) {
        descriptionElement[i].innerHTML = questions_1[i].description;
    }
    for (var i = 0; i < thumbsElement.length; i++) {
        if (isAffirmative[i]) {
            thumbsElement[i].classList.add("thumbs--up");
        }
        else {
            thumbsElement[i].classList.add("thumbs--down");
        }
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
