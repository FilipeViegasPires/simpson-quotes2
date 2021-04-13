import React from 'react';
import QuoteCard from './QuoteCard';

function SimpsonsQuoteList(){
    const[quotes, setQuotes] = React.useState([])


    function fetchQuotes(quoteCount) {
        fetch(`https://thesimpsonsquoteapi.glitch.me/quotes?count=${quoteCount}`)
            .then((response) => response.json())
            .then((data) => setQuotes(data))

    }

    return(
        <div>
            <h1>Quotes List</h1>
            <button onClick={() => fetchQuotes(2)}> 2 quotes</button>
            
            {quotes.map(function (quote, index){
            return <QuoteCard key={index} {...quote} /> })}
            
        </div>
    )
}
export default SimpsonsQuoteList

  

