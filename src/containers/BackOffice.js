import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function BackOffice() {
  const [isLoading, setIsLoading] = useState(true);
  const [userFiles, setUserFiles] = useState([]);
  console.log(userFiles);
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
      <Link to="/">
        <span className="admin">HOME</span>
      </Link>
      {isLoading === true ? (
        <p>Chargement en cours....</p>
      ) : (
        <>
          {userFiles.map((files, index) => {
            return (
              <Link to="/userFile" key={index}>
                <div className="userFiles-array">{files.fileId}</div>
              </Link>
            );
          })}
        </>
      )}
    </div>
  );
}
export default BackOffice;
