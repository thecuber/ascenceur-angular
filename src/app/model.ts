export interface Player{

    name: string;
    score: number;
    currentRound ?: Round;
    rounds ?: Round[]

}

export interface Round{

    prediction: number;
    output: number;
    roundScore: number;

}

export enum State{

    WAITING = "Démarrer la partie",
    PREDICTING = "Prédictions finies",
    ROUND_END = "Tour suivant",
    GAME_END = "Recommencer une partie"

}