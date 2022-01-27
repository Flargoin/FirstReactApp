import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';
import EmployeesListItem from '../employees-list-item/employees-list-item';

function App() {

    const data = [
       { name: 'Никита Н.', salary: '800', increase: false, id : 1},
       { name: 'Артем П.', salary: '3000', increase: true, id : 2},
       { name: 'Артур Д.', salary: '5000', increase: false, id : 3},
    ];

    return(
        <div className="app">
            <AppInfo />

            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>

            <EmployeesList data={data}/>
            <EmployeesAddForm/>
        </div>
    );
}

export default App;