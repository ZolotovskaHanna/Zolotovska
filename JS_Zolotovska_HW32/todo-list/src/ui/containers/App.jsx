import { Provider } from "react-redux";
import { Form } from "../components/Form";
import { List } from "../components/List";
import { store } from "../../shared/store";
import { Footer } from "../components/Footer";

function App() {
  
  return (
    <Provider store={store}>
    <div className="container p-1" style={{backgroundColor: 'orange', maxWidth: '600px', margin: 'auto', padding: '10px'}}>
      <h1>TODO</h1>
        <Form />
        <List />
        <Footer />
   </div>
    </Provider>
  )
}

export default App
