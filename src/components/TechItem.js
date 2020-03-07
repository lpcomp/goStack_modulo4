import React from 'react';
import PropTypes from 'prop-types';

function TechItem({ tech, onDelete }) {
    return(
        <li >
            {tech}
            <button onClick={onDelete} type="button">Remover</button>
        </li>
    );
}

TechItem.defaultProps = { // estamos definindo valores padrão para os parâmetros quando não são passados
    tech: 'Oculto',
}

TechItem.propTypes = {
    tech: PropTypes.string,
    onDelete: PropTypes.func.isRequired,
}

export default TechItem;