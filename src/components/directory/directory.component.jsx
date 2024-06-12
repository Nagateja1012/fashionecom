import Categories from "../category/category.component";
import "./directory.style.scss";

const Directory =({category}) => {

    return(
        <div className="directory-container">
            {category.map((cat) => (
                <Categories key={cat.id} category={cat} />
            ))}
        </div>
    );


}
export default Directory;