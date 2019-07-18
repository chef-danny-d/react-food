import React from 'react';
import Modal from './Modal'

const Recipe = ({title, calories, image}) => {
        return (
            <div className="tile col-md-4 col-sm-12 col-xl-3">
                <div className="tile--top">
                    <img className="tile--top__bg" src={image} alt={title}/>
                </div>
                <div className="tile--body">
                        <h5 className="tile--title">{title}</h5>
                        <p className="tile--text">{calories} cal</p>
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#modal">
                            Launch demo modal
                        </button>
                        <Modal />
                </div>
            </div>
        );
}



export default Recipe