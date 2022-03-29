import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Item from "./Item";

export default function Items() {
    const { cate } = useParams();

    const Items = useFetch(`http://localhost:3001/items?category=${cate}`);
    return (
        <div>
            <h2>Category# {cate}</h2>
            <table>
                <tbody>
                    {Items.map(item => (
                        <Item item={item} key={item.id} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}