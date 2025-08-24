import Guarantee from './Guarantee'
import Price from './Price'
import styles from './Product.module.css'
import ProductTitle from './ProductTitle'

export default function Product({product}){
    return <div className={styles.productWrapper}>
        {<ProductTitle title={product.title} serialNumber={product.serialNumber}/>}
        {<Guarantee dates={product.guarantee}/>}
        
        <div className={styles.productStatus}>{product.isNew > 0 ? 'Новый' : 'Б/У'}</div>
        <div>
            {product.price.map(item=><Price key={item.value} price={item}/>)}
        </div>
    </div>
}