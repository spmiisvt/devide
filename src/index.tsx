import React from 'react'
import ReactDOM from 'react-dom/client'
import {ThemeProvider} from "./app/providers/ThemeProvider";
import {setupStore} from "src/app/store/store.ts";
import {Provider} from "react-redux";
import {RouterProvider} from "react-router-dom";
import {router} from "src/app/router/router.tsx";


const store = setupStore()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ThemeProvider>
            <Provider store={store}>
                <RouterProvider router={router}/>
            </Provider>
        </ThemeProvider>
    </React.StrictMode>,
)
