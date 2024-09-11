import React from "react"
import { Path } from "react-rough"

function* range(start, end) {
    yield start;
    if (start === end) return;
    yield* range(start + 1, end);
}
// const ShapePath = ({path, offset={x:0, y:0}, ...other}) => (
//     <SVG {...other}>
//       <path transform={`translate(${offset.x} ${offset.y})`} d={path}/>
//     </SVG>
//   )

interface ShapeBoundary {
    x:number;
    y:number; 
    width:number;
    height:number;
}
export const ShapePath:React.FC<ShapeBoundary> = ({x,y,width,height}) => (<Path 
        d={stadium({x,y}, {width,height}, 20)}
        stroke="red"
    />)


export const circle = (r) => {
    return `
    M ${-r}, ${0}
    a ${r},${r} 0 1,0 ${r * 2},0
    a ${r},${r} 0 1,0 ${-(r * 2)},0
    `;
}

const rect = (width, height) => {
    return `
    M ${-width/2} ${-height/2}
    h ${width}
    v ${height}
    h ${-width}
    z`;
}

const stadium = (translate:{x:number, y:number}, size:{width:number, height:number}, arc:number) => {
    const radius = size.height/2;
    const tx = Math.cos(arc) * radius;
    const ty = Math.sin(arc) * radius;
    const rightSide = `a ${radius} ${radius} 0 0 1 0 ${ty*2}`;
    const leftSide = `a ${radius} ${radius} 0 0 1 0 ${-ty*2}`;
    return `M ${(radius-tx)+translate.x},${translate.y} 
          h ${(size.width-(tx*2))}
          ${rightSide}
          h ${(-(size.width-(radius*2)))}
          ${leftSide}
          `
          
}


const segment = (radius, arc) => {
    const tx = Math.cos(arc) * radius;
    const ty = Math.sin(arc) * radius;
    const rightSide = `a ${radius} ${radius} 0 0 1 0 ${ty*2}`;
    const leftSide = `a ${radius} ${radius} 0 0 0 0 ${-ty*2}`;
    return `M ${-tx},${-ty} 
          h ${tx*2}
          ${rightSide}
          h ${-tx*2}
          ${leftSide}
          `
}

const polygon = (points, spin, size) => {
    return 'M'+range(0,points)
        .map(function(i) {
        var point = pointToCorner(i, points, spin, size);
        return point.x + "," + point.y;
        })
        .join(" ")+'z';
}
  
const pointToCorner = (index, total, spin, size) => {
var x = 0;
var y = size;
var angle = (((Math.PI * 2) / total) * index) + spin;
var cos = Math.cos(angle);
var sin = Math.sin(angle);
var tx = x * cos - y * sin;
var ty = x * sin + y * cos;
return {
    x: tx,
    y: ty
};
}
