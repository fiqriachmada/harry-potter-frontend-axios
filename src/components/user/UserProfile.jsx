import React, { useEffect, useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getCharacterById } from "../../apis/characterService";
import dotenv from "dotenv";
import { DynamicButtonGroup } from "../character";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { getUserById } from "../../apis/userServices";

dotenv.config();

const UserProfile = ({ userProfile }) => {
  const history = useHistory();

  const id = userProfile.id;

  const [user, setUser] = useState("");

  const getData = () => {
    return getUserById(id).then((response) => {
      setUser(response.data.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const buttons = [
    {
      text: "Back",
      variant: "secondary",
      onClick: () => {
        history.push("/characters");
      },
    },
    {
      text: "Edit",
      onClick: () => {
        history.push("/profile/edit");
      },
    },
  ];

  return (
    <Row>
      <h3 className="mb-3">Profile </h3>
      <Col className="mt-3 mb-3">
        <div className="card shadow-lg py-5 mb-3">
          <div className="d-flex justify-content-center mt-2 mb-2">
            <Image
              id="my-image"
              src="https://dummyimage.com/400x400/000/fff"
              //   onMouseOver={() => setHovered(true)}
              //   onMouseOut={() => setHovered(false)}
              //   src={character.image || urlImage + "/" + character.image_url}
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
                    <h1>{user.username || ""}</h1>
                  </div>
                </div>
                <hr />
                <div className="row">
                  {/* <div className="col-md-6">
                    <p className="card-text text-justify">
                      <strong>Deskripsi</strong> <br />
                      <br />
                    </p>
                  </div> */}
                  <div className="col">
                    <strong>Detail</strong> <br />
                    <br />
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className="mb-0 font-weight-bold text-gray-800">
                          Username
                        </div>
                      </div>
                      <div className="col-auto">
                        <div className="btn-group float-right text-capitalize">
                          {user.username || ""}
                        </div>
                      </div>
                    </div>
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className="mb-0 font-weight-bold text-gray-800">
                          Email
                        </div>
                      </div>
                      <div className="col-auto">
                        <div className="btn-group float-right text-capitalize">
                          {user.email || ""}
                        </div>
                      </div>
                    </div>
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className="mb-0 font-weight-bold text-gray-800">
                          Created At
                        </div>
                      </div>
                      <div className="col-auto">
                        <div className="btn-group float-right text-capitalize">
                          {user.created_at || "-"}
                        </div>
                      </div>
                    </div>
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className="mb-0 font-weight-bold text-gray-800">
                          Updated At
                        </div>
                      </div>
                      <div className="col-auto">
                        <div className="btn-group float-right text-capitalize">
                          {user.updated_at || "-"}
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

export default UserProfile;
