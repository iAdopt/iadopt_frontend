
import styled from "styled-components";

const FilterBoxGeneric = styled.div`
    border-radius: 10px;
    height: 120px;
    max-width: 250px;
    min-width: 120px;
    padding: 6px 8px;
    font-family:'Open Sans', sans-serif;
`;
const FilterTitle = styled.h4`
    margin-bottom: 10px;
    font-size: 16px;
`

const Filter = styled.div`
    font-size: 14px;
    display: flex,
    flex-direction: column;
    margin-bottom: 10px;
    wrap: wrap;
    justify-contet:center;
    aling-items:center;
    input[type=checkbox]:checked + label {
    } 
`;

const catTheme:any = styled(FilterBoxGeneric)`
    background-color: rgba(196, 227, 145, 0.6);
    ${Filter} {
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

const FilterBox = (props:any) => {
    const Component:any = Themes[props.theme];
    return <Component {...props} />
}

export {
    FilterBox,
    Filter,
    FilterTitle
}