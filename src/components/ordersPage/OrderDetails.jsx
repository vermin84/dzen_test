import ProductShort from "./ProductShort"
import styles from './OrderDetails.module.css'
export default function OrderDetails({order}){
    
    return <div className={styles.orderDetailsWrapper}>
        { order.products.length>0 && <ul>{

                 order.products.map(prod=><ProductShort key={prod.id} product={prod}/>)}
            
        </ul>   }
    </div>
}