/* Импортируем компонент из реакта для классового компонента */
import { Component } from 'react';

/* Импортируем наши компоненты */
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

/* Импортируем стили */
import './app.css';

/* Классовый компонент наследуется от компонента реакт */
class App extends Component {
    /* Конструктор в который передаём свойства */
    constructor(props){
        super(props)
        /* Состояние компонента (state), оно иммутабельно (нельзя менять state напрямую)*/
        this.state = {
            data : [
                { name: 'Никита Н.', salary: '800', increase: false, rise: true, id : 1},
                { name: 'Артем П.', salary: '3000', increase: true, rise: false, id : 2},
                { name: 'Сергей Р.', salary: '5000', increase: false, rise: false, id : 3}
             ],
             /* Переменная которая будет в поиске находить совпадения */
             term : '',
             filter: 'all'
        }
        this.maxId = 4;
    }

    /* Метод удаления сотрудников в который передаём их id */
    deleteItem = (id) => {
        /* Меняем state с помощью filter , который создаёт новый массив */
        this.setState(({data}) => {     
            return {
                /* Придут в новый массив только те сотрудники, которые не совпадают с id который мы удаляем */
                data: data.filter(item => item.id !== id)
            }
        })
    }
    /* Метод добавления сотрудника в который передаём имя и зарплату */
    addItem = (name, salary) => {
        /* Создаём новый объект с дефолтными значениями и id + 1 */
        const newItem = {
            name, 
            salary,
            increase: false,
            rise: false,
            id: this.maxId++
        }
        /* Меняем state, создав новый массив newArr = [разворачиваем data, добавляем новый объект(newItem)] */
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                /* возвращаем новый массив в data */
                data: newArr
            }
        });
    }

    /* Метод переключения свойств премии и повышения, передаём id и свойство */
    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            /* Если сотрудник проходит проверку по совпадению id, то у этого сотрудника переданное свойство измениться(значение) на противоположное false на true или наоборот */
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }

    /* Метод который принимает в себя сотрудников и строку поиска, если совпадений нет он вернёт изначальный список сотрудников, иначе он вернёт сотрудника с совпадением */
    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1;
        })
    }

    /* Помещает в state term приходящий из search-panel */
    onUpdateSearch = (term) => {
        this.setState({term});
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'rise':
                return items.filter(item => item.rise);
            case 'moreThen1000':
                return items.filter(item => item.salary > 1000);
            default:
                return items;
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter});
    }

    render() {
        /* Переменная для поиска */
        const{data, term, filter} = this.state;

        /* Кол-во сотрудников. Переменная для счётчика*/
        const employees = this.state.data.length; 

        /* Кол-во сотружников которые получат премию. Переменная для счётчика */                                 
        const increased = this.state.data.filter(item => item.increase).length;    

        /* Переменная которая показывает результирующие данные из метода searchEmp и передаётся в компонент EmployeesList*/
        const visibleData = this.filterPost(this.searchEmp(data, term), filter);

         return(
             <div className="app">
                 <AppInfo 
                 employees = {employees}
                 increased = {increased}
                 />
     
                 <div className="search-panel">
                     <SearchPanel onUpdateSearch = {this.onUpdateSearch}/>
                     <AppFilter filter = {filter} onFilterSelect= {this.onFilterSelect}/>
                 </div>
     
                 <EmployeesList 
                 data={visibleData}
                 onDelete = {this.deleteItem}
                 onToggleProp = {this.onToggleProp}/>
                 <EmployeesAddForm
                 onAdd = {this.addItem}
                 />
             </div>
         );
    }
}

/* Экспортируем в index.js */
export default App;