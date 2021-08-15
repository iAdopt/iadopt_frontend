import Image from 'next/image';
import { SingleFilterBox } from '../AnimalFilterBox';
import { FiltersContainer } from '../style';


export interface Props {
    theme: "catTheme" | "dogTheme" | "animalsTheme" | "centerTheme",
}


export const FiltersGroup: React.FC<Props> = ({
    theme,
}) => { 
return(
    <FiltersContainer>
        <div className="filterButtons">
            <button type="button" > Ver todo </button>
            <button type="button" > Borrar filtros </button>
        </div>
        <div className="vl"></div>
        <SingleFilterBox theme={theme} type="gender"/>
        <SingleFilterBox theme={theme} type="age"/>
        <SingleFilterBox theme={theme} type="labelStatus"/>
        <SingleFilterBox theme={theme} type="location"/>
    </FiltersContainer>
)

}