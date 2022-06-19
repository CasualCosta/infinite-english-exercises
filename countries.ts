
//#region countries
class Country {
  readonly name: any;
  readonly nationality: string;
  
  constructor(name: string, nationality: string) {
    this.name = name;
    this.nationality = nationality;
  }
}


const australia = new Country("Australia", "Australian");
const bolivia = new Country("Bolivia", "Bolivian");
const brazil = new Country("Brazil", "Brazilian");
const canada = new Country("Canada", "Canadian");
const china = new Country("China", "Chinese");
const cuba = new Country("Cuba", "Cuban");
const egypt = new Country("Egypt", "Egyptian");
const england = new Country("England", "English");
const france = new Country("France", "French");
const germany = new Country("Germany", "German");
const india = new Country("India", "Indian");
const italy = new Country("Italy", "Italian");
const greece = new Country("Greece", "Greek");
const japan = new Country("Japan", "Japanese");
const mexico = new Country("Mexico", "Mexican");
const peru = new Country("Peru", "Peruvian");
const portugal = new Country("Portugal", "Portuguese");
const russia = new Country("Russia", "Russian");
const spain = new Country("Spain", "Spanish");
const sweeden = new Country("Sweeden", "Swedish");
const theUSA = new Country("The USA", "American");

const countriesList: Country[] = [
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


function getRandomCountries(countries: Country[], amount: number): Country[] {
  let cnts: Country[] = [];
  for (let i = 0; i < countries.length; i++) {
    cnts.push(countries[i]);
  }
  for (let i = 0; i < 10000; i++) {
    let a = Math.floor(Math.random() * cnts.length);
    let b = Math.floor(Math.random() * cnts.length);
    let tmp = cnts[a];

    cnts[a] = cnts[b];
    cnts[b] = tmp;
  }
  let list: Country[] = [];
  for (let i = 0; i < amount; i++) {
    list[i] = cnts[i];
  }
  return list;
}

function getRandomCountry(): Country{
  return countriesList[Math.floor(Math.random() * countriesList.length)]
}
//#endregion

//#region Person
class Person {
  country: Country;
  isMale: boolean;
  readonly adjective: string;
  readonly pronoun: string;
  constructor(country: Country, isMale: boolean) {
    this.country = country;
    this.isMale = isMale;
    this.pronoun = isMale ? "He" : "She";
    this.adjective = isMale ? "His" : "Her";
  }
}

function generatePerson(): Person{
  return new Person(getRandomCountry(), Math.floor(Math.random() * 2) == 0);

}
function generatePeople(amount: number): Person[]{
  let people: Person[] = [];
  for(let i = 0; i < amount; i++){
    people.push(generatePerson());
  }
  return people;
}
//#endregion



//#region exercise
function buildExercise(questionNumber: number, person: Person): string {
  switch (questionNumber) {
    case 1:
      return person.pronoun + " is " + person.country.nationality + ".";
    case 2:
      return person.pronoun + " is from " + person.country.name + ".";
    case 3:
      return `${person.adjective} country is ${person.country.name}.`;
  }
  return "";
}

function buildExercises(questionNumber: number, people: Person[], startIndex: number, amount: number): string[] {
  let exercises: string[] = [];
  for(let i = startIndex; i < amount + startIndex; i++){
    exercises.push(buildExercise(questionNumber, people[i]));
  }
  return exercises;
}
//#endregion

let questionsAmount: number[] = [5, 5, 5];
let questionsTotal: number = 0;
for(let i = 0; i < questionsAmount.length; i++){
  questionsTotal += questionsAmount[i];
}
let people = generatePeople(questionsTotal);
let answers: string[] = [];
for(let i = 0; i < questionsAmount.length; i++){
  answers.push(...buildExercises(i + 1, people, i * 5, 5));
}



const answersElement = document.getElementsByClassName("answer");
const showButtons = document.getElementsByClassName("show-button");
const checkButtons = document.getElementsByClassName("check-button");
const resultElement = document.getElementsByClassName("result");
const InputElement = document.querySelectorAll("input");
const countriesElement = document.getElementsByClassName("country");
const sexSymbolElement = document.getElementsByClassName("sex-symbol");

for(let i = 0; i < answersElement.length; i++){
  answersElement[i].innerHTML = answers[i];
}
for(let i = 0; i < countriesElement.length; i++){
  countriesElement[i].innerHTML = people[i].country.name;
  if(people[i].isMale)
    sexSymbolElement[i].classList.add("sex-symbol--male");
  else
    sexSymbolElement[i].classList.add("sex-symbol--female");
}


for(let i = 0; i < showButtons.length; i++){
  showButtons[i].addEventListener("click", () => showAnswer(i));
  checkButtons[i].addEventListener("click", () => checkAnswer(i));
}
function showAnswer(i: number){
  answersElement[i].classList.toggle("answer--show");
  
}

function checkAnswer(i: number){
  if(resultElement[i].classList.contains("result--right"))
    resultElement[i].classList.remove("result--right");
  if(resultElement[i].classList.contains("result--wrong"))
    resultElement[i].classList.remove("result--wrong");
  if(answers[i] == InputElement[i].value)
    resultElement[i].classList.add("result--right");
  else
    resultElement[i].classList.add("result--wrong");
}