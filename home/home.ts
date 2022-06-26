{
    //#region Subject
    class Subject{
        readonly name : string;
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
                case 1: article = `${subject.article} `; break;
                case 2: article = "two ";
                case 3: article = "three";
            }
            let container = subject.container;
            if(amount > 1) {
                container += "s";
            }
            switch(type){
                case 0: return `There is ${subject.article}in the ${container}.`;
                case 1: return `There isn't ${subject.article}in the ${container}.`;
                case 2: return `Is there ${subject.article}in the ${container}?`;
                case 3: return `There are ${subject.article}in the ${container}.`;
                case 4: return `There aren't ${subject.article}in the ${container}.`;
                case 5: return `Are there ${subject.article}in the ${container}?`;
                case 6: return `There is`;
                case 7: return `There isn't`;
                case 8: return `Is there`;
                case 9: return `There are`;
                case 10: return `There aren't`;
                case 11: return `Are there`;
                case 12: return `${subject.article}in the ${container}.`;
                default: return "";
            }
        }
    }

    let questions: Question[] = [];
    let form: number[] = [];
    for (let i = 0; i < 10; i++) {
        let type: number = Math.floor(Math.random() * 3);
        let amount: number = Math.floor(Math.random() * 3) + 1;
    }
}