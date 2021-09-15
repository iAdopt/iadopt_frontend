import Image from 'next/image'
import styles from './Style.module.scss';
import logo from './assets/logo.svg'
import back from './assets/back.svg'
import { useRouter } from "next/router"
import Link from 'next/link'


export interface Props {
    path: string,
    text: string
    page: "general" | "admin",
    logState: boolean,
    setLogstate:any
    
}

export const Header: React.FC<Props> = ({
    text,
    page,
    logState,
    setLogstate,
    ...props
}) => {
    const router = useRouter();
    const handleRegister = (e:any) => {
        e.preventDefault();
    }

    return(
        <>
            {page == 'general' ? (        
                <header className={styles.header}>
                    <a className={styles.linkback} onClick={() => router.back()}>
                        <Image src={back} alt="Volver" />
                        <p>{text}</p>
                    </a>
                    <Image src={logo} alt="iAdopt" width="120px"/>  
                </header>

            ) : (
                <header className={styles.header_Admin}>
                    <Image src={logo} alt="iAdopt" width="120px"/>  
                    <div className={styles.headerButtons}>
                        {logState ? (
                            <>
                                {/* <Link href="/admin/profile"> Cuenta </Link> */}
                                <button className={styles.logout} onClick={() => setLogstate(false)}>Cerrar sesión</button>
                            </>
                            
                        ) : (
                            <>
                                <button className={styles.login} onClick={() => setLogstate(true)}>Iniciar sesión</button>
                                <button className={styles.singin} onClick={handleRegister}>Registrarse</button>
                            </>
                        )}

                    </div>

                </header>
            )}
        </>
    )
}