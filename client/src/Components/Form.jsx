import React from 'react'

const Form = () => {
  return (
    <div className="flex p-8">
      <div className="w-2/3 mr-4">
        <h2 className="text-2xl font-bold mb-4">Personal Details</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Name (Required)</label>
            <input type="text" className="mt-1 p-2 border border-gray-300 rounded w-full" placeholder="Enter Name" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Date Of Birth (Required)</label>
            <input type="text" className="mt-1 p-2 border border-gray-300 rounded w-full" placeholder="DD/MM/YYYY" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Place Of Birth (Required)</label>
            <input type="text" className="mt-1 p-2 border border-gray-300 rounded w-full" placeholder="Enter Place Of Birth" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Time Of Birth</label>
            <input type="text" className="mt-1 p-2 border border-gray-300 rounded w-full" placeholder="hh:mm aa" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Rashi</label>
            <input type="text" className="mt-1 p-2 border border-gray-300 rounded w-full" placeholder="Enter Rashi" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Nakshatra</label>
            <input type="text" className="mt-1 p-2 border border-gray-300 rounded w-full" placeholder="Enter Nakshatra" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Complexion</label>
            <input type="text" className="mt-1 p-2 border border-gray-300 rounded w-full" placeholder="Enter Complexion" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Height</label>
            <input type="text" className="mt-1 p-2 border border-gray-300 rounded w-full" placeholder="Enter Height" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Gotra</label>
            <input type="text" className="mt-1 p-2 border border-gray-300 rounded w-full" placeholder="Enter Gotra" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Bachelors</label>
            <input type="text" className="mt-1 p-2 border border-gray-300 rounded w-full" placeholder="Enter Bachelors" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Work</label>
            <input type="text" className="mt-1 p-2 border border-gray-300 rounded w-full" placeholder="Enter Work" />
          </div>
          <button className="text-blue-500">+ Add More Fields</button>

          <h2 className="text-2xl font-bold mt-8 mb-4">Family Details</h2>
          <div className="mb-4">
            <label className="block text-gray-700">Father's Name</label>
            <input type="text" className="mt-1 p-2 border border-gray-300 rounded w-full" placeholder="Enter Father's Name" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Father's Occupation</label>
            <input type="text" className="mt-1 p-2 border border-gray-300 rounded w-full" placeholder="Enter Father's Occupation" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Mother's Name</label>
            <input type="text" className="mt-1 p-2 border border-gray-300 rounded w-full" placeholder="Enter Mother's Name" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Mother's Occupation</label>
            <input type="text" className="mt-1 p-2 border border-gray-300 rounded w-full" placeholder="Enter Mother's Occupation" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Siblings</label>
            <input type="text" className="mt-1 p-2 border border-gray-300 rounded w-full" placeholder="Enter Siblings" />
          </div>
          <button className="text-blue-500">+ Add More Fields</button>

          <h2 className="text-2xl font-bold mt-8 mb-4">Contact Details</h2>
          <div className="mb-4">
            <label className="block text-gray-700">Contact Person</label>
            <input type="text" className="mt-1 p-2 border border-gray-300 rounded w-full" placeholder="Enter Contact Person" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Contact Number</label>
            <input type="text" className="mt-1 p-2 border border-gray-300 rounded w-full" placeholder="Enter Contact Number" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email ID</label>
            <input type="email" className="mt-1 p-2 border border-gray-300 rounded w-full" placeholder="Enter Email ID" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Residential Address</label>
            <input type="text" className="mt-1 p-2 border border-gray-300 rounded w-full" placeholder="Enter Residential Address" />
          </div>
          <button className="text-blue-500">+ Add More Fields</button>
        </form>
      </div>
      <div className="w-1/3 flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4">Upload Image</h2>
        <input type="file" className="mt-1 p-2 border border-gray-300 rounded" />
      </div>
    </div>
  )
}

export default Form;
