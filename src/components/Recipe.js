import React from 'react';

const Recipe = ({title, calories, image}) => {
        return (
            <div className="card">
                    <img className="card-img-top" src={image} alt={title}/>
                    <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{calories} cal</p>
                    </div>
            </div>
        );
}

export default Recipe