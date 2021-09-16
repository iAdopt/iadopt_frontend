import Image from 'next/image';
import { useState, useEffect } from 'react'

import { FiltersBox } from '../FiltersBox';
import { FiltersContainer } from '../style';

import { actionCreators } from "../../../../../stateStore/index"
import { useDispatch } from "react-redux"
import { bindActionCreators } from 'redux';


export interface Props {
    theme: "catTheme" | "dogTheme" | "animalsTheme" | "centerTheme"
    animalType: "cat" | "dog" | ""
}


export const FiltersGroup: React.FC<Props> = ({
    theme,
    animalType,
    ...props
}) => { 
    const {setAnimals} = bindActionCreators(actionCreators, useDispatch());
   
    const [filtersState, setFiltersState] = useState(
        {
            gender: "",
            age: "",
            status: "",
            location: ""
        }
    );

    const AnimalsDataFetch = async (args: any) => {
        const response = await fetch(
          'http://localhost:8080/api/animals/byFilter/', {
            method: 'post',
            body: JSON.stringify(args),
            headers: { 'Content-Type': 'application/json' }
          }
        );
        const data = await response.json();
        setAnimals(data);
    }


    useEffect(() => {
        AnimalsDataFetch({...filtersState, species:animalType});
        return () => {}
    }, [filtersState])

    
    const handleApplyFilters = () => {
        alert('Future donations will be available soon')
    }

    const handleClear = (e:any) => {
        setFiltersState((prev:any) => (
            {
                ...prev, 
                gender: "",
                age: "",
                status: "",
                location: ""
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