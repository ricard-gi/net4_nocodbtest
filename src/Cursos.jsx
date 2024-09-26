import { useEffect, useState } from "react";


const TOKEN = "2HvRWLMLKVokz5Lsx-UrRDS46Ha_8ct-o6l80jz3";
const url_nocodb = "https://app.nocodb.com/api/v2/tables/m5mp2wdb4mh3gs5/records";




function Cursos(props){

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
    }, [props.refresh])


    return (
        <>
            Cursos...
         
            <ul>
                {cursos.map(curso => <li>{curso.nombre}</li>)}
            </ul>
        </>
    )
}

export default Cursos;