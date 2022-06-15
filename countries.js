var Country = /** @class */ (function () {
    function Country(name, nationality) {
        this.name = name;
        this.nationality = nationality;
    }
    return Country;
}());
//#region countries
var australia = new Country("Australia", "Australian");
var bolivia = new Country("Bolivia", "Bolivian");
var brazil = new Country("Brazil", "Brazilian");
var canada = new Country("Canada", "Canadian");
var china = new Country("China", "Chinese");
var cuba = new Country("Cuba", "Cuban");
var egypt = new Country("Egypt", "Egyptian");
var england = new Country("England", "English");
var france = new Country("France", "French");
var germany = new Country("Germany", "German");
var india = new Country("India", "Indian");
var italy = new Country("Italy", "Italian");
var greece = new Country("Greece", "Greek");
var japan = new Country("Japan", "Japanese");
var mexico = new Country("Mexico", "Mexican");
var peru = new Country("Peru", "Peruvian");
var portugal = new Country("Portugal", "Portuguese");
var russia = new Country("Russia", "Russian");
var spain = new Country("Spain", "Spanish");
var sweeden = new Country("Sweeden", "Sweedish");
var theUSA = new Country("The USA", "American");
var countriesList = [
    australia,
    bolivia,
    brazil,
    canada,
    china,
    cuba,
    egypt,
    england,
    france,
    germany,
    india,
    italy,
    greece,
    japan,
    mexico,
    peru,
    portugal,
    russia,
    spain,
    sweeden,
    theUSA,
];
//#endregion
function getRandomCountries(countries, amount) {
    var cnts = [];
    for (var i = 0; i < countries.length; i++) {
        cnts.push(countries[i]);
    }
    for (var i = 0; i < 10000; i++) {
        var a = Math.floor(Math.random() * cnts.length);
        var b = Math.floor(Math.random() * cnts.length);
        var tmp = cnts[a];
        cnts[a] = cnts[b];
        cnts[b] = tmp;
    }
    var list = [];
    for (var i = 0; i < amount; i++) {
        list[i] = cnts[i];
    }
    return list;
}
var Person = /** @class */ (function () {
    function Person(country, isMale) {
        this.country = country;
        this.isMale = isMale;
        this.pronoun = isMale ? "He" : "She";
        this.adjective = isMale ? "His" : "Her";
    }
    return Person;
}());
function buildQuestion(size, questionNumber, people) {
    var answers = [];
    for (var i = 0; i < size; i++) {
        switch (questionNumber) {
            case 1:
                answers.push(people[i].pronoun + " is " + people[i].country.nationality + ".");
                break;
            case 2:
                answers.push(people[i].pronoun + " is from " + people[i].country.name + ".");
                break;
            case 3:
                answers.push("".concat(people[i].adjective, " country is ").concat(people[i].country.name, "."));
                break;
        }
    }
    return answers;
}
function generatePeople(amount) {
    var randomCountries = getRandomCountries(countriesList, amount);
    var people = [];
    for (var i = 0; i < amount; i++) {
        people.push(new Person(randomCountries[i], Math.floor(Math.random() * 2) == 0));
    }
    return people;
}
var questionsAmount = [5, 5, 5];
var questionsTotal = questionsAmount[0] + questionsAmount[1] + questionsAmount[2];
var people = generatePeople(questionsTotal);
var question1 = buildQuestion(questionsAmount[0], 1, people);
var question2 = buildQuestion(questionsAmount[1], 2, people);
var question3 = buildQuestion(questionsAmount[2], 3, people);
var answers = document.getElementsByClassName("answer");
answers[0].innerHTML = question1[0];
var showButtons = document.getElementsByClassName("show-button");
var userAnswers = document.getElementsByClassName("exercise__input");
var countriesElement = document.getElementsByClassName("country");
var sexSymbolElement = document.getElementsByClassName("sex-symbol");
for (var i = 0; i < countriesElement.length; i++) {
    countriesElement[i].innerHTML = people[i].country.name;
    if (people[i].isMale)
        sexSymbolElement[i].classList.add("sex-symbol--male");
    else
        sexSymbolElement[i].classList.add("sex-symbol--female");
}
var _loop_1 = function (i) {
    showButtons[i].addEventListener("click", function () { return showAnswer(i); });
};
for (var i = 0; i < showButtons.length; i++) {
    _loop_1(i);
}
function showAnswer(i) {
    answers[i].classList.toggle("answer--show");
}
