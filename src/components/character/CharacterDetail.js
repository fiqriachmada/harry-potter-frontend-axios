import React, { useEffect, useState } from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getCharacterById } from '../../apis/characterService';
import dotenv from 'dotenv';
import './CharacterDetail.css';
import { DynamicButtonGroup } from '.';

dotenv.config();

const CharacterDetail = ({ match, history }) => {
  var { id } = match.params;
  const [character, setCharacter] = useState([]);

  const handlePreviousClick = () => {
    history.push(`/characters/${id - 1}`);
  };
  const handleNextClick = async () => {};

  const urlImage = process.env.REACT_APP_URL_IMAGE;

  useEffect(() => {
    getCharacterById(id).then((response) => {
      setCharacter(response.data.data);
    });
  }, [id]);

  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    let timerId;
    const imgEl = document.getElementById('my-image');
    if (hovered) {
      timerId = setTimeout(() => {
        imgEl.classList.add('shadow-lg');
      }, 500);
    } else {
      imgEl.classList.remove('shadow-lg');
    }
  }, [hovered]);

  const buttons = [
    {
      text: 'Back',
      variant: 'secondary',
      onClick: () => {
        history.push('/characters');
      },
    },
    {
      text: 'Edit',
      onClick: () => {
        history.push('/characters/edit/' + id);
      },
    },
  ];

  return (
    <Row>
      <h3 className="mb-3">Character Detail </h3>
      <Col className="mt-3 mb-3">
        <div className="card shadow-lg py-5 mb-3">
          <div className="d-flex justify-content-center mt-2 mb-2">
            <Image
              id="my-image"
              onMouseOver={() => setHovered(true)}
              onMouseOut={() => setHovered(false)}
              src={character.image || urlImage + '/' + character.image_url}
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
                  <div className="col">
                    <h1>{character.full_name}</h1>
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
        <div className="d-flex justify-content-between">
          <DynamicButtonGroup buttons={buttons} />
        </div>
      </Col>
    </Row>
  );
};

export default CharacterDetail;
