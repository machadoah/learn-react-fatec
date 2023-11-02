function Tabela(props) {

    return(
        <table>
            <tr>
                <th>Código</th> <th>Descrição</th> <th>Emoji</th>
            </tr>

            {props.dados.map(
                (celula) => { return (
                    <tr key={celula.id}>
                        <td>{celula.id}</td>
                        <td>{celula.desc}</td>
                        <td>{celula.emoji}</td>
                    </tr>
                )}
            )}

        </table>
    )
}

export default Tabela
