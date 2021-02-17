import './App.css';
import ClientList from './components/ClientList/ClientList';

// Importing Components
import NavBar from './containers/NavBar/NavBar'

function App() {
  return (
    <div className="App">
      <nav>
        <NavBar/>
      </nav>
      <main>
        {/* Place holder for list of patients */}
        <div>
          {/* Row for details of one patient.. should include: Name, Age, Gender, Treatment Status: Next Appointment/Last Appointment */}
          <div>
            <ClientList/>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
