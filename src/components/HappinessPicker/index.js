import React, { Component } from 'react'
import "./index.css"

const emojiData = [
  { emoji: '😦', value: 0 },
  { emoji: '😞', value: 1 },
  { emoji: '😐', value: 2 },
  { emoji: '🙂', value: 3 },
  { emoji: '😁', value: 4 },
]
export default class HappinessPicker extends Component {
  render() {
    const { itemIndex, name, rateScore } = this.props
    return (
      <div>
        <h2>{name}</h2>
        {emojiData.map((item) => (
        <span key={item.value}>
          <input name={name} type="radio" id={`${item.value}${name}`}/>
          <label
         htmlFor={`${item.value}${name}`}
          onClick={() => rateScore(itemIndex, item.value)}>
          {item.emoji}</label>
          </span>
        ))}
      </div>
    )
  }
}
