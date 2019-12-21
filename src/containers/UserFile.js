import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function UserFile() {
  const { id } = useParams();
  const [userFile, setUserFile] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  console.log(userFile);
  //fetching the selected userProject to display

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://meilleurtaux.herokuapp.com/userProject/" + id
      );
      setUserFile(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  //delete the chosen userProject
  const deleteUserFile = async () => {
    try {
      const response = await axios.post(
        "https://meilleurtaux.herokuapp.com/userProject/delete/" + id
      );
      if (response.data) {
        alert("Dossier supprime");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      {isLoading === true ? (
        <div> En cours de chargement...</div>
      ) : (
        <>
          <div>{userFile.userEmail}</div>
          <div>{userFile.fileId}</div>
          <Link to="/BackOffice">
            <span
              onClick={() => {
                deleteUserFile();
              }}
            >
              XX
            </span>
          </Link>
        </>
      )}
    </>
  );
}
export default UserFile;
