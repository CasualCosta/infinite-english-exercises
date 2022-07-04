{
    //#region People
    class Person {
        readonly name: string;
        readonly genitive: string;
        readonly isPlural : boolean;

        constructor (name: string, genitive: string, isPlural: boolean){
            this.name = name;
            this.genitive = genitive;
            this.isPlural = isPlural;
        }
    }

    let object: Person[] = [
        new Person("Henry", "my", "'s"),
        new Person("Charles", "is", "'s"),
        new Person("Joss", "is", "'s"),
        new Person("Frank", "is", "'s"),
        new Person("Lisa", "is", "'s"),
        new Person("", "is", "'s"),
    ]

    function getRandomPerson(): Person{
        return object[Math.floor(Math.random() * object.length)];
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

    class Question{
        readonly descriptionFore : string;
        readonly descriptionAfter : string;
        readonly answer : string;

        constructor(questionType: number, answerType: number, subjects: Person[], relative: Person){

        }

        buildQuestion(type: number, subjects: Person[], relative: Person): string{
            switch(type){
                case 0: return subjects.length == 1 ? "'s" : "'";
            }
        }
    }
}