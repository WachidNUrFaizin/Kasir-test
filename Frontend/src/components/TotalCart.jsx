import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import { FaCartArrowDown } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { saveOrder } from "../features/CartSlice";
import Swal from "sweetalert2";

const TotalCart = () => {
    const dispatch = useDispatch();
    const carts = useSelector((state) => state.cart.data);

    let sum = 0;
    if (carts) {
        sum = carts.reduce((result, item) => {
            return result + parseInt(item.totalPrice);
        }, 0);
    }

    const saveCartData = () => {
        const orderData = {
            date: new Date(),
            total: sum,
            detail: carts,
        };
        dispatch(saveOrder(orderData));
        Swal.fire("Order Success!", "", "success");
    };

    return (
        <div className="total-cart">
            <div className="total-amount">
                Total Bayar: Rp {sum.toLocaleString("id-ID")}
            </div>
            <Button
                variant="primary"
                size="lg"
                onClick={saveCartData}
            >
                <FaCartArrowDown /> Bayar
            </Button>
        </div>
    );
};

TotalCart.propTypes = {
    carts: PropTypes.array,
};

export default TotalCart;
