import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './containers/Sidebar';
import DetailsSection from './containers/DetailsSection';
import './assets/styles/App.scss';

const App = () => (
  <Router>
    <Header />
    <div className="container">
      <Sidebar />
      <Switch>
        <Route path="/person/:id" component={DetailsSection} />
      </Switch>
    </div>
  </Router>
);

export default App;
