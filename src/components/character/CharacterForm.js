import { Button, Card, Form, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { bookSchema } from '../../validations/validationSchema'
import { useEffect, useState } from 'react'
import { createCharacter, getCharacterById, updateCharacter } from '../../apis/characterService'

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
        const fields = [
          'full_name',
        ]
        fields.forEach(field => setValue(field, character[field]))
        setCharacter(character)
      })
    }
  }, [])

  return (
    <section>
      <Row className='col-lg-12 mt-5'>
        <Card className='p-4 shadow-lg mt-5'>
          <h3>Character Edit Form</h3>
          <Form
             onSubmit={handleSubmit(submitForm)}
          >
            <Form.Group className='mb-3' controlId='formBasicTitle'>
              <Form.Label>Title{character.fullName}</Form.Label>
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
              <Form.Label>Description</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter book description'
                name='description'
                // {...register('description')}
                className=''
                //     {`form-control
                //     ${
                //       errors.description ? 'is-invalid' : ''
                //     }`
                // }
              />
              <div className='invalid-feedback'>
                {/* {errors.description?.message} */}
              </div>
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBasicImage'>
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
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBasicImage'>
              <Form.Label>Publisher</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter Publisher'
                name='publisher'
                // {...register('publisher')}
                className=''
                // {`form-control ${
                //   errors.publisher ? 'is-invalid' : ''
                // }`}
              />
              <div className='invalid-feedback'>
                {/* {errors.publisher?.message} */}
              </div>
            </Form.Group>

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
