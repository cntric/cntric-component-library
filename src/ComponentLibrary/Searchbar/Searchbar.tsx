import { Button } from "../Button";
import React, { FC, useEffect, useState } from 'react';
import { Form, InputGroup } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import Color from "color"

/**
 * @initialAuthor
 * @contributors
 */

/**
 * @description
 */
export type SearchbarProps = {
    primaryColor?: string,
    secondaryColor?: string,
    tertiaryColor?: string,
    onChange? : (searchString : string)=>void,
    search?: ()=>Promise<void>,
    size?: "sm" | "lg" | undefined,
    initString? : string,
    style? : React.CSSProperties
}

/**
 * @description 
 */
export const Searchbar : FC<SearchbarProps>  = ({
    primaryColor,
    secondaryColor,
    tertiaryColor,
    onChange,
    search,
    size,
    initString,
    style
}) =>{

    const [isSearching, setSearching] = useState(false);
    const handleSearch = async ()=>{
        setSearching(true);
        search && await search();
        setSearching(false);
    }

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>)=>onChange && onChange(e.target.value);

    const handleKeydown = (e : React.KeyboardEvent<any>)=>{
        
        switch (e.key){
            case "Enter" :{
                handleSearch();
            } 
        }
    }

    const [focus, setFocus] = useState(false);

    const handleFocus = ()=>{
        setFocus(true);
    }

    const handleBlur = ()=>{
        setFocus(false);
    }


    return (
          
            <InputGroup size={size} style={{
                ...style
            }}>
                
                <InputGroup.Text style={{
                    borderColor: tertiaryColor,
                    backgroundColor: focus ? Color(primaryColor).lighten(1.5).hex() : secondaryColor,
                    borderRight: "none",
                    height: "100%",
                    borderBottomRightRadius: 0,
                    borderTopRightRadius: 0,
                    ...style
                }}>
                    <Search color={focus ? primaryColor : tertiaryColor}/>
                </InputGroup.Text>
                <Form.Control className={`shadow-none`} 
                onChange={handleChange}
                onKeyDown={handleKeydown} 
                disabled={isSearching}
                onFocus={handleFocus}
                onBlur={handleBlur}
                autoFocus={true}
                size={size}
                style={{
                    borderColor: tertiaryColor,
                    borderBottomLeftRadius: 0,
                    borderTopLeftRadius: 0,
                    backgroundColor: focus ? Color(primaryColor).lighten(1.5).hex() : secondaryColor,
                    color : focus ? primaryColor : tertiaryColor,
                    outline: "none",
                    borderLeft: "none",
                    ...style
                }}
                placeholder={`Search`}
                defaultValue={initString}
                />
                <Button size={size} disabled={isSearching} loading={isSearching} action={search} label="Search" {...{primaryColor, secondaryColor}}/>
            </InputGroup>
    )

}