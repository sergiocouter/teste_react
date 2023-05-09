import PropTypes from 'prop-types'

function Item({marca, ano_Lancamento}){
    return(
        <>
            <li>{marca} - {ano_Lancamento}</li>
        </>
    )
}

Item.propTypes = {
    marca: PropTypes.string.isRequired,
    ano_Lancamento: PropTypes.number.isRequired
}

Item.defaultProps = {
    marca: 'Faltou a marca',
    ano_Lancamento: 0
}

export default Item