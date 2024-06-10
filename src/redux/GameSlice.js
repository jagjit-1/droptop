import { createSlice } from "@reduxjs/toolkit";

const gameReducer = createSlice({
    name: "game",
    initialState: {
        isPlaying: false,
        score: 0
    },
    reducers: {
        incrementScore: (state, action) => {
            state.score++;
            return;
        },
        startGame: (state, action) => {
            state.isPlaying = true;
        },
        endGame: (state, action) => {
            state.isPlaying = false;
            state.score = 0;
        }
    }
});


export const { incrementScore, startGame, endGame } = gameReducer.actions;
export default gameReducer.reducer;
