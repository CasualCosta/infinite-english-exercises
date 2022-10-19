{
    let subjects: string[] = [
        "cars",
        "robots",
        "houses",
        "computers",
        "cell phones",
        "televisions",
        "tablets",
        "clothes",
        "animals",
        "drones"
    ]

    let verbs: string[] = [
        "fly",
        "talk",
        "think",
        "teleport"
    ]

    class Question{
        readonly description : string;
        readonly answer : string;

        constructor(subject: string, verb: string, questionType, answerType){
            this.description = this.buildSentence(subject, verb, questionType);
            this.answer = this.buildSentence(subject, verb, answerType);

        }

        buildSentence(subject: string, verb: string, type: number): string {
            switch(type){
                case -1: return `${subject}/${verb}`
                case 0: return this.capitalizeFirstLetter(`${subject} will ${verb}.`);
                case 1: return this.capitalizeFirstLetter(`${subject} won't ${verb}.`);
                case 2: return this.capitalizeFirstLetter(`will ${subject} ${verb}?`);
                case 3: return `Yes, they will.`;
                case 4: return `No, they won't.`;
            }
            return "";
        }

        capitalizeFirstLetter(sentence: string){
            return sentence.charAt(0).toUpperCase() + sentence.slice(1);
        }
    }
}