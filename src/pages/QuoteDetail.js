import {useParams, Route, Link, useRouteMatch} from 'react-router-dom';

import HighlightedQuote from '../components/quotes/HighlightedQuote';
import Comments from '../components/comments/Comments';

const DUMMY_QUOTES = [
    {id: 'q1', author: 'Max', text: 'Learning React is Fun!'},
    {id: 'q2', author: 'Serkan', text: 'Lock your screen!'},
];

const QuoteDetails = () => {
    const match = useRouteMatch();
    const params = useParams();

    console.log(match);

    const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);

    if(!quote){
        return <p>No quote found!</p>;
    }
    return(<>
    <HighlightedQuote text={quote.text} author={quote.author}></HighlightedQuote>
    <Route path={match.path} exact>
    <div className='centered'>
        <Link className='btn--flat' to={`${match.url}/comments`}>
            Load Comments!
        </Link>
    </div>
    </Route>
    <Route path={`${match.path}/comments`}>
        <Comments></Comments>
    </Route>
    </>
    )

};

export default QuoteDetails;