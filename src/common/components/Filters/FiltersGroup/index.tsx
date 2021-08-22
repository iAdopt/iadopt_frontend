import Image from 'next/image';
import { useState } from 'react'

import { FiltersBox } from '../FiltersBox';
import { FiltersContainer } from '../style';

import { actionCreators } from "../../../../../stateStore/index"
import { useSelector, useDispatch } from "react-redux"
import { bindActionCreators } from 'redux';


export interface Props {
    theme: "catTheme" | "dogTheme" | "animalsTheme" | "centerTheme"
}


export const FiltersGroup: React.FC<Props> = ({
    theme,
    ...props
}) => { 
    const {setAnimals} = bindActionCreators(actionCreators, useDispatch());
   
    const [filtersState, setFiltersState] = useState(
        {
            gender: 'allGender',
            age: 'allAge',
            status: 'allStatus',
            location: 'allLocation'
        }
    );

    /* fake data till get it from BE! */
    const dataExample ={
            "id": 1,
            "name": "Arlo",
            "age": "3 years",
            "location": "Barcelona"
    };
    setAnimals(dataExample);


    /* PENDING TO DO FETCH DATA AND PASS THE FILTERS */
    const AnimalsDataFetch = async () => {
        let API_URL = `URLAPI..gender=${filtersState.gender}?age=${filtersState.age}?status=${filtersState.status}?location="${filtersState.location}`;
        const response = await fetch(API_URL);
        const data = await response.json();
        // setAnimals(data) GET THE DATA FROM REDUX STORE HERE! :) :) :) 
    }

    const handleApplyFilters = () => {
        alert('Future donations will be available soon')
    }

    const handleClear = (e:any) => {
        setFiltersState((prev:any) => (
            {
                ...prev, 
                gender: 'allGender',
                age: 'allAge',
                status: 'allStatus',
                location: 'allLocation'
            }
        ));
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