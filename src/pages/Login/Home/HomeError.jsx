import { useRouteError } from "react-router-dom";

export default function HomeError() {
    const error = useRouteError();

    return (
        <div>
            <h2>에러 발생!</h2>
            <pre>{error.message}</pre>
        </div>
    )
}