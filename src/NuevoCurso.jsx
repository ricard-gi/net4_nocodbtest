import { useState } from "react";

import {TOKEN,url_nocodb} from './config.js';


function NuevoCurso(props) {

  
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [horas, setHoras] = useState(0);

    function enviarForm(e){
        e.preventDefault();

        const curso = {
            "nombre": nombre,
            "horas": horas*1,
            "descripcion": descripcion
        }

        const options = {
            method: "POST",
            headers: {
                "xc-token": TOKEN,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(curso)
        }

        fetch(url_nocodb, options)
        .then(z => z.json())
        .then(x => {
            console.log("id rebut: ", x.Id);
            props.actualiza()
        })
        .catch(e => console.log(e))

    }




    return (
        <div style={{padding: "20px", backgroundColor: "beige"}}>
        <h3>Nuevo Curso</h3>
            <form onSubmit={enviarForm}>
                <label htmlFor="nombre">Nombre</label>
                <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                <br />
                <label htmlFor="descripcion">Descripción</label>
                <input type="text" id="descripcion" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
                <br />
                <label htmlFor="horas">Horas</label>
                <input type="text" id="horas" value={horas} onChange={(e) => setHoras(e.target.value)} />

                <br />
                <button type="submit">Guardar</button>

            </form>



        </div>
    )
}


export default NuevoCurso;