import DefaultList, { HotelList, AirplaneList } from './ProductListStyle';

const ProductList = ({category, tab}) => {
    const componentMap = {
        airplane: {
            onSale: AirplaneList,
            domestic: AirplaneList,
            overseas: AirplaneList,
        },
        accommodation: {
            onSale: HotelList,
            hotel: HotelList,
            guestHouse: HotelList,
            countryside: HotelList
        },
        reservation: {
            allPass: DefaultList,
            localTour: DefaultList,
            themePark: DefaultList,
            ticket: DefaultList,
            train: DefaultList
        }
    };
    const Component = componentMap?.[category]?.[tab];
    
    return (
        <div className="d-flex flex-wrap">
             {Component ? <Component /> :  <p>해당 상품이 없습니다.</p>}
             {Component ? <Component /> :  <p>해당 상품이 없습니다.</p>}
             {Component ? <Component /> :  <p>해당 상품이 없습니다.</p>}
        </div>
    );
};

export default ProductList;