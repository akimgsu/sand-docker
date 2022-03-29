import { useHistory } from "react-router";
import useFetch from "../../hooks/useFetch";
import { useRef, useState } from "react";

export default function CreateCategory() {

    const categories = useFetch("http://localhost:3001/categories");
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false);

    function onSubmit(e) {
        e.preventDefault();
        if (!isLoading) {
            setIsLoading(true);
            fetch(`http://localhost:3001/categories/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    id: categories.length + 1,
                    category: categories.length + 1,
                    category_name: categoryRef.current.value
                }),
            }).then(res => {
                if (res.ok) {
                    alert("Completed");
                    history.push(`/`);
                    setIsLoading(false);
                }
            });
        }
    }

    const categoryRef = useRef(null);

    // function addDay() {
    //     fetch(`http://localhost:3001/categories/`, {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //             day: days.length + 1,
    //         }),
    //     }).then(res => {
    //         if (res.ok) {
    //             alert("생성이 완료 되었습니다");
    //             history.push(`/`);
    //         }
    //     });
    // }
    return (
        // <div>
        //     <h3> : {days.length}일</h3>
        //     <button onClick={addDay}>Add Category</button>
        // </div>
        <form onSubmit={onSubmit}>
            <div className="input_area">
                <label>Category Name</label>
                <input type="text" placeholder="name" ref={categoryRef} />
            </div>
            <button style={{
                opacity: isLoading ? 0.3 : 1,
            }}>{isLoading ? "Saving..." : "Save"}</button>
        </form>
    );
}