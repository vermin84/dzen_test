import OrderDetails from "../components/ordersPage/OrderDetails";
import OrdersList from "../components/ordersPage/OrdersList";
import OrdersWrapper from "../components/ordersPage/OrdersWrapper";

export default function Orders(){
    return <OrdersWrapper>
        <OrdersList/>
        <OrderDetails/>
    </OrdersWrapper>
}