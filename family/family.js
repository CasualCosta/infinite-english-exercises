{
    //#region subjects
    var Subject = /** @class */ (function () {
        function Subject(name, genitive, isPlural) {
            this.name = name;
            this.genitive = genitive;
            this.isPlural = isPlural;
        }
        return Subject;
    }());
    var subjects_1 = [
        new Subject("Charles", "'s", false),
        new Subject("Sandra", "'s", false),
        new Subject("Joss", "'s", false),
        new Subject("Dina", "'s", false),
        new Subject("Ashley", "'s", false),
        new Subject("Claire", "'s", false),
        new Subject("James", "'s", false),
        new Subject("Timmothy", "'s", false),
        new Subject("the Coens", "'", true),
        new Subject("the students", "'", true),
        new Subject("the kids", "'", true),
        new Subject("the workers", "'", true),
        new Subject("the guests", "'", true),
        new Subject("the children", "'s", true),
        new Subject("the women", "'s", true),
        new Subject("the men", "'s", true)
    ];
    function getRandomPerson() {
        return subjects_1[Math.floor(Math.random() * subjects_1.length)];
    }
    //#endregion
    //#region Relation
    var Relation = /** @class */ (function () {
        function Relation(neutral, male, female) {
            this.male = male;
            this.female = female;
        }
        return Relation;
    }());
    var relations_1 = [
        new Relation("sibling", "brother", "sister"),
        new Relation("parent", "father", "mother"),
        new Relation("grandparent", "grandfather", "grandmother"),
        new Relation("child", "son", "daughter"),
        new Relation("grandchild", "grandson", "granddaughter"),
        new Relation("spouse", "husband", "wife"),
        new Relation("cousin", "cousin", "cousin"),
        new Relation("nephew", "nephew", "niece"),
        new Relation("uncle", "uncle", "aunt")
    ];
    function getRandomRelation() {
        return relations_1[Math.floor(Math.random() * relations_1.length)];
    }
    //#endregion
    //#region Relatives
    var Relative = /** @class */ (function () {
        function Relative(name, isMale) {
            this.name = name;
            this.isMale = isMale;
        }
        return Relative;
    }());
    var relatives_1 = [
        new Relative("Michael", true),
        new Relative("Owen", true),
        new Relative("Harry", true),
        new Relative("Ronald", true),
        new Relative("Wilson", true),
        new Relative("Adam", true),
        new Relative("Edmund", true),
        new Relative("Xavier", true),
        new Relative("Olivia", false),
        new Relative("Lana", false),
        new Relative("Uma", false),
        new Relative("Nicole", false),
        new Relative("Britney", false),
        new Relative("Claire", false),
        new Relative("Jill", false),
        new Relative("Penelope", false)
    ];
    function getRandomRelative() {
        return relatives_1[Math.floor(Math.random() * relatives_1.length)];
    }
    //#endregion
    var Question = /** @class */ (function () {
        function Question(questionType, answerType, subject, relation, relative) {
            this.description = this.buildQuestion(questionType, subject, relation, relative);
            this.answer = this.buildQuestion(answerType, subject, relation, relative);
        }
        Question.prototype.buildQuestion = function (type, subject, relation, relative) {
            var posAdj = subject.isPlural ? "our" : "my";
            var rel = relative.isMale ? relation.male : relation.female;
            var sentence = "Error constructing the sentence.";
            switch (type) {
                case 0:
                    sentence = "".concat(subject.name, ": \"").concat(relative.name, " is ").concat(posAdj, " ").concat(rel, ".\"");
                    break;
                case 1:
                    sentence = "".concat(relative.name, " is ").concat(subject.name).concat(subject.genitive, " ").concat(rel, ".");
                    break;
                case 2:
                    sentence = "".concat(subject.name, " / ").concat(rel);
                    break;
                case 3:
                    sentence = "Who is ".concat(subject.name).concat(subject.genitive, " ").concat(rel, "?");
                    break;
                case 4:
                    sentence = "".concat(relative.name, " / ").concat(rel);
                    break;
                case 5:
                    sentence = "Whose ".concat(rel, " is ").concat(relative.name, "?");
                    break;
            }
            sentence = this.capitalizeFirstLetter(sentence);
            return sentence;
        };
        Question.prototype.capitalizeFirstLetter = function (sentence) {
            return sentence.charAt(0).toUpperCase() + sentence.slice(1);
        };
        return Question;
    }());
    var questions_1 = [];
    for (var i = 0; i < 20; i++) {
        var sub = getRandomPerson();
        var relation = getRandomRelation();
        var relative = getRandomRelative();
        if (i < 10)
            questions_1.push(new Question(0, 1, sub, relation, relative));
        else if (i < 15)
            questions_1.push(new Question(2, 3, sub, relation, relative));
        else
            questions_1.push(new Question(4, 5, sub, relation, relative));
    }
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
