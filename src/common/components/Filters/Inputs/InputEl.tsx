import { FiltersDiv, Filter } from '../style';
import filtersData from '../filtersData.json';


export const InputEl = ({type}:any) => {  
    const labelStatusData = []; 
    let genderData = [];
    let ageData = [];
    let classData = filtersData.labelStatus;

    const renderData = (jsonData, array) => {
        jsonData.forEach((filter:any) =>  { 
            array.push(
                <Filter key={filter.id}>
                    <input type={filter.type} value={filter.value} id={filter.id}/>
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
                           <p>In default</p>
                        )  
                }
            })()}
        </>
    )     



     
            
       
    
     
}