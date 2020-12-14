import react, { useState, useEffect } from "react";
import "./App.css";
import { Card, Avatar } from "@material-ui/core";

function App() {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=5")
      .then((response) => response.json())
      .then((data) => setUserData(data.results));
  }, []);
  return (
    <div className="app__profile">
      <h1> Random List of 5 users</h1>
      {userData.length > 0 ? (
        userData.map((user, index) => (
          <Card className="card__user" key={index}>
            <Avatar src={user.picture.medium} />
            <p>{user.email}</p>
            <p>{user.location.country}</p>
            <p>{user.name.first}</p>
            <p>{user.cell}</p>
          </Card>
        ))
      ) : (
        <> </>
      )}
    </div>
  );
}

export default App;
