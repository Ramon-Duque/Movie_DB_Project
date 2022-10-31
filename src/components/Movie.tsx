import React, { useEffect, useState } from 'react';
import { Result } from '../models/PopMovie';
import Modal from './MovieModal';
import useModal from "./useModal";

import { TopRatedResults } from '../models/TopRated'
import { getPopMovies, getTopRated, getUpcoming } from "../services/PopularMovies";

interface Props {
    movie: Result;
    
}



function Movie({ movie }: Props) {

    const { isOpen, toggle } = useModal();
   



    return (      
        <div> 
            
            <li className="MovieCard">
                <img
                    src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
                    alt={movie.title}
                    onClick={toggle}
                />
                {movie.title}
                <Modal isOpen={isOpen} toggle={toggle}>
                    <div>
                        
                        <img
                            src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
                            alt={movie.title}
                        />
                        <h3>{movie.title}</h3>
                        <p>{movie.overview}</p>

                    </div>
                </Modal>
            </li>
            </div> 

            
    );
}

export default Movie