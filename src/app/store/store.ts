import {combineReducers, configureStore} from "@reduxjs/toolkit";
import treeReducer from "src/widget/TreeElement/store/TreeReducer.ts";

const rootReducer = combineReducers({
    treeReducer
})
export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
