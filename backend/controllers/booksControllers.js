const conn = require("../db/db");

module.exports = class Controller {

    static async hello(req, res){
        res.json("Hello")
    };

    static async allBooks(req, res){
        const query = "SELECT * FROM books";

        conn.query(query, (err, data) => {
            if(err){
                res.json(err)
                return;
            }
            res.json(data).status(200);
        });
    };

   static async createBook(req, res){
        const query = "INSERT INTO books (`title`, `desc`, `cover`, `price`) VALUES (?)";

        const values = [
            req.body.title,
            req.body.desc,
            req.body.cover,
            req.body.price
        ];

        conn.query(query,[values], (err, data)  => {
            if(err){
                res.json(err)
                return
            }
            res.json(data);
        });
   }

   static async delete(req, res){
    const bookId = req.params.id;
    const query = "DELETE FROM books WHERE id = ?"

    conn.query(query, [bookId], (err, data) => {
        if(err){
            res.json(err)
            return
        }
        res.json("Deletando com sucesso")
    })
   }

   static async updateBook(req, res){
        const bookId = req.params.id;
        const query = "UPDATE books SET `title` = ?, `desc` = ?, `price` = ?, `cover` = ? WHERE id = ?";

        const values = [
            req.body.title,
            req.body.desc,
            req.body.cover,
            req.body.price
        ]

        conn.query(query, [...values, bookId], (err, data) => {
            if(err){
                res.json(err)
                return
            }
                res.json("Atualizado com sucesso!")
        })
   }
};