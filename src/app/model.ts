export interface Player{

    name: string;
    score: number;

}

export enum State{

    WAITING,
    PREDICTING,
    SCORING,
    ROUND_END,
    GAME_END

}