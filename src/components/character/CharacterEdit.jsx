import React from 'react';
import { useEffect } from 'react';
import { Button, Col, Form, Image, Row } from 'react-bootstrap';
import { getCharacterById, updateCharacter } from '../../apis/characterService';
import { useState } from 'react';
import Swal from 'sweetalert2';

function CharacterEdit({ history, match }) {
  const id = match.params.id;
  const [character, setCharacter] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    return updateCharacter({ ...character }, id)
      .then((response) => {
        Swal.fire('Berhasil Mengubah ' + character.full_name, '', 'success');
        history.push('/characters/' + id);
      })
      .catch((error) => {
        Swal.fire(error, 'Gagal', 'error');
        history.push('/characters/' + id);
      });
  };
  
  const getData = () => {
    return getCharacterById(id).then((response) => setCharacter(response.data));
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <section>
      <div>
        <Row>
          <Col className="mb-5">
            <h3>Character Form </h3>
            <div className="card shadow-lg h-100 py-5 mb-5 ">
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-3">
                    <Image
                      src={character.image}
                      style={{
                        width: 250,
                        height: 250,
                        background: `lightgrey`,
                        borderRadius: 5,
                      }}
                    />
                  </div>
                  <div className="col-lg-9">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2"></div>
                    </div>
                    <hr />
                    <div className="row">
                      <div>
                        <Form className="mb-5 my-2">
                          <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter Name of the Character"
                              name="full_name"
                              value={character.full_name}
                              onChange={(e) =>
                                setCharacter({
                                  ...character,
                                  full_name: e.target.value,
                                })
                              }
                            />
                            {/* <div className="invalid-feedback">
                              {errors.full_name?.message}
                            </div> */}
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicDescription">
                            <Form.Label>Gender</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter Gender of the Character"
                              name="gender"
                              value={character.gender}
                              onChange={(e) =>
                                setCharacter({
                                  ...character,
                                  gender: e.target.value,
                                })
                              }
                            />
                            {/* <div className="invalid-feedback">
                              {errors.gender?.message}
                            </div> */}
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicDescription">
                            <Form.Label>Species</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter Species of the Character"
                              name="species"
                              value={character.species}
                              onChange={(e) =>
                                setCharacter({
                                  ...character,
                                  species: e.target.value,
                                })
                              }
                            />
                          </Form.Group>
                          <button
                            className="btn btn-primary"
                            onClick={handleSubmit}>
                            Submit
                          </button>
                        </Form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default CharacterEdit;
