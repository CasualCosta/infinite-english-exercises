{
    //#region Subject
    var Subject = /** @class */ (function () {
        function Subject(name, pronoun, affirmative, negative) {
            this.name = name;
            this.pronoun = pronoun;
            this.affirmative = affirmative;
            this.negative = negative;
        }
        return Subject;
    }());
    var subjects_1 = [
        new Subject("John", "he", "is", "isn't"),
        new Subject("Sandra", "she", "is", "isn't"),
        new Subject("Danny", "he", "is", "isn't"),
        new Subject("Louis", "he", "is", "isn't"),
        new Subject("Michael", "he", "is", "isn't"),
        new Subject("Corey", "he", "is", "isn't"),
        new Subject("Amy", "she", "is", "isn't"),
        new Subject("Rachel", "she", "is", "isn't"),
        new Subject("Ross", "she", "is", "isn't"),
        new Subject("Mary", "she", "is", "isn't"),
        new Subject("Jane", "she", "is", "isn't"),
        new Subject("Nick and Tim", "they", "are", "aren't"),
        new Subject("Douglas and Patricia", "they", "are", "aren't"),
        new Subject("Jessica and Vivian", "they", "are", "aren't"),
        new Subject("Emily and Ben", "they", "are", "aren't"),
        new Subject("Henry and Nichole", "they", "are", "aren't"),
        new Subject("Jared and Veronica", "they", "are", "aren't"),
        new Subject("Samuel and Ruby", "they", "are", "aren't"),
        new Subject("Gwen and Peter", "they", "are", "aren't")
    ];
    //#endregion
    var Question_1 = /** @class */ (function () {
        function Question(subject, place, descriptionType, answerType) {
            this.description = this.buildSentence(subject, place, descriptionType);
            this.answer = this.buildSentence(subject, place, answerType);
        }
        Question.prototype.buildSentence = function (subject, place, type) {
            switch (type) {
                case 0:
                    return "".concat(subject.name, " ").concat(subject.affirmative, " from ").concat(place, ".");
                case 1:
                    return "".concat(subject.name, " ").concat(subject.negative, " from ").concat(place, ".");
                case 2:
                    var interrogative = Question.capitalizeFirstLetter(subject.affirmative);
                    return "".concat(interrogative, " ").concat(subject.name, " from ").concat(place, "?");
                case 3:
                    return "Yes, ".concat(subject.pronoun, " ").concat(subject.affirmative, ".");
                case 4:
                    return "No, ".concat(subject.pronoun, " ").concat(subject.negative, ".");
                default:
                    return "";
            }
        };
        Question.capitalizeFirstLetter = function (sentence) {
            return sentence.charAt(0).toUpperCase() + sentence.slice(1);
        };
        return Question;
    }());
    {
        var places_1 = [
            "Las Vegas",
            "Salt Lake City",
            "New York City",
            "Los Angeles",
            "Seattle",
            "Phoenix",
            "Miami",
            "Denver",
            "Little Rock",
            "Bristol",
            "London",
            "Sidney",
            "Dover",
            "Springfield",
            "Townsville",
            "Des Moines",
            "Boston",
            "Manchester",
            "Liverpool"
        ];
        function buildQuestions(amount, descriptionType, answerType) {
            var questions = [];
            for (var i = 0; i < amount; i++) {
                var index = Math.floor(Math.random() * subjects_1.length);
                var s = subjects_1[index];
                index = Math.floor(Math.random() * places_1.length);
                var p = places_1[index];
                var question = new Question_1(s, p, descriptionType, answerType);
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
}
