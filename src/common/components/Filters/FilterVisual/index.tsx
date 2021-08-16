
import styles from './Styles.module.scss';


export interface Props {
    theme: "catTheme" | "dogTheme" | "animalsTheme" | "centerTheme",
}


export const VisualFilter: React.FC<Props> = ({
    theme,
}) => { 
return(
    <div className={styles.container}>
        <p><strong>Resultado:</strong></p>
       
    </div>
)

}