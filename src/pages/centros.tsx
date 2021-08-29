import Head from 'next/head';
import centrosImg from '../../public/centrosPageImg.svg'
import { Header } from '../common/components/Header'
import { TitleAndImg } from '../common/components/TitleAndImg/index'


export interface CatsMainPageProps {
    className?: any;
    loading?:boolean;
    id?:string;
}
const Animals = () => {
    return(
        <>
        <Head>
            <title>iAdopt Animals</title>
            <meta name="description" content="Plataforma de adopción que pone en contacto protectoras y adoptantes" />
        </Head>
        <main>
            <Header
                path='/'
                text="Inicio"
                page="admin"
            />
        <TitleAndImg 
            title="Centros de Adopción"
            img={centrosImg}
        />

        </main>
        </>
    )
}
export default Animals
