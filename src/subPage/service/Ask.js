import React from 'react';
import BoardListStyle from '../../components/BoardListStyle';

const Ask = ({postData}) => {
    return (
        <div className="board_area">
            <div className="board_wrap">
                <div className="board_list">
                    <BoardListStyle postData={postData}/>
                </div>
            </div>
        </div>
    );
};

export default Ask;