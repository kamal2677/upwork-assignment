import { StudentsData } from './Components';
import { StudentsContextProvider } from './Context/StudentsContext';

function App() {
  return (
    <StudentsContextProvider>
      <StudentsData />
    </StudentsContextProvider>
  );
}

export default App;
