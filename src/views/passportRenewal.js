import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { AiOutlineUser, AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { MdLocationCity ,MdOutlineHomeRepairService } from "react-icons/md";
import axios from 'axios';
import "../styles/servicesStyle.css";

const PassportRenewalForm = () => {
  const [serviceType, setServiceType] = useState('');
  const [numberOfPassports, setNumberOfPassports] = useState(1);
  const [country, setCountry] = useState('');
  const [applicantName, setApplicantName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [countries, setCountries] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    console.log('Form submitted!');
  };

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all")
      .then(response => {
        const countriesList = response.data.map(country => country.name.common);
        setCountries(countriesList);
      })
      .catch(error => {
        console.log("Failed to load countries");
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="container fillFormContainer" style={{ marginTop: "10vh" }}>
        <h2 className='specialText fs-3 text-md-center'>Passport Renewal Service</h2>
        <form onSubmit={handleSubmit} className='fillForm'>
         
          <div className="form-group mt-2">
            <label htmlFor="numberOfPassports">Number of Passports</label>
            <input
              type="number"
              min={1}
              className="form-control"
              id="numberOfPassports"
              placeholder="Enter Number of Passports"
              value={numberOfPassports}
              onChange={(e) => setNumberOfPassports(e.target.value)}
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="country"><MdLocationCity className='specialText fs-3'/> Country</label>
            <select
              className="form-control"
              id="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <option value="">Select Country</option>
              {countries.map((country, index) => (
                <option key={index} value={country}>{country}</option>
              ))}
            </select>
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
            <h1 className='serviceFee fs-4'>Service Fee</h1>
            <p className='priceText specialText fs-5'>259 Saudi Riyal</p>
          </div>
          <div className="container d-flex justify-content-center mt-3">
            <button type="submit" className="btn btn-primary btn-success">Submit Demand <IoCheckmarkDoneSharp className='fs-4' /></button>
          </div>
        </form>
      </div>
    </>
  );
};

export default PassportRenewalForm;
