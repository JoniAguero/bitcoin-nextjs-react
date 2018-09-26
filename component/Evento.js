import React from 'react'

const Evento = (props) => {

    let imagen = '';
    let nombre = '';

    if(props.noticia != null ){
        if (props.noticia.logo.url !== '') {
            imagen = <img src={props.noticia.logo.url} className="card-img-top" />
        } else {
            imagen = <p className="text-center my-10">IMAGEN NO DISPONIBLE</p>
        }
        if (props.noticia.name.text !== ''){
            nombre = props.noticia.name.text;
        } else {
            nombre = "Sin titulo";
        }
    }
    

  return (
      <div className="col-12 mb-4">
          <div className="card">
              <div className="card-image">
                  {imagen}
              </div>
              <div className="card-body">
                  <h3 className="card-title">{nombre}</h3>
                    {/* <p className="card-text">{description}</p>
                    <p className="card-text" >{source.name}</p>
                    <a href={url} target="_blank" className="btn btn-primary">
                        Leer Noticia
                    </a> */}
              </div>
          </div>
      </div>
  )
}

export default Evento;
