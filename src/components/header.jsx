import React, { Component } from 'react';

class Header extends Component {
    state = { 
        count:0 ,
        tags:['tag 1' , 'tag 2' , 'tag 3']
     }


    rendertags(){
        if(this.state.tags.length === 0) return <p>'There are no tags'</p> 
            return <ul>{this.state.tags.map(tags => <li key={tags}>{tags}</li>)}</ul>
     }
    render() { 
        return ( 
            <div>
            <span>{this.formatCount()}</span>
                &nbsp;&nbsp;&nbsp;            
            <button className="btn btn-danger" onClick={() => {this.see({value:1})}}>Increment</button>
            <br/>
                {this.state.tags.length === 0 && 'Please create a new List...'}
                {this.rendertags()}
            </div>
         );
    }
    formatCount(){
        let Zero = <button className = "btn btn-warning btn-sm">Zero</button>
        const { count } = this.state;
            return count === 0? Zero: count
    }
    // constructor(){
    //     super();
    //     this.see = this.see.bind(this);
    // } 
    see = (value) => {
        console.log(value);
       this.setState({count: this.state.count + 1})
    }
}   
 
export default Header;