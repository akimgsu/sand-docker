import { useRef, useState } from "react";
import { useHistory } from "react-router";
import useFetch from "../../hooks/useFetch";

export default function CreateItem() {
    const categories = useFetch("http://localhost:3001/categories");
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false);

    function onSubmit(e) {
        e.preventDefault();
        if (!isLoading) {
            setIsLoading(true);
            fetch(`http://localhost:3001/items/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    category: categoryRef.current.value,
                    title: titleRef.current.value,
                    price: priceRef.current.value,
                    isStock: false,
                }),
            }).then(res => {
                if (res.ok) {
                    alert("Completed");
                    history.push(`/items/${categoryRef.current.value}`);
                    setIsLoading(false);
                }
            });
        }
    }

    const titleRef = useRef(null);
    const priceRef = useRef(null);
    const categoryRef = useRef(null);

    return (
        <form onSubmit={onSubmit}>
            <div className="input_area">
                <label>Title</label>
                <input type="text" placeholder="name" ref={titleRef} />
            </div>
            <div className="input_area">
                <label>Price</label>
                <input type="text" placeholder="$" ref={priceRef} />
            </div>
            <div className="input_area">
                <label>Category</label>
                <select ref={categoryRef}>
                    {categories.map(cate => (
                        <option key={cate.id} value={cate.category}>
                            {cate.category_name}
                        </option>
                    ))}
                </select>
            </div>
            <button style={{
                opacity: isLoading ? 0.3 : 1,
            }}>{isLoading ? "Saving..." : "Save"}</button>
        </form>
    );
}