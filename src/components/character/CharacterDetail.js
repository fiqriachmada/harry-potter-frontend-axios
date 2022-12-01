import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getCharacterById } from "../../apis/characterService";
import './CharacterDetail.css'

const CharacterDetail = ({ match }) => {
  const { id } = match.params;
  const [character, setCharacter] = useState({});

  useEffect(() => {
    getCharacterById(id).then((response) => {
      console.log(response.data);
      setCharacter(response.data);
    });
  }, [id]);

  const handlePreviousClick = async () => {
    console.log("Previous click");
  };
  const handleNextClick = async () => {
    let url = `https://api-harry-potter.fiqriachmada.repl.co//characters/${
      this.character.id + 1
    }`;
    let data = await axios(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setCharacter({
      id: this.character.id + 1,
      character: parsedData.character,
    });
  };

  return (
    <Row>
      <Col className="mb-5">
        {/* {character && !character.length && <h4>No Character on Display</h4>} */}
        <h3>Character Detail </h3>

        <div className="card shadow-lg py-5 mb-5 ">
          <Image
            className="shadow-lg w-25 mx-auto thumb-post rounded-circle"
            fluid
            rounded
            src={character.image}
          />
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
                        className="btn btn-sm btn-primary mb-3"
                      >
                        Edit
                      </Link>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-8">
                    <p className="card-text text-justify">
                      <strong>Deskripsi</strong> <br />
                      <br />
                      {/* {book.description} */}
                    </p>
                  </div>
                  <div className="col-md-4">
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
                        <div className="btn-group float-right">
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
                        <div className="btn-group float-right">
                          {character.house}
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
                        <div className="btn-group float-right">
                          {character.date_of_birth}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container d-flex justify-content-between">
            <button
              disabled={id <= 1}
              type="button"
              class="btn btn-dark"
              onClick={handlePreviousClick}
            >
              &larr; Previous
            </button>
            <button
              // disabled={character && !character.length}
              type="button"
              class="btn btn-dark"
              onClick={handleNextClick}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default CharacterDetail;
