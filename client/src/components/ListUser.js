import React, { Fragment, useEffect, useState } from "react";

import EditUser from "./EditUser";

const ListUser = () => {
  const [users, setUsers] = useState([]);

  //delete todo function

  const deleteUser = async id => {
    try {
      const deleteUser = await fetch(`http://localhost:5000/user/${id}`, {
        method: "DELETE"
      });

      setUsers(users.filter(user => user.id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getuser = async () => {
    try {
      const response = await fetch("http://localhost:5000/user");
      const jsonData = await response.json();

      setUsers(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getuser();
  }, []);

  console.log(users);

  return (
    <Fragment>
      {" "}
      <table class="table mt-5 text-center">
        <thead>
          <tr>
            <th>Email</th>
            <th>Offer Taken</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/*<tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr> */}
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.email}</td>
              <td>{user.offerTaken}</td>
              <td>
                <EditUser user={user} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListUser;
