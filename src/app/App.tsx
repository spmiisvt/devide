import './styles/index.scss'
import {classNames} from "../shared/lib/classNames/classNames";
import {useTheme} from "./providers/ThemeProvider";
import {Outlet} from "react-router-dom";

function App() {
    const {theme} = useTheme();

    return (
        <div className={classNames("app-wrapper", {}, [theme])}>
            <Outlet/>
        </div>
    )
}

export default App
