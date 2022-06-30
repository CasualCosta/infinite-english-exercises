{
    //#region Subject
    var Subject = /** @class */ (function () {
        function Subject(name, container, article, isFurniture) {
            this.name = name;
            this.container = container;
            this.article = article;
            this.isFurniture = isFurniture;
        }
        return Subject;
    }());
    var subjects_1 = [
        new Subject("couch", "living room", "a", true),
        new Subject("sofa", "living room", "a", true),
        new Subject("television", "living room", "a", true),
        new Subject("coffee table", "living room", "a", true),
        new Subject("rack", "living room", "a", true),
        new Subject("lamp", "living room", "a", true),
        new Subject("video game console", "living room", "a", true),
        new Subject("rug", "living room", "a", true),
        new Subject("armchair", "living room", "a", true),
        new Subject("chair", "dining room", "a", true),
        new Subject("table", "dining room", "a", true),
        new Subject("rug", "dining room", "a", true),
        new Subject("stove", "kitchen", "a", true),
        new Subject("fridge", "kitchen", "a", true),
        new Subject("cupboard", "kitchen", "a", true),
        new Subject("sink", "kitchen", "a", true),
        new Subject("oven", "kitchen", "an", true),
        new Subject("dishwasher", "kitchen", "a", true),
        new Subject("washing machine", "laundry room", "a", true),
        new Subject("sink", "bathroom", "a", true),
        new Subject("toilet", "bathroom", "a", true),
        new Subject("shower", "bathroom", "a", true),
        new Subject("bath tub", "bathroom", "a", true),
        new Subject("flower", "garden", "a", true),
        new Subject("plant", "garden", "a", true),
        new Subject("statue", "garden", "a", true),
        new Subject("fountain", "garden", "a", true),
        new Subject("bed", "bedroom", "a", true),
        new Subject("wardrobe", "bedroom", "a", true),
        new Subject("bedside table", "bedroom", "a", true),
        new Subject("bedside lamp", "bedroom", "a", true),
        new Subject("bookshelf", "bedroom", "a", true),
        new Subject("desk", "bedroom", "a", true),
        new Subject("desk", "study", "a", true),
        new Subject("bookcase", "study", "a", true),
        new Subject("kitchen", "house", "a", false),
        new Subject("bathroom", "house", "a", false),
        new Subject("toilet", "house", "a", false),
        new Subject("bedroom", "house", "a", false),
        new Subject("living room", "house", "a", false),
        new Subject("dining room", "house", "a", false),
        new Subject("garden", "house", "a", false),
        new Subject("balcony", "house", "a", false),
        new Subject("study", "house", "a", false)
    ];
    function GetRandomSubject() {
        return subjects_1[Math.floor(Math.random() * subjects_1.length)];
    }
    //#endregion
    var Question = /** @class */ (function () {
        function Question(subject, amount, descriptionType, answerType) {
            this.description = this.buildSentence(subject, amount, descriptionType);
            this.answer = this.buildSentence(subject, amount, answerType);
        }
        Question.prototype.buildSentence = function (subject, amount, type) {
            var article = "";
            switch (amount) {
                case 1:
                    article = "".concat(subject.article);
                    break;
                case 2:
                    article = "two";
                    break;
                case 3:
                    article = "three";
                    break;
            }
            var name = subject.name;
            var container = subject.container;
            if (amount > 1) {
                name += "s";
            }
            switch (type) {
                case 0: return "There is ".concat(article, " ").concat(name, " in the ").concat(container, ".");
                case 1: return "There isn't ".concat(article, " ").concat(name, " in the ").concat(container, ".");
                case 2: return "Is there ".concat(article, " ").concat(name, " in the ").concat(container, "?");
                case 3: return "".concat(article, " ").concat(name, " in the ").concat(container, ".");
                case 4: return "".concat(article, " ").concat(name, " in the ").concat(container, ".");
                case 5: return "".concat(article, " ").concat(name, " in the ").concat(container, "?");
                case 6: return "There are ".concat(name, " in the ").concat(container, ".");
                case 7: return "There aren't ".concat(name, " in the ").concat(container, ".");
                case 8: return "Are there ".concat(name, " in the ").concat(container, "?");
                case 9: return "There is";
                case 10: return "There isn't";
                case 11: return "Is there";
                case 12: return "There are";
                case 13: return "There aren't";
                case 14: return "Are there";
                case 15: return "".concat(article, " ").concat(name, " in the ").concat(container, ".");
                case 16: return "".concat(article, " ").concat(name, " in the ").concat(container, "?");
                case 17: return "Yes, there is.";
                case 18: return "No, there isn't.";
                case 19: return "Yes, there are.";
                case 20: return "No, there aren't.";
                default: return "";
            }
        };
        return Question;
    }());
    var questions_1 = [];
    var form = [];
    for (var i = 0; i < 10; i++) {
        var amount = Math.floor(Math.random() * 3) + 1;
        var answerType = Math.floor(Math.random() * 3 + 9);
        var f = answerType - 9;
        form.push(f);
        var questionType = (answerType == 11) ? 16 : 15;
        if (amount > 1)
            answerType += 3;
        var s = GetRandomSubject();
        var q = new Question(s, amount, questionType, answerType);
        questions_1.push(q);
    }
    for (var i = 0; i < 5; i++) {
        var amount = Math.floor(Math.random() * 3) + 1;
        var answerType = Math.floor(Math.random() * 2) + 17;
        var f = answerType - 17;
        form.push(f);
        var questionType = (amount == 1) ? 2 : 8;
        if (amount > 1)
            answerType += 2;
        var s = GetRandomSubject();
        var q = new Question(s, amount, questionType, answerType);
        questions_1.push(q);
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
    for (var i = 0; i < form.length; i++) {
        if (form[i] == 0) {
            thumbsElement[i].classList.add("thumbs--up");
        }
        else if (form[i] == 1) {
            thumbsElement[i].classList.add("thumbs--down");
        }
        else if (form[i] == 2) {
            thumbsElement[i].classList.add("question--mark");
        }
        else {
            console.log("Something went wrong with the thumbs. Form at position ".concat(i, "'s value is ").concat(form[i]));
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
