import React, { useEffect, useState } from 'react';
import { Button, Col, Form, Image, Row } from 'react-bootstrap';
import {
  getCharacterById,
  updateCharacter,
  getCharacterSpecies,
  getCharacterHouses,
} from '../../apis/characterService';
import Swal from 'sweetalert2';
import { CustomFormInput, CustomImage, DynamicButtonGroup } from '.';

function CharacterEdit({ history, match }) {
  const id = match.params.id;
  const [character, setCharacter] = useState('');
  const [species, setSpecies] = useState([]);
  const [house, setHouse] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!character) return;

    const formData = new FormData();
    formData.append('full_name', character.full_name);
    formData.append('gender', character.gender);
    formData.append('species', character.species);
    formData.append('house', character.house);
    formData.append('date_of_birth', character.date_of_birth);
    formData.append('year_of_birth', character.year_of_birth);
    character.image_url != null &&
      formData.append('image_url', character.image_url);
    return updateCharacter(formData, id)
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
    return getCharacterById(id).then((response) => {
      setCharacter(response.data.data);
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
    getData();
    getDataSpecies();
    getDataHouses();
  }, []);

  const items = [
    {
      label: 'Full Name',
      placeholder: 'Enter Name of the Character',
      onChange: (e) =>
        setCharacter({
          ...character,
          full_name: e.target.value,
        }),
      value: character.full_name,
    },
    {
      label: 'Gender',
      options: [
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
      ],
      onChange: (e) =>
        setCharacter({
          ...character,
          gender: e.target.value,
        }),
      value: character.gender,
    },
    {
      label: 'Species',
      options: species.map((species) => ({
        label: species.species,
        value: species.species,
      })),
      onChange: (e) =>
        setCharacter({
          ...character,
          species: e.target.value,
        }),
      value: character.species,
    },
    {
      label: 'House',
      options: house.map((house) => ({
        label: house.house,
        value: house.house,
      })),
      onChange: (e) =>
        setCharacter({
          ...character,
          house: e.target.value,
        }),
      value: character.house,
    },
    {
      label: 'Date of Birth',
      type: 'date',
      onChange: (e) =>
        setCharacter({
          ...character,
          date_of_birth: e.target.value,
        }),
      value: character.date_of_birth,
    },
  ];

  const onHandleBack = () => {
    history.goBack();
  };

  const onHandleSubmit = (event) => {
    handleSubmit(event);
  };

  const buttons = [
    { text: 'Back', onClick: onHandleBack, variant: 'secondary' },
    { text: 'Submit', onClick: onHandleSubmit },
  ];

  const urlImage = process.env.REACT_APP_URL_IMAGE;

  const handleImageChange = (event) => {
    setCharacter({
      ...character,
      image_url: event.target.files[0],
    });
  };

  return (
    <section>
      <div>
        <Row>
          <h3>Character Form </h3>
          <Col className="mt-3 mb-3">
            <div className="card shadow-lg h-100 py- mb-1 ">
              <div className="card-body">
                <div className="row">
                  <div className="col">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2"></div>
                    </div>
                    <hr />
                    <div class="mb-1">
                      <label class="form-label">
                        Default file input example
                      </label>
                      <input
                        class="form-control"
                        type="file"
                        onChange={handleImageChange}
                      />
                      <input
                        disabled
                        class="form-control"
                        value={character.image_url}
                      />
                    </div>

                    <div className="row">
                      <div>
                        <CustomFormInput items={items}></CustomFormInput>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <DynamicButtonGroup buttons={buttons} />
        </Row>
      </div>
    </section>
  );
}

export default CharacterEdit;
