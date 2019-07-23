import React , { Component } from 'react';
import Card from './card/Card';

class Cards extends Component{
    state = {
        results: []
    }
    componentDidMount(){
        console.log('componentDidMount')
        
        //axios.get(...).then(this.setState())
        this.setState({results: [{header:'Yuv',age:12,extra:4,date:'12 Aug'},{header:'Noam',age:9,extra:4,date:'23 Aug'},{header:'Rivka',age:33,extra:4,date:'2 Aug'},{header:'Yuv',age:12,extra:4,date:'12 Aug'},{header:'Noam',age:9,extra:4,date:'23 Aug'},{header:'Rivka',age:33,extra:4,date:'2 Aug'},{header:'Yuv',age:12,extra:4,date:'12 Aug'},{header:'Noam',age:9,extra:4,date:'23 Aug'},{header:'Rivka',age:33,extra:4,date:'2 Aug'}]})
    }

    render(){
        const {results} = this.state;
        return(
            <div className="cards">
            {results.map((item,index)=>{
                return(                    
                    <Card header={item.header} age={item.age} date={item.date} extra={item.extra} key={index}/>     
                )})
            }
            </div>
        )
    }
}

export default Cards;