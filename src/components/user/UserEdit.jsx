import React, { useEffect, useState } from "react";
import { Button, Col, Form, Image, Row } from "react-bootstrap";
import {
  getCharacterById,
  updateCharacter,
  getCharacterSpecies,
  getCharacterHouses,
} from "../../apis/characterService";
import Swal from "sweetalert2";
import { CustomFormInput, DynamicButtonGroup } from "../character";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { getUserById, updateUser } from "../../apis/userServices";
// import { CustomFormInput, CustomImage, DynamicButtonGroup } from ".";

function UserEdit({ userProfile }) {
  const history = useHistory();
  const id = userProfile.id;

  const [user, setUser] = useState("");

  const getData = () => {
    return getUserById(id).then((response) => {
      setUser(response.data.data);
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // if (!user) return;

    // const formData = new FormData();
    // formData.append("username", user.username);
    // formData.append("email", user.email);

    return updateUser({ ...user }, id)
      .then((response) => {
        Swal.fire("Berhasil Mengubah " + user.username, "", "success");
        history.push("/profile/");
      })
      .catch((error) => {
        Swal.fire(error.response.data.message, "Gagal", "error");
        // history.push("/profile/");
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const items = [
    {
      label: "Username",
      placeholder: "Enter Your Username",
      onChange: (e) =>
        setUser({
          ...user,
          username: e.target.value,
        }),
      value: user.username,
    },
    {
      label: "Email",
      placeholder: "Enter Email",
      onChange: (e) =>
        setUser({
          ...user,
          email: e.target.value,
        }),
      value: user.email,
    },
  ];

  const onHandleBack = () => {
    history.goBack();
  };

  const onHandleSubmit = (event) => {
    handleSubmit(event);
  };

  const buttons = [
    { text: "Back", onClick: onHandleBack, variant: "secondary" },
    { text: "Submit", onClick: onHandleSubmit },
  ];

  return (
    <section>
      <div>
        <Row>
          <h3>Character Form </h3>
          <Col className="mt-3 mb-3" >
            <div className="card shadow-lg h-100 py- mb-1 ">
              <div className="card-body">
                <div className="row">
                  <div className="col">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2"></div>
                    </div>
                    <hr />
                    {/* <div class="mb-1">
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
                        value={user.image_url || ""}
                      />
                    </div> */}

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
          <div className="d-flex justify-content-between" style={{ paddingBottom: 200 }}>
            <DynamicButtonGroup buttons={buttons} />
          </div>
        </Row>
      </div>
    </section>
  );
}

export default UserEdit;
