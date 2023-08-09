import { useRouteError } from "react-router-dom";
const Error = ()=> {
    const {status, statusText} = useRouteError();
    return (
        <div className="container ">
            <section className="error-page">
                <h1>Oops something went wrong</h1>
                <p>{status}, {statusText}</p>
            </section>
        </div>
    )
}

export default Error;