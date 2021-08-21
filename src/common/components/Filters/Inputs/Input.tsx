import { FiltersDiv, StyledFilterDiv } from '../style';
import filtersData from '../filtersData.json';


export const Input = ({
    type, 
    filtersState,
    setFiltersState
    }:any) => {  

    const statusData: object[] = [] ; 
    let genderData: object[] = [];
    let ageData: object[] = [];

    const handleChange = (e:any) => {
        if (type == 'gender') {
            setFiltersState((prev:any) => ({...prev, gender: e.target.value}))
        } else if (type == 'age') {
            setFiltersState((prev:any) => ({...prev, age: e.target.value}))
        } else if (type == 'status') {
            setFiltersState((prev:any) => ({...prev, status: e.target.value}))
        }
    }

    /* Build the inputs from json */
    const renderData = (jsonData, array) => {
        jsonData.forEach((filter:any) =>  { 
            array.push(
                <StyledFilterDiv key={filter.id} >
                    <input 
                        key={filter.id} 
                        checked={filtersState == filter.value ? true : false} 
                        type={filter.type} value={filter.value} 
                        id={filter.id} 
                        className={filter.datafor}
                        onChange={handleChange}
                    />
                    <label htmlFor={filter.id}>{filter.label}</label>
                </StyledFilterDiv>
            )                    
        })
    }

    renderData(filtersData.gender, genderData);
    renderData(filtersData.age, ageData);
    renderData(filtersData.status, statusData);

    return(
        <>
            {(()=> {        
                switch(type) {
                    case 'gender':
                        return <FiltersDiv>{genderData}</FiltersDiv>

                    case 'age': 
                        return <FiltersDiv>{ageData}</FiltersDiv>
          
                    case 'status': 
                        return <FiltersDiv>{statusData}</FiltersDiv>
                }
            })()}
        </>
    )      
}