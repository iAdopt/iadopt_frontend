import Image from 'next/image';
import { FiltersBox } from '../FiltersBox';
import { useState } from 'react'
import { FiltersContainer } from '../style';


export interface Props {
    theme: "catTheme" | "dogTheme" | "animalsTheme" | "centerTheme"
}


export const FiltersGroup: React.FC<Props> = ({
    theme,
    ...props
}) => { 

    const [filtersState, setFiltersState] = useState(
        {
            gender: 'allGender',
            age: 'allAge',
            status: 'allStatus',
            location: 'allLocation'
        }
    );



    /* PENDING TO DO FETCH DATA AND PASS THE FILTERS */
    const AnimalsDataFetch = async () => {
        let Female = filtersState.gender.female
        let Male = filtersState.gender.male
        let API_URL = `gender=${Female}?male=${Male}?age=`
    }


    const handleApplyFilters = () => {
        alert('VER TODOS LOS RESULTADOS :::')
        /* aceso al estado a los 7 estados */
    }

    const handleClear = (e:any) => {
        e.preventDefault();
        setFiltersState((prev:any) => (
            {
                ...prev, 
                gender: 'allGender',
                age: 'allAge',
                status: 'allStatus',
                location: 'allLocation'
            }
        ))
    };

return(
    <FiltersContainer>
        <div className="filterButtons">
            <button type="submit" onClick={handleApplyFilters}> Aplicar filtros </button>
            <button type="button" onClick={handleClear}> Borrar filtros </button>
        </div>
        <div className="vl"></div>
        <FiltersBox filtersState={filtersState.gender} setFiltersState={setFiltersState} theme={theme} type="gender"/>
        <FiltersBox filtersState={filtersState.age} setFiltersState={setFiltersState} theme={theme} type="age"/>
        <FiltersBox filtersState={filtersState.status} setFiltersState={setFiltersState} theme={theme} type="status"/>
        <FiltersBox filtersState={filtersState.location} setFiltersState={setFiltersState} theme={theme} type="location"/>
    </FiltersContainer>
)
}