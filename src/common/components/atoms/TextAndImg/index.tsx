import Image from 'next/image'
import styles from './Style.module.scss';


export interface Props {
    img: string,
    title: string
}

export const TextAndImg: React.FC<Props> = ({
    title,
    img,
    ...props
}) => {
    return(
        <>
            <Image src={img} alt={title} width="120px" height="120px"/>
            <h1>{title}</h1>
        </>
    )
}