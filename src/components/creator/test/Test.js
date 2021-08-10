import React,{ useState } from 'react'

export const optionsVariable = [
  {
    label: 'red',
    value: 'red'
  },
  {
    label: 'blue',
    value: 'blue'
  },
  {
    label: 'green',
    value: 'green'
  },
]



const Test = () => {

const[color, setColor] = useState('init')
console.log(color);

  return (
    <>
      <div>
        <select onChange={(e)=>setColor(e.target.value)}>
          {optionsVariable.map((option) => (
            <option value={option.value} >{option.label}</option>
          ))}
        </select>
        <h2>{color}</h2>
      </div>
    </>
  )
}

export default Test
