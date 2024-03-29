import React from 'react'

class Message extends React.Component{
    state={
        msg:"Hello"
    }

    GmHangler=()=>{
        this.setState({msg:"Good Morning"})
    }

    GaHangler=()=>{
        this.setState({msg:"Good Afternoon"})
    }

    GeHangler=()=>{
        this.setState({msg:"Good Evening"})
    }

    GnHangler=()=>{
        this.setState({msg:"Good Night"})
    }


    render(){
       return <div>
            <pre>{JSON.stringify(this.state)}</pre>
            <hr />
            <h2>The Message is:{this.state.msg}</h2>
            <button onClick={this.GmHangler}>Gm</button>
            <button onClick={this.GaHangler}>Ga</button>
            <button onClick={this.GeHangler}>Ge</button>
            <button onClick={this.GnHangler}>Gn</button>
        </div>
    }
}

export default Message
