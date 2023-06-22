import './styles/index.scss'
import {classNames} from "../shared/lib/classNames/classNames";
import {useTheme} from "./providers/ThemeProvider";
import {Navbar} from "src/widget/Navbar";
import {Sidebar} from "src/widget/Sidebar";
import {CodeBlock} from "src/widget/CodeBlock/ui/CodeBlock.tsx";
import {Console} from "src/widget/Console";

function App() {
    const {theme} = useTheme();

    return (
        <div className={classNames("app-wrapper", {}, [theme])}>
            <div className="user_panel">
                <Navbar/>
                <Sidebar/>
                <CodeBlock/>
                <Console/>
            </div>
            <div className="content_panel">

            </div>
        </div>
    )
}

export default App
