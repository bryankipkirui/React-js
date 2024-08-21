import React from 'react';
// import './App.css';
import Avatar from './avatar';
import Detail from './detail';
import Key from './key';

function Card(props){
    return(
    <div className="card">
        <div className="top">
            <Key  id = {props.id}/>
            <h2 className="name">{props.name}</h2>
            <Avatar img={props.img}/>
        </div>
        <div className="bottom">
            <Detail detailInfo={props.tel} />
            <Detail detailInfo={props.em} />
        </div>
    </div>
    );
}

export default Card;