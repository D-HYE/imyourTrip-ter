import React from 'react';
import ListStyle from '../../components/ListStyle';

const Ask = ({postData}) => {
    return (
        <div className="board_area">
            <div className="board_wrap">
                <div className="board_list">
                    <ListStyle postData={postData}/>
                </div>
            </div>
        </div>
    );
};

export default Ask;