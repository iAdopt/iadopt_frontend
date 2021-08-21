// import styles from './Style.module.scss';
import { VisualFilter } from '../Filters/FilterVisual'

      
      
export const SectionAnimalsView = () => {
    return(
    <section style={styles.section}>
        <VisualFilter theme="catTheme" />
    </section> 
    )
 }
 const styles = {
         section: {

         }
 }