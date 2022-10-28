import {useParams, Route} from 'react-router-dom';
import Comments from '../components/comments/Comments';

const QuoteDetails = () => {
    const params = useParams();
    return(<>
    <h1>Quotes Detail Page!</h1>
    <p>{params.quoteId}</p>
    <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments></Comments>
    </Route>
    </>
    )

};

export default QuoteDetails;