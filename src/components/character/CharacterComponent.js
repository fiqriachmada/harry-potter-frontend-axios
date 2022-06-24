import React from 'react'
import { Card, Col, ButtonGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './BookComponent.css'

const CharacterComponent = ({
  path,
  bookId,
  full_name
  // title,
  // description,
  // pages,
  // purchaseAmount,
  // price,
  // image,
  // language,
  // stock,
  // publisher,
  // year,
  // handleDelete,
}) => {
  return (
    <Col lg={3} md={6}>
      <Card className='book-card mb-3'>
        {/* <Card.Img variant='top' className='book-img' src={image} /> */}
        <Card.Body className='book-desc'>
          {/* <Card.Title>{title}</Card.Title> */}
          {/* <Card.Text>{description}</Card.Text>
          <Card.Text>Page</Card.Text> */}
          <Card.Text className='text-xs-center'>{full_name}</Card.Text>
          {/* <Card.Text>Price</Card.Text>
          <Card.Text>Rp {price}</Card.Text>
          <Card.Text>Purchase Amount</Card.Text>
          <Card.Text>Rp {purchaseAmount}</Card.Text>
          <Card.Text>Language</Card.Text>
          <Card.Text>{language}</Card.Text>
          <Card.Text>Publisher </Card.Text>
          <Card.Text> {publisher}</Card.Text>
          <Card.Text>Stock </Card.Text>
          <Card.Text> {stock}</Card.Text>
          <Card.Text>Year</Card.Text>
          <Card.Text> {year}</Card.Text> */}
          <ButtonGroup aria-label='Basic example' className=''>
            <Link
              // to={`${path}/${bookId}`}
              // className='btn btn-sm btn-outline-secondary'
            >
              Detail
            </Link>

            <Link
              // to={`${path}/edit/${bookId}`}
              className='btn btn-sm btn-outline-warning'
            >
              Update
            </Link>

            {/* {purchaseAmount > 0 || purchaseAmount === null ?
             (
              <button
                onClick={() => handleDelete(bookId)}
                className='btn btn-sm btn-outline-danger'
                disabled={true}
              >
                Delete
              </button>
            ) : (
              <button
                onClick={() => handleDelete(bookId)}
                className='btn btn-sm btn-outline-danger'
              >
                Delete
              </button>
            )} */}
          </ButtonGroup>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default CharacterComponent
