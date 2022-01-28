import React, { Component } from 'react';

import './employees-list-item.css'

class EmployeesListItem extends Component {                       // Класс с наследованием от компонента реакта 
    constructor(props) {
        super(props);
        this.state = {
            increase: false,
            like: false
        }
    }

    onIncrease = () => {
        this.setState(({increase}) => ({
            increase: !increase
        }))
    }

    onLike = () => {
        this.setState(({like}) => ({
            like: !like
        })) 
    
    }

    render() {
    const {name, salary} = this.props;
    const {increase, like} = this.state;
    let classNames = "list-group-item d-flex justify-content-between";  // помещаем классы в виде строки в переменную
    if(increase) {                                                      // проверяем наличие класа
        classNames += ' increase';                                      // добавляем класс строкой
    }
    if(like) {
        classNames += ' like';
    }

    return (
        <li className={classNames}>
            <span onClick={this.onLike} className="list-group-item-label">{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
            <div className="d-flex justify-content-center align-items-center">
                <button type="button"
                        onClick={this.onIncrease}
                        className="btn-cookie btn-sm">
                    <i className="fas fa-cookie"></i>
                </button>

                <button type = 'button'
                        className="btn-trash btn-sm">
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    );
    }

}

export default EmployeesListItem;