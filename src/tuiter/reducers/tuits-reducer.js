import {createSlice} from "@reduxjs/toolkit";
// import tuits from '../data/tuits.json';
import {createTuitThunk, findTuitsThunk, deleteTuitThunk, updateTuitThunk} from "../../services/tuits-thunks";

const currentUser = {
    "username": "NASA",
    "handle": "@nasa",
    "avatar": "space.png",
};

const templateTuit = {
    ...currentUser,
    "tuit": "space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
    "dislikes": 0,
}

const initialState = {
    tuits: [],
    loading: false
}

const tuitsSlice = createSlice({
    name: 'tuits',
    initialState,
    extraReducers: {
        [findTuitsThunk.pending]:
            (state) => {
                state.loading = true
                state.tuits = []
            },
        [findTuitsThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.tuits = payload
            },
        [findTuitsThunk.rejected]:
            (state) => {
                state.loading = false
            },
        [deleteTuitThunk.fulfilled] :
            (state, { payload }) => {
                state.loading = false
                state.tuits = state.tuits
                    .filter(t => t._id !== payload)
            },
        [createTuitThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false
                state.tuits.push({
                    ...templateTuit,
                    ...payload,
                    _id: (new Date()).getTime(),
                })
            },
        [updateTuitThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false
                const tuitNdx = state.tuits.findIndex((t) => t._id === payload._id)
                state.tuits[tuitNdx] = {
                    ...state.tuits[tuitNdx],
                    ...payload
                }
            }
    },
    reducers: {
        createTuit(state, action) {
            state.unshift({
                ...action.payload,
                ...templateTuit,
                _id: (new Date()).getTime(),
            })
        },
        deleteTuit(state, action) {
            const index = state.findIndex(tuit => tuit._id === action.payload._id);
            state.splice(index, 1);
        }
    }
});
export const {createTuit, deleteTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;