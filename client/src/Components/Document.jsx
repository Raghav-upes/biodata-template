import React, { useEffect, useRef, useState } from "react";
import Man from "../Images/Man.png";

export default function Document() {
  const componentRef = useRef(null);
  const [scale, setScale] = useState(1);
  const [formData, setFormData] = useState(null); // State to hold form data

  useEffect(() => {
    // Retrieve form data from localStorage
    const savedFormData = JSON.parse(localStorage.getItem("formData"));
    if (savedFormData) {
      setFormData(savedFormData);
    }

    function handleResize() {
      if (componentRef.current) {
        const availableWidth = window.innerWidth * 0.7; // 70% width for the main content area
        const availableHeight = window.innerHeight;

        const widthScale = availableWidth / 595; // 595px is the width of the A4 component
        const heightScale = availableHeight / 842; // 842px is the height of the A4 component

        const newScale = Math.min(widthScale, heightScale);
        setScale(newScale);
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize(); // Call once to set initial size

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!formData) {
    return <div>Loading...</div>; // Show a loading message if form data is not yet loaded
  }

  const { personalDetails, familyDetails, contactDetails } = formData;

  return (
    <div
      className="centered-component"
      ref={componentRef}
      style={{ transform: `scale(${scale})` }}
    >
      <div className="biodata">
        <section>
          <table>
            <tbody>
              <tr>
                <td>
                  <h4 style={{ marginTop: "0px" }}>
                    <b>Personal Details</b>
                  </h4>
                </td>
              </tr>
              <tr>
                <td>Name</td>
                <td className="value-data">
                  <p>:&emsp;&nbsp;</p>
                  <p>{personalDetails.name}</p>
                </td>
              </tr>
              <tr>
                <td>Date Of Birth</td>
                <td className="value-data">
                  <p>:&emsp;&nbsp;</p>
                  <p>{personalDetails.dob}</p>
                </td>
              </tr>
              <tr>
                <td>Place Of Birth</td>
                <td className="value-data">
                  <p>:&emsp;&nbsp;</p>
                  <p>{personalDetails.placeOfBirth}</p>
                </td>
              </tr>
              <tr>
                <td>Time Of Birth</td>
                <td className="value-data">
                  <p>:&emsp;&nbsp;</p>
                  <p>{personalDetails.timeOfBirth}</p>
                </td>
              </tr>
              <tr>
                <td>Rashi</td>
                <td className="value-data">
                  <p>:&emsp;&nbsp;</p>
                  <p>{personalDetails.rashi}</p>
                </td>
              </tr>
              <tr>
                <td>Nakshatra</td>
                <td className="value-data">
                  <p>:&emsp;&nbsp;</p>
                  <p>{personalDetails.nakshatra}</p>
                </td>
              </tr>
              <tr>
                <td>Complexion</td>
                <td className="value-data">
                  <p>:&emsp;&nbsp;</p>
                  <p>{personalDetails.complexion}</p>
                </td>
              </tr>
              <tr>
                <td>Height</td>
                <td className="value-data">
                  <p>:&emsp;&nbsp;</p>
                  <p>{personalDetails.height}</p>
                </td>
              </tr>
              <tr>
                <td>Gotra</td>
                <td className="value-data">
                  <p>:&emsp;&nbsp;</p>
                  <p>{personalDetails.gotra}</p>
                </td>
              </tr>
              <tr>
                <td>Bachelors</td>
                <td className="value-data">
                  <p>:&emsp;&nbsp;</p>
                  <p>{personalDetails.bachelors}</p>
                </td>
              </tr>
              <tr>
                <td>Work</td>
                <td className="value-data">
                  <p>:&emsp;&nbsp;</p>
                  <p>{personalDetails.work}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <h4>
                    <b>Family Details</b>
                  </h4>
                </td>
              </tr>
              <tr>
                <td>Father's Name</td>
                <td className="value-data">
                  <p>:&emsp;&nbsp;</p>
                  <p>{familyDetails.fatherName}</p>
                </td>
              </tr>
              <tr>
                <td>Mother's Name</td>
                <td className="value-data">
                  <p>:&emsp;&nbsp;</p>
                  <p>{familyDetails.motherName}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <h4>
                    <b>Contact Details</b>
                  </h4>
                </td>
              </tr>
              <tr>
                <td>Contact Person</td>
                <td className="value-data">
                  <p>:&emsp;&nbsp;</p>
                  <p>{contactDetails.contactPerson}</p>
                </td>
              </tr>
              <tr>
                <td>Contact Number</td>
                <td className="value-data">
                  <p>:&emsp;&nbsp;</p>
                  <p>{contactDetails.contactNumber}</p>
                </td>
              </tr>
              <tr>
                <td>Email ID</td>
                <td className="value-data">
                  <p>:&emsp;&nbsp;</p>
                  <p>{contactDetails.email}</p>
                </td>
              </tr>
              <tr>
                <td>Residential Address</td>
                <td className="value-data">
                  <p>:&emsp;&nbsp;</p>
                  <p>{contactDetails.address}</p>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
      <div className="img-container">
        <img src={Man} alt="" />
      </div>
    </div>
  );
}
