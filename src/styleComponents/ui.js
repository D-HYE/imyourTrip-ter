import styled from "styled-components";

export const StyledBtn = styled.button`
    width: ${p => p.width || "auto"};
    padding: ${p => p.padding ? `${p.padding[0] || 0.625}rem ${p.padding[1] || 1.25}rem` : "0.625rem 1.25rem"};
    font-weight: ${p => p.fontWeight || "400"};
    font-size: ${p => p.fontSize || "var(--desc-text)"};
    color: ${p => p.color || "white"};
    background: ${p => p.background || "var(--trip-blue)"};
    border-radius: ${p => p.borderRadius || "5px"};
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