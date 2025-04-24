import styled from "styled-components";

export const SquareBtn = styled.button`
    width: ${p => p.width || "auto"};
    padding: ${p => p.padding ? `${p.padding[0] || 0.625}rem ${p.padding[1] || 1.25}rem` : "0.625rem 1.25rem"};
    font-weight: ${p => p.fontWeight || "400"};
    font-size: ${p => p.fontSize || "var(--desc-text)"};
    color: ${p => p.color || "white"};
    background: ${p => p.background || "var(--trip-blue)"};
    border-radius: 5px;
    border-style: solid;
    border-width: ${p => p.border?.[0] ? p.border[0]+"px": "0px"};
    border-color: ${p => p.border?.[1] || "var(--trip-blue)"};
    @media only screen and (max-width: 768px){
        font-size: var(--small-text);
    }
`

export const RoundBtn = styled.button`
    width: ${p => p.width || "auto"};
    padding: ${p => p.padding ? `${p.padding[0] || 0.625}rem ${p.padding[1] || 1.25}rem` : "0.625rem 1.25rem"};
    background: ${p => p.background || "var(--trip-blue)"};
    font-weight: ${p => p.fontWeight || "400"};
    font-size: ${p => p.fontSize || "var(--desc-text)"};
    color: ${p => p.color || "white"};
    border-radius: 30px;
    border-style: solid;
    border-width: ${p => p.border?.[0] ? p.border[0]+"px": "0px"};
    border-color: ${p => p.border?.[1] || "var(--trip-blue)"};
    @media only screen and (max-width: 768px){
        font-size: var(--small-text);
    }
`

export const IconBtn = styled.button`
    width: 24px;
    height: 24px;
    text-indent: -10000px;
`
export const ImgBox = styled.div`
    width: ${p => p.width || "100%"};
    height: ${p => p.height || "100%"};
    background: url("https://d-hye.github.io/source/img/icon/image.svg") no-repeat center/24px, var(--trip-gray1);
    border-radius: ${p => p.borderRadius || "5px"};
    overflow: hidden;
    a{
        display: block;
        height: 100%;
    }
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
        
    @media only screen and (max-width: 768px){
        width: 100%;
    }
`



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

export const PagenaitionWrap = styled.ul`
    display: flex;
    gap: 1rem;
`
export const Pagenaition = styled.li`

    padding: 0.5rem;
    font-size: var(--small-text); color: var(--trip-gray3);
    cursor: pointer;
    &.active {
        font-weight: 800;
        color: var(--trip-blue);
    }

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
