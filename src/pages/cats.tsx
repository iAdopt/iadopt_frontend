import Head from 'next/head';
import catImg from '../../public/catPageImg.svg'
import { Header } from '../common/components/Header'
import { TextAndImg } from '../common/components/atoms/TextAndImg/index'


export interface CatsMainPageProps {
    className?: any;
    loading?:boolean;
    id?:string;
}
const Cats = () => {
    return(
        <>
        <Head>
            <title>iAdopt Cats</title>
            <meta name="description" content="Plataforma de adopción que pone en contacto protectoras y adoptantes" />
        </Head>
        <main>
            <Header
                path='/'
                text="Inicio"
            />
        <TextAndImg 
            title="Gatos"
            img={catImg}
        />

        </main>
        </>
    )
}
export default Cats
