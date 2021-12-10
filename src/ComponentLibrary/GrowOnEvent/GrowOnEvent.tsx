
import React, {FC, ReactElement} from 'react';
import { useState } from 'react';

export type GrowOnEventProps = {
    grow ? : boolean
    style? : React.CSSProperties,
    scale ? : number
}

export const GrowOnEvent : FC<GrowOnEventProps>  = ({
    grow = false,
    style,
    scale = 1.05,
    children
}) =>{

    return (

        <div 
        style={{
            transition : "all .2s ease-in-out",
            transform: grow ? `scale(${scale})` : "none",
            ...style
        }}>
            {children}
        </div>

    )

}