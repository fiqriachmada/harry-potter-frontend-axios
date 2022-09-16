import React from "react";
import { Card, Col, ButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./CharacterComponent.css";

const CharacterComponent = ({
  path,
  image,
  characterId,
  fullName,
  gender,
  species,
  // description,
  // pages,
  // purchaseAmount,
  // price,
  // language,
  // stock,
  // publisher,
  // year,
  handleDelete,
}) => {
  return (
    <Col lg={2} md={6}>
      <Card className="book-card mb-3">
        <Card.Img
          variant="top"
          className="card-img-top text-center"
          alt={image}
          src={image}
        />
        <Card.Body className="book-desc">
          {/* <Card.Title>{title}</Card.Title> */}
          {/* <Card.Text>{description}</Card.Text>
          <Card.Text>Page</Card.Text> */}
          {/* <Card.Text className='text-xs-center'>{characterId}</Card.Text> */}
          <Card.Title className="text-xs-center">{fullName}</Card.Title>
          <Card.Text> {gender}</Card.Text>
          <Card.Text>{species}</Card.Text>
          {/* <Card.Text>Price</Card.Text>
          <Card.Text>Rp {purchaseAmount}</Card.Text>
          <Card.Text>Language</Card.Text>
          <Card.Text>{language}</Card.Text>
          <Card.Text>Publisher </Card.Text>
          <Card.Text> {publisher}</Card.Text>
          <Card.Text>Stock </Card.Text>
          <Card.Text> {stock}</Card.Text>
          <Card.Text>Year</Card.Text>
          <Card.Text> {year}</Card.Text> */}
          <ButtonGroup aria-label="Basic example" className="col-md">
            <Link
              to={`${path}/${characterId}`}
              className="btn btn-sm btn-outline-secondary"
            >
              Detail
            </Link>

            <Link
              to={`${path}/edit/${characterId}`}
              className="btn btn-sm btn-outline-warning"
            >
              Update
            </Link>

            {characterId < 0 ? (
              <button
                onClick={() => handleDelete(characterId)}
                className="btn btn-sm btn-outline-danger"
                disabled={true}
              >
                Delete
              </button>
            ) : (
              <button
                onClick={() => handleDelete(characterId)}
                className="btn btn-sm btn-outline-danger"
              >
                Delete
              </button>
            )}
          </ButtonGroup>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CharacterComponent;
