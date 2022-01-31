import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';


class App extends Component {

    constructor(props){
        super(props)
        this.state = {
            data : [
                { name: 'Никита Н.', salary: '800', increase: false, id : 1},
                { name: 'Артем П.', salary: '3000', increase: true, id : 2},
                { name: 'Сергей Р.', salary: '5000', increase: false, id : 3}
             ]
        }
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {     
            return {
                data: data.filter(item => item.id !== id)       // Придут в новый массив только те элементы, которые не совпадают с id который мы удаляем
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name, 
            salary,
            increase: false,
            rise: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }

    render() {     
         return(
             <div className="app">
                 <AppInfo />
     
                 <div className="search-panel">
                     <SearchPanel />
                     <AppFilter />
                 </div>
     
                 <EmployeesList 
                 data={this.state.data}
                 onDelete = {this.deleteItem}
                 onToggleProp = {this.onToggleProp}/>
                 <EmployeesAddForm
                 onAdd = {this.addItem}
                 />
             </div>
         );
    }
}

export default App;