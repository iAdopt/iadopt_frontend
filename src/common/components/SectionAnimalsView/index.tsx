// import styles from './Style.module.scss';
import { VisualFilter } from '../Filters/FilterVisual'
import { useState, useEffect } from 'react'
import {AnimalsV01} from '../Animals/AnimalsV01'


      
      
export const SectionAnimalsView = () => {

/* FILTER'S VIEW STATE */
const [stateVisual, setStateVisual] = useState({ v01:true, v02:false});

return(
    <section>
        <VisualFilter stateVisual={stateVisual} setStateVisual={setStateVisual}/>
        <div style={styles.section}>
                { stateVisual.v01 ? 
                        (
                                <div style={styles.v01}><AnimalsV01 /></div>
                                
                        ) : ( 
                                <div style={styles.v02}>A</div>

                        )
                }
        </div>
    </section> 
)
}


 const styles = {
         section: {
                margin: '20px 42px'
         },
         v01: {

         },
         v02: {

         }
 }