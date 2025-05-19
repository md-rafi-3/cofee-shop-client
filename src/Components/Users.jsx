import React, { useContext, useState } from 'react';
import { CiEdit } from 'react-icons/ci';
import { FaEye } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { Link, useLoaderData } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../Context/AuthContext';

const Users = () => {
  const {deleteUsers}=useContext(AuthContext)
  const initialUsers = useLoaderData()
  const [users, setUsers] = useState(initialUsers);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

        fetch(`http://localhost:3000/users/${id}`, {
          method: "DELETE"
        }).then(res => res.json()).then(data => {
          if (data.deletedCount) {
            
            // to do delete user form firebase
            deleteUsers().then(()=>{}).catch((error) => {
              console.log(error)
            })

            const reminingUser = users.filter(user => user._id !== id);
            setUsers(reminingUser)
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });

          }
        })



      }
    });
  }

  return (
    <div>
      <h1 className='text-3xl'>Users:{initialUsers.length}</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  No.
                </label>
              </th>
              <th>Name</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              users.map((user, index) => (<tr key={user._id}>
                <th>
                  <label>
                    {index + 1}
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={user.photo}
                          alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.name}</div>
                      <div className="text-sm opacity-50">{user.address}</div>
                    </div>
                  </div>
                </td>
                <td>{user.phone}

                </td>
                <td>{user.email}</td>
                <th>
                  <Link > <button className='btn '><FaEye /></button></Link>
                  <Link > <button className="btn"> <CiEdit /></button></Link>

                  <button onClick={() => handleDelete(user._id)} className="btn"><MdDelete /></button>
                </th>
              </tr>))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;