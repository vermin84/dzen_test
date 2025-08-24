import styles from './OrdersWrapper.module.css'
export default function OrdersWrapper({children}){
    return <div className={styles.ordersWrapper}>{children}</div>
}