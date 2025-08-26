import Date from '../Date'

import styles from './Order.module.css'
import OrderPrice from './OrderPrice'

export default function Order({order, onClick}){
    const uahPrice = order.products.reduce( (sum,product)=>{
        const price = product.price.find(p=>p.symbol=== 'UAH')
        return sum +=price ? price.value : 0
    },0)
    
    const usdPrice = order.products.reduce((sum, product)=>{
        const price = product.price.find(p=>p.symbol ==='USD')
        return sum += price ? price.value : 0
    } , 0)
    const orderPrice = {
        UAH: uahPrice,
        USD: usdPrice
    }
    
    return <div onClick={()=>onClick(order)} className={styles.orderWrapper}>
        <p className={styles.orderTitle}>{order.title}</p>
        <div className={styles.orderDetails}>
            <span>{order.products.length}</span>
            <span className={styles.orderDetailsBottom}>
                {order.products.length > 1 ? 'Products' : 'Product'}
            </span>
        </div>
        {<Date date={order.date}/>}
        <OrderPrice price={orderPrice}/>
        <div>delete</div>
    </div>
}