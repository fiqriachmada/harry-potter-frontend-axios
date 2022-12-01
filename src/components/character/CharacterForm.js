import { Button, Col, Form, Image, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { characterScheme } from "../../validations/validationSchema";
import { useEffect, useState } from "react";
import {
  createCharacter,
  getCharacterById,
  updateCharacter,
} from "../../apis/characterService";
import Swal from "sweetalert2";

const CharacterForm = ({ history, match }) => {
  const { id } = match.params;

  const isAddMode = !id;

  const [character, setCharacter] = useState({});

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(characterScheme) });


  const submitForm = (data) => {
    console.log(data);
    return isAddMode ? insert(data) : update(id, data);
  };

  const insert = (data) => {
    return createCharacter(data)
      .then((response) => {
        setCharacter(response.data);

        Swal.fire("Berhasil", "", "success");
        response.history.push("characters/add");
      })
      .catch((error) => {
        setValue(error.response.data);
      });
  };

  const update = (data, id) => {
    return updateCharacter(data, id)
      .then((response) => {
        setCharacter(response.data, response.id);
        Swal.fire("Berhasil", "", "success");
        history.push(`characters/`);
      })
      .catch((error) => {
        setValue(error.response.data);
      });
  };

  useEffect(() => {
    if (!isAddMode) {
      getCharacterById(id).then((response) => {
        let character = response.data;
        const fields = ["full_name", "species", "gender"];
        fields.forEach((field) => setValue(field, character[field]));
        setCharacter(character);
      });
    }
  }, [id, isAddMode, setCharacter, setValue]);

  return (
    <section>
      <div>
        <Row>
          <Col className="mb-5">
            <h3>Character Form </h3>
            <div className="card shadow-lg h-100 py-5 mb-5 ">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-3">
                    <Image src={character.image} fluid rounded />
                  </div>
                  <div className="col-md-9">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <h1>{character.full_name}</h1>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div>
                        <Form
                          className="mb-5 my-2"
                          onSubmit={void handleSubmit(submitForm)}
                        >
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicDescription"
                          >
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter Name of the Character"
                              name="full_name"
                              value={character.full_name}
                              {...register("full_name")}
                              className={`form-control ${errors.full_name}? 'is-invalid' : ''}`}
                              onChange={(e) => setCharacter(e.target.value)}
                            />
                            <div className="invalid-feedback">
                              {errors.full_name?.message}
                            </div>
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicDescription"
                          >
                            <Form.Label>Gender</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter Gender of the Character"
                              name="gender"
                              {...register("gender")}
                              className={`form-control ${errors.gender}? 'is-invalid' : ''}`}
                            />
                            <div className="invalid-feedback">
                              {errors.gender?.message}
                            </div>
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicDescription"
                          >
                            <Form.Label>Species</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter Species of the Character"
                              name="species"
                              {...register("species")}
                              className={`form-control ${errors.species}? 'is-invalid' : ''}`}
                            />
                            <div className="invalid-feedback">
                              {errors.species?.message}
                            </div>
                          </Form.Group>
                          <Button variant="primary" type="submit">
                            Submit
                          </Button>
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
};
export default CharacterForm;
