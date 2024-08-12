import react from 'react'
import CompB from './CompB'

let CompA = ()=>{
    return <div>
        <h1>Component A</h1>
        <hr />
        <CompB id={1} name={"Rahul"} sal={45000}/>
    </div>
    
}
export default CompA