{
    //#region Facility
    class Facility{
        readonly singular: string;
        readonly plural: string;
        readonly article: string;

        constructor(singular: string, plural: string, article: string,){
            this.singular = singular;
            this.article = article;
            this.plural = plural;
        }
    }

    let facilities: Facility[] = [
        new Facility("hospital", "hospitals","a"),
        new Facility("park", "parks", "a"),
        new Facility("movie theater", "movie theaters", "a"),
        new Facility("cinema", "cinemas", "a"),
        new Facility("shopping mall", "shopping malls", "a"),
        new Facility("shopping center", "shopping centers", "a"),
        new Facility("shopping centre", "shopping centres", "a"),
        new Facility("grocery store", "grocery stores", "a"),
        new Facility("museum", "museums", "a"),
        new Facility("library", "libraries", "a"),
        new Facility("gas station", "gas stations", "a"),
        new Facility("restaurant", "restaurants", "a"),
        new Facility("train station", "train stations", "a"),
        new Facility("subway station", "subway stations", "a"),
        new Facility("bus station", "bus stations", "a"),
        new Facility("theater", "theaters", "a"),
        new Facility("university", "universities", "a"),
        new Facility("school", "schools", "a"),
        new Facility("gym", "gyms", "a"),
        new Facility("ice cream parlor", "ice cream parlors", "an"),
        new Facility("pizzeria", "pizzerias", "a"),
        new Facility("nightclub", "nightclubs", "a")
    ]

    function getRandomFacility(): Facility{
        return facilities[Math.floor(Math.random() * facilities.length)];
    }
    //#endregion

    //#region Questions
    class Question {
        readonly description: string;
        readonly answer: string;

        constructor (facility: Facility, isPlural: boolean, isFar: boolean, 
            descriptionType: number, answerType: number){
                this.description = this.buildQuestion(facility, isPlural, descriptionType, isFar);
                this.answer = this.buildQuestion(facility, isPlural, answerType, isFar);
        }

        buildQuestion(facility: Facility, isPlural: boolean, type: number, isFar: boolean): string{
            let article: string = isPlural ? "" : facility.article + " ";
            let fal = isPlural ? facility.plural : facility.singular;
            let pronoun: string = isPlural ? "these" : "this";
            if(isFar){
                pronoun = isPlural ? "those" : "that";
            }
            let distance: string = isFar ? "far" : "near";
            let verb: string = isPlural ? "are" : "is";
            switch(type){
                case 0: return Question.capitalizeFirstLetter(pronoun);
                case 1: return `${verb} ${article}${fal}.`;
                case 2: return `${verb} ${article}${fal}. (${distance})`;
                case 3: return `${Question.capitalizeFirstLetter(pronoun)} ${verb} ${article}${fal}.`;
                case 4: return `${fal} (${distance})`
                default: return "Error constructing the question.";
            }
        }

        static capitalizeFirstLetter(sentence: string): string {
            return sentence.charAt(0).toUpperCase() + sentence.slice(1);
        }
    }

    
    let questions: Question[] = [];

    for(let i = 0; i < 5; i++){
        let isFar: boolean = false;
        let isPlural: boolean = Math.floor(Math.random() * 2) == 0;
        let facility = getRandomFacility();
        let question = new Question(facility, isPlural, isFar, 1, 0);
        questions.push(question);
    }

    for(let i = 0; i < 5; i++){
        let isFar: boolean = true;
        let isPlural: boolean = Math.floor(Math.random() * 2) == 0;
        let facility = getRandomFacility();
        let question = new Question(facility, isPlural, isFar, 1, 0);
        questions.push(question);
    }
    
    for(let i = 0; i < 10; i++){
        let isFar: boolean = Math.floor(Math.random() * 2) == 0;
        let isPlural: boolean = Math.floor(Math.random() * 2) == 0;
        let facility = getRandomFacility();
        let question = new Question(facility, isPlural, isFar, 2, 0);
        questions.push(question);
    }

    for(let i = 0; i < 10; i++){
        let isFar: boolean = Math.floor(Math.random() * 2) == 0;
        let isPlural: boolean = Math.floor(Math.random() * 2) == 0;
        let facility = getRandomFacility();
        let question = new Question(facility, isPlural, isFar, 4, 3);
        questions.push(question);
    }
    //#endregion


    const answersElement = document.getElementsByClassName("answer");
    const showButtons = document.getElementsByClassName("show-button");
    const checkButtons = document.getElementsByClassName("check-button");
    const resultElement = document.getElementsByClassName("result");
    const InputElement = document.querySelectorAll("input");
    const descriptionElement = document.getElementsByClassName("description");

    for(let i = 0; i < answersElement.length; i++){
        answersElement[i].innerHTML = questions[i].answer;
    }
    for(let i = 0; i < descriptionElement.length; i++){
        descriptionElement[i].innerHTML = questions[i].description;
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
    if(questions[i].answer == InputElement[i].value)
        resultElement[i].classList.add("result--right");
    else
        resultElement[i].classList.add("result--wrong");
    }
}