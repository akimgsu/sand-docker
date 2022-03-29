import { useState } from "react"

export default function Item({ item: w }) {
    const [item, setItem] = useState(w);
    const [isShow, setIsShow] = useState(false);
    const [isStock, setIsStock] = useState(item.isStock);
    function toggleShow() {
        setIsShow(!isShow);
    }
    function toggleDone() {
        fetch(`http://localhost:3001/items/${item.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                ...item,
                isStock: !isStock,
            }),
        }).then(res => {
            if (res.ok) {
                setIsStock(!isStock);
            }
        });
    }

    function del() {
        if (window.confirm("Do you want to delete?")) {
            fetch(`http://localhost:3001/items/${item.id}`, {
                method: "DELETE",
            }).then(res => {
                if (res.ok) {
                    setItem({ id: 0 });
                }
            });
        }
    }

    if (item.id === 0) {
        return null;
    }

    return (
        <tr className={isStock ? "off" : ""}>
            <td>
                <input type="checkbox" checked={isStock} onChange={toggleDone} />
            </td>
            <td>{item.title}</td>
            <td>{isShow && item.price}</td>
            <td>
                <button onClick={toggleShow}>{isShow ? 'Hide' : 'View'}</button>
                <button onClick={del} className="btn_del">Delete</button>
            </td>
        </tr>
    )
}