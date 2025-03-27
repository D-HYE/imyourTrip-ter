import React from 'react';

function checkBox(props) {
    return (
        <label className="checkbox_label">
            <input type="checkbox" />
            <span>약관 전체 동의</span>
        </label>
    );
}

export default checkBox;