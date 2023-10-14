import "./Books.css";
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import api from "../../services/api";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        api.get("/books")
        .then(res => {
          setBooks(res.data)
        })

      } catch (error) {
        console.log(error);
      }
    }
    fetchAllBooks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await api.delete(`/books/:${id}`)
      window.location.reload()
      .then()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="container">
      <h1>Livraria Seu Vidal</h1>
      <div className="books">
        {books.map(book => (
          <div className="book" key={book.id}>
           {book.cover && <img src={book.cover} alt="book image" />}
           <h2>{book.title}</h2>
           <p>{book.desc}</p>
           <span>{book.price}</span>
           <button className="delete" onClick={() => handleDelete(book.id)}>Excluir</button>
           <button className="update"><Link to={`/update/${book.id}`}>Editar</Link></button>

          </div>
        ))}
      </div>
      <button><Link to="/add" target="black">Adicionar Livro</Link></button>
    </div>
  )
};

export default Books