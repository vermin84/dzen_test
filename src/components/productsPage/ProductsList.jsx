import {products} from '../../../data/products.js'
import Product from './Product'
import styles from './ProductList.module.css'
export default function ProductsList(){
    return <div className={styles.productListWrapper}>

        {products.map(item=><Product key={item.id} product={item}/>)}
    </div>
}