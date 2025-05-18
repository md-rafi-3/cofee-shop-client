import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const { _id, name, supplier, taste, category, details, photo, price } = useLoaderData();
    const handleupdateCoffee = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updateCoffee = Object.fromEntries(formData.entries());
        console.log(updateCoffee)
        //  send updated coffe  to db
        fetch(`http://localhost:3000/coffees/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateCoffee)
        }).then(res => res.json()).then(data => {

            if (data.modifiedCount) {
                Swal.fire({
                    title: "Coffee added successfully!",
                    icon: "success",
                    draggable: true
                });
            }
        })
    }
    return (
        <div className='p-24'>
            <div className='p-12 text-center space-y-3'>
                <h1 className='text-6xl'>Update Coffee</h1>

            </div>
            <form onSubmit={handleupdateCoffee}>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-6'>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                        <label className="label">Name</label>
                        <input type="text" className="input w-full" placeholder="Enter coffee name" name='name' defaultValue={name} />
                    </fieldset>


                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                        <label className="label">Price</label>
                        <input type="text" className="input w-full" placeholder="Enter coffee price" name='price' defaultValue={price} />
                    </fieldset>


                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                        <label className="label">Supplier</label>
                        <input type="text" className="input w-full" defaultValue={supplier} placeholder="Enter coffee supplier" name='supplier' />
                    </fieldset>


                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                        <label className="label">Taste</label>
                        <input type="text" className="input w-full" defaultValue={taste} placeholder="Enter coffee taste" name='taste' />
                    </fieldset>


                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                        <label className="label">Category</label>
                        <input type="text" className="input w-full" defaultValue={category} placeholder="Enter coffee category" name='category' />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                        <label className="label">Details</label>
                        <input type="text" className="input w-full" defaultValue={details} placeholder="Enter coffee details" name='details' />
                    </fieldset>





                </div>

                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4 my-6">
                    <label className="label">Photo</label>
                    <input type="text" className="input w-full" defaultValue={photo} placeholder="Enter photo URL" name='photo' />
                </fieldset>

                <input className='btn btn-block rounded-4xl' type="submit" value="Add Coffee" />
            </form>
        </div>
    );
};

export default UpdateCoffee;