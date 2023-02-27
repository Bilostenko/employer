import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployeesAddForm from '../employers-add-form/employers-add-form';
import './app.css';

function App() {

  const data = [
    {name: 'Dima B.', salary: 300, increase: false},
    {name: 'Yura D.', salary: 500, increase: true},
    {name: 'Olena B,', salary: 800, increase: false}
  ]


  return (
    <div className="app">
      <AppInfo />

      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>

      <EmployersList data = {data}/>
      <EmployeesAddForm />
    </div>
  )
}

export default App;