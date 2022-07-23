class Verb{
    readonly infinitive: string;
    readonly past: string;
    readonly participle: string;
    readonly gerund: string;

    constructor(infinitive: string, past: string, participle: string, gerund: string){
        this.infinitive = infinitive;
        this.past = past;
        this.participle = participle;
        this.gerund = gerund;
    }
}

let regularVerbs: Verb[] = [
    new Verb("play", "played", "played", "playing"),
    new Verb("watch", "watched", "watched", "watching"),
]