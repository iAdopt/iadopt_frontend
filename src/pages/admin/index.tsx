import { Header } from '../../common/components/Header'
import { useState } from 'react';

import { AdminInformation } from '../../common/components/Admin/AdminInformation';
import { AdminAddAnimalForm } from '../../common/components/Admin/AdminAddAnimalForm';

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
                <AdminAddAnimalForm />
            </>
        ) : (  
            <h2 style={{textAlign:'center'}}><br></br>PLEASE REGISRTER OR LOGIN </h2>
        )}

        </>
    )
}
export default Admin
