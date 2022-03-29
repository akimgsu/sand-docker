import { Link } from "react-router-dom";
export default function EmptyPage() {
    return (
        <>
            <h2>Wrong Router</h2>
            <Link to="/">Home Page</Link>
        </>
    );
}