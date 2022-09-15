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

const CharacterForm = ({ history, match }) => {
  const { id } = match.params;

  const isAddMode = !id;

  console.log(id);
  console.log(isAddMode);

  const [character, setCharacter] = useState({});

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(characterScheme) });

  console.log(handleSubmit);

  const submitForm = (data) => {
    console.log(data);
    return isAddMode ? insert(data) : update(id, data);
  };

  const insert = (data) => {
    return createCharacter(data).then((response) => {
      console.log(response.data);
      setCharacter(response.data);
      response.history.push("characters/add");
    });
  };

  const update = (data, id) => {
    return updateCharacter(data, id).then((response) => {
      console.log(response.data, response.id);
      setCharacter(response.data, response.id);
      history.push(`characters/edit/${character.id}`);
    });
  };

  useEffect(() => {
    if (!isAddMode) {
      getCharacterById(id).then((response) => {
        let character = response.data;
        const fields = ["full_name", "species"];
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
                          onSubmit={handleSubmit(submitForm)}
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
                              {...register("full_name")}
                              className={`form-control ${errors.full_name}? 'is-invalid' : ''}`}
                            />
                            <div className="invalid-feedback">
                              {errors.full_name?.message}
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
