import Item from "./Item"

function List (){
    return(
        <>
            <h2>Minha Lista</h2>
            <ul>
                <Item marca="Lamborguini" ano_Lancamento={1985}/>  
                <Item marca="Chevrolet" ano_Lancamento={1990}/> 
                <Item marca="Toyota" ano_Lancamento={1992}/>
            </ul>
        </>
    )
}

export default List