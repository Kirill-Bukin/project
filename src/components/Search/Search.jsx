import { debounce } from 'lodash';
import { useCallback, useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Api } from '../../api';
import css from './styles.module.css';


const api = new Api();

export const Search = () => {
    const [value, setValue] = useState('')
    const [options, setOptions] = useState([])
    const [result, setResult] = useState(false)
    const navigate = useNavigate()

    const inputChangeHandler = (event) => {
        setValue(event.target.value)
    };

    const getSearchDebounced = useCallback(debounce((value) => {
        api.getSearch(value)
            .then(({ items }) => setOptions(items))
    }, 1000), [])

    useEffect(() => {
        if (value.length > 2) {
            getSearchDebounced(value)
            setResult(true)
        } else {
            setResult(false)
        }
    }, [value])

    const onOptionClick = (id) => {
        navigate(`/goods/${id}`)
        setResult(false)
        setValue('')
    }

    return (
        <div>
            <input className={css.input} value={value} onChange={inputChangeHandler}></input>
            {result &&
                <ul className={css.result}>
                    {options.length > 2 ? options.map(({ label, id, img }) => {
                        return (
                            <Link key={id} to={`/goods/${id}`} onClick={onOptionClick}>
                                <li className={css.list}>
                                    <h3 className={css.title}>{label}</h3>
                                    <div className={css.image}>
                                        <img className={css.img} src={img} alt="картинка"></img>
                                    </div>

                                </li>

                            </Link>
                        )
                    }) : <li className={css.error}>Ничего не найдено, попробуйте изменить запрос</li>}
                </ul>}
        </div>
    )
}
