import React, { useEffect, useState } from 'react'

// Render list Users dung chung web cua minh
export default function Home(props) {
  const {user} =props
  const [listUser, setListUser] = useState([])

  const getUsersAsync = async () => {
    try {
      const url = 'https://63284e93a2e90dab7bdd0fd7.mockapi.io/api/v1/users';
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      // Xử lý kết quả JSON ở đây
      const json = await response.json();
      setListUser(json)
      console.log(json);
    } catch (error) {
      // Nếu có lỗi
      console.error(error);
    }
  };

  useEffect(()=>{
    // CALL API  get list Users
    // setListUser = response API
    getUsersAsync()

  },[])

  return (
    // listUser = [] -> 1
    // listUser = response API -> 2
    <table className="table table-light table-responsive table-striped table-hover w-75 m-auto border border-secondary">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {listUser.map((user) => {
            return (
              <tr key={user?.id}>
                <th scope="row">{user?.id}</th>
                <td>{user?.name}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => console.log(user)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
    </table>
  )
}
