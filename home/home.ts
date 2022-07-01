{
    //#region Subject
    class Subject{
        readonly name: string;
        readonly container: string;
        readonly article: string;
        readonly isFurniture: boolean;

        constructor (name: string, container: string, article: string, isFurniture: boolean) {
            this.name = name;
            this.container = container;
            this.article = article;
            this.isFurniture = isFurniture;
        }
    }

    let subjects: Subject[] = [
        new Subject("couch", "living room", "a", true),
        new Subject("sofa", "living room", "a", true),
        new Subject("television", "living room", "a", true),
        new Subject("coffee table", "living room", "a", true),
        new Subject("rack", "living room", "a", true),
        new Subject("lamp", "living room", "a", true),
        new Subject("video game console", "living room", "a", true),
        new Subject("rug", "living room", "a", true),
        new Subject("armchair", "living room", "a", true),
        new Subject("chair", "dining room", "a", true),
        new Subject("table", "dining room", "a", true),
        new Subject("rug", "dining room", "a", true),
        new Subject("stove", "kitchen", "a", true),
        new Subject("fridge", "kitchen", "a", true),
        new Subject("cupboard", "kitchen", "a", true),
        new Subject("sink", "kitchen", "a", true),
        new Subject("oven", "kitchen", "an", true),
        new Subject("dishwasher", "kitchen", "a", true),
        new Subject("washing machine", "laundry room", "a", true),
        new Subject("sink", "bathroom", "a", true),
        new Subject("toilet", "bathroom", "a", true),
        new Subject("shower", "bathroom", "a", true),
        new Subject("bath tub", "bathroom", "a", true),
        new Subject("flower", "garden", "a", true),
        new Subject("plant", "garden", "a", true),
        new Subject("statue", "garden", "a", true),
        new Subject("fountain", "garden", "a", true),
        new Subject("bed", "bedroom", "a", true),
        new Subject("wardrobe", "bedroom", "a", true),
        new Subject("bedside table", "bedroom", "a", true),
        new Subject("bedside lamp", "bedroom", "a", true),
        new Subject("bookshelf", "bedroom", "a", true),
        new Subject("desk", "bedroom", "a", true),
        new Subject("desk", "study", "a", true),
        new Subject("bookcase", "study", "a", true),

        new Subject("kitchen", "house", "a", false),
        new Subject("bathroom", "house", "a", false),
        new Subject("toilet", "house", "a", false),
        new Subject("bedroom", "house", "a", false),
        new Subject("living room", "house", "a", false),
        new Subject("dining room", "house", "a", false),
        new Subject("garden", "house", "a", false),
        new Subject("balcony", "house", "a", false),
        new Subject("study", "house", "a", false)
    ]

    function GetRandomSubject(): Subject {
        return subjects[Math.floor(Math.random() * subjects.length)];
    }
    //#endregion

    class Question{
        readonly description : string;
        readonly answer : string;

        constructor(subject: Subject, amount: number, descriptionType: number, answerType: number) {
            this.description = this.buildSentence(subject, amount, descriptionType);
            this.answer = this.buildSentence(subject, amount, answerType);
        }

        buildSentence(subject: Subject, amount: number, type: number): string {
            let article: string = "";
            switch(amount){
                case 1: article = `${subject.article}`; break;
                case 2: article = "two"; break;
                case 3: article = "three"; break;
            }
            let name = subject.name;
            let container = subject.container;
            if(amount > 1) {
                name += "s";
            }
            switch(type){
                case 0: return `There is ${article} ${name} in the ${container}.`;
                case 1: return `There isn't ${article} ${name} in the ${container}.`;
                case 2: return `Is there ${article} ${name} in the ${container}?`;
                case 3: return `${article} ${name} in the ${container}.`;
                case 4: return `${article} ${name} in the ${container}.`;
                case 5: return `${article} ${name} in the ${container}?`;
                case 6: return `There are ${name} in the ${container}.`;
                case 7: return `There aren't ${name} in the ${container}.`;
                case 8: return `Are there ${name} in the ${container}?`;
                case 9: return `There is`;
                case 10: return `There isn't`;
                case 11: return `Is there`;
                case 12: return `There are`;
                case 13: return `There aren't`;
                case 14: return `Are there`;
                case 15: return `${article} ${name} in the ${container}.`;
                case 16: return `${article} ${name} in the ${container}?`;
                case 17: return `Yes, there is.`;
                case 18: return `No, there isn't.`;
                case 19: return `Yes, there are.`;
                case 20: return `No, there aren't.`;
                default: return "";
            }
        }
    }

    let questions: Question[] = [];
    let form: number[] = [];
    for (let i = 0; i < 10; i++) {
        let amount = Math.floor(Math.random() * 3) + 1;
        let answerType: number = Math.floor(Math.random() * 3 + 9);
        let f = answerType - 9;
        form.push(f);
        let questionType: number = (answerType == 11) ? 16 : 15;
        if(amount > 1)
            answerType += 3;
        let s: Subject = GetRandomSubject();
        let q: Question = new Question(s, amount, questionType, answerType);
        questions.push(q);
    }
    
    for(let i = 0; i < 5; i++) {
        let amount = Math.floor(Math.random() * 3) + 1;
        let answerType = Math.floor(Math.random() * 2) + 17;
        let f = answerType - 17;
        form.push(f);
        let questionType = (amount == 1) ? 2 : 8;
        if(amount > 1)
            answerType += 2;
        let s = GetRandomSubject();
        let q = new Question(s, amount, questionType, answerType);
        questions.push(q);
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
    for (let i = 0; i < form.length; i++){
        if(form[i] == 0){
            thumbsElement[i].classList.add("thumbs--up");
        } else if(form[i] == 1){
            thumbsElement[i].classList.add("thumbs--down");
        } else if (form[i] == 2){
            thumbsElement[i].classList.add("question--mark");
        }
        else{
            console.log(`Something went wrong with the thumbs. Form at position ${i}'s value is ${form[i]}`);
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