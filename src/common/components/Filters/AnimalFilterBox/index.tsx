import Image from 'next/image';
import { InputEl } from '../Inputs/InputEl';
import { Select } from '../Inputs/Select';

import { FilterBox, Filter, FilterTitle } from '../style';


export interface Props {
    theme: "catTheme" | "dogTheme" | "animalsTheme" | "centerTheme",
    type: "gender" | "age" | "labelStatus" | "location" | "animal"
}


export const SingleFilterBox: React.FC<Props> = ({
    theme,
    type,
    ...props
}) => { 
return(
    <>
        {(()=> {
            switch(type){
                case 'gender':
                    return (
                        <FilterBox theme={theme}>
                            <FilterTitle>Género</FilterTitle>
                            <InputEl type='gender'/>
                        </FilterBox>
                    )
                case 'age':
                    return (
                        <FilterBox theme={theme}>
                            <FilterTitle>Edad</FilterTitle>
                            <InputEl type="age"/>
                        </FilterBox>
                    )
                case 'labelStatus':
                    return (
                        <FilterBox theme={theme}>
                            <FilterTitle>Estado</FilterTitle>
                            <InputEl type="labelStatus"/>
                        </FilterBox>
                    )
                case 'location':
                    return (
                        <FilterBox theme={theme}>
                            <FilterTitle>Localización</FilterTitle>
                            <Select/>
                        </FilterBox>
                    )
            }
    })()}
    </>
)

}