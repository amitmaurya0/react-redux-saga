import './App.css';
import Home from './pages/Home';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="heading">Deployment Application</div>
        <Home />
      </div>
    </Provider>
  );
}

export default App;
