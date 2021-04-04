import {combineReducers, configureStore} from '@reduxjs/toolkit'
import slice from '../slice/slice'
import mainReducer from './mainReducer'


const rootReducer = combineReducers({
    main: slice // Не забывай про обычный mainReducer
})

export const store = configureStore({
    reducer: rootReducer,
})