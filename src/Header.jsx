import React from 'react'

export default function Header(props) {
  return (
    <div>
        <h1>This is mine Header with default export {props.info.name} learing from {props.info.yname}</h1>
        <h2>We passed number is {props.num}</h2>
        <h2>The heading uses the props to get the values from parent(where the component is called)</h2>
        <p>We cannot use multiple tag seperately in the return.</p>
        <p>So we are using div as a parent tag and using this tags inside the div</p>
    </div>
  )
}
