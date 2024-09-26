import { useEffect, useState } from "react";


import {TOKEN,url_nocodb} from './config.js';



function Cursos({refresh, setRefresh}){

    const [cursos, setCursos]= useState([]);

    function getData(){

        const options = {
            method: "GET",
            headers: {
                "xc-token": TOKEN,
                'Content-Type': 'application/json'
            }
        }

        fetch(url_nocodb, options)
            .then(respuesta => respuesta.json())
            .then(x => setCursos(x.list))
            .catch(e => console.log(e))
    }

    useEffect(()=>{
        getData()
    }, [refresh])


    function borraCurso(id){
        // console.log("borrando ", id)

        const id_object = {
            Id: id
        }
        const options = {
            method: "DELETE",
            headers: {
                "xc-token": TOKEN,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(id_object)
        }

        fetch(url_nocodb, options)
        .then(respuesta => respuesta.json())
        .then(() => setRefresh(refresh+1))
        .catch(e => console.log(e))
    }

    return (
        <>
            Cursos...
         
         <table>
            <thead>
                <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>Descripcion</th>
                <th>Horas</th>
                <th></th>
                </tr>
            </thead>
            <tbody>
                {cursos.map(curso => (
                    <tr key={curso.Id}>
                        <td>{curso.nombre}</td>
                        <td>{curso.descripcion}</td>
                        <td>{curso.horas}</td>
                        <td><button onClick={()=>borraCurso(curso.Id)}>Elimina</button></td>
                    </tr>
                ))}
            </tbody>
         </table>

            
        </>
    )
}

export default Cursos;