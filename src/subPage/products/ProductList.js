import DefaultList, { AirplaneList } from './ProductListStyle';
import { CommingSoon } from '../../components/util';

const ProductList = ({ category, tab, testData }) => {
    const componentMap = {
        airplane: AirplaneList,
        accommodation: DefaultList,
        reservation: CommingSoon,
    };

    const Component = componentMap[category];

    return (
        <div className="d-flex flex-wrap pageBox p-2">
            {Component ? (
                <>
                    <Component tab={tab} testData={testData} />
                </>
            ) : (
                <p>해당 상품이 없습니다.</p>
            )}
        </div>
    );
};

export default ProductList;