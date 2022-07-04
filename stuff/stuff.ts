{
    //#region Nouns
    class Noun{
        readonly singular: string;
        readonly plural: string;

        constructor(singular: string, plural: any){
            this.singular = singular;
            if(typeof plural === 'string')
                this.plural = plural;
            else if(typeof plural === 'number')
                this.plural = Noun.pluralBuilder(singular, plural);
            else
                console.log("Invalid plural type.");
        }

        static pluralBuilder(noun: string, type: number): string {
            if(type == 2 && noun[noun.length - 1] != 'y')
                console.log("Noun doesn't end in 'Y.");
            else if (type == 3 && noun[noun.length - 1] != 'f')
                console.log("Noun doesn't end in 'F'.");

            switch(type){
                case 0: return noun + "s";
                case 1: return noun + "es";
                case 2: return noun.slice(0, -1) + "ies";
                case 3: return noun.slice(0, -1) + "ves";
                default: return "Error constructing the word.";
            }
        }
    }

    function buildRegularPlural(singular: string): string{
        return singular + "s";
    }

    function getRandomNoun(nouns: Noun[]): Noun{
        return nouns[Math.floor(Math.random() * nouns.length)];
    }

    let regularPlurals: Noun[] = [
        new Noun("cat", 0),
        new Noun("dog", 0),
        new Noun("play", 0),
        new Noun("wall", 0),
        new Noun("stove", 0),
        new Noun("fridge", 0),
        new Noun("hospital", 0),
        new Noun("table", 0),
        new Noun("tree", 0),
        new Noun("tray", 0),
        new Noun("waiter", 0),
        new Noun("teacher", 0),
        new Noun("cupboard", 0),
        new Noun("bed", 0),
        new Noun("rug", 0),
        new Noun("desk", 0)
    ]
    

    //tomato
    let esPlurals: Noun[] = [
        new Noun("couch", 1),
        new Noun("reach", 1),
        new Noun("witch", 1),
        new Noun("wish", 1),
        new Noun("scratch", 1),
        new Noun("stitch", 1),
        new Noun("hitch", 1),
        new Noun("bless", 1),
        new Noun("glass", 1),
        new Noun("box", 1),
        new Noun("ex", 1),
        new Noun("potato", 1),
        new Noun("mango", 1),
        new Noun("tornado", 1),
        new Noun("zero", 1),
        new Noun("cargo", 1),
    ]

    //country
    let consYPlurals: Noun[] = [
        new Noun("study", 2),
        new Noun("cry", 2),
        new Noun("city", 2),
        new Noun("quality", 2),
        new Noun("emergency", 2),
        new Noun("accompany", 2),
        new Noun("company", 2),
        new Noun("embassy", 2),
        new Noun("try", 2),
        new Noun("fry", 2),
        new Noun("retry", 2),
        new Noun("fly", 2),
        new Noun("sky", 2),
        new Noun("hippy", 2),
        new Noun("bly", 2),
        new Noun("ply", 2)
    ]

    let irregularPlurals: Noun[] = [
        new Noun("leaf", 3),
        new Noun("thief", 3),
        new Noun("calf", 3),
        new Noun("wolf", 3),
        new Noun("roof", 3),
        new Noun("wife", "wives"),
        new Noun("mouse", "mice"),
        new Noun("knife", "knives"),
        new Noun("foot", "feet"),
        new Noun("goose", "geese"),
        new Noun("child", "children"),
        new Noun("man", "men"),
        new Noun("woman", "women"),
        new Noun("person", "people"),
        new Noun("fish", "fish"),
        new Noun("sheep", "sheep"),
    ]

    let allPlurals: Noun[] = [...regularPlurals, ...esPlurals, ...consYPlurals, ...irregularPlurals];
    //#endregion

    let questions: Noun[] = [];
    function pushQuestions(n: number, nouns: Noun[])
    {
        for(let i = 0; i < n; i++){
            let n: Noun = getRandomNoun(nouns);
            questions.push(n);
        }
    }
    pushQuestions(5, regularPlurals);
    pushQuestions(5, esPlurals);
    pushQuestions(5, consYPlurals);
    pushQuestions(5, irregularPlurals);
    pushQuestions(15, allPlurals);


    const answersElement = document.getElementsByClassName("answer");
    const showButtons = document.getElementsByClassName("show-button");
    const checkButtons = document.getElementsByClassName("check-button");
    const resultElement = document.getElementsByClassName("result");
    const InputElement = document.querySelectorAll("input");
    const descriptionElement = document.getElementsByClassName("description");

    for(let i = 0; i < answersElement.length; i++){
        answersElement[i].innerHTML = questions[i].plural;
    }
    for(let i = 0; i < descriptionElement.length; i++){
        descriptionElement[i].innerHTML = questions[i].singular;
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
    if(questions[i].plural == InputElement[i].value)
        resultElement[i].classList.add("result--right");
    else
        resultElement[i].classList.add("result--wrong");
    }
}