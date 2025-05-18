import React from 'react';
import Swal from 'sweetalert2';



const AddCoffe = () => {
    const handleAddcoffee = (e) => {
        e.preventDefault()
        const form = e.target;
        const formdata = new FormData(form);

        const newCoffee = Object.fromEntries(formdata.entries())


        //add to db
        fetch('http://localhost:3000/coffees', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newCoffee)

        }).then(res => res.json()).then(data => {


            if(data.insertedId) {
                
                Swal.fire({
                    title: "Coffee added successfully!",
                    icon: "success",
                    draggable: true
                });
                form.reset()
            }
        })

    }
    return (
        <div className='p-24'>
            <div className='p-12 text-center space-y-3'>
                <h1 className='text-6xl'>Add Coffee</h1>
                <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>
            <form onSubmit={handleAddcoffee}>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-6'>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                        <label className="label">Name</label>
                        <input type="text" className="input w-full" placeholder="Enter coffee name" name='name' />
                    </fieldset>


                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                        <label className="label">Price</label>
                        <input type="text" className="input w-full" placeholder="Enter coffee price" name='price' />
                    </fieldset>


                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                        <label className="label">Supplier</label>
                        <input type="text" className="input w-full" placeholder="Enter coffee supplier" name='supplier' />
                    </fieldset>


                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                        <label className="label">Taste</label>
                        <input type="text" className="input w-full" placeholder="Enter coffee taste" name='taste' />
                    </fieldset>


                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                        <label className="label">Category</label>
                        <input type="text" className="input w-full" placeholder="Enter coffee category" name='category' />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                        <label className="label">Details</label>
                        <input type="text" className="input w-full" placeholder="Enter coffee details" name='details' />
                    </fieldset>





                </div>

                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4 my-6">
                    <label className="label">Photo</label>
                    <input type="text" className="input w-full" placeholder="Enter photo URL" name='photo' />
                </fieldset>

                <input className='btn btn-block rounded-4xl' type="submit" value="Add Coffee" />
            </form>
        </div>
    );
};

export default AddCoffe;