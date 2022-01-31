import { useState } from "react";
import Display from "../Display/Display";
import './style.css'

export default function Input() {
    const [operation, setOperation] = useState('Gasto')
    const [value, setValue] = useState('')
    const [result, addOperation] = useState([])
    const initial_balance = 2000
    const [balance, changeBalance] = useState(initial_balance)
    const getValue = (e) => {
        setValue(e.target.value)
    }

    const sendValue = (e) => {
        e.preventDefault()
        addOperation(arr => [...arr, `${operation + ' ' + value}`])
        if (operation === 'Gasto') {
            changeBalance(+balance - +value)
        } else {
            changeBalance(+balance + +value)
        }
    }

    const changOperation = (e) => {
        setOperation(e.target.value)
    }

    return (
        <div className="container__form">
            <div>
                <h2>Balance</h2>
                <span>{balance}</span>

            </div>
            <form onSubmit={sendValue}>
                <input type="number" onChange={getValue} value={value}></input>
                Tipo de operacion:
                <select onChange={changOperation} value={operation}>
                    <option value="Gasto">Gasto</option>
                    <option value="Ingreso">Ingreso</option>
                </select>
                <button>Ingresar {operation}</button>
            </form>
            <Display show={result} />
        </div >
    )


}