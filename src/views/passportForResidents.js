import React, { useState } from 'react';
import Navbar from '../components/navbar';
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { AiOutlineUser, AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import "../styles/servicesStyle.css";

const ChildrenResidencyPermitForm = () => {
  const [serviceType, setServiceType] = useState('');
  const [passportCount, setPassportCount] = useState(1);
  const [country, setCountry] = useState('');
  const [applicantName, setApplicantName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    console.log('Form submitted!');
  };

  return (
    <>
      <Navbar />
      <div className="container fillFormContainer" style={{ marginTop: "10vh" }}>
        <h2 className='specialText fs-3 text-md-center'>Children Residency Permit Issuance</h2>
        <form onSubmit={handleSubmit} className='fillForm'>
        
       
          <div className="form-group mt-2">
            <label htmlFor="passportCount">Number of Passports</label>
            <input
              type="number"
              className="form-control"
              id="passportCount"
              placeholder="Enter Number of Passports"
              value={passportCount}
              onChange={(e) => setPassportCount(e.target.value)}
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="country">Select Resident Country</label>
            <input
              type="text"
              className="form-control"
              id="country"
              placeholder="Enter Resident Country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="applicantName"><AiOutlineUser className='specialText fs-3'/> Applicant Name</label>
            <input
              type="text"
              className="form-control"
              id="applicantName"
              placeholder="Enter Applicant Name"
              value={applicantName}
              onChange={(e) => setApplicantName(e.target.value)}
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="phoneNumber"><AiOutlinePhone className='specialText fs-3'/> Phone Number</label>
            <input
              type="tel"
              className="form-control"
              id="phoneNumber"
              placeholder="Enter Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="email"><AiOutlineMail className='specialText fs-3'/> Email Address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="container d-flex justify-content-center flex-column align-items-center mt-2">
            <h1 className='serviceFee fs-4'>Service Cost</h1>
            <p className='priceText specialText fs-5'>99 Saudi Riyals</p>
            <p className='priceNotes fs-6'>(Price includes: Service fees, appointment booking, form filling. Does not include embassy fees. Passport issuance inside the embassy usually takes 7 to 30 working days)</p>
          </div>
          <div className="container d-flex justify-content-center mt-3">
            <button type="submit" className="btn btn-primary btn-success">Submit Request <IoCheckmarkDoneSharp className='fs-4' /></button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ChildrenResidencyPermitForm;
