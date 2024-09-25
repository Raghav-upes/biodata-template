import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Form = () => {
  const [dob, setDob] = useState(null);
  const [timeOfBirth, setTimeOfBirth] = useState(null);
  const [name, setName] = useState('');
  const [placeOfBirth, setPlaceOfBirth] = useState('');
  const [rashi, setRashi] = useState('');
  const [nakshatra, setNakshatra] = useState('');
  const [complexion, setComplexion] = useState('');
  const [height, setHeight] = useState('');
  const [gotra, setGotra] = useState('');
  const [bachelors, setBachelors] = useState('');
  const [work, setWork] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [motherName, setMotherName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
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
      personalDetails: {
        name,
        dob,
        timeOfBirth,
        placeOfBirth,
        rashi,
        nakshatra,
        complexion,
        height,
        gotra,
        bachelors,
        work,
      },
      familyDetails: {
        fatherName,
        motherName,
      },
      contactDetails: {
        contactPerson,
        contactNumber,
        email,
        address,
      },
      additionalFields,
    };

    // Store the complete form data in localStorage
    localStorage.setItem('formData', JSON.stringify(formData));

    console.log('Complete form data saved to localStorage:', formData);
  };

  return (
    <div className="flex flex-col lg:flex-row p-4 lg:p-8 bg-gray-100 min-h-screen lg:px-36">
      <div className="w-full lg:w-2/3 mr-0 lg:mr-4 bg-white p-4 lg:p-8 rounded-lg shadow-lg mb-8 lg:mb-0">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Personal Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Name <span className="text-red-500">*</span></label>
            <div className="flex items-center">
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
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
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Place Of Birth <span className="text-red-500">*</span></label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Enter Place Of Birth"
              value={placeOfBirth}
              onChange={(e) => setPlaceOfBirth(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Time Of Birth</label>
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
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Rashi</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Enter Rashi"
              value={rashi}
              onChange={(e) => setRashi(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Nakshatra</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Enter Nakshatra"
              value={nakshatra}
              onChange={(e) => setNakshatra(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Complexion</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Enter Complexion"
              value={complexion}
              onChange={(e) => setComplexion(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Height</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Enter Height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Gotra</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Enter Gotra"
              value={gotra}
              onChange={(e) => setGotra(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Bachelors</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Enter Bachelors"
              value={bachelors}
              onChange={(e) => setBachelors(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Work</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Enter Work"
              value={work}
              onChange={(e) => setWork(e.target.value)}
            />
          </div>
          
          <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-6">Family Details</h2>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Father's Name</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Enter Father's Name"
              value={fatherName}
              onChange={(e) => setFatherName(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Mother's Name</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Enter Mother's Name"
              value={motherName}
              onChange={(e) => setMotherName(e.target.value)}
            />
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-6">Contact Details</h2>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Contact Person</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Enter Contact Person"
              value={contactPerson}
              onChange={(e) => setContactPerson(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Contact Number</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Enter Contact Number"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Address</label>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Enter Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <button type="submit" className="bg-blue-500 text-white p-3 rounded-lg w-full">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
