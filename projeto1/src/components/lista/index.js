function Lista(props){

    return (

        
        
        <select name="select">

            { props.itens.map( (o) => { return (
                <option>{o}</option>
            )})}
          
        </select>

    )
}

export default Lista