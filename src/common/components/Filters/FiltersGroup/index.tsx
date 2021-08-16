import Image from 'next/image';
import { FiltersBox } from '../FiltersBox';
import { useState } from 'react'
// import { SingleFilterBox } from '../test01';

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
        gender: {
            female:true,
            male: false,
        },
        age: {
            kitten: false,
            adult:false,
        },
        status: {
            urgent: false,
            new: false,
        },
        location: ""
    }
);

const [dataState, setDataState] = useState(
    {
        gender: {
            female:false,
            male: false,
        },
        age: {
            kitten: false,
            adult:false,
        },
        state: {
            urgent: false,
            new: false,
        },
        location: ""
    }
);


/* PENDING TO DO FETCH DATA AND PASS THE FILTERS */
const AnimalsDataFetch = async () => {
    let Female = filtersState.gender.female
    let Male = filtersState.gender.male
    let API_URL = `pathurl?female=${Female}?male=${Male}`
}


const handleApplyFilters = () => {
  alert('VER TODOS LOS RESULTADOS :::')
  /* aceso al estado a los 7 estados */
}

const handleClear = () => {
    alert('BORRAR FILTROS :::')
}

return(
    <FiltersContainer>
        <div className="filterButtons">
            <button type="button" onClick={handleApplyFilters}> Aplicar filtros </button>
            <button type="button" onClick={handleClear}> Borrar filtros </button>
        </div>
        <div className="vl"></div>
        <FiltersBox filtersState={filtersState.gender} setFiltersState={setFiltersState} theme={theme} type="gender"/>
        <FiltersBox filtersState={filtersState.age} setFiltersState={setFiltersState} theme={theme} type="age"/>
        <FiltersBox filtersState={filtersState.status} setFiltersState={setFiltersState} theme={theme} type="labelStatus"/>
        <FiltersBox filtersState={filtersState.location} setFiltersState={setFiltersState} theme={theme} type="location"/>
    </FiltersContainer>
)
}