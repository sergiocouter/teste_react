import Button from "./Button"

function Eventos({numero}){

    function meuEvento(){
        console.log(`Opa, fui ativado ${numero}`)
    }

    function segundoEvento() {
        console.log(`Ativando segundo evento`)
    }

    return(
        <div>
            <p>Click para disparar um evento</p>
            <Button event={meuEvento} text="Primeiro Evento"/>
            <Button event={segundoEvento} text="Segundo Evento"/>
            <button onClick={meuEvento}>Ativar!</button>
        </div>
    )
}

export default Eventos