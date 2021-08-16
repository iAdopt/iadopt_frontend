import { FiltersDiv, StyledFilterDiv } from '../style';
import { useState } from 'react'
import { Filter } from '../Filter'
import filtersData from '../filtersData.json';


export const Checkboxes = ({
    type, 
    filtersState,
    setFiltersState,
    filterData,
    key
    }:any) => {  

    const labelStatusData = [] as const; 
    let genderData = [] as const;
    let ageData = [] as const;


    const handleChange = () => {}
    /* Build the inputs from json */
    const renderData = (jsonData, array) => {
        jsonData.forEach((filter:any) =>  { 
            array.push(
                <Filter key={filter.id} filtersState={filtersState[filter.value]} setFiltersState={setFiltersState} filterData={filter.datafor}>
                    <input onChange={handleChange} checked={filtersState[filter.value]} type={filter.type} value={filter.value} id={filter.id}/>
                    <label htmlFor={filter.id}>{filter.label}</label>
                </Filter>
            )                    
        })
    }

    renderData(filtersData.gender, genderData);
    renderData(filtersData.age, ageData);
    renderData(filtersData.labelStatus, labelStatusData);

    return(
        <>
            {(()=> {        
                switch(type) {
                    case 'gender':
                        return <FiltersDiv>{genderData}</FiltersDiv>

                    case 'age': 
                        return <FiltersDiv>{ageData}</FiltersDiv>
          
                    case 'labelStatus': 
                        return <FiltersDiv>{labelStatusData}</FiltersDiv>
                        
                    default: 
                        return(
                           <p>...</p>
                        )  
                }
            })()}
        </>
    )      
}