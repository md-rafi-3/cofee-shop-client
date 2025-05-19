import React from 'react';
import { CiEdit } from 'react-icons/ci';
import { FaEye } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee ,setCoffees,coffees}) => {
  const { _id, name, supplier,  photo, price } = coffee;


  const handleDelete=(_id)=>{
    console.log(_id)

    
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
    // start deleteing
fetch(`http://localhost:3000/coffees/${_id}`,{
method:"DELETE",

}).then(res=>res.json()).then(data=>{
  console.log("deleted data",data)
  if(data.deletedCount){
       Swal.fire({
      title: "Deleted!",
      text: "Your Coffee has been deleted.",
      icon: "success"
    });

    // removed coffee form the ui
    const reminingCoffees=coffees.filter(cof=>cof._id!==_id);
    setCoffees(reminingCoffees)
  }
})    
    
    
   
  }
});
  }

  return (
    <div className='w-full max-w-md p-4 bg-base-200 shadow rounded'>
      {/* main container */}
      <div className='flex items-start gap-6 h-full '>
        
        {/* image */}
        <div>
          <img className='w-28' src={photo} alt={name} />
        </div>

        {/* content + icons */}
        <div className='flex flex-1 justify-between items-start h-full'>
          {/* text content */}
          <div className='flex flex-col flex-1'>
            <h1 className='text-xl font-bold'>{name}</h1>
            <p className='text-lg font-semibold'>Supplier: {supplier}</p>
            <p className='text-lg font-semibold'>Price: {price}tk</p>
            {/* make it grow to push buttons down */}
            <div className='flex-1'></div>
          </div>

          {/* buttons */}
          <div className='flex flex-col justify-end items-center gap-4'>
           <Link to={`/coffee/${_id}`}> <button className='btn '><FaEye  /></button></Link>
          <Link to={`updateCoffee/${_id}`}> <button className="btn"> <CiEdit /></button></Link>
           
            <button onClick={()=>handleDelete(_id)} className="btn"><MdDelete  /></button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CoffeeCard;
