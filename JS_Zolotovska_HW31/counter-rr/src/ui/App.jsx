import { Provider } from 'react-redux';
import Wrapper from "./components/Wrapper";
import {store} from "../engine/store";


function App() {
  return (
    <Provider store={store}>
        <Wrapper />
    </Provider>
  )
}

export default App
