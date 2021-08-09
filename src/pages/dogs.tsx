import Head from 'next/head';
import dogImg from '../../public/dogPageImg.svg'
import { Header } from '../common/components/Header'
import { TitleAndImg } from '../common/components/atoms/TitleAndImg/index'


export interface CatsMainPageProps {
    className?: any;
    loading?:boolean;
    id?:string;
}
const Dogs = () => {
    return(
        <>
        <Head>
            <title>iAdopt Dogs</title>
            <meta name="description" content="Plataforma de adopción que pone en contacto protectoras y adoptantes" />
        </Head>
        <main>
            <Header
                path='/'
                text="Inicio"
            />
        <TitleAndImg 
            title="Perros"
            img={dogImg}
        />

        </main>
        </>
    )
}
export default Dogs