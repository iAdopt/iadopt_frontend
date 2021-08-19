import Image from 'next/image';
import { Input } from '../Inputs/Input';
import { SelectSearch } from '../Inputs/Select';

import { StyledFilterBox, FilterTitle } from '../style';


export interface Props {
    theme: "catTheme" | "dogTheme" | "animalsTheme" | "centerTheme",
    type: "gender" | "age" | "status" | "location" | "animal",
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
                            <Input filtersState={filtersState} setFiltersState={setFiltersState} type='gender'/>
                        </StyledFilterBox>
                    )
                case 'age':
                    return (
                        <StyledFilterBox theme={theme}>
                            <FilterTitle>Edad</FilterTitle>
                            <Input filtersState={filtersState} setFiltersState={setFiltersState} type="age"/>
                        </StyledFilterBox>
                    )
                case 'status':
                    return (
                        <StyledFilterBox theme={theme}>
                            <FilterTitle>Estado</FilterTitle>
                            <Input filtersState={filtersState} setFiltersState={setFiltersState} type="status"/>
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