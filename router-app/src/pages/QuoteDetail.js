import React, { useEffect } from 'react';
import { Route, useParams, Link, useRouteMatch } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../lib/api';

const QuoteDetail = () => {
  const params = useParams();
  const match = useRouteMatch();
  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);
  const { id } = params;

  useEffect(() => {
    sendRequest(id);
  }, [sendRequest, id]);

  if (status === 'pending') {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered">{error}</p>;
  }

  if (!loadedQuote.text) {
    return <p>Quote not found!</p>;
  }

  return (
    <section>
      <h1>Quoute Detail</h1>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <Route exact path={match.path}>
        <div className="centered">
          <Link to={`${match.url}/comments`} className="btn--flat">
            Load Comments
          </Link>
        </div>
      </Route>

      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </section>
  );
};

export default QuoteDetail;
