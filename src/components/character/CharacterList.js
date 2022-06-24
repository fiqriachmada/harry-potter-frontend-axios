import { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { tmpImage } from '../../apis/book'
import { getCharacterList } from '../../apis/characterService'
import CharacterComponent from './CharacterComponent'
import BookComponent from './CharacterComponent'

const CharacterList = ({ match }) => {
  const { path } = match

  const [characters, setCharacters] = useState([])

  useEffect(() => {
    loadData()
  }, [])

  const loadData = () => {
    getCharacterList().then(response => {
      console.log(response.data)
      setCharacters(response.data)
    })
  }

  return (
    <section className='py-5 container mt-5'>
      <h3>Character Page</h3>
      <Link to='/character/add' className='btn btn-sm btn-primary mb-3'>
        Add Character
      </Link>
      <Row>
        {characters.map(character => (
          <CharacterComponent
            path={path}
            key={character.id}
            chacharacterId={character.id}
            fullName={character.full_name}
            image={character.image}
            // description={character.description}
            // pages={character.pages}

            // purchaseAmount={character.purchaseAmount}
            // price={character.price}
            // language={character.language}
            // stock={character.stock}
            // publisher={character.publisher}
            // year={character.year}
            // handleDelete={handleDelete}
          />
        ))}
        {characters && !characters.length && <h4>No Character on Display</h4>}
      </Row>
    </section>
  )
}
export default CharacterList
