import { useEffect, useState } from 'react';
import { Alert, Row, Tooltip } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

import { deleteCharacter, getCharacterList } from '../../apis/characterService';
import CharacterComponent from './CharacterComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const CharacterList = ({ match, history }) => {
  const { path } = match;

  const [characters, setCharacters] = useState([]);
  const [meta, setMeta] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (currentPage >= 1) {
      loadData();
    }
  }, [currentPage]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const loadData = () => {
    setIsLoading(true);
    getCharacterList(currentPage)
      .then((response) => {
        const data = response.data;
        const meta = response.data.meta.pagination;

        setMeta(meta);
        setCharacters((prevCharacters) => {
          const updatedCharacters = [...prevCharacters, ...data.data];
          if (updatedCharacters.length === meta.totalCount) {
            // hapus event listener ketika jumlah karakter mencapai jumlah maksimum
            window.removeEventListener('scroll', handleScroll);
          }
          return updatedCharacters;
        });

        setIsLoading(false);
      })
      .catch((error) => {
        // setValidation({ error: error.message });
        setIsLoading(false);
      });
  };

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight && !isLoading) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handleDelete = async (id) => {
    await deleteCharacter(id)
      .then((response) => {
        history.push('/');
        Swal.fire('Deleted ' + response.data.data.full_name, '', 'success');
      })
      .catch((error) => {
        Swal.fire('' + error, error, 'error');
      });
  };

  const renderTooltip = (character) => <Tooltip>{character.full_name}</Tooltip>;

  return (
    <section className="container mt-1">
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
            image={
              character.image ||
              'https://ik.imagekit.io/fiqriachmada/' + character.image_url
            }
            handleDelete={handleDelete}
            renderTooltip={renderTooltip(character)}
            onClick={() => {
              history.push('/characters/' + character.id);
            }}
          />
        ))}
      </Row>
      {isLoading === false && characters.length === meta.totalCount && (
        <Alert className="col mt-5 mb-5">
          <div className="d-flex justify-content-center ">End of List</div>
        </Alert>
      )}
      {isLoading === true && (
        <Alert className="col mt-5 mb-5">
          <div className="d-flex justify-content-center">
            Please Wait...
            <FontAwesomeIcon icon={faSpinner} spin className="mx-3" />
          </div>
        </Alert>
      )}
    </section>
  );
};
export default CharacterList;
