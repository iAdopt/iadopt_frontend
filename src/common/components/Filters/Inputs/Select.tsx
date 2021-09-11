import { useEffect, useState, useRef } from 'react'
import { withTheme } from 'styled-components';


    
    export const SelectSearch = ({setFiltersState, filtersState}:any) => {  
    const [selectState, setSelect] = useState([]);
    const refContainer = useRef();

    useEffect(() => {
        fetch("https://api.idescat.cat/emex/v1/nodes.json?tipus=prov")
        .then(response => response.json())
        .then( data => {
            setSelect(data.fitxes.v.v)
            // refContainer.current = data.fitxes.v.v;
        });
    }, []);


    const handleChange = (e:any) => {
        setFiltersState((prev:any) => ({...prev, location:e.target.value==='allLocation'?'':e.target.value}));
    }

    return(
        <>
            <label style={styles.selectLabel} htmlFor="catSelectRegion">Selecciona una comarca:</label>
            <select style={styles.select} value={filtersState} name="catSelectRegion" id="catSelectRegion" onChange={handleChange}> 
                <option key="allLocation" value="allLocation"> Todas las comarcas</option>
                { selectState.map((opt:any) => {
                    return <option key={opt.id} value={opt.id}>{opt.content}</option> 
                  })                 
                }                 
            </select>
        </>

    )       
}
/* STYLES */
const styles = {
    selectLabel: {
       fontSize: '12px',
       paddingLeft: '4px'
    },
    select: {
        padding: '6px 6px',
        borderRadius: '6px',
        marginTop: '6px',
        backgroundColor: 'white'
    }
}