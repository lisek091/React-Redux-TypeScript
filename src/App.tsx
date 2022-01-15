import Display from "./components/Display";
import { Provider } from 'react-redux';
import { store } from './redux';


function App() {


  return (
    <Provider store={store}>
      <Display />
    </Provider>
  );


}


export default App;
