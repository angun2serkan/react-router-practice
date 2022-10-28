import {Route, Switch} from 'react-router-dom';
import AllQuotes from './pages/AllQuotes';
import NewQuote from './pages/NewQuote';
import QuoteDetails from './pages/QuoteDetail';

function App() {
  return (
    <Switch>
      <Route path='/quotes' exact>
        <AllQuotes></AllQuotes>
      </Route>

      <Route path='/quotes/:quoteId'>
        <QuoteDetails></QuoteDetails>
      </Route>

      <Route path='/new-quote'>
        <NewQuote></NewQuote>
      </Route>
    </Switch>
  );
}

export default App;
