import Cursos from "./Cursos";
import EditaCurso from "./EditaCurso";
import NuevoCurso from "./NuevoCurso";
import { useState } from "react";

function App(){

    const [refresh, setRefresh] = useState(0)
    const [cursoEditable, setCursoEditable] = useState(1)

    function actualiza(){
        setRefresh(refresh+1)
    }

    function editar(x){
        setCursoEditable(x)
    }

    return (
        <>
        <h1>Nocodb Test: Cursos</h1>
        
        <Cursos refresh={refresh} editar={editar} actualiza={actualiza} />

        <hr />

        <EditaCurso actualiza={actualiza} id={cursoEditable}/>
        <NuevoCurso actualiza={actualiza} />
        </>
    )
}

export default App;