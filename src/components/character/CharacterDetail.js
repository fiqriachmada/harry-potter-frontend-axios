import React, { useEffect, useState } from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getCharacterById } from '../../apis/characterService';
import dotenv from 'dotenv';
import './CharacterDetail.css';

dotenv.config();

const CharacterDetail = ({ match, history }) => {
  var { id } = match.params;
  const [character, setCharacter] = useState([]);

  const handlePreviousClick = () => {
    history.push(`/characters/${id - 1}`);
  };
  const handleNextClick = async () => {};

  const urlImage = process.env.IMAGE_URL;

  console.log(`process.env.URL_IMAGE`, `${process.env.URL_IMAGE}`);

  console.log('urlImage', urlImage);

  console.log(
    'urlImage + / + character.image',
    'https://ik.imagekit.io/fiqriachmada' + '/' + character.image
  );

  useEffect(() => {
    getCharacterById(id).then((response) => {
      setCharacter(response.data.data);
    });
  }, [id]);

  return (
    <Row>
      <h3 className="mb-3">Character Detail </h3>
      <Col className="mt-3 mb-3">
        <div className="card shadow-lg py-5 mb-5 ">
          <div className="d-flex justify-content-center mt-2 mb-2">
            <Image
              src={character.image}
              style={{
                width: 250,
                height: 250,
                background: `lightgrey`,
                borderRadius: 5,
              }}
            />
            <Image
              src={
                'https://ik.imagekit.io/fiqriachmada' + '/' + character.image
              }
              style={{
                width: 250,
                height: 250,
                background: `lightgrey`,
                borderRadius: 5,
              }}
            />
          </div>
          <div className="card-body">
            <div className="col">
              <div className="col-md-12">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <h1>{character.full_name}</h1>
                  </div>
                  <div className="col-auto">
                    <div className="btn-group float-right">
                      <Link
                        to={`/characters/edit/${character.id}`}
                        className="btn btn-sm btn-primary mb-3">
                        Edit
                      </Link>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-6">
                    <p className="card-text text-justify">
                      <strong>Deskripsi</strong> <br />
                      <br />
                    </p>
                  </div>
                  <div className="col-md-6">
                    <strong>Detail</strong> <br />
                    <br />
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className="mb-0 font-weight-bold text-gray-800">
                          Species
                        </div>
                      </div>
                      <div className="col-auto">
                        <div className="btn-group float-right text-capitalize">
                          {character.species}
                        </div>
                      </div>
                    </div>
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className="mb-0 font-weight-bold text-gray-800">
                          Gender
                        </div>
                      </div>
                      <div className="col-auto">
                        <div className="btn-group float-right text-capitalize">
                          {character.gender}
                        </div>
                      </div>
                    </div>
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className="mb-0 font-weight-bold text-gray-800">
                          House
                        </div>
                      </div>
                      <div className="col-auto">
                        <div className="btn-group float-right text-capitalize">
                          {character.house || '-'}
                        </div>
                      </div>
                    </div>
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className="mb-0 font-weight-bold text-gray-800">
                          Date of Birth
                        </div>
                      </div>
                      <div className="col-auto">
                        <div className="btn-group float-right text-capitalize">
                          {character.date_of_birth || '-'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            id > 1
              ? 'd-flex justify-content-between mt-2'
              : 'd-flex justify-content-end mt-2'
          }>
          {id > 1 && (
            <button
              disabled={id <= 1}
              type="button"
              class="btn btn-dark"
              onClick={handlePreviousClick}>
              &larr; Previous
            </button>
          )}
          <button type="button" class="btn btn-dark" onClick={handleNextClick}>
            Next &rarr;
          </button>
        </div>
      </Col>
    </Row>
  );
};

export default CharacterDetail;
