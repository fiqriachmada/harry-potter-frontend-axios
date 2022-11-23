import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";

import { Link } from "react-router-dom";
import Swal from "sweetalert2";

import { deleteCharacter, getCharacterList } from "../../apis/characterService";
import CharacterComponent from "./CharacterComponent";

const CharacterList = ({ match }) => {
  const { path } = match;

  // var history = useHistory();

  const [characters, setCharacters] = useState([]);
  const [validation, setValidation] = useState({});

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    getCharacterList().then((response) => {
      console.log(response.data);
      setCharacters(response.data);
    });
  };

  const handleDelete = async (id) => {
    await deleteCharacter(id)
      .then(() => {
        // history.back;
        window.location.reload();
        // history.push('/')
        Swal.fire('','','success')
      })
      .catch((error) => {
        setValidation(error.response.data);
      });
  };

  // console.log(loadData())

  return (
    <section className="py-5 container mt-1">
      <h3>Character Page</h3>
      <Link to="/characters/add" className="btn btn-sm btn-primary mb-3">
        Add Character
      </Link>
      <Row>
        {characters.map((character) => (
          <CharacterComponent
            path={path}
            key={character.id}
            characterId={character.id}
            fullName={character.full_name}
            gender={character.gender}
            species={character.species}
            image={character.image}
            handleDelete={handleDelete}
          />
        ))}
        {characters && !characters.length && <h4>No Character on Display</h4>}
      </Row>
    </section>
  );
};
export default CharacterList;
