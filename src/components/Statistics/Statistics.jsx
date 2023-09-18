import { Component } from 'react';
import './Statistics.css';


class Statictics extends Component {

    render() {
      const { good, neutral, bad } = this.props;

      //для ключів (good, neutral, bad) першу букву робимо великою
      const ratingGood = good[0].charAt(0).toUpperCase() + good[0].slice(1); //Good
      const ratingNeutral =
        neutral[0].charAt(0).toUpperCase() + neutral[0].slice(1); //Neutral
      const ratingBad = bad[0].charAt(0).toUpperCase() + bad[0].slice(1); //Bad

      //якщо немає жодного відгука, то змінна містить true і навпаки
      const areThereAnyStatistics =
        good[1] === 0 && neutral[1] === 0 && bad[1] === 0;

      return (
        <div className="container-statistic">
          <h1>Statistics</h1>
          {!areThereAnyStatistics && (
            <div className="info-statistic">
              <span>
                {ratingGood}: {good[1]}
              </span>
              <span>
                {ratingNeutral}: {neutral[1]}
              </span>
              <span>
                {ratingBad}: {bad[1]}
              </span>
              <span>Total: {this.props.total}</span>
              <span>Positive feedback: {this.props.positivePercentage}%</span>
            </div>
          )}
          {areThereAnyStatistics && (
            <span className="text-nofeedback">No feedback given</span>
          )}
        </div>
      );
    }
}

export default Statictics;
