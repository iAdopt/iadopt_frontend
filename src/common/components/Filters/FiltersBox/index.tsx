import Image from 'next/image';
import { Checkboxes } from '../Inputs/Checkboxes';
import { SelectSearch } from '../Inputs/Select';

import { StyledFilterBox, FilterTitle } from '../style';


export interface Props {
    theme: "catTheme" | "dogTheme" | "animalsTheme" | "centerTheme",
    type: "gender" | "age" | "labelStatus" | "location" | "animal",
    filtersState:any,
    setFiltersState:any
}


export const FiltersBox: React.FC<Props> = ({
    theme,
    type,
    filtersState,
    setFiltersState,
    ...props
}) => { 
return(
    <>
        {(()=> {
            switch(type){
                case 'gender':
                    return (
                        <StyledFilterBox theme={theme}>
                            <FilterTitle>Género</FilterTitle>
                            <Checkboxes filtersState={filtersState} setFiltersState={setFiltersState} type='gender'/>
                        </StyledFilterBox>
                    )
                case 'age':
                    return (
                        <StyledFilterBox theme={theme}>
                            <FilterTitle>Edad</FilterTitle>
                            <Checkboxes filtersState={filtersState} setFiltersState={setFiltersState} type="age"/>
                        </StyledFilterBox>
                    )
                case 'labelStatus':
                    return (
                        <StyledFilterBox theme={theme}>
                            <FilterTitle>Estado</FilterTitle>
                            <Checkboxes filtersState={filtersState} setFiltersState={setFiltersState} type="labelStatus"/>
                        </StyledFilterBox>
                    )
                case 'location':
                    return (
                        <StyledFilterBox theme={theme}>
                            <FilterTitle>Localización</FilterTitle>
                            <SelectSearch/>
                        </StyledFilterBox>
                    )
            }
    })()}
    </>
)}