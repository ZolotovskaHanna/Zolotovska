import { Provider } from "react-redux";
import { TodoForm } from "../components/TodoForm";
import { TodoList } from "../components/TodoList";
import { store } from "../../shared/store";
import Wrapper from "../components/Wrapper/index";
import Footer from "../components/Footer/index";

function Index() {
  
  return (
    <Provider store={store}>
    <Wrapper>
        <TodoForm />
        <TodoList />
        <Footer />
   </ Wrapper>
    </Provider>
  )
}

export default Index