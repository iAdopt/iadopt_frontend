import Image from 'next/image';
import { FilterBox, Filter, FilterTitle } from './style';


export interface Props {
    filterTitle: string,
    theme: "catTheme" | "dogTheme" | "animalsTheme" | "centerTheme"
}

export const SingleFilterBox: React.FC<Props> = ({
    filterTitle,
    theme,
    ...props
}) => {
    return(
        <FilterBox theme={theme}>
            <FilterTitle>{filterTitle}</FilterTitle>
            <Filter>
                <input type="checkbox" value="female" id="female"/>
                <label htmlFor="female">Femenino</label>
            </Filter>  
            <Filter>
                <input type="checkbox" value="male" id="male"/>
                <label htmlFor="male">Masculino</label> 
            </Filter>       
        </FilterBox>
    )
}