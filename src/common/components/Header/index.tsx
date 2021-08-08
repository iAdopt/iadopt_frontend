import Image from 'next/image'
import styles from './Style.module.scss';
import logo from './logo.svg'
import back from './back.svg'
import { useRouter } from "next/router"


export interface Props {
    path: string,
    text: string
}

export const Header: React.FC<Props> = ({
    text,
    ...props
}) => {
    const router = useRouter()
    return(
        <header className={styles.header}>
            <a className={styles.linkback} onClick={() => router.back()}>
                <Image src={back} alt="Volver" />
                <p>{text}</p>
            </a>
            <Image src={logo} alt="iAdopt" width="120px"/>
        </header>
    )
}