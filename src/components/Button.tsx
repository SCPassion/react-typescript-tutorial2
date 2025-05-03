import React from 'react'
type Color = "red" | "blue" | "green" | "purple"; // limited to these colors with union type

type ButtonProps = {
    //children: React.ReactNode; // this means it can be anything, but in this case it will be a string
    children: React.JSX.Element; // only accept a single JSX element, more restrictive than React.ReactNode
    backgroundColor: Color; // limited to these colors with union type
    textColor: Color; // limited to these colors with union type
    fontSize: number;
    pillShape?: boolean; // optional prop
    padding: [number, number, number, number]; // tuple type, this mean it must be an array of 4 numbers, this is a more specific array type
    onClick: (fuck: string)=> void; // function type, this mean it must be a function that returns void
}

export default function Button( { backgroundColor, fontSize, pillShape , textColor, padding, onClick, children}: ButtonProps ) {
   

    return (
        <button className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer ${backgroundColor}`} onClick={()=> onClick("fuck")}>
            {children}
        </button>
    )
}