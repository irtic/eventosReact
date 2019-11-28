import React from 'react';
import Evento from './Evento'
import { Eventosconsumer } from '../context/Eventoscontext'

const ListaEventos = () => {
    return (
        <div className ="uk-child-width-1-3@m" uk-grid="true">
            <Eventosconsumer>
                {(value) => {
                    return value.eventos.map(evento => (
                            <Evento 
                                key = {evento.id}
                                evento = {evento}
                            />
                        ))
                    
                }}
            </Eventosconsumer>
        </div>
    );
};

export default ListaEventos;