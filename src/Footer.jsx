import React from 'react'

function Footer({info2,num2,children}) {
  return (
    <div>
      <h2>To call the tags or child inside the component tags we use keyword as children keyword</h2>
      {children}
      <h2>This is mine Footer with name export</h2>
      <p>We destructured the props and know we can directly use them as obj and variable like in info2 : {info2.name} and {info2.yname} in num2 : {num2}</p>
    </div>
  )
}

export {Footer}