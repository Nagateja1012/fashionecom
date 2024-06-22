
import DirectoryItem from "../directory-item/directory-item.component";
import {DirectoryContainer} from './directory.style'

const Directory =({category}) => {

    return(
        <DirectoryContainer>
            {category.map((cat) => (
                <DirectoryItem key={cat.id} category={cat} />
            ))}
        </DirectoryContainer>
    );


}
export default Directory;