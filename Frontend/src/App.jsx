import { Row } from 'react-bootstrap';
import NavbarComponent from './components/NavbarComponent';
import Category from './components/Category';
import ProductDetail from './components/ProductDetail';
import Order from './components/Order';
import TotalCart from './components/TotalCart';

function App() {
    return (
        <>
            <NavbarComponent />
            <div className="container-fluid mt-3">
                <Row>
                    <Category />
                    <ProductDetail />
                    <Order />
                </Row>
            </div>
            <TotalCart />
        </>
    );
}

export default App;
