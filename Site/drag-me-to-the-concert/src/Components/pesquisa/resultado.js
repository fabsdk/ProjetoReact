import './resultado.css';

const Resultado = ({eventos}) => {
    return (
        <div className="resultado-container">
            {eventos.map((evento) => {
                return (
                    <div className="evento-card">
                        <img src={evento.image} alt={evento.artist} />
                        <h4>{evento.concert}</h4>
                        <p>{evento.artist}</p>
                        <p>{evento.location}</p>
                    </div>)
            })
            }
        </div>
    );
}

export default Resultado;
