import EmployeesListItem from '../employees-list-item/employees-list-item'

import './employees-list.css';

const EmployeesList = ({data}) => {                         // передаём массив данных

    const elements = data.map(item => {                     // map ,берём каждый элемент массива  отделяем от него id(key)
        const {id, ...itemProps} = item;                    // выносим id, с помощью оператора rest itemProps(атрибуты) поместятся в массив
        return (
            <EmployeesListItem key={id} {...itemProps}/>
        );
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
}

export default EmployeesList;