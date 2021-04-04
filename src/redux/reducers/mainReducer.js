import { createReducer } from "@reduxjs/toolkit";
import { increment, decrement } from '../actions/actions'


const initialState = {
    characters: {},
    count: 0,
    posts: ['Первый Пост']
}

export default createReducer(initialState, {            // Принимает ДВА(2) ПАРАМЕТРА!
    [increment]: (state) => {
        state.count = state.count + 1
    },
    [decrement]: (state) => {
        state.count = state.count - 1
    },
})