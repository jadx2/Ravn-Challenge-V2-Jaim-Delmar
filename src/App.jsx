import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './containers/Sidebar';
import DetailsSection from './containers/DetailsSection';
import './assets/styles/App.scss';

const App = () => (
  <Router>
    <div className="container">
      <Header />
      <main className="main">
        <Sidebar />
        <Switch>
          <Route path="/person/:id" component={DetailsSection} />
        </Switch>
      </main>
    </div>
  </Router>
);

export default App;
