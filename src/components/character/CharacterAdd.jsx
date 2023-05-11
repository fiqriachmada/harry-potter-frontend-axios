import React, { useState, useEffect } from 'react';
import { Button, Col, Form, Image, Row } from 'react-bootstrap';
import Swal from 'sweetalert2';
import {
  createCharacter,
  getCharacterHouses,
  getCharacterSpecies,
} from '../../apis/characterService';
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';

registerPlugin(FilePondPluginImagePreview);

function CharacterAdd({ history, match }) {
  const id = match.params.id;
  const [character, setCharacter] = useState({
    full_name: '',
    gender: 'male',
    species: 'human',
    house: 'Gryffindor',
    date_of_birth: '',
    year_of_birth: '',
    image_url: '',
  });
  const [species, setSpecies] = useState([]);
  const [house, setHouse] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('full_name', character.full_name);
    formData.append('gender', character.gender);
    formData.append('species', character.species);
    formData.append('house', character.house);
    formData.append('date_of_birth', character.date_of_birth);
    formData.append('year_of_birth', character.year_of_birth);
    formData.append('image_url', character.image_url);
    return createCharacter(formData)
      .then((response) => {
        Swal.fire('Berhasil Menambah ' + character.full_name, '', 'success');
        history.push('/characters/');
      })
      .catch((error) => {
        Swal.fire(error, 'Gagal', 'error');
        history.push('/characters/');
      });
  };

  const getDataSpecies = () => {
    return getCharacterSpecies().then((response) =>
      setSpecies(response.data.data)
    );
  };

  const getDataHouses = () => {
    return getCharacterHouses().then((response) =>
      setHouse(response.data.data)
    );
  };

  useEffect(() => {
    getDataSpecies();
    getDataHouses();
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
                  {/* <div className="col-lg-3 mb-3">
                    <div className="d-flex justify-content-center">
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
                  </div> */}
                  <div className="col">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2"></div>
                    </div>
                    <hr />
                    <div className="row">
                      <div>
                        <Form className="mb-5 my-2">
                          <Form.Group className="mb-3">
                            <Form.Label>Upload Image</Form.Label>
                            <FilePond
                              credits={false}
                              allowImagePreview={true}
                              allowMultiple={false}
                              server={{
                                process: {
                                  url: 'https://api-harry-potter-app.cyclic.app/upload',
                                  method: 'POST',
                                  withCredentials: false,
                                  headers: {},
                                  timeout: 7000,
                                  onload: null,
                                  onerror: null,
                                  ondata: null,
                                },
                              }}
                              onupdatefiles={(fileItems) => {
                                if (fileItems.length > 0) {
                                  setCharacter({
                                    ...character,
                                    image_url: fileItems[0].file,
                                  });
                                } else {
                                  // Handle the case when the user cancelled the upload
                                  console.log('Upload cancelled');
                                }
                              }}
                            />
                          </Form.Group>

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
                          </Form.Group>

                          <Form.Group className="mb-3">
                            <Form.Label>Gender</Form.Label>
                            <Form.Select
                              aria-label="Default select example"
                              value={character.gender}
                              onChange={(e) =>
                                setCharacter({
                                  ...character,
                                  gender: e.target.value,
                                })
                              }>
                              <option value="male">Male</option>
                              <option value="female">Female</option>
                            </Form.Select>
                          </Form.Group>

                          <Form.Group className="mb-3">
                            <Form.Label>Species</Form.Label>
                            <Form.Select
                              aria-label="Default select example"
                              value={character.species}
                              onChange={(e) =>
                                setCharacter({
                                  ...character,
                                  species: e.target.value,
                                })
                              }
                              className="text-capitalize">
                              {species.map((species) => (
                                <option
                                  value={species.species}
                                  className="text-capitalize">
                                  {species.species}
                                </option>
                              ))}
                            </Form.Select>
                          </Form.Group>

                          <Form.Group className="mb-3">
                            <Form.Label>House</Form.Label>
                            <Form.Select
                              aria-label="Default select example"
                              value={character.house}
                              onChange={(e) =>
                                setCharacter({
                                  ...character,
                                  house: e.target.value,
                                })
                              }
                              className="text-capitalize">
                              {house.map((house) => (
                                <option
                                  value={house.house}
                                  className="text-capitalize">
                                  {house.house}
                                </option>
                              ))}
                            </Form.Select>
                          </Form.Group>

                          <Form.Group className="mb-3">
                            <Form.Label className="text-capitalize">
                              date of birth
                            </Form.Label>

                            <Form.Control
                              type="date"
                              value={character.date_of_birth}
                              onChange={(e) => {
                                const date = new Date(e.target.value);
                                const year = date.getFullYear();
                                setCharacter({
                                  ...character,
                                  date_of_birth: e.target.value,
                                  year_of_birth: year,
                                });
                              }}
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

export default CharacterAdd;
