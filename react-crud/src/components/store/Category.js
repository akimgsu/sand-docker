
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

export default function Category() {
    const categories = useFetch("http://localhost:3001/categories");
    if (categories.length === 0) {
        return <span>Loading...</span>;
    }
    return (
        <div>
            <ul className="list_day">
                {categories.map(cate => (
                    <li key={cate.id}>
                        <Link to={`/items/${cate.category}`}>{cate.category_name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}