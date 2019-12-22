import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
//page to display a list (array form) of all the userfiles in the database
function BackOffice() {
  const [isLoading, setIsLoading] = useState(true);
  const [userFiles, setUserFiles] = useState([]);
  // fetching all the files stored in the database
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://meilleurtaux.herokuapp.com/userProjects"
        );
        // fills the answers in an array that will be used to display the basic infos of the files
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

        <div className="array-element">Pays</div>

        <div className="array-element">Montant Projet</div>
      </div>

      {isLoading === true ? (
        <p>Chargement en cours....</p>
      ) : (
        <>
          {/* making a map of the array with all the datas fetched from database  */}
          {/*  a Link on each element of the array will link to a new page to displays all the datas from the files */}
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

                  <div className="array-element">
                    {userProject.locationGood.country}
                  </div>

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
