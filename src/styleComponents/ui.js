import styled from "styled-components";

export const Checkbox = styled.label`
    .checkbox_label {
        display: block;
        position: relative;
        padding-left: 30px;
        margin-bottom: 20px;
        cursor: pointer;
        font-size: 16px;
        user-select: none;
        input {
            position: absolute;
            opacity: 0;
            cursor: pointer;
            height: 0;
            width: 0;
        }
        span {
            position: absolute;
            top: 0;
            left: 0;
            height: 25px;
            width: 25px;
            background-color: #eee;
            &:after {
                content: "";
                position: absolute;
                display: none;
            }
        }
        input:checked ~ span {
            background-color: #2196F3;
        }
        input:checked ~ span:after {
            display: block;
        }
        span:after {
            left: 9px;
            top: 5px;
            width: 5px;
            height: 10px;
            border: solid white;
            border-width: 0 3px 3px 0;
            transform: rotate(45deg);
        }
    }
`
    // return (
    //     <label className="checkbox_label">
    //         <input type="checkbox" />
    //         <span>약관 전체 동의</span>
    //     </label>
    // );

export const SquareBtn = styled.button`
    padding: 0.625rem 1.25rem;
    background: ${p => p.background || "var(--trip-blue)"};
    border-radius: 5px;
    font-weight: ${p => p.fontWeight || "400"};
    font-size: ${p => p.fontSize || "var(--desc-text)"};
    color: ${p => p.color || "white"};
`

export const RoundBtn = styled.button`
    padding: 0.625rem 1.25rem;
    background: ${p => p.background || "var(--trip-blue)"};
    border-radius: 30px;
    font-weight: ${p => p.fontWeight || "400"};
    font-size: ${p => p.fontSize || "var(--desc-text)"};
    color: ${p => p.color || "white"};
`


// function pagenaition(props) {
//     return (
//         <div class="pagenation_wrap d-flex justify-content-center align-items-center gap-2">
//             <button class="icon_box icon1">이전</button>
//             <ul class="d-flex gap-2">
//                 <li class="num active">1</li>
//                 <li class="num">2</li>
//                 <li class="num">3</li>
//                 <li class="num">4</li>
//                 <li class="num">5</li>
//             </ul>
//             <button class="icon_box icon2">다음</button>
//         </div>
//     );
// }
