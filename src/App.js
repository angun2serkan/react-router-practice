import React, {Suspense} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import AllQuotes from './pages/AllQuotes';
import QuoteDetails from './pages/QuoteDetail';
import Layout from './components/layout/Layout';
import NotFound from './pages/NotFound';
import LoadingSpinner from './components/UI/LoadingSpinner';

const NewQuote = React.lazy(() => import('./pages/NewQuote'));


function App() {
  return (
    <Layout>
      <Suspense fallback={<div className="centered"><LoadingSpinner></LoadingSpinner></div>}>
    <Switch>
      <Route path='/' exact>
        <Redirect to='/quotes'></Redirect>
      </Route>
      <Route path='/quotes' exact>
        <AllQuotes></AllQuotes>
      </Route>

      <Route path='/quotes/:quoteId'>
        <QuoteDetails></QuoteDetails>
      </Route>

      <Route path='/new-quote'>
        <NewQuote></NewQuote>
      </Route>

      <Route path='*'>
        <NotFound></NotFound>
      </Route>
    </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
