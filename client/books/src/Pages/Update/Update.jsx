import { useState } from "react";
import "./Update.css";
import api from "../../services/api";
import { useLocation, useNavigate } from "react-router-dom";

const Update = () => {

    const [book, setBook] = useState({
        title:"",
        desc:"",
        price:null,
        cover:"",
    });

    const navigate = useNavigate();
    const location =  useLocation();

    const bookId = location.pathname.split("/")[2]

    const handleChange = (e) => {
        setBook((prev) => ({...prev, [e.target.name]: e.target.value}))
    };

    const handleEdit = async e => {
        e.preventDefault()

        try {
            await api.put(`/books/${bookId}`, book)
            .then(res => {
                setBook(res.data)
                navigate("/")
            })
        } catch (error) {
            console.log(error);
            return
        }
    }

  return (
    <div className="form">
        <h1>Editar Livro</h1>

        <input type="text" name="title"  onChange={handleChange} placeholder="titulo"/>
        <input type="text" name="desc"   onChange={handleChange} placeholder="descrição"/>
        <input type="text" name="price"  onChange={handleChange} placeholder="preço"/>
        <input type="text" name="cover"  onChange={handleChange} placeholder="cover"/>
        <button onClick={() => handleEdit(book.id)}>Editar</button>
    </div>
  )
}

export default Update