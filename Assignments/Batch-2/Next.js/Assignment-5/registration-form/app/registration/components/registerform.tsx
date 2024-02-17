"use client"

import { useState } from "react";
import DisplayForm from "./registerdisplay"
import { OnChangeEventType, contactTypes } from "@/app/commontypes";
import * as yup from "yup";



export default function RegistrationForm() {

  const [contactInfo, setContactInfo] = useState<contactTypes>({

    name: "",
    email: "",
    phoneNumber: 0,

  })

  const [errors, setError] = useState<string[]>([])
  const registerFormSchema = yup.object().shape({
    name: yup.string().required("Name is required."),
    email: yup.string().email("Invalid email address.").required("Email is required."),
    phonenumber: yup.number()

  })

  const [contactList, setcontactList] = useState<contactTypes[]>([])

  const OnChangeHandler = (e: OnChangeEventType) => {
    let userDetails = {
      ...contactInfo,
      [e.target.name]: e.target.value
    }
    setContactInfo(userDetails)
  }



  const onClickHandler = async () => {

    try {

      const result = await registerFormSchema.validate(contactInfo)
      console.log(result)

      if (!result) {
        return
      }

      let newContactList: contactTypes[] = [...contactList, contactInfo]
      setcontactList(newContactList)
      console.log("newContactList", newContactList);

      setError([])
      setContactInfo({
        name: "",
        email: "",
        phoneNumber: 0,
      })

    } catch (err: any) {

      setError(err.errors || ["An error occurred."]);
      console.error("Error:", err.errors || err.message);
    }


  }

  return (

    <>
      <div className="pt-5 pb-5 min-h-screen flex items-center justify-center bg-lime-950">
        <div className="max-w-md mx-auto bg-white rounded shadow-md overflow-hidden">
          <div className="py-4 px-6 bg-blue-500 text-white">
            <h3 className="text-1xl font-bold">Registration Form</h3>
          </div>
          <div className="p-6">


            <div className="mb-4">

              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                Full Name
              </label>
              <input

                type="text"
                id="name"
                name="name"
                value={contactInfo.name}
                onChange={OnChangeHandler}
                className="w-full px-3 py-2 border rounded shadow text-gray-700 appearance-none focus:outline-none focus:shadow-outline"
                placeholder="John Doe"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                value={contactInfo.email}
                type="email"
                id="email"
                name="email"
                onChange={OnChangeHandler}
                className="w-full px-3 py-2 border rounded shadow text-gray-700 appearance-none focus:outline-none focus:shadow-outline"
                placeholder="john@example.com"
                required
              />
            </div>

            {/* Phone Number */}
            <div className="mb-4">
              <label htmlFor="phoneNumber" className="block text-gray-700 text-sm font-bold mb-2">
                Phone
              </label>
              <input

                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={contactInfo.phoneNumber}
                onChange={OnChangeHandler}
                className="w-full px-3 py-2 border rounded shadow text-gray-700 appearance-none focus:outline-none focus:shadow-outline"
                placeholder="123-456-7890"
                required
              />
            </div>



            {/* Gender Checkbox */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Gender</label>
              <div className="flex items-center">
                <label className="mr-4">
                  <input
                    type="checkbox"
                    name="gender"
                    value="male"
                  // checked={formData.gender === 'male'}
                  // onChange={handleChange}
                  />
                  <span className="ml-2 text-gray-700">Male</span>
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="gender"
                    value="female"
                  // checked={formData.gender === 'female'}
                  // onChange={handleChange}
                  />
                  <span className="ml-2 text-gray-700">Female</span>
                </label>
                <label className="ml-4">
                  <input
                    type="checkbox"
                    name="gender"
                    value="trans"
                  // checked={formData.gender === 'trans'}
                  // onChange={handleChange}
                  />
                  <span className="ml-2 text-gray-700">Trans</span>
                </label>
              </div>
            </div>

            {/* Profession Dropdown */}
            <div className="mb-4">
              <label htmlFor="profession" className="block text-gray-700 text-sm font-bold mb-2">
                Profession
              </label>
              <select
                id="profession"
                name="profession"
                // value={formData.profession}
                // onChange={handleChange}
                className="w-full px-3 py-2 border rounded shadow text-gray-700 appearance-none focus:outline-none focus:shadow-outline"
                required
              >
                <option value="">Select Profession</option>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="teacher">Teacher</option>
                <option value="doctor">Doctor</option>
                {/* Add more options as needed */}
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
                Set Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                // value={formData.fullName}
                // onChange={handleChange}
                className="w-full px-3 py-2 border rounded shadow text-gray-700 appearance-none focus:outline-none focus:shadow-outline"
                placeholder="Username"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                Set Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                // value={formData.password}
                // onChange={handleChange}
                className="w-full px-3 py-2 border rounded shadow text-gray-700 appearance-none focus:outline-none focus:shadow-outline"
                placeholder="********"
                required
              />
            </div>

            {/* Description Text Area */}
            <div className="mb-4">
              <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                // value={formData.description}
                // onChange={handleChange}
                className="w-full px-3 py-2 border rounded shadow text-gray-700 appearance-none focus:outline-none focus:shadow-outline"
                rows={4}
                placeholder="Tell us about yourself..."
              />
            </div>

            {errors.map((item) => {
              return (
                <div style={{ color: "red" }}>
                  <h1>{item}</h1>
                </div>
              )
            })}
            <div className="mb-6">
              <button
                onClick={onClickHandler}
                type="submit"
                className="w-full bg-blue-500 text-white p-3 rounded focus:outline-none focus:shadow-outline"          >
                Register
              </button>

            </div>
          </div>
        </div>
      </div>

      <div>
        <DisplayForm contactData={contactList} />
      </div>
    </>
  );
}




// divided into 2 columns
// <div className="grid grid-cols-2 gap-4">

// </div>
// {/* Column 1 */}
// <div>

// </div>
// {/* Column 2 */}
// <div>

// </div>
// {/* Button */}
// <div>

// </div>