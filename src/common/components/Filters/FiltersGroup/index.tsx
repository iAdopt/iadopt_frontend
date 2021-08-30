import Image from 'next/image';
import { useState, useEffect } from 'react'

import { FiltersBox } from '../FiltersBox';
import { FiltersContainer } from '../style';

import { actionCreators } from "../../../../../stateStore/index"
import { useSelector, useDispatch } from "react-redux"
import { bindActionCreators } from 'redux';


export interface Props {
    theme: "catTheme" | "dogTheme" | "animalsTheme" | "centerTheme"
    animalType: "CAT" | "DOG" | "ALL"
}


export const FiltersGroup: React.FC<Props> = ({
    theme,
    animalType,
    ...props
}) => { 
    const {setAnimals} = bindActionCreators(actionCreators, useDispatch());
   
    const [filtersState, setFiltersState] = useState(
        {
            gender: undefined,
            age: undefined,
            status: undefined,
            location: undefined
        }
    );

    /* Fake data til get it from BE! */
    const dataExample = [
        {
            "id": 1,
            "name": "Arlo",
            "age": "3 years",
            "type": "DOG",
            "location": "Barcelona",
            "gender": "male",
            "image": "https://ichef.bbci.co.uk/news/976/cpsprodpb/12A9B/production/_111434467_gettyimages-1143489763.jpg",
            "description": "Just like for humans, the five senses play an important role in helping felines understand their surroundings. But the way cats use those senses is often very different than how we do."
        },
        {
            "id": 2,
            "name": "Sara",
            "age": "7 years",
            "type": "CAT",
            "gender": "female",
            "location": "Barcelona",
            "image": "https://cdn.britannica.com/q:60/22/206222-050-3F741817/Domestic-feline-tabby-cat.jpg",
            "description": "Just like for humans, the five senses play an important role in helping felines understand their surroundings. But the way cats use those senses is often very different than how we do."

        },
        {
            "id": 3,
            "name": "Oslo",
            "type": "CAT",
            "age": "3 years",
            "location": "Sant Cugat",
            "gender": "male",
            "image": "https://static.standard.co.uk/2021/06/21/14/newFile.jpg?width=320&auto=webp&quality=75&crop=968%3A645%2Csmart",
            "description": "Just like for humans, the five senses play an important role in helping felines understand their surroundings. But the way cats use those senses is often very different than how we do."

        },
        {
            "id": 4,
            "type": "CAT",
            "name": "Ronny",
            "age": "7 years",
            "gender": "female",
            "location": "Esplugas",
            "image": "https://www.pawschicago.org/fileadmin/_processed_/1/2/csm_PAWS_New_Site__50_of_201__70103c47cf.jpg",
            "description": "Just like for humans, the five senses play an important role in helping felines understand their surroundings. But the way cats use those senses is often very different than how we do."

        }
    ];
    setAnimals([dataExample]);
    /* END fake data  */

    /* PENDING TO DO FETCH DATA AND PASS THE FILTERS */
    const AnimalsDataFetch = async (args: any): Promise<JSON> => {
            const response = await fetch(
              'http://localhost:8080/api/animals/byFilter/', {
                method: 'post',
                body: JSON.stringify(args),
                headers: { 'Content-Type': 'application/json' }
              }
            );
            console.log(response);
            return response.json();
    }
        // let API_URL = `URLAPI..type=${animalType}?gender=${filtersState.gender}?age=${filtersState.age}?status=${filtersState.status}?location="${filtersState.location}`;
        // const response = await fetch(API_URL);
        // const data = await response.json();
        // setAnimals(data) SET THE DATA FROM REDUX STORE HERE! :) :) :)


    useEffect(() => {
        console.log(filtersState);
        AnimalsDataFetch(filtersState);
        console.log()
        return () => {}
    }, [filtersState])

    
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