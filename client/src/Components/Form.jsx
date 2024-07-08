import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Form = () => {
  const [dob, setDob] = useState(null);
  const [timeOfBirth, setTimeOfBirth] = useState(null);
  const [additionalFields, setAdditionalFields] = useState([]);

  const handleAddField = (section) => {
    setAdditionalFields([...additionalFields, { section, fieldName: '', fieldValue: '' }]);
  };

  const handleFieldChange = (index, fieldName, value) => {
    const updatedFields = [...additionalFields];
    updatedFields[index][fieldName] = value;
    setAdditionalFields(updatedFields);
  };

  const handleDeleteField = (index) => {
    const updatedFields = [...additionalFields];
    updatedFields.splice(index, 1);
    setAdditionalFields(updatedFields);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      dob,
      timeOfBirth,
      additionalFields,
    };
    console.log(formData);
  };

  return (
    <div className="flex flex-col lg:flex-row p-4 lg:p-8 bg-gray-100 min-h-screen lg:px-36">
      <div className="w-full lg:w-2/3 mr-0 lg:mr-4 bg-white p-4 lg:p-8 rounded-lg shadow-lg mb-8 lg:mb-0">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Personal Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Name <span className="text-red-500">*</span></label>
            <div className="flex items-center">
              <input type="text" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Enter Name" required />
              <button type="button" className="text-red-500 ml-2"><i className="fas fa-minus"></i></button>
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Date Of Birth <span className="text-red-500">*</span></label>
            <div className="flex items-center">
              <DatePicker
                selected={dob}
                onChange={(date) => setDob(date)}
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholderText="DD/MM/YYYY"
                dateFormat="dd/MM/yyyy"
              />
              <button type="button" className="text-red-500 ml-2"><i className="fas fa-minus"></i></button>
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Place Of Birth <span className="text-red-500">*</span></label>
            <div className="flex items-center">
              <input type="text" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Enter Place Of Birth" required />
              <button type="button" className="text-red-500 ml-2"><i className="fas fa-minus"></i></button>
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Time Of Birth</label>
            <div className="flex items-center">
              <DatePicker
                selected={timeOfBirth}
                onChange={(time) => setTimeOfBirth(time)}
                className="w-full p-3 border border-gray-300 rounded-lg"
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="hh:mm aa"
                placeholderText="hh:mm aa"
              />
              <button type="button" className="text-red-500 ml-2"><i className="fas fa-minus"></i></button>
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Rashi</label>
            <div className="flex items-center">
              <input type="text" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Enter Rashi" />
              <button type="button" className="text-red-500 ml-2"><i className="fas fa-minus"></i></button>
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Nakshatra</label>
            <div className="flex items-center">
              <input type="text" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Enter Nakshatra" />
              <button type="button" className="text-red-500 ml-2"><i className="fas fa-minus"></i></button>
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Complexion</label>
            <div className="flex items-center">
              <input type="text" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Enter Complexion" />
              <button type="button" className="text-red-500 ml-2"><i className="fas fa-minus"></i></button>
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Height</label>
            <div className="flex items-center">
              <input type="text" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Enter Height" />
              <button type="button" className="text-red-500 ml-2"><i className="fas fa-minus"></i></button>
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Gotra</label>
            <div className="flex items-center">
              <input type="text" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Enter Gotra" />
              <button type="button" className="text-red-500 ml-2"><i className="fas fa-minus"></i></button>
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Bachelors</label>
            <div className="flex items-center">
              <input type="text" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Enter Bachelors" />
              <button type="button" className="text-red-500 ml-2"><i className="fas fa-minus"></i></button>
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Work</label>
            <div className="flex items-center">
              <input type="text" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Enter Work" />
              <button type="button" className="text-red-500 ml-2"><i className="fas fa-minus"></i></button>
            </div>
          </div>
          {additionalFields
            .filter(field => field.section === 'Personal')
            .map((field, index) => (
              <div key={index} className="mb-6">
                <label className="block text-gray-700 mb-2">Field Name</label>
                <div className="flex items-center">
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-lg mb-2"
                    placeholder="Enter Field Name"
                    value={field.fieldName}
                    onChange={(e) => handleFieldChange(index, 'fieldName', e.target.value)}
                  />
                  <button type="button" className="text-red-500 ml-2" onClick={() => handleDeleteField(index)}>
                    <i className="fas fa-minus"></i>
                  </button>
                </div>
                <label className="block text-gray-700 mb-2">Field Value</label>
                <div className="flex items-center">
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    placeholder="Enter Field Value"
                    value={field.fieldValue}
                    onChange={(e) => handleFieldChange(index, 'fieldValue', e.target.value)}
                  />
                  <button type="button" className="text-red-500 ml-2" onClick={() => handleDeleteField(index)}>
                    <i className="fas fa-minus"></i>
                  </button>
                </div>
              </div>
            ))}
          <button type="button" className="text-blue-500 mb-6 flex items-center" onClick={() => handleAddField('Personal')}>
            <i className="fas fa-plus mr-2"></i> Add More Fields
          </button>

          <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-6">Family Details</h2>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Father's Name</label>
            <div className="flex items-center">
              <input type="text" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Enter Father's Name" />
              <button type="button" className="text-red-500 ml-2"><i className="fas fa-minus"></i></button>
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Mother's Name</label>
            <div className="flex items-center">
              <input type="text" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Enter Mother's Name" />
              <button type="button" className="text-red-500 ml-2"><i className="fas fa-minus"></i></button>
            </div>
          </div>
          {additionalFields
            .filter(field => field.section === 'Family')
            .map((field, index) => (
              <div key={index} className="mb-6">
                <label className="block text-gray-700 mb-2">Field Name</label>
                <div className="flex items-center">
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-lg mb-2"
                    placeholder="Enter Field Name"
                    value={field.fieldName}
                    onChange={(e) => handleFieldChange(index, 'fieldName', e.target.value)}
                  />
                  <button type="button" className="text-red-500 ml-2" onClick={() => handleDeleteField(index)}>
                    <i className="fas fa-minus"></i>
                  </button>
                </div>
                <label className="block text-gray-700 mb-2">Field Value</label>
                <div className="flex items-center">
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    placeholder="Enter Field Value"
                    value={field.fieldValue}
                    onChange={(e) => handleFieldChange(index, 'fieldValue', e.target.value)}
                  />
                  <button type="button" className="text-red-500 ml-2" onClick={() => handleDeleteField(index)}>
                    <i className="fas fa-minus"></i>
                  </button>
                </div>
              </div>
            ))}
          <button type="button" className="text-blue-500 mb-6 flex items-center" onClick={() => handleAddField('Family')}>
            <i className="fas fa-plus mr-2"></i> Add More Fields
          </button>

          <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-6">Contact Details</h2>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Contact Person</label>
            <div className="flex items-center">
              <input type="text" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Enter Contact Person" />
              <button type="button" className="text-red-500 ml-2"><i className="fas fa-minus"></i></button>
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Contact Number</label>
            <div className="flex items-center">
              <input type="text" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Enter Contact Number" />
              <button type="button" className="text-red-500 ml-2"><i className="fas fa-minus"></i></button>
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Email ID</label>
            <div className="flex items-center">
              <input type="email" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Enter Email ID" />
              <button type="button" className="text-red-500 ml-2"><i className="fas fa-minus"></i></button>
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Residential Address</label>
            <div className="flex items-center">
              <input type="text" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Enter Residential Address" />
              <button type="button" className="text-red-500 ml-2"><i className="fas fa-minus"></i></button>
            </div>
          </div>
          {additionalFields
            .filter(field => field.section === 'Contact')
            .map((field, index) => (
              <div key={index} className="mb-6">
                <label className="block text-gray-700 mb-2">Field Name</label>
                <div className="flex items-center">
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-lg mb-2"
                    placeholder="Enter Field Name"
                    value={field.fieldName}
                    onChange={(e) => handleFieldChange(index, 'fieldName', e.target.value)}
                  />
                  <button type="button" className="text-red-500 ml-2" onClick={() => handleDeleteField(index)}>
                    <i className="fas fa-minus"></i>
                  </button>
                </div>
                <label className="block text-gray-700 mb-2">Field Value</label>
                <div className="flex items-center">
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    placeholder="Enter Field Value"
                    value={field.fieldValue}
                    onChange={(e) => handleFieldChange(index, 'fieldValue', e.target.value)}
                  />
                  <button type="button" className="text-red-500 ml-2" onClick={() => handleDeleteField(index)}>
                    <i className="fas fa-minus"></i>
                  </button>
                </div>
              </div>
            ))}
          <button type="button" className="text-blue-500 mb-6 flex items-center" onClick={() => handleAddField('Contact')}>
            <i className="fas fa-plus mr-2"></i> Add More Fields
          </button>

          <button type="submit" className="text-white bg-blue-500 p-3 rounded-lg">Submit</button>
        </form>
      </div>

      <div className="w-full lg:w-1/3 bg-white p-4 lg:p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Upload Image</h2>
        <input type="file" className="mt-1 p-3 border border-gray-300 rounded-lg w-full" />
      </div>
    </div>
  );
};

export default Form;
