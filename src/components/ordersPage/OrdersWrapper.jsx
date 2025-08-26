import styles from './OrdersWrapper.module.css'
export default function OrdersWrapper({children}){

    
    return <>
        <h2>Orders</h2>
        <div className={styles.ordersWrapper}>{children}</div>
    </>
}