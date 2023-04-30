import { useEffect, useState } from 'react'
import { Row, Tooltip } from 'react-bootstrap'

import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

import { deleteCharacter, getCharacterList } from '../../apis/characterService'
import CharacterComponent from './CharacterComponent'

const CharacterList = ({ match, history }) => {
  const { path } = match

  const [characters, setCharacters] = useState([])
  const [validation, setValidation] = useState({})
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (currentPage >= 1) {
      loadData()
    }
  }, [currentPage])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const loadData = () => {
    setIsLoading(true)
    getCharacterList(currentPage)
      .then(response => {
        const data = response.data
        setCharacters(prevCharacters => [...prevCharacters, ...data.data])
        setIsLoading(false)
      })
      .catch(error => {
        setValidation({ error: error.message })
        setIsLoading(false)
      })
  }

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight
    const scrollTop = document.documentElement.scrollTop
    const clientHeight = document.documentElement.clientHeight
    if (scrollTop + clientHeight >= scrollHeight && !isLoading) {
      setCurrentPage(prevPage => prevPage + 1)
    }
  }

  const handleDelete = async id => {
    await deleteCharacter(id)
      .then(() => {
        history.push('/')
        Swal.fire('', '', 'success')
      })
      .catch(error => {
        setValidation(error.response.data)
      })
  }

  const renderTooltip = props => (
    <Tooltip id='button-tooltip' {...props}>
      Simple tooltip
    </Tooltip>
  )

  return (
    <section className='py-5 container mt-1'>
      <h3>Character Page</h3>
      <Link to='/characters/add' className='btn btn-sm btn-primary mb-3'>
        Add Character
      </Link>
      <Row>
        {characters.map(character => (
          <CharacterComponent
            path={path}
            key={character.id}
            characterId={character.id}
            fullName={character.full_name}
            gender={character.gender}
            species={character.species}
            image={character.image}
            handleDelete={handleDelete}
            renderTooltip={renderTooltip}
            onClick={() => {
              history.push('/characters/' + character.id)
            }}
          />
        ))}
        {isLoading === true && <div className='d-flex justify-content-center mt-5 mb-5'>Please Wait...</div>}
      </Row>
    </section>
  )
}
export default CharacterList
