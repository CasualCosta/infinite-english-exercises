{
    //#region Subjects
    class Subject {
        readonly name: string;
        readonly isPlural: boolean;

        constructor(name: string, isPlural: boolean){
            this.name = name;
            this.isPlural = isPlural;
        }

    }

    let subjects: Subject[] = [ 
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
    ]

    function GetRandomSubject(): Subject{
        return subjects[Math.floor(Math.random() * subjects.length)];
    }
    //#endregion

    //#region Profession
    class Profession {
        readonly name: string;
        readonly article: string;

        constructor(name: string, article: string){
            this.name = name;
            this.article = article;
        }
    }

    let professions: Profession[] = [
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
    ]

    function GetRandomProfession(): Profession {
        return professions[Math.floor(Math.random() * professions.length)];
    }
    //#endregion

    class Question{
        readonly description : string;
        readonly answer : string;

        constructor(subject: Subject, profession: Profession){
            let verb: string = subject.isPlural ? "are" : "is";
            let prof: string = profession.name;
            if(subject.isPlural)
                prof += "s";
            this.description = `${subject.name} ${verb} ___ ${prof}.`
            this.answer = subject.isPlural ? "" : profession.article;
        }
    }

    let questions: Question[] = [];
    for(let i = 0; i < 10; i++){
        let s = GetRandomSubject();
        let p = GetRandomProfession();
        let q: Question = new Question(s, p);
        questions.push(q);
    }

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