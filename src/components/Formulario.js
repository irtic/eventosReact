import React, { Component } from 'react';

class Formulario extends Component {

    state = {
        nombre : '',
        categoria : ''
    }
    render() {
        return (
            <form>
                <fieldset className="uk-fieldset uk-margin">
                    <legend className="uk-legend uk-text-center">
                        Busca tu evento por Nombre o categoría
                    </legend>

                </fieldset>

                <div className="uk-column-1-3@m uk-margin">
                    <div className="uk-margin" uk-margin="true">
                        <input 
                            name = "nombre"
                            className = "uk-input"
                            type = "text"
                            placeholder = "Nombre de Evento o ciudad"
                        />
                    </div>

                    <div className="uk-margin" uk-margin="true">
                        <select
                            className="uk-select"
                            name ="categoria"
                        >

                        </select>
                    </div>

                    <div>
                        <input type="submit" className="uk-button uk-button-danger" value="busca Eventos" />
                    </div>

                </div>
            </form>
        );
    }
}

export default Formulario;

