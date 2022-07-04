{
    //#region Subject
    class Subject {
        readonly name : string;
        readonly pronoun: string;
        readonly affirmative: string;
        readonly negative: string;

        constructor(name: string, pronoun: string, affirmative: string, negative: string) {
            this.name = name;
            this.pronoun = pronoun;
            this.affirmative = affirmative;
            this.negative = negative;
        }
    }

    let subjects: Subject[] = [
        new Subject("John", "he", "is", "isn't"),
        new Subject("Sandra", "she", "is", "isn't"),
        new Subject("Danny", "he", "is", "isn't"),
        new Subject("Louis", "he", "is", "isn't"),
        new Subject("Michael", "he", "is", "isn't"),
        new Subject("Corey", "he", "is", "isn't"),
        new Subject("Amy", "she", "is", "isn't"),
        new Subject("Rachel", "she", "is", "isn't"),
        new Subject("Ross", "she", "is", "isn't"),
        new Subject("Mary", "she", "is", "isn't"),
        new Subject("Jane", "she", "is", "isn't"),
        new Subject("Nick and Tim", "they", "are", "aren't"),
        new Subject("Douglas and Patricia", "they",  "are", "aren't"),
        new Subject("Jessica and Vivian", "they", "are", "aren't"),
        new Subject("Emily and Ben", "they", "are", "aren't"),
        new Subject("Henry and Nichole", "they", "are", "aren't"),
        new Subject("Jared and Veronica", "they", "are", "aren't"),
        new Subject("Samuel and Ruby", "they", "are", "aren't"),
        new Subject("Gwen and Peter", "they", "are", "aren't")
    ];

    //#endregion

    class Question {
        readonly description: string;
        readonly answer: string;

        constructor(subject: Subject, place: string, descriptionType: number, answerType: number) {
            this.description = this.buildSentence(subject, place, descriptionType);
            this.answer = this.buildSentence(subject, place, answerType);
        }

        buildSentence(subject: Subject, place: string, type: number): string {
            switch(type){
                case 0:
                    return `${subject.name} ${subject.affirmative} from ${place}.`;
                case 1:
                    return `${subject.name} ${subject.negative} from ${place}.`;
                case 2:
                    let interrogative = Question.capitalizeFirstLetter(subject.affirmative);
                    return `${interrogative} ${subject.name} from ${place}?`;
                case 3:
                    return `Yes, ${subject.pronoun} ${subject.affirmative}.`;
                case 4:
                    return `No, ${subject.pronoun} ${subject.negative}.`;
                default:
                    return "";
            }
        }

        static capitalizeFirstLetter(sentence: string): string {
            return sentence.charAt(0).toUpperCase() + sentence.slice(1);
        }
    }
    {

    let places: string[] = [
        "Las Vegas",
        "Salt Lake City",
        "New York City",
        "Los Angeles",
        "Seattle",
        "Phoenix",
        "Miami",
        "Denver",
        "Little Rock",
        "Bristol",
        "London",
        "Sidney",
        "Dover",
        "Springfield",
        "Townsville",
        "Des Moines",
        "Boston",
        "Manchester",
        "Liverpool"
    ];
    
    function buildQuestions(amount: number, descriptionType: number, answerType: number): Question[] {
        let questions: Question[] = [];
        for(let i = 0; i < amount; i++){
            let index: number = Math.floor(Math.random() * subjects.length);
            let s = subjects[index];
            index = Math.floor(Math.random() * places.length);
            let p = places[index];
            let question: Question = new Question(s, p, descriptionType, answerType);
            questions.push(question);
        }
        return questions;
    }

    let questions: Question[] = buildQuestions(5, 0, 1);
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
}

static capitalizeFirstLetter(sentence: string): string {
    return sentence.charAt(0).toUpperCase() + sentence.slice(1);
}