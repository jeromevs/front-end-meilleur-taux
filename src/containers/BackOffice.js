import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function BackOffice() {
  const [isLoading, setIsLoading] = useState(true);
  const [userFiles, setUserFiles] = useState([]);
  // console.log(userFiles);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://meilleurtaux.herokuapp.com/userProjects"
        );
        setUserFiles(response.data);

        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="backoffice">
      <Link to="/" style={{ textDecoration: "none" }}>
        <span className="admin">BACK TO HOME PAGE</span>
      </Link>
      <div className="userFiles-array">
        <div className="array-element">Num dossier</div>
        <div className="array-element">Type de bien</div>
        {/* <div className="array-element">Etat du bien</div>
        <div className="array-element">Situation Emprunteur</div> */}
        <div className="array-element">Pays</div>
        {/* <div className="array-element">Ville</div>
        <div className="array-element">Montant acquisition</div> */}
        <div className="array-element">Montant Projet</div>
      </div>

      {isLoading === true ? (
        <p>Chargement en cours....</p>
      ) : (
        <>
          {userFiles.map((userProject, index) => {
            return (
              <Link
                style={{ textDecoration: "none" }}
                to={"/userFile/" + userProject.fileId}
                key={index}
              >
                <div className="userFiles-array">
                  <div className="array-element">{userProject.fileId}</div>
                  <div className="array-element">{userProject.typeGood}</div>
                  {/* <div className="array-element">{userProject.stateGood}</div>
                  <div className="array-element">
                    {userProject.userSituation}
                  </div> */}
                  <div className="array-element">
                    {userProject.locationGood.country}
                  </div>
                  {/* <div className="array-element">
                    {userProject.locationGood.city}
                  </div>
                  <div className="array-element">{userProject.amount.good}</div> */}
                  <div className="array-element">
                    {userProject.amount.project}
                  </div>
                </div>
              </Link>
            );
          })}
        </>
      )}
    </div>
  );
}
export default BackOffice;
