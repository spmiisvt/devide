import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'
import {ThemeProvider} from "./app/providers/ThemeProvider";
import {setupStore} from "src/app/store/store.ts";
import {Provider} from "react-redux";

const store = setupStore()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ThemeProvider>
            <Provider store={store}>
                <App/>
            </Provider>
        </ThemeProvider>
    </React.StrictMode>,
)
