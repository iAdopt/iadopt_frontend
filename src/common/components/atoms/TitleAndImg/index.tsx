import Image from 'next/image'
import styles from './Style.module.scss';


export interface Props {
    img: string,
    title: string
}

export const TitleAndImg: React.FC<Props> = ({
    title,
    img,
    ...propss
}) => {
    return(
        <div className={styles.titleImg}>
            <Image src={img} alt={title} width="100px" height="100px"/>
            <h1>{title}</h1>
        </div>
    )
}