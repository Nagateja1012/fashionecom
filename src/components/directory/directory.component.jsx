
import DirectoryItem from "../directory-item/directory-item.component";
import "./directory.style.scss";

const Directory =({category}) => {

    return(
        <div className="directory-container">
            {category.map((cat) => (
                <DirectoryItem key={cat.id} category={cat} />
            ))}
        </div>
    );


}
export default Directory;