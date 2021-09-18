import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './containers/Sidebar';
import DetailsSection from './containers/DetailsSection';

const App = () => (
  <Router>
    <Header />
    <Sidebar />
    <Switch>
      <Route path="/person/:id" component={DetailsSection} />
    </Switch>
  </Router>
);

export default App;
