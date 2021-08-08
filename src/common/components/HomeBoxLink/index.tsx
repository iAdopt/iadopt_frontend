import Link from 'next/link';
import Image from 'next/image'
import styles from './Style.module.scss';

export interface Props {
    path: string,
    pathImage: any,
    altImage: string
}

export const HomeBoxLink: React.FC<Props> = ({
    path,
    pathImage,
    altImage,
    ...props
}) => {
    return(
        <div className={styles.boxlink}>
            <Link href={path} passHref={true}>
                <Image className={styles.image} src={pathImage} alt={altImage} />
            </Link>
        </div>
    )
}