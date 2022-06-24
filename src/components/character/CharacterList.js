import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { tmpImage } from "../../apis/book";
import { getCharacterList } from "../../apis/bookService";
import CharacterComponent from "./CharacterComponent";
import BookComponent from "./CharacterComponent";


const CharacterList = ({ match }) => {
  const { path } = match;

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    getCharacterList().then((response) => {
      console.log(response.data);
      setCharacters(response.data);
    });
  };

  return (
    <section className="py-5 container mt-5">
      <h3>Character Page</h3>
      <Link to="/books/add" className="btn btn-sm btn-primary mb-3">
        Add Book
      </Link>
      <Row>
        {characters.map((character) => (
          <CharacterComponent
            path={path}
            key={character.id}
            bookId={character.id}
            // title={character.title}
            // description={character.description}
            // pages={character.pages}
            // purchaseAmount={character.purchaseAmount}
            // price={character.price}
            // language={character.language}
            // stock={character.stock}
            // publisher={character.publisher}
            // year={character.year}
            // image={tmpImage}
            // handleDelete={handleDelete}
          />
        ))}
        {characters && !characters.length && <h4>No Book on Display</h4>}
      </Row>
      
    </section>
  );
};
export default CharacterList;
