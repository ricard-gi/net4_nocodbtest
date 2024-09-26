import { useState } from "react";

const TOKEN = "2HvRWLMLKVokz5Lsx-UrRDS46Ha_8ct-o6l80jz3";
const url_nocodb = "https://app.nocodb.com/api/v2/tables/m5mp2wdb4mh3gs5/records";



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
            props.setRefresh(x.Id)
        })
        .catch(e => console.log(e))

    }




    return (
        <>
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



        </>
    )
}


export default NuevoCurso;