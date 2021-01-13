import React, {Component} from 'react'
import Statistic from './statistic/Statistic'


export default class App extends Component {
    
    state = { good: 0, neutral: 0, bad: 0 };

    onChangeGood = e => {
        this.setState(prevState => ({
            [e.target.name]: prevState[e.target.name] +1
        }));
        };
    
    countTotalFeedback(){
        const { good, neutral, bad} = this.state;
        const totall = good + neutral + bad
        return totall
    };
    countPositiveFeedbackPercentage(){
        const { good, neutral, bad} = this.state;
        const totall = good + neutral + bad;
        const persent = 100 / totall;
        const positivePercent = (persent * good).toFixed(1)
        if(totall > 0){
            return positivePercent
        }
        if(!totall){
            return '0 '
        }
        
    }
    

    render() {
        const { good, neutral, bad} = this.state;
        const message = "No feedback given"
        return (
            <>
                <div className='buttonPanel'>
                    <h2>Please leave feedback</h2>
                    <div>
                        <button className='buttonPanelItem' name='good' onClick={this.onChangeGood}>Good</button>
                        <button className='buttonPanelItem' name='neutral' onClick={this.onChangeGood}>Neutral</button>
                        <button className='buttonPanelItem' name='bad' onClick={this.onChangeGood}>Bad</button>
                    </div>
                </div>
                {this.countTotalFeedback()? <Statistic good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}/>: <div className="message"><h2>{message}</h2></div>}
                
            </>
        );
      }
    }
    


   

