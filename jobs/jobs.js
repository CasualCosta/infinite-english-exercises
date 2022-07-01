{
    //#region Subjects
    var Subject = /** @class */ (function () {
        function Subject(name, isPlural) {
            this.name = name;
            this.isPlural = isPlural;
        }
        return Subject;
    }());
    var subjects_1 = [
        new Subject("John", false),
        new Subject("Michael", false),
        new Subject("Will", false),
        new Subject("Jane", false),
        new Subject("Henry", false),
        new Subject("Sandra", false),
        new Subject("Mary", false),
        new Subject("Vivian", false),
        new Subject("Gary", false),
        new Subject("Paul", false),
        new Subject("Elliot and Jim", true),
        new Subject("Gabriel and Dave", true),
        new Subject("Pam and Sue", true),
        new Subject("Larry and Tim", true),
        new Subject("The Smith brothers", true),
        new Subject("Wesley and Adam", true)
    ];
    function GetRandomSubject() {
        return subjects_1[Math.floor(Math.random() * subjects_1.length)];
    }
    //#endregion
    //#region Profession
    var Profession = /** @class */ (function () {
        function Profession(name, article) {
            this.name = name;
            this.article = article;
        }
        return Profession;
    }());
    var professions_1 = [
        new Profession("doctor", "a"),
        new Profession("waiter", "a"),
        new Profession("singer", "a"),
        new Profession("dancer", "a"),
        new Profession("teacher", "a"),
        new Profession("musician", "a"),
        new Profession("CEO", "a"),
        new Profession("driver", "a"),
        new Profession("programmer", "a"),
        new Profession("butcher", "a"),
        new Profession("baker", "a"),
        new Profession("carpenter", "a"),
        new Profession("potter", "a"),
        new Profession("construction worker", "a"),
        new Profession("vet", "a"),
        new Profession("researcher", "a"),
        new Profession("dentist", "a"),
        new Profession("police officer", "a"),
        new Profession("fire fighter", "a"),
        new Profession("student", "a"),
        new Profession("nurse", "a"),
        new Profession("politician", "a"),
        new Profession("receptionist", "a"),
        new Profession("hairdresser", "a"),
        new Profession("barber", "a"),
        new Profession("engineer", "an"),
        new Profession("occulist", "an"),
        new Profession("intern", "an"),
        new Profession("actor", "an"),
        new Profession("activist", "an"),
        new Profession("author", "an"),
        new Profession("athlete", "an"),
        new Profession("administrator", "an"),
        new Profession("auditor", "an"),
        new Profession("assistant", "an")
    ];
    function GetRandomProfession() {
        return professions_1[Math.floor(Math.random() * professions_1.length)];
    }
    //#endregion
    var Question = /** @class */ (function () {
        function Question(subject, profession) {
            var verb = subject.isPlural ? "are" : "is";
            var prof = profession.name;
            if (subject.isPlural)
                prof += "s";
            this.description = "".concat(subject.name, " ").concat(verb, " ___ ").concat(prof, ".");
            this.answer = subject.isPlural ? "" : profession.article;
        }
        return Question;
    }());
    var questions_1 = [];
    for (var i = 0; i < 10; i++) {
        var s = GetRandomSubject();
        var p = GetRandomProfession();
        var q = new Question(s, p);
        questions_1.push(q);
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
