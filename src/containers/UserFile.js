import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function UserFile() {
  const { id } = useParams();
  const [userFile, setUserFile] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  console.log(userFile);
  //fetching the selected userProject to display the details of the file

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
  });

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
          <Link to="/BackOffice" style={{ textDecoration: "none" }}>
            <span className="admin">BACK</span>
          </Link>
          <div className="file-presentation">
            <div className="userFile-array">
              <div className="array-element">Num dossier</div>
              <div className="array-element">Email</div>
              <div className="array-element">Type de bien</div>
              <div className="array-element">Etat du bien</div>
              <div className="array-element">Usage du bien</div>
              <div className="array-element">Situation de l'acquereur</div>
              <div className="array-element">Pays</div>
              <div className="array-element">Ville</div>
              <div className="array-element">Montant de l'acquisition</div>
              <div className="array-element">Montant des travaux</div>
              <div className="array-element">Frais de Notaire</div>
              <div className="array-element">Montant du projet</div>
            </div>
            <div className="userFile-array">
              <div className="array-box">{userFile.fileId}</div>
              <div className="array-box">{userFile.userEmail}</div>
              <div className="array-box">{userFile.typeGood}</div>
              <div className="array-box">{userFile.stateGood}</div>
              <div className="array-box">{userFile.usageGood}</div>
              <div className="array-box">{userFile.userSituation}</div>
              <div className="array-box">{userFile.locationGood.country}</div>
              <div className="array-box">{userFile.locationGood.city}</div>
              <div className="array-box">{userFile.amount.good} €</div>
              <div className="array-box">{userFile.amount.work} €</div>
              <div className="array-box">{userFile.amount.notary} €</div>
              <div className="array-box">{userFile.amount.project} €</div>
            </div>
          </div>
          {/* Link that will send back the admin to the userFiles array, while calling the function deleteUserFile to delete the file from the databse */}
          <Link to="/BackOffice" style={{ textDecoration: "none" }}>
            <span
              onClick={() => {
                deleteUserFile();
              }}
            >
              Detruire ce Dossier
            </span>
          </Link>
        </>
      )}
    </>
  );
}
export default UserFile;
