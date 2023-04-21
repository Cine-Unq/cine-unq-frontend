import { useState } from 'react';
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image';
import { Navigate } from 'react-router-dom';

export default function MovieCard({ movie }) {
    const [navigate, setNavigate] = useState(false);
    return (
        <>
            {navigate &&  <Navigate to={`/movie/info/${navigate}`} replace={true}/>}
            <Card
                style={{
                    width: "100%",
                    background: "#161616",
                    color: "white",
                    borderRadius: 6,
                    position: "relative",
                }}
                className=" movie-card"
            >
                <Card.Body>
                    <Image
                        src={movie.imagen}
                        width={"100%"}
                        height={350}
                        alt="movie"
                        style={{ objectFit: "cover" }}
                    />
                    <Card.Title
                        onClick={() => {
                            console.log(movie.id)
                            setNavigate(movie.id)
                        }}
                        className="text-center mt-3"
                        style={{ cursor: "pointer" }}
                    >
                        {movie.nombre}
                    </Card.Title>
                </Card.Body>
            </Card>
        </>
    )
}