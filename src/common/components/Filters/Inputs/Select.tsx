import { useEffect, useState } from 'react'


export const SelectSearch = () => {  
    const [selectState, setSelect] = useState([]);

    const loadData = async () => {
        const response = await fetch("https://api.idescat.cat/emex/v1/nodes.json?tipus=prov");
        const data = await response.json();
        setSelect(data.fitxes.v.v);
    }
    useEffect(() => {
        loadData();
    }, [])
    const handleChange = (e:any) => {
        e.preventDefault()
    }

    return(
        <>
            <label style={styles.selectLabel} htmlFor="catSelectRegion">Selecciona una comarca:</label>
            <select style={styles.select} name="catSelectRegion" id="catSelectRegion"> 
                <option value="allLocation">Selecciona...</option>
                { selectState.map((opt:any) => {
                    return <option key={opt.id} value={opt.id} >{opt.content}</option>
                  })
                }   
             </select>
        </>

    )       
}
const styles = {
    selectLabel: {
       fontSize: '12px',
       paddingLeft: '4px'
    },
    select: {
        padding: '6px 6px',
        borderRadius: '6px',
        marginTop: '6px'
    }
}