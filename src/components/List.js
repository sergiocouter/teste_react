import Item from "./Item"

function List (){
    return(
        <>
            <h2>Minha Lista</h2>
            <ul>
                <Item marca="Lamborguini"/>
                <Item marca="Chevrolet"/>
                <Item marca="Toyota"/>
            </ul>
        </>
    )
}

export default List