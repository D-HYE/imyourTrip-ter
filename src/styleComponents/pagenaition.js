import React from 'react';

function pagenaition(props) {
    return (
        <div class="pagenation_wrap d-flex justify-content-center align-items-center gap-2">
            <button class="icon_box icon1">이전</button>
            <ul class="d-flex gap-2">
                <li class="num active">1</li>
                <li class="num">2</li>
                <li class="num">3</li>
                <li class="num">4</li>
                <li class="num">5</li>
            </ul>
            <button class="icon_box icon2">다음</button>
        </div>
    );
}

export default pagenaition;