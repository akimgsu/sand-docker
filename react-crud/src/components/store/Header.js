import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="header">
            <h1>
                <Link to="/">Store</Link>
            </h1>
            <div className="menu">
                <Link to="/create_cate" className="link">
                    Add Category
                </Link>
                <Link to="/create_item" className="link">
                    Add Item
                </Link>
            </div>
        </div>
    );
}