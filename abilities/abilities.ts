{
    //#region subject
    class Subject {
        readonly name : string;
        readonly pronoun: string;

        constructor(name: string, pronoun: string) {
            this.name = name;
            this.pronoun = pronoun;
        }
    }
    let subjects: Subject[] = [
        new Subject("I", "I"),
        new Subject("John", "he"),
        new Subject("Tom", "he"),
        new Subject("Edward", "he"),
        new Subject("Daniel", "he"),
        new Subject("Victor", "he"),
        new Subject("Will", "he"),
        new Subject("Mary", "she"),
        new Subject("Carey", "she"),
        new Subject("Janet", "she"),
        new Subject("Susie", "she"),
        new Subject("Lisa", "she"),
        new Subject("Lisa and Tom", "they"),
        new Subject("Michael and Charlie", "they"),
        new Subject("Sandra and Ruby", "they"),
        new Subject("Matt and Vickie", "they"),
        new Subject("Pam and Ashley", "they"),
        new Subject("Jerry and Tom", "they"),
        new Subject("Victor and Ryan", "they"),
        new Subject("Bob and John", "they"),
        new Subject("Danny and Emily", "they")
    ]

    //#endregion
    let verbs: string[] = [
        "dance",
        "swim",
        "sing",
        "run",
        "play guitar",
        "play the piano",
        "play keyboard",
        "play the drums",
        "drive",
        "ride a bike",
        "play tennis",
        "drive a car",
        "ride a truck",
        "ride a horse",
        "ride a bike",
        "program",
        "juggle",
        "skate",
        "surf",
        "moonwalk",
        "cook",
        "do Math",
        "speak Japanese",
        "draw",
        "paint",
        "act",
        "read",
        "write poetry",
        "understand Russian",
        "bake",
        "teach English",
        "buy a house",
        "fight karate",
        "hike"
    ]

    class Question{
        readonly description : string;
        readonly answer : string;

        constructor(subject: Subject, verb: string, descriptionType: number, answerType: number) {
            this.description = this.buildSentence(subject, verb, descriptionType);
            this.answer = this.buildSentence(subject, verb, answerType);
        }

        buildSentence(subject: Subject, verb: string, type: number): string {
            switch(type){
                case 0: return `${subject.name} can ${verb}.`;
                case 1: return `${subject.name} can't ${verb}.`;
                case 2: return `Can ${subject.name} ${verb}?`;
                case 3: return `Yes, ${subject.pronoun} can.`;
                case 4: return `No, ${subject.pronoun} can't.`;
                default: return "";
            }
        }
    }

    function buildQuestions(amount: number, descriptionType: number, answerType: number): Question[] {
        let questions: Question[] = [];
        for(let i = 0; i < amount; i++){
            let index: number = Math.floor(Math.random() * subjects.length);
            let s = subjects[index];
            index = Math.floor(Math.random() * verbs.length);
            let v = verbs[index];
            let question: Question = new Question(s, v, descriptionType, answerType);
            questions.push(question);
        }
        return questions;
    }

    let questions = buildQuestions(5, 0, 1);
    questions = questions.concat(buildQuestions(5, 0, 2));
    let isAffirmative: boolean[] = [];
    for (let i = 0; i < 5; i++) {
        let type: number = Math.floor(Math.random() * 2) + 3;
        isAffirmative.push(type == 3);
        questions = questions.concat(buildQuestions(1, 2, type));
    }

    const answersElement = document.getElementsByClassName("answer");
    const showButtons = document.getElementsByClassName("show-button");
    const checkButtons = document.getElementsByClassName("check-button");
    const resultElement = document.getElementsByClassName("result");
    const InputElement = document.querySelectorAll("input");
    const descriptionElement = document.getElementsByClassName("description");
    const thumbsElement = document.getElementsByClassName("thumbs");

    for(let i = 0; i < answersElement.length; i++){
        answersElement[i].innerHTML = questions[i].answer;
    }
    for(let i = 0; i < descriptionElement.length; i++){
        descriptionElement[i].innerHTML = questions[i].description;
    }
    for (let i = 0; i < thumbsElement.length; i++){
        if(isAffirmative[i]){
            thumbsElement[i].classList.add("thumbs--up");
        } else {
            thumbsElement[i].classList.add("thumbs--down");
        }
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