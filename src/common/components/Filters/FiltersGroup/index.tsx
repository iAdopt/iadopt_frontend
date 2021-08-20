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
        let API_URL = `URLAPI..gender=${filtersState.gender}?age=${filtersState.age}?status=${filtersState.status}`;
        const response = await fetch(API_URL);
        const data = await response.json();
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
            <button type="button" onClick={handleClear}> Borrar filtros </button>
            <button type="submit" onClick={handleApplyFilters}> Donaciones </button>
        </div>
        <div className="vl"></div>
        <FiltersBox filtersState={filtersState.gender} setFiltersState={setFiltersState} theme={theme} type="gender"/>
        <FiltersBox filtersState={filtersState.age} setFiltersState={setFiltersState} theme={theme} type="age"/>
        <FiltersBox filtersState={filtersState.status} setFiltersState={setFiltersState} theme={theme} type="status"/>
        <FiltersBox filtersState={filtersState.location} setFiltersState={setFiltersState} theme={theme} type="location"/>
    </FiltersContainer>
)
}