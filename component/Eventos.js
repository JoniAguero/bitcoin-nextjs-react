import React from 'react'
import Evento from './Evento';

const Eventos = (props) => {
  return (
    <div className="row">
          {props.eventos.map(evento => (
              <Evento evento={evento}
                  key={evento.id} />
          ))}
    </div>
  )
}

export default Eventos;
