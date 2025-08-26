import { useState } from "react";
import OrderDetails from "../components/ordersPage/OrderDetails";
import OrdersList from "../components/ordersPage/OrdersList";
import OrdersWrapper from "../components/ordersPage/OrdersWrapper";

export default function Orders(){
    
    const [activeOrder, setActiveOrder] = useState(null)

    
    return <OrdersWrapper >
        <OrdersList setOrder={setActiveOrder}/>
        {activeOrder && <OrderDetails order={activeOrder}/>}
    </OrdersWrapper>
}