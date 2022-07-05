{
    //#region subjects
    class Subject {
        readonly name: string;
        readonly genitive: string;
        readonly isPlural : boolean;

        constructor (name: string, genitive: string, isPlural: boolean){
            this.name = name;
            this.genitive = genitive;
            this.isPlural = isPlural;
        }
    }

    let subjects: Subject[] = [
        new Subject("Charles", "'s", false),
        new Subject("Sandra", "'s", false),
        new Subject("Joss", "'s", false),
        new Subject("Dina", "'s", false),
        new Subject("Ashley", "'s", false),
        new Subject("Claire", "'s", false),
        new Subject("James", "'s", false),
        new Subject("Timmothy", "'s", false),
        new Subject("the Coens", "'", true),
        new Subject("the students", "'", true),
        new Subject("the kids", "'", true),
        new Subject("the workers", "'", true),
        new Subject("the guests", "'", true),
        new Subject("the children", "'s", true),
        new Subject("the women", "'s", true),
        new Subject("the men", "'s", true)
    ]

    function getRandomPerson(): Subject{
        return subjects[Math.floor(Math.random() * subjects.length)];
    }
    //#endregion

    //#region Relation
    class Relation {
        readonly neutral: string;
        readonly male: string;
        readonly female: string;

        constructor(neutral: string, male: string, female: string){
            this.male = male;
            this.female = female;
        }
    }

    let relations: Relation[] = [
        new Relation("sibling", "brother", "sister"),
        new Relation("parent", "father", "mother"),
        new Relation("grandparent", "grandfather", "grandmother"),
        new Relation("child", "son", "daughter"),
        new Relation("grandchild", "grandson", "granddaughter"),
        new Relation("spouse", "husband", "wife"),
        new Relation("cousin", "cousin", "cousin"),
        new Relation("nephew", "nephew", "niece"),
        new Relation("uncle", "uncle", "aunt")
    ]

    function getRandomRelation(): Relation{
        return relations[Math.floor(Math.random() * relations.length)];
    }
    //#endregion

    //#region Relatives
    class Relative{
        readonly name: string;
        readonly isMale: boolean;

        constructor (name: string, isMale: boolean){
            this.name = name;
            this.isMale = isMale;
        }
    }

    let relatives: Relative[] = [
        new Relative("Michael", true),
        new Relative("Owen", true),
        new Relative("Harry", true),
        new Relative("Ronald", true),
        new Relative("Wilson", true),
        new Relative("Adam", true),
        new Relative("Edmund", true),
        new Relative("Xavier", true),
        new Relative("Olivia", false),
        new Relative("Lana", false),
        new Relative("Uma", false),
        new Relative("Nicole", false),
        new Relative("Britney", false),
        new Relative("Claire", false),
        new Relative("Jill", false),
        new Relative("Penelope", false)
    ]

    function getRandomRelative(): Relative{
        return relatives[Math.floor(Math.random() * relatives.length)];
    }


    //#endregion

    class Question{
        readonly description : string;
        readonly answer : string;

        constructor(questionType: number, answerType: number, subject: Subject, relation: Relation, relative: Relative){
            this.description = this.buildQuestion(questionType, subject, relation, relative);
            this.answer = this.buildQuestion(answerType, subject, relation, relative);
        }

        buildQuestion(type: number, subject: Subject, relation: Relation, relative: Relative): string{
            let posAdj = subject.isPlural ? "our" : "my";
            let rel = relative.isMale ? relation.male : relation.female;
            let sentence: string = "Error constructing the sentence.";
            switch(type){
                case 0: sentence = `${subject.name}: "${relative.name} is ${posAdj} ${rel}."`; break;
                case 1: sentence = `${relative.name} is ${subject.name}${subject.genitive} ${rel}.`; break;
                case 2: sentence = `${subject.name} / ${rel}`; break;
                case 3: sentence = `Who is ${subject.name}${subject.genitive} ${rel}?`; break;
                case 4: sentence = `${relative.name} / ${rel}`; break;
                case 5: sentence = `Whose ${rel} is ${relative.name}?`; break;
            }
            sentence = this.capitalizeFirstLetter(sentence);
            return sentence;
        }

        capitalizeFirstLetter(sentence: string){
            return sentence.charAt(0).toUpperCase() + sentence.slice(1);
        }
    }

    let questions: Question[] = [];

    for(let i = 0; i < 20; i++){
        let sub: Subject = getRandomPerson();
        let relation: Relation = getRandomRelation();
        let relative: Relative = getRandomRelative();
        if(i < 10)
            questions.push(new Question(0, 1, sub, relation, relative));
        else if (i < 15)
            questions.push(new Question(2, 3, sub, relation, relative));
        else
            questions.push(new Question(4, 5, sub, relation, relative));
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