import './index.css';

import Header from './components/Header';
import Error from './components/Error';
import Footer from './components/Footer';
import Form from './components/TaskForm';

function App() {
  return (
    <>
      <Header></Header>
      <Form></Form>
      <Error></Error>
      <Footer></Footer>
    </>
  );
}

export default App;
