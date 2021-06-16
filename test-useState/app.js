import {useState} from 'react'

const [text,setText] = useState("")


console.log("test:",text)

setText("apple")
console.log("test:",text)