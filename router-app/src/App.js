import { Redirect, Route, Switch } from 'react-router-dom';
import Layout from './components/layout/Layout';
import AddQuote from './pages/AddQuote';
import NotFound from './pages/NotFound';
import QuoteDetail from './pages/QuoteDetail';
import Quotes from './pages/Quotes';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect exact to="/quotes"></Redirect>
        </Route>
        <Route exact path="/quotes">
          <Quotes />
        </Route>
        <Route path="/quotes/:id">
          <QuoteDetail />
        </Route>
        <Route path="/quote">
          <AddQuote />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
