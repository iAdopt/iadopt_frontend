import Head from 'next/head'
import Image from 'next/image'
import { Header } from '../../common/components/Header'
import {InsertAnimalForm} from '../../common/components/Admin/AdminAddAnimalForm'
import { useState } from 'react';
import { AdminInformation } from '../../common/components/Admin/AdminInformation';
import { SectionAnimalsView } from '../../common/components/SectionAnimalsView'




export interface CatsMainPageProps {
    className?: any;
    loading?:boolean;
    id?:string;
}
const Admin = () => {
    const [logState, setLogstate] = useState(true);

    return(
        <>
        <Header
            path='/'
            text=""
            page="admin"
            logState={logState}
            setLogstate={setLogstate}
        />
        { logState ? ( 
            <>
                <AdminInformation />
                <InsertAnimalForm />
            </>
        ) : (  
            <h2><br></br>PLEASE REGISRTER OR LOGIN </h2>
        )}

        </>
    )
}
export default Admin
