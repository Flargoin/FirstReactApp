/* Импортируем компонент реакта */
import React, {Component} from 'react';

/* Импортируем стили нашего компонента */
import './employees-add-form.css';

/* Классовый компонент наследующий компонент реакта */
class EmployeesAddForm extends Component {
    /* Передаём в конструктор свойства */
    constructor(props) {
        super(props)
        /* Состояния компонента с именем и зарплатой сотрудника */
        this.state = {
            name: '',
            salary: ''
        }
    }

    /* Метод изменяющий state как только вводятся символы в инпут */
    onValueChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value,
        })
    }

    /* Метод который проверяет введённые данные, после происходит обращение из App.js (onAdd = {this.addItem}) */
    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.name.length < 3 || !this.state.salary) return;
        this.props.onAdd(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary: ''
        })
    }

    render() {
        /* После передаём из state имя и зарплату */
        const {name, salary} = this.state;
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    /* Создаём событие и назначаем метод */
                    onSubmit = {this.onSubmit}>
                    <input type="text"
                        name = 'name'
                        /* Подставляем имя */
                        value = {name}
                        onChange = {this.onValueChange}
                        className = "form-control new-post-label"
                        placeholder = "Как его зовут?" />
                    <input type="number"
                        name = 'salary'
                        /* Подставляем зарплату */
                        value = {salary}
                        /* Создаём событие и подставляем метод */
                        onChange = {this.onValueChange}
                        className = "form-control new-post-label"
                        placeholder = "З/П в $?" />
    
                    <button type="submit"
                            className = "btn btn-outline-light">Добавить</button>
                </form>
            </div>
        );
    }
}

export default EmployeesAddForm;