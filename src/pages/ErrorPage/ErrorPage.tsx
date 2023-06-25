import cls from './ErrorPage.module.scss';
import {Link} from "react-router-dom";

export const ErrorPage = () => {
    return (
        <div className={cls.errorPage}>
            <div className={cls.wrapper}>
                <h1>404</h1>
                <Link to={'/'}>Go to Home</Link>
            </div>
        </div>
    );
};
