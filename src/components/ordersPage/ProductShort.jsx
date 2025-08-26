import ProductTitle from "../productsPage/ProductTitle";
import styles from './ProductShort.module.css'
export default function ProductShort({product}){
    return <li className={styles.productShortWrapper}>
        <ProductTitle title={product.title} serialNubmer={product.serialNumber}/>
        <span>{product.isNew ? 'available' :'unavailable' }</span>
        <span>deleteButton</span>
    </li>

}
