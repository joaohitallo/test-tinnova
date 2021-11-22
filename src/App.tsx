import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";


import { SignUp } from './pages/signUp';
import { Dashboard } from './pages/dashboard';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route  exact path="/" component={SignUp}/>
        <Route  exact path="/dashboard" component={Dashboard}/>
      </Switch>
  </BrowserRouter>
  );
}

export default App;
