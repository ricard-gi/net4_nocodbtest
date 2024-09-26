import Cursos from "./Cursos";
import NuevoCurso from "./NuevoCurso";
import { useState } from "react";

function App(){

    const [refresh, setRefresh] = useState(0)

    return (
        <>
        <h1>Nocodb Test: Cursos</h1>
        
        <Cursos setRefresh={setRefresh} refresh={refresh}/>

        <hr />

        <NuevoCurso setRefresh={setRefresh} />
        </>
    )
}

export default App;