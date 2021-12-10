import Color from "color";
import React, { FC, useEffect, useState } from 'react';
import { Button as BootstrapButton, Spinner } from "react-bootstrap";

/**
 * @initialAuthor
 * @contributors
 */

/**
 * @description
 */
export type ButtonProps = {
    label?: string,
    primaryColor?: React.CSSProperties["color"],
    secondaryColor?: React.CSSProperties["color"],
    backgroundColor?: React.CSSProperties["color"],
    invert? : boolean,
    disabled?: boolean,
    active?: boolean,
    loading?: boolean,
    size?: "sm" | "lg" | undefined,
    action? : (e? : React.MouseEvent)=>Promise<void>,
    onClick? : (e : React.MouseEvent)=>void,
    onMouseEnter? : (e : React.MouseEvent)=>void,
    onMouseLeave? : (e : React.MouseEvent)=>void,
    style?: React.CSSProperties
}

/**
 * @description 
 */
export const Button : FC<ButtonProps>  = ({
    label, 
    primaryColor, 
    secondaryColor,
    backgroundColor,
    children,
    invert=false,
    disabled=false,
    active=false,
    loading=false,
    size=undefined,
    action=async (e? : React.MouseEvent)=>{return},
    onClick=(e: React.MouseEvent)=>{},
    onMouseEnter=(e: React.MouseEvent)=>{},
    onMouseLeave=(e: React.MouseEvent)=>{},
    style
}) =>{

    const [isDisabled, setDisabled] = useState(disabled);
    const [isActive, setActive] = useState(active);
    const [isLoading, setLoading] = useState(loading);
    const [e, setE] = useState<React.MouseEvent|undefined>(undefined)

    useEffect(()=>{
        if(isLoading){
            action(e).then(()=>{
                setDisabled(false);
                setLoading(false);
                setActive(false);
            })
        }
    }, [isLoading])

    const invertedBackground = Color(primaryColor).lighten(1/(10 - Color(primaryColor).contrast(Color(backgroundColor)))).hex()

    const handleClick = (e : React.MouseEvent<HTMLElement>)=>{
        onClick(e);
        setE(e);
        setDisabled(true);
        setLoading(true);
        setActive(true);
        setHovered(false);
    }

    const [isHovered, setHovered] = useState(false); 
    const handleMouseEnter = (e : React.MouseEvent)=>{
        setHovered(true);
        onMouseEnter(e);
    }
    const handleMouseLeave = (e : React.MouseEvent)=>{
        setHovered(false);
        onMouseLeave(e);
    }

    return (

        <BootstrapButton
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            variant={`outline`}
            disabled={isDisabled||disabled}
            active={isActive||active}
            size={size}
            onClick={handleClick}
            style={{
                cursor: "pointer",
                transition: isHovered? "all .1s ease-in-out" : "",
                display: "inline-block",
                color: isHovered? secondaryColor : !invert ? primaryColor : secondaryColor,
                borderTop: `1px solid ${primaryColor}`,
                borderLeft: `1px solid ${primaryColor}`,
                borderBottom: `1px solid ${primaryColor}`,
                borderRight: `1px solid ${primaryColor}`,
                backgroundColor: isHovered? primaryColor : invert ? invertedBackground : secondaryColor,
                ...style,
            }}
        >{label||children}<span style={{display: isLoading||loading ? "inline-block" : "none"}}>&ensp;</span><Spinner
            animation="border"
            style={{
                display : isLoading||loading ? "inline-block" : "none", 
                height : "15px",
                width: "15px"
            }}
            ></Spinner>
        </BootstrapButton>
    )

}