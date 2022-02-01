/* Импортируем компонент */
import EmployeesListItem from '../employees-list-item/employees-list-item'

/* Импортируем стили */
import './employees-list.css';

/* Функциональный компонент в который передаём нужные свойства */
const EmployeesList = ({data, onDelete, onToggleProp}) => {
    /* Помещаем каждому сотруднику id в key */
    const elements = data.map(item => {
        const {id, ...itemProps} = item;                    
        return (
            <EmployeesListItem 
            key={id} 
            {...itemProps}
            /* Удаление подтягивается из App.js */
            onDelete={() => onDelete(id)}
            /* Переключатель получает дата-атрибут */
            onToggleProp = {(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}/>
        );
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
}

export default EmployeesList;