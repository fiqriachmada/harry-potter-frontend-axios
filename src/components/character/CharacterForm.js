import { Button, Card, Col, Form, Image, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { bookSchema } from '../../validations/validationSchema'
import { useEffect, useState } from 'react'
import {
  createCharacter,
  getCharacterById,
  updateCharacter
} from '../../apis/characterService'
import { Link } from 'react-router-dom'

const CharacterForm = ({ history, match }) => {
  const { id } = match.params

  const isAddMode = !id

  const [character, setCharacter] = useState({})

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting }
  } = useForm({ resolver: yupResolver(bookSchema) })

  const submitForm = data => {
    return isAddMode ? insert(data) : update(id, data)
  }

  const insert = data => {
    return createCharacter(data).then(response => {
      history.push('.')
    })
  }

  const update = (id, data) => {
    return updateCharacter(id, data).then(response => {
      history.push('..')
    })
  }

  useEffect(() => {
    if (!isAddMode) {
      getCharacterById(id).then(response => {
        let character = response.data
        const fields = ['full_name', 'species']
        fields.forEach(field => setValue(field, character[field]))
        setCharacter(character)
      })
    }
  }, [])

  return (
    <section>
      <div>
        <Row>
          <Col className='mb-5'>
            <h3>Character Detail </h3>
            <div className='card shadow-lg h-100 py-5 mb-5 '>
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
                          <Link
                            to={`/characters/edit/${character.id}`}
                            className='btn btn-sm btn-primary mb-3'
                          >
                            Edit
                          </Link>
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
                              Species
                            </div>
                          </div>
                          <div className='col-auto'>
                            <div className='btn-group float-right text-capitalize'>
                              {character.species}
                            </div>
                          </div>
                        </div>
                        <div className='row no-gutters align-items-center'>
                          <div className='col mr-2'>
                            <div className='mb-0 font-weight-bold text-gray-800'>
                              Gender
                            </div>
                          </div>
                          <div className='col-auto'>
                            <div className='btn-group float-right'>
                              {character.gender}
                            </div>
                          </div>
                        </div>
                        <div className='row no-gutters align-items-center'>
                          <div className='col mr-2'>
                            <div className='mb-0 font-weight-bold text-gray-800'>
                              House
                            </div>
                          </div>
                          <div className='col-auto'>
                            <div className='btn-group float-right'>
                              {character.house}
                            </div>
                          </div>
                        </div>
                        <div className='row no-gutters align-items-center'>
                          <div className='col mr-2'>
                            <div className='mb-0 font-weight-bold text-gray-800'>
                              Date of Birth
                            </div>
                          </div>
                          <div className='col-auto'>
                            <div className='btn-group float-right'>
                              {character.date_of_birth}
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
      </div>
      <h3>Character Edit Form</h3>
      <Row className='col-lg-12 mb-5'>
        <Card className='py-5 shadow-lg mt-5 mb-5'>
          <Form className='mb-5 my-4' onSubmit={handleSubmit(submitForm)}>
            <Form.Group className='mb-3' controlId='formBasicTitle'>
              <Form.Label>{character.full_name}</Form.Label>
              <br />
              <Form.Label>{character.species}</Form.Label>
              {/* <Form.Control
                type='text'
                placeholder='Enter book title'
                name='title'
                {...register('title')}
                className={`form-control ${errors.title ? 'is-invalid' : ''}`}
              />
              <div className='invalid-feedback'>{errors.title?.message}</div> */}
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBasicDescription'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter Name of the Character'
                name='full_name'
                {...register('full_name')}
                className={`form-control ${errors.full_name}? 'is-invalid' : ''}`}
              />
              <div className='invalid-feedback'>
                {errors.full_name?.message}
              </div>
            </Form.Group>

            {/* <Form.Group className='mb-3' controlId='formBasicImage'>
              <Form.Label>Language</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter Language'
                name='language'
                // {...register('language')}
                className=''
                // {`form-control ${
                //   errors.language ? 'is-invalid' : ''
                // }`}
              />
              {/* <div className='invalid-feedback'>{errors.language?.message}</div> */}
            {/* </Form.Group>

            

            {/* <Form.Group className='mb-3' controlId='formBasicImage'>
              <Form.Label>Page</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter Page'
                name='pages'
                {...register('pages')}
                className={`form-control ${errors.pages ? 'is-invalid' : ''}`}
              />
              <div className='invalid-feedback'>{errors.pages?.message}</div>
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBasicImage'>
              <Form.Label>Year</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter Year'
                name='year'
                {...register('year')}
                className={`form-control ${errors.year ? 'is-invalid' : ''}`}
              />

              <div className='invalid-feedback'>{errors.year?.message}</div>
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBasicImage'>
              <Form.Label>Stock</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter Stock'
                name='stock'
                {...register('stock')}
                className={`form-control ${errors.stock ? 'is-invalid' : ''}`}
              />
              <div className='invalid-feedback'>{errors.stock?.message}</div>
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBasicImage'>
              <Form.Label>Price</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter Price'
                name='price'
                {...register('price')}
                className={`form-control ${errors.price ? 'is-invalid' : ''}`}
              />
              <div className='invalid-feedback'>{errors.price?.message}</div>
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBasicImage'>
              <Form.Label>Purchase Amount</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter Purchase Amount'
                name='purchaseAmount'
                {...register('purchaseAmount')}
                className={`form-control ${
                  errors.purchaseAmount ? 'is-invalid' : ''
                }`}
              />
              <div className='invalid-feedback'>
                {errors.purchaseAmount?.message}
              </div>
            </Form.Group> */}

            <Button variant='success' type='submit'>
              Save
            </Button>
          </Form>
        </Card>
      </Row>
    </section>
  )
}
export default CharacterForm
