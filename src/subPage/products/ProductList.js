import DefaultList, { AirplaneList } from './ProductListStyle';

const ProductList = ({ category, tab }) => {
    const componentMap = {
        airplane: AirplaneList,
        accommodation: DefaultList,
        reservation: DefaultList,
    };

    const Component = componentMap[category];

    return (
        <div className="d-flex flex-wrap">
            {Component ? (
                <>
                    <Component tab={tab} />
                    <Component tab={tab} />
                    <Component tab={tab} />
                </>
            ) : (
                <p>해당 상품이 없습니다.</p>
            )}
        </div>
    );
};

export default ProductList;