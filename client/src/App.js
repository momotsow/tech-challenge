import './App.css';
import PeopleList from "./pages/PeopleList";
import Person from "./pages/Person";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const client = new ApolloClient({
  uri: "https://3sdv5.sse.codesandbox.io/",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container">
          <Routes>
          <Route exact path="/" component={PeopleList} />
          <Route exact path="/person/:name" component={Person} />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
