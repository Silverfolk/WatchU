
import './App.css';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Body from './Components/Body';
function App() {
  return (
    <Provider store={appStore} >
    <div className="text-3xl font-bold text-blue-600">
       <Body/>
    </div>
    </Provider>
  );
}

export default App;
