import React from "react";
import { Card, Col, ButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
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
    <Col lg={3} md={6}>
      <Card className="book-card mb-3">
        <Card.Img
          variant="top"
          className="card-img-top text-center"
          alt={image}
          src={image}
        />
        <Card.Body className="book-desc">
          <Card.Title className="text-xs-center">{fullName}</Card.Title>
          <Card.Text> {gender}</Card.Text>
          <Card.Text>{species}</Card.Text>
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

            <button
              onClick={() => {
                Swal.fire({
                  title: "Are you sure?",
                  text: "You won't be able to revert this!",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Yes, delete it!",
                }).then((result) => {
                  if (result.isConfirmed) {
                    // deleteParentuser(parentuser.id);
                    handleDelete(characterId);
                    Swal.fire(
                      "Deleted!",
                      "Your data has been deleted.",
                      "success"
                    );
                  }
                });
              }}
              // handleDelete(characterId)}
              className="btn btn-sm btn-outline-danger"
            >
              Delete
            </button>
            {/* {characterId < 0 ? (
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
            )} */}
          </ButtonGroup>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CharacterComponent;
