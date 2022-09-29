import MenuButton from "./MenuButton";

export default function CategoryMenu() {
    const categories = [
        {
            id: 1,
            name: "women's volleyball"
        },
        {
            id: 2,
            name: "men's volleyball"
        },
        {
            id: 3,
            name: "women's beach volleyball"
        },
        {
            id: 4,
            name: "men's beach volleyball"
        }
    ]
    return (
        <>
            {categories.map(item => <MenuButton key={item.id} id={item.id} name={item.name} />)}
        </>
    )
}