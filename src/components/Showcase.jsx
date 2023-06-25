export default function ShowCase() {
    return (
        <ul className="ShowCase">
            <li>
                <span className="seat libre" /> <small>Disponible</small>
            </li>
            <li>
                <span className="seat selected" /> <small>Seleccionado</small>
            </li>
            <li>
                <span className="seat occupied" /> <small>Ocupado</small>
            </li>
        </ul>
    );
}