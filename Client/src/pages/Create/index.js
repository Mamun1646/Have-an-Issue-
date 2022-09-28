/* eslint-disable */
import { useState } from "react";

import { Button, Form } from "react-bootstrap";
import { CREATE_USER_MUTATION } from "../../components/graphql/index";
import { useRouter } from "next/router";
import style from "../../styles/Create.module.css";
import { useMutation } from "@apollo/client";
const UserForm = () => {
  const router = useRouter();
  const [addPerson] = useMutation(CREATE_USER_MUTATION);
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [Description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const createName = (e) => {
    setName(e.target.value);
  };

  const createCountry = (e) => {
    console.log(e.target.value);
    setCountry(e.target.value);
  };
  const createImage = (e) => {
    setImage(e.target.files[0]);
    console.log(setImage);
  };

  const createDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addPerson({
      variables: {
        createPersonDto: {
          name,
          country,
          Description,
          image
        },
      },
    });
    alert("data comming ");
  };

  return (
    <div className={style.create}>
      <h2>Enter Your Bio</h2>

      <div className="column">
        <Form>
          <h1>Create a User</h1>
          <p>Profile Picture</p>
          

          <p>Name</p>
          <input
            type="text"
            placeholder="Enter Name"
            onChange={createName}
            value={name}
            icon=" "
            required
          />

          <p>Age</p>
          <input
            type="text"
            placeholder="Enter age"
            onChange={createCountry}
            value={country}
            icon=" "
            required
          />

          <p>Title</p>
          <input
            type="text"
            placeholder="Enter title"
            onChange={createDescription}
            value={Description}
            icon=" "
            required
                  />
                  <input
            type="file"
            placeholder="choose an image"
                      onChange={createImage}
                     
            icon=" "
            required
          />

          <Button
            className="action__btn m-2"
            variant="primary"
            onClick={handleSubmit}
          >
            Create
          </Button>
          <Button
            className={style.action_btn}
            onClick={() => router.push("/")}
            variant="info"
          >
            Back to Home
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default UserForm;
