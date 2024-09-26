import { useState, useEffect } from "react";

import {TOKEN,url_nocodb} from './config.js';


function EditaCurso(props) {

  
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [horas, setHoras] = useState(0);

    function enviarForm(e){
        e.preventDefault();

        const curso = {
            "Id": props.id,
            "nombre": nombre,
            "horas": horas*1,
            "descripcion": descripcion
        }

        const options = {
            method: "PATCH",
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


    function getData() {

        const options = {
            method: "GET",
            headers: {
                "xc-token": TOKEN,
                'Content-Type': 'application/json'
            }
        }

        fetch(url_nocodb+"/"+props.id, options)
            .then(respuesta => respuesta.json())
            .then(x => {
                setNombre(x.nombre);
                setDescripcion(x.descripcion);
                setHoras(x.horas);
            })
            .catch(e => console.log(e))
    }

    useEffect(() => {
        getData()
    }, [props.id])





    return (
        <div style={{padding: "20px", backgroundColor: "cyan"}}>
        <h3>Editar Curso</h3>
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


export default EditaCurso;