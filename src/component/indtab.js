import React, { Component } from 'react';

function Itab (props){

    const addStyle = () => {

        if(props.out.id == props.activetab){
            if(props.out.id == 5){
                return { 
                    background : 'rgb(154, 193, 235)',
                        marginLeft: 'auto'}
            }
                
            else {
                return { background: 'rgb(154, 193, 235)'}
            }
        }
        else if (props.out.id == 5) {
            return { marginLeft: 'auto' }
            
        }
        else {
            return {}
        }
    };
    
    console.log(props)

    return (
        <div style = {addStyle()} onClick = {props.ctab.bind(this, props.out.id)} > {props.out.title}</div>
    );
}

export default Itab;