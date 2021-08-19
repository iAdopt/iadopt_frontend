
import styled from "styled-components";

const FiltersContainer = styled.form`
    display: flex;
    flex-wrap: wrap;
    margin: 10px 40px;
    > div {
        margin: 3px;
    }
    .filterButtons {
        display: flex;
        flex-direction: column;
        justify-content:center;
        align-items:center;
    }
    button {
        margin-top: 5px;
        width: 140px;
        height: 44px;
        background: #FFDC97;
        border-radius: 10px;
        border-color:  #FFDC97;
        cursor:pointer;
        font-family:'Open Sans', sans-serif;
        font-size: 14px;
        &:hover {
            background-color: #F6BD4F;
        }
    }
    .vl {
        border-left: 3px solid black;
        height: 110px;
        margin: 0 15px;
        @media (max-width: 768px ) {
            display: none;
        }
      }
`

const FilterBoxGeneric = styled.div`
    display: flex;
    flex-direction:column;
    flex-grow: 1;
    border-radius: 10px;
    height: 120px;
    min-width: 140px;
    padding: 6px 8px;
    font-family:'Open Sans', sans-serif;
`;
const FilterTitle = styled.h4`
    margin-bottom: 6px;
    margin-left: 3px;
    font-size: 16px;
`

const FiltersDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    @media (min-width: 768px ) {
        flex-wrap: wrap;
        height: 90px;
    }

`
const StyledFilterDiv = styled.div`
    font-size: 14px;
    margin-bottom: 5px;
    padding-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    input[type=checkbox]:checked + label {
    } 
    input[type=checkbox] {
        height: 20px;
        width: 20px;
        margin-right: 6px;  
    }
`;

const catTheme:any = styled(FilterBoxGeneric)`
    background-color: rgba(196, 227, 145, 0.6);
    ${StyledFilterDiv} {

    }
`;

const dogTheme:any = styled(FilterBoxGeneric)`
    background-color: rgba(232, 127, 127, 0.6);
`;

const centerTheme:any = styled(FilterBoxGeneric)`
    background-color: rgba(232, 127, 127, 0.6);
`

const animalsTheme:any = styled(FilterBoxGeneric)`
    background-color:rgba(255, 233, 173, 0.8);
`;

const Themes:{[key:string]:any} = {
    catTheme,
    dogTheme,
    centerTheme,
    animalsTheme 
}

const StyledFilterBox = (props:any) => {
    const Component:any = Themes[props.theme];
    return <Component {...props} />
}

export {
    FiltersContainer,
    StyledFilterBox,
    StyledFilterDiv,
    FiltersDiv,
    FilterTitle
}