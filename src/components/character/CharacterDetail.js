import React, { useEffect, useState } from 'react'
import { Col, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { getCharacterById } from '../../apis/characterService'

const CharacterDetail = ({ match, path, characterId }) => {
  const { id } = match.params
  const [character, setCharacter] = useState({})

  useEffect(() => {
    getCharacterById(id).then(response => setCharacter(response.data))
  }, [])

  return (
    <Row>
      <Col>
        <h3>Book Detail </h3>
        <div className='card shadow h-100 py-2'>
          <div className='card-body'>
            <div className='row'>
              <div className='col-md-3'>
                <Image src={character.image} fluid rounded />
              </div>
              <div className='col-md-9'>
                <div className='row no-gutters align-items-center'>
                  <div className='col mr-2'>
                    <h1>{character.full_name}</h1>
                    <div className='mb-0 font-weight-bold text-gray-800'>
                      {/* {book.price} */}
                    </div>
                  </div>
                  <div className='col-auto'>
                    <div className='btn-group float-right'>
                      <button
                        type='submit'
                        className='card-link btn btn-sm btn-primary'
                      >
                        <Link to={`${path}/edit/${characterId}`}>
                          <i className='fas fa-shopping-basket'></i> Edit
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>
                <hr />
                <div className='row'>
                  <div className='col-md-8'>
                    <p className='card-text text-justify'>
                      <strong>Deskripsi</strong> <br />
                      <br />
                      {/* {book.description} */}
                    </p>
                  </div>
                  <div className='col-md-4'>
                    <strong>Detail</strong> <br />
                    <br />
                    <div className='row no-gutters align-items-center'>
                      <div className='col mr-2'>
                        <div className='mb-0 font-weight-bold text-gray-800'>
                          Halaman
                        </div>
                      </div>
                      <div className='col-auto'>
                        <div className='btn-group float-right'>
                          {/* {book.pages} */}
                        </div>
                      </div>
                    </div>
                    <div className='row no-gutters align-items-center'>
                      <div className='col mr-2'>
                        <div className='mb-0 font-weight-bold text-gray-800'>
                          Tahun Terbit
                        </div>
                      </div>
                      <div className='col-auto'>
                        {/* <div className='btn-group float-right'>{book.year}</div> */}
                      </div>
                    </div>
                    <div className='row no-gutters align-items-center'>
                      <div className='col mr-2'>
                        <div className='mb-0 font-weight-bold text-gray-800'>
                          Bahasa
                        </div>
                      </div>
                      <div className='col-auto'>
                        <div className='btn-group float-right'>
                          {/* {book.language} */}
                        </div>
                      </div>
                    </div>
                    <div className='row no-gutters align-items-center'>
                      <div className='col mr-2'>
                        <div className='mb-0 font-weight-bold text-gray-800'>
                          Penerbit
                        </div>
                      </div>
                      <div className='col-auto'>
                        <div className='btn-group float-right'>
                          {/* {book.publisher} */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  )
}

export default CharacterDetail
