import React, { Component } from 'react'
import HappinessPicker from '../HappinessPicker'

export default class FeedbackForm extends Component {
  state= {
    feedback:[
      {name:'Food', score:0},
      {name:'Service', score:0},
      {name:'Value for Money', score:0}],
    sum: 0,
  }

  rateSore=(index,num)=>{
    const newFeedback = [...this.state.feedback]
    newFeedback[index].score = num
    this.setState({feedback: newFeedback})
    const totalScore = newFeedback.reduce((a,b)=>a+b.score,0);
    this.setState({sum: totalScore})
  }

  render() {
    return (
      <div>
        {this.state.feedback.map((item,index)=>(
          <HappinessPicker
          key={item.name}
          name={item.name}
          itemIndex={index}
          rateScore={this.rateSore}
          score={item.score}
          />
        ))}
        <h3>Total Score is: {this.state.sum}/12</h3>
        <button onClick={()=>
          {alert("Total Score is "+this.state.sum+"/12,thank you for your reveiw")}}
          >submit</button>
      </div>
    )
  }
}
