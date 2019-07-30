import React from 'react'

const Hello = function(props) {
    console.log(props)
    const name = props.name 
    const lang = props.language
    let hello = ''
    if(lang === "en"){
        hello = 'Hello,'
    }else if (lang === "zh"){
        hello = 'nihao'
    }
    
    return (
        <div>
            {hello} {name}
        </div>
    )
    
}
export default Hello


