import clsx from "clsx";

export default function Cinema({ selectedSeats, onSelectedSeatsChange, seats }) {
    const handleSelectedState = (seat) => {
        const isSelected =  selectedSeats.some((selected)=>selected.id == seat.id);
        if (isSelected) {
            const result = selectedSeats.filter((selectedSeat) => selectedSeat.id !== seat.id).map((s) => ({...s}));
            onSelectedSeatsChange(result);
        } else {
            onSelectedSeatsChange([...selectedSeats, seat]);
        }
    }

    return (
        <div className="Cinema">
            <div className="screen" />

            <div className="seats">
                {seats.map((seat) => {
                    const isSelected = selectedSeats.some((selected)=>selected.id == seat.id);
                    const isOccupied = seat.estaOcupado;
                    return (
                        <span
                            tabIndex="0"
                            key={seat.id}
                            className={clsx(
                                "seat",
                                isSelected && "selected",
                                isOccupied && "occupied"
                            )}
                            onClick={isOccupied ? null : () => handleSelectedState(seat)}
                        />
                    );
                })}
            </div>
        </div>
    );
}