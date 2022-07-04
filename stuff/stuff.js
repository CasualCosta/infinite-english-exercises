var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
{
    //#region Nouns
    var Noun_1 = /** @class */ (function () {
        function Noun(singular, plural) {
            this.singular = singular;
            if (typeof plural === 'string')
                this.plural = plural;
            else if (typeof plural === 'number')
                this.plural = Noun.pluralBuilder(singular, plural);
            else
                console.log("Invalid plural type.");
        }
        Noun.pluralBuilder = function (noun, type) {
            if (type == 2 && noun[noun.length - 1] != 'y')
                console.log("Noun doesn't end in 'Y.");
            else if (type == 3 && noun[noun.length - 1] != 'f')
                console.log("Noun doesn't end in 'F'.");
            switch (type) {
                case 0: return noun + "s";
                case 1: return noun + "es";
                case 2: return noun.slice(0, -1) + "ies";
                case 3: return noun.slice(0, -1) + "ves";
                default: return "Error constructing the word.";
            }
        };
        return Noun;
    }());
    function buildRegularPlural(singular) {
        return singular + "s";
    }
    function getRandomNoun(nouns) {
        return nouns[Math.floor(Math.random() * nouns.length)];
    }
    var regularPlurals = [
        new Noun_1("cat", 0),
        new Noun_1("dog", 0),
        new Noun_1("play", 0),
        new Noun_1("wall", 0),
        new Noun_1("stove", 0),
        new Noun_1("fridge", 0),
        new Noun_1("hospital", 0),
        new Noun_1("table", 0),
        new Noun_1("tree", 0),
        new Noun_1("tray", 0),
        new Noun_1("waiter", 0),
        new Noun_1("teacher", 0),
        new Noun_1("cupboard", 0),
        new Noun_1("bed", 0),
        new Noun_1("rug", 0),
        new Noun_1("desk", 0)
    ];
    //tomato
    var esPlurals = [
        new Noun_1("couch", 1),
        new Noun_1("reach", 1),
        new Noun_1("witch", 1),
        new Noun_1("wish", 1),
        new Noun_1("scratch", 1),
        new Noun_1("stitch", 1),
        new Noun_1("hitch", 1),
        new Noun_1("bless", 1),
        new Noun_1("glass", 1),
        new Noun_1("box", 1),
        new Noun_1("ex", 1),
        new Noun_1("potato", 1),
        new Noun_1("mango", 1),
        new Noun_1("tornado", 1),
        new Noun_1("zero", 1),
        new Noun_1("cargo", 1),
    ];
    //country
    var consYPlurals = [
        new Noun_1("study", 2),
        new Noun_1("cry", 2),
        new Noun_1("city", 2),
        new Noun_1("quality", 2),
        new Noun_1("emergency", 2),
        new Noun_1("accompany", 2),
        new Noun_1("company", 2),
        new Noun_1("embassy", 2),
        new Noun_1("try", 2),
        new Noun_1("fry", 2),
        new Noun_1("retry", 2),
        new Noun_1("fly", 2),
        new Noun_1("sky", 2),
        new Noun_1("hippy", 2),
        new Noun_1("bly", 2),
        new Noun_1("ply", 2)
    ];
    var irregularPlurals = [
        new Noun_1("leaf", 3),
        new Noun_1("thief", 3),
        new Noun_1("calf", 3),
        new Noun_1("wolf", 3),
        new Noun_1("roof", 3),
        new Noun_1("wife", "wives"),
        new Noun_1("mouse", "mice"),
        new Noun_1("knife", "knives"),
        new Noun_1("foot", "feet"),
        new Noun_1("goose", "geese"),
        new Noun_1("child", "children"),
        new Noun_1("man", "men"),
        new Noun_1("woman", "women"),
        new Noun_1("person", "people"),
        new Noun_1("fish", "fish"),
        new Noun_1("sheep", "sheep"),
    ];
    var allPlurals = __spreadArray(__spreadArray(__spreadArray(__spreadArray([], regularPlurals, true), esPlurals, true), consYPlurals, true), irregularPlurals, true);
    //#endregion
    var questions_1 = [];
    function pushQuestions(n, nouns) {
        for (var i = 0; i < n; i++) {
            var n_1 = getRandomNoun(nouns);
            questions_1.push(n_1);
        }
    }
    pushQuestions(5, regularPlurals);
    pushQuestions(5, esPlurals);
    pushQuestions(5, consYPlurals);
    pushQuestions(5, irregularPlurals);
    pushQuestions(10, allPlurals);
    var answersElement_1 = document.getElementsByClassName("answer");
    var showButtons = document.getElementsByClassName("show-button");
    var checkButtons = document.getElementsByClassName("check-button");
    var resultElement_1 = document.getElementsByClassName("result");
    var InputElement_1 = document.querySelectorAll("input");
    var descriptionElement = document.getElementsByClassName("description");
    for (var i = 0; i < answersElement_1.length; i++) {
        answersElement_1[i].innerHTML = questions_1[i].plural;
    }
    for (var i = 0; i < descriptionElement.length; i++) {
        descriptionElement[i].innerHTML = questions_1[i].singular;
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
        if (questions_1[i].plural == InputElement_1[i].value)
            resultElement_1[i].classList.add("result--right");
        else
            resultElement_1[i].classList.add("result--wrong");
    }
}
