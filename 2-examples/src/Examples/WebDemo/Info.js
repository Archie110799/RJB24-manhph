import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Info(props) {
  const { id } = useParams();
  const [user, setUser] = useState({});
  useEffect(() => {
    fetch(`https://632878a09a053ff9aab8cf03.mockapi.io/api/v1/users/${id}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUser(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return <div>{user?.name}</div>;
}
