import React, { ReactNode, useEffect, useState } from "react";
import { Result } from "../models/PopMovie";
import { getPopMovies } from "../services/PopularMovies";
import "./MovieModal.css"


interface ModalType {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
}

export default function Modal(props: ModalType) {
    const [movies, setMovies] = useState<Result[]>([]);


    useEffect(() => {
        getPopMovies().then((res) => {
          const { data } = res;
          setMovies(data.results);
          console.log(res.data);
        });
      }, []);


  return (
    <>
      {props.isOpen && (
        <div className="modal-overlay" onClick={props.toggle}>
          <div onClick={(e) => e.stopPropagation()} className="modal-box">
            {props.children}
          </div>
          
        </div>
      )}
    </>
  );
}