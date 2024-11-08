import '../styles/cards.css';

const Cards = () => {
    return(
        <>
          <div className="conteinerCards">
              <image/>
              <div className="contenido">
                <h3>Titulo</h3>
                <p>Descripcion</p>
              </div>
              <button className="btnCards">Ingresar</button>
          </div>
        </>
    )
}

export default Cards;