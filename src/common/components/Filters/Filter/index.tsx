import { useState } from 'react'
import { StyledFilterDiv } from '../style';


export interface Props {
    filtersState:any,
    setFiltersState:any,
    children:any,
    filterData:any,
    key:any
}


export const Filter: React.FC<Props> = ({
    children,
    filtersState,
    setFiltersState,
    filterData,
    ...props
}) => { 

const handleChange = () => {}

return(
    <StyledFilterDiv filtersState={filtersState} setFiltersState={setFiltersState}>
        {children}
    </StyledFilterDiv>
)}