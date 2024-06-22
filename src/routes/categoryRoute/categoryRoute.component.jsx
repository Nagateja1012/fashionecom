import { Fragment, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CategoriesContext } from "../../context/categories.context";
import ProductCard from "../../components/productscard/product-card.component";

import {CategoryContainer, CategoryTitle} from './categoryRoute.styles'


const CategoryRoute = () => {

    const {category} = useParams();
    const {categoriesMap} = useContext(CategoriesContext);
    const [products, setproducts] = useState(categoriesMap[category]);

      useEffect(()=>{
        setproducts(categoriesMap[category])

      }, [category, categoriesMap])  


    return(
        <Fragment>
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
            <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          </CategoryContainer>
        </Fragment>
    )

}
export default CategoryRoute;