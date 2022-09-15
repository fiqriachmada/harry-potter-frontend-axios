import { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'

import { Link } from 'react-router-dom'

import { getCharacterList } from '../../apis/characterService'
import CharacterComponent from './CharacterComponent'


const CharacterList = ({ match }) => {
  const { path } = match

  const [characters, setCharacters] = useState([])

  useEffect(() => {
    loadData()
  }, [])

  const loadData = () => {
    getCharacterList().then(response => {
      // console.log(response.data)
      setCharacters(response.data)
    })
  }

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
            image={character.image}
          />
        ))}
        {characters && !characters.length && <h4>No Character on Display</h4>}
      </Row>
      
    </section>
  );
}
export default CharacterList
