import React from 'react'

const Statistic = ({good, neutral, bad, total, positivePercentage}) => {
    return (
        <div className='buttonPanel'>
                    <h2>Statistics</h2>
                         <ul className='statistickList'>
                            <li className='statistickListItem'>Good: <br/>{good}</li>
                            <li className='statistickListItem'>Neutral: <br/>{neutral}</li>
                            <li className='statistickListItem'>Bad: <br/>{bad}</li>
                            <li className='statistickListItem'>Total: <br/>{total}</li>
                            <li className='statistickListItem'>Positive: <br/>{positivePercentage}%</li> 
                         </ul>
                </div>
    );
}

export default Statistic;

