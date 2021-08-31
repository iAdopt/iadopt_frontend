import Link from 'next/link';
import Image from 'next/image'
import styles from './Style.module.scss';

export interface Props {

}

export const AdminInformation: React.FC<Props> = ({
    ...props
}) => {
    return(
        <div className={styles.adminInformation}>
            <h2>Center Name</h2>
            <p>Center phone</p>
            <p>Center email</p>
            <p>Center Adress</p>

            <button>Eddit information</button>

        </div>
    )
}