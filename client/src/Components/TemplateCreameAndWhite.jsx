import React, { useEffect, useRef, useState } from 'react';
import Man from '../Images/Man.png';
import Frame from '../Images/Group 1.png';
export default function TemplateCreameAndWhite() {
  const componentRef = useRef(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
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

    window.addEventListener('resize', handleResize);
    handleResize(); // Call once to set initial size

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="centered-component-creame-white" ref={componentRef} style={{ transform: `scale(${scale})` }}>
            <img src={Frame} className='frame' />
      <div className="biodata">

        <section>
          <table>
            <tbody>
              <tr>
                <td className='Heading'><div className='Small-Box'></div><h4 style={{ marginTop: "0px" }}><b>Personal Details</b></h4></td>
              </tr>
          <tr>
            <td colSpan={2}><hr /></td>
          </tr>
              <tr>
                <td className='bold'>Name</td>
                <td className='value-data bold'><p>:&emsp;&nbsp;</p><p>Raghav Verma Sharma</p></td>
              </tr>
              <tr>
                <td>Date Of Birth</td>
                <td className='value-data'><p>:&emsp;&nbsp;</p><p>02/07/2024</p></td>
              </tr>
              <tr>
                <td>Place Of Birth</td>
                <td className='value-data'><p>:&emsp;&nbsp;</p><p>bhhghj</p></td>
              </tr>
              <tr>
                <td>Time Of Birth</td>
                <td className='value-data'><p>:&emsp;&nbsp;</p><p>02:00 AM</p></td>
              </tr>
              <tr>
                <td>Rashi</td>
                <td className='value-data'><p>:&emsp;&nbsp;</p><p>Mesh (Aries)</p></td>
              </tr>
              <tr>
                <td>Nakshatra</td>
                <td className='value-data'><p>:&emsp;&nbsp;</p><p>gfgf</p></td>
              </tr>
              <tr>
                <td>Complexion</td>
                <td className='value-data'><p>:&emsp;&nbsp;</p><p>Very Fair</p></td>
              </tr>
              <tr>
                <td>Height</td>
                <td className='value-data'><p>:&emsp;&nbsp;</p><p>6 feet 4 inches</p></td>
              </tr>
              <tr>
                <td>Gotra</td>
                <td className='value-data'><p>:&emsp;&nbsp;</p><p>fdggfgfd</p></td>
              </tr>
              <tr>
                <td>Bachelors</td>
                <td className='value-data'><p>:&emsp;&nbsp;</p><p>fdggfd</p></td>
              </tr>
              <tr>
                <td>Work</td>
                <td className='value-data'><p>:&emsp;&nbsp;</p><p>fdgfgd</p></td>
              </tr>
              <tr >
                <td className='Heading' style={{ marginTop: "20px" }}><div className='Small-Box'></div><h4 style={{ marginTop: "0px" }}><b>Family Details</b></h4></td>
              </tr>
              <tr>
            <td colSpan={2}><hr /></td>
          </tr>
              <tr>
                <td >Father's Name</td>
                <td className='value-data'><p>:&emsp;&nbsp;</p><p>fdggfd</p></td>
              </tr>
              <tr>
                <td>Father's Occupation</td>
                <td className='value-data'><p>:&emsp;&nbsp;</p><p>dgfdgfd</p></td>
              </tr>
              <tr>
                <td>Mother's Name</td>
                <td className='value-data'><p>:&emsp;&nbsp;</p><p>fdfgdgfdg</p></td>
              </tr>
              <tr>
                <td>Mother's Occupation</td>
                <td className='value-data'><p>:&emsp;&nbsp;</p><p>dgfgfd</p></td>
              </tr>
              <tr>
                <td>Siblings</td>
                <td className='value-data'><p>:&emsp;&nbsp;</p><p>fggfd</p></td>
              </tr>
              <tr >
                <td className='Heading' style={{ marginTop: "20px" }}><div className='Small-Box'></div><h4 style={{ marginTop: "0px" }}><b>Contact Details</b></h4></td>
              </tr>
              <tr>
            <td colSpan={2}><hr /></td>
          </tr>
              <tr>
                <td>Contact Person</td>
                <td className='value-data'><p>:&emsp;&nbsp;</p><p>dgfgfd</p></td>
              </tr>
              <tr>
                <td>Contact Number</td>
                <td className='value-data'><p>:&emsp;&nbsp;</p><p>dgfgfd</p></td>
              </tr>
              <tr>
                <td>Email ID</td>
                <td className='value-data'><p>:&emsp;&nbsp;</p><p>gddgf</p></td>
              </tr>
              <tr>
                <td>Residential Address</td>
                <td className='value-data'><p>:&emsp;&nbsp;</p><p>fdggfdgfd</p></td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
      {/* <div className="img-container">
        <img src={Man} alt="" />
      </div> */}
    </div>
  );
}
