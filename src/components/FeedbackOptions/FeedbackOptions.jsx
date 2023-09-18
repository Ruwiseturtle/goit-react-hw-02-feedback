import { Component } from 'react';
import './FeedbackOptions.css';

class FeedbackOptions extends Component {
  render() {
   
    return (
      <div className="buttons">
        {Object.keys(this.props.options).map(option => (
          <button
            key={option} 
            className="btn"
            type="button"
            name={option}
            onClick={this.props.onLeaveFeedback}
          >
            {/* першу  літеру назви кнопки робимо великою */}
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </button>
        ))}
      </div>
    );
  }
}

export default FeedbackOptions;
