import React from 'react'

function Footer({info2,num2}) {
  return (
    <div>
      <h1>This is mine Footer with name export</h1>
      <p>We destructured the props and know we can directly use them as obj and variable like in info2 : {info2.name} and {info2.yname} in num2 : {num2}</p>
    </div>
  )
}

export {Footer}