export interface IAppState {
    started: boolean
};
  
export const initialAppState:IAppState = {
    started: false,
};


export interface IGameState {
    results: boolean,
    options: string[],
    history: any[]
}

export const initialGameState: IGameState = {
    results: false,
    options: ["Rock", "Paper", "Scissors"],
    history: []
};