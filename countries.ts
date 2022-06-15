class Country {
  readonly name: any;
  readonly nationality: string;
  constructor(name: string, nationality: string) {
    this.name = name;
    this.nationality = nationality;
  }
}


//#region countries
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
const sweeden = new Country("Sweeden", "Sweedish");
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
//#endregion


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


function buildQuestion(size: number, questionNumber: number, people: Person[]): string[] {
  let answers: string[] = [];
  for (let i = 0; i < size; i++) {
    switch (questionNumber) {
      case 1:
        answers.push(
          people[i].pronoun + " is " + people[i].country.nationality + "."
        );
        break;
      case 2:
        answers.push(
          people[i].pronoun + " is from " + people[i].country.name + "."
        );
        break;
      case 3:
        answers.push(
          `${people[i].adjective} country is ${people[i].country.name}.`
        );
        break;
    }
  }
  return answers;
}


function generatePeople(amount: number): Person[]{
  let randomCountries = getRandomCountries(countriesList, amount);
  let people: Person[] = [];
  for(let i = 0; i < amount; i++){
    people.push(new Person(randomCountries[i], Math.floor(Math.random() * 2) == 0));
  }
  return people;
}

let questionsAmount: number[] = [5, 5, 5];
let questionsTotal: number = questionsAmount[0] + questionsAmount[1] + questionsAmount[2];
let people = generatePeople(questionsTotal);
let question1: string[] = buildQuestion(questionsAmount[0], 1, people);
let question2: string[] = buildQuestion(questionsAmount[1], 2, people);
let question3: string[] = buildQuestion(questionsAmount[2], 3, people);


let answers = document.getElementsByClassName("answer");

answers[0].innerHTML = question1[0];

const showButtons = document.getElementsByClassName("show-button");
const userAnswers = document.getElementsByClassName("exercise__input");
const countriesElement = document.getElementsByClassName("country");
const sexSymbolElement = document.getElementsByClassName("sex-symbol");
for(let i = 0; i < countriesElement.length; i++){
  countriesElement[i].innerHTML = people[i].country.name;
  if(people[i].isMale)
    sexSymbolElement[i].classList.add("sex-symbol--male");
  else
    sexSymbolElement[i].classList.add("sex-symbol--female");
}


for(let i = 0; i < showButtons.length; i++){
  showButtons[i].addEventListener("click", () => showAnswer(i));
}
function showAnswer(i: number){
  answers[i].classList.toggle("answer--show");
  
}
