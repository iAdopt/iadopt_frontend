import Image from 'next/image'
import styles from './Style.module.scss';
      
      
export const Footer = () => {
    return(
    <footer>
            <div className={styles.footer}>
            <p>Gracias por Adoptar</p>
                {/* <Image src="../public/favicon.ico" alt="iAdopt" width={50} height={50} /> */}
            </div>
    </footer> 
    )
 }
      
      
 