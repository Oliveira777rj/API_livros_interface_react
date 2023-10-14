import { useState } from "react";
import "./Add.css";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
const Add = () => {

    const [book, setBook] = useState({
        title:"",
        desc:"",
        price:null,
        cover:"",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setBook((prev) => ({...prev, [e.target.name]: e.target.value}))
    };

    const handleClick = async e => {
        e.preventDefault()

        try {
            await api.post("/books", book)
            .then(res => {
                setBook(res.data)
                navigate("/")
            })
        } catch (error) {
            
        }
    }

  return (
    <div className="form">
        <h1>Adicionar Novo Livro</h1>

        <input type="text" name="title"  onChange={handleChange} placeholder="titulo"/>
        <input type="text" name="desc"   onChange={handleChange} placeholder="descrição"/>
        <input type="text" name="price"  onChange={handleChange} placeholder="preço"/>
        <input type="text" name="cover"  onChange={handleChange} placeholder="cover"/>
        <button onClick={handleClick}>Adicionar</button>
    </div>
  )
}

export default Add