import React from 'react';
import { Card, Col, ButtonGroup, OverlayTrigger } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
// import "./CharacterComponent.css";

const CharacterComponent = ({
  path,
  image,
  characterId,
  fullName,
  handleDelete,
  renderTooltip,
  onClick,
}) => {
  return (
    <Col lg={3} md={6}>
      <Card className="book-card mb-3" onClick={onClick}>
        <OverlayTrigger
          placement="top"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip}>
          <Card.Img
            variant="top"
            className="text-center"
            alt={image}
            src={image}
            style={{
              height: 300,
              background: `lightgrey`,
              borderRadius: 5,
            }}
          />
        </OverlayTrigger>
        <Card.Body className="book-desc">
          <Card.Title className="text-xs-center">{fullName}</Card.Title>

          <div className="d-flex justify-content-center">
            <ButtonGroup className="col-12">
              <Link
                to={`${path}/${characterId}`}
                className="btn btn-sm btn-outline-secondary col-4">
                Detail
              </Link>

              <Link
                to={`${path}/edit/${characterId}`}
                className="btn btn-sm btn-outline-warning col-4">
                Update
              </Link>

              <button
                onClick={() => {
                  Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!',
                  }).then((result) => {
                    if (result.isConfirmed) {
                      handleDelete(characterId);
                      Swal.fire(
                        'Deleted!',
                        'Your data has been deleted.',
                        'success'
                      );
                    }
                  });
                }}
                className="btn btn-sm btn-outline-danger col-4">
                Delete
              </button>
            </ButtonGroup>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CharacterComponent;
