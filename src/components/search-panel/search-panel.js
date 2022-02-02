/* Импортируем компонент реакта */
import { Component } from 'react';

/* Имортируем стили */
import './search-panel.css';

class SearchPanel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            term : ''
        }
    }

    /* Метод локального обновления в компоненте (поднятие локального состояния родителю app.js) */
    onUpdateSearch = (e) => {
        /* Переменная в которую получаем значение поиска */
        const term = e.target.value;
        /* Устанавливаем в локальный state значение term */
        this.setState({term});
        /* вызываем prop из App.js */
        this.props.onUpdateSearch(term);
    }

    render() {
        return(
            <input 
            type = "text"
            className = "form-control search-input"
            placeholder = "Найти сотрудника"
            /* помещаем значение из state */
            value = {this.state.term} 
            /* Как только меняется значение выполняется метод onUpdateSearch */
            onChange = {this.onUpdateSearch}/>
        );
    }
}

export default SearchPanel;