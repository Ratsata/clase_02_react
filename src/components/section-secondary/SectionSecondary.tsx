import FrutasContext from '../../context/FrutasContext';
import { useState, useContext } from 'react';

const SectionSecondary = () => {
    const ctx = useContext(FrutasContext);

    return (
        <div>
            <select className="form-select form-select-lg mb-3">
                <option selected>Seleccione</option>
                {ctx.frutas.map((fruta, i) => (
                    <option key={i} value={fruta}>
                        {fruta}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default SectionSecondary