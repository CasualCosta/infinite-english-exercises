//#region countries
var Country = /** @class */ (function () {
    function Country(name, nationality) {
        this.name = name;
        this.nationality = nationality;
    }
    return Country;
}());
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
function getRandomCountry() {
    return countriesList[Math.floor(Math.random() * countriesList.length)];
}
//#endregion
//#region Person
var Person = /** @class */ (function () {
    function Person(country, isMale) {
        this.country = country;
        this.isMale = isMale;
        this.pronoun = isMale ? "He" : "She";
        this.adjective = isMale ? "His" : "Her";
    }
    return Person;
}());
function generatePerson() {
    return new Person(getRandomCountry(), Math.floor(Math.random() * 2) == 0);
}
function generatePeople(amount) {
    var people = [];
    for (var i = 0; i < amount; i++) {
        people.push(generatePerson());
    }
    return people;
}
//#endregion
//#region exercise
function buildExercise(questionNumber, person) {
    switch (questionNumber) {
        case 1:
            return person.pronoun + " is " + person.country.nationality + ".";
        case 2:
            return person.pronoun + " is from " + person.country.name + ".";
        case 3:
            return "".concat(person.adjective, " country is ").concat(person.country.name, ".");
    }
    return "";
}
function buildExercises(questionNumber, people, startIndex, amount) {
    var exercises = [];
    for (var i = startIndex; i < amount + startIndex; i++) {
        exercises.push(buildExercise(questionNumber, people[i]));
    }
    return exercises;
}
//#endregion
var questionsAmount = [5, 5, 5];
var questionsTotal = 0;
for (var i = 0; i < questionsAmount.length; i++) {
    questionsTotal += questionsAmount[i];
}
var people = generatePeople(questionsTotal);
var answers = [];
for (var i = 0; i < questionsAmount.length; i++) {
    answers.push.apply(answers, buildExercises(i + 1, people, i * 5, 5));
}
var answersElement = document.getElementsByClassName("answer");
var showButtons = document.getElementsByClassName("show-button");
var checkButtons = document.getElementsByClassName("check-button");
var resultElement = document.getElementsByClassName("result");
var InputElement = document.querySelectorAll("input");
var countriesElement = document.getElementsByClassName("country");
var sexSymbolElement = document.getElementsByClassName("sex-symbol");
for (var i = 0; i < answersElement.length; i++) {
    answersElement[i].innerHTML = answers[i];
}
for (var i = 0; i < countriesElement.length; i++) {
    countriesElement[i].innerHTML = people[i].country.name;
    if (people[i].isMale)
        sexSymbolElement[i].classList.add("sex-symbol--male");
    else
        sexSymbolElement[i].classList.add("sex-symbol--female");
}
var _loop_1 = function (i) {
    showButtons[i].addEventListener("click", function () { return showAnswer(i); });
    checkButtons[i].addEventListener("click", function () { return checkAnswer(i); });
};
for (var i = 0; i < showButtons.length; i++) {
    _loop_1(i);
}
function showAnswer(i) {
    answersElement[i].classList.toggle("answer--show");
}
function checkAnswer(i) {
    if (resultElement[i].classList.contains("result--right"))
        resultElement[i].classList.remove("result--right");
    if (resultElement[i].classList.contains("result--wrong"))
        resultElement[i].classList.remove("result--wrong");
    if (answers[i] == InputElement[i].value)
        resultElement[i].classList.add("result--right");
    else
        resultElement[i].classList.add("result--wrong");
}
