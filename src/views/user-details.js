import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'


import { Helmet } from 'react-helmet'

import TopBar from '../components/top-bar'
import Button from '../components/button'
import './user-details.css'
import { authStatus } from '../database/app.js'


const UserDetails = (props) => {
  const history = useHistory();
  new Promise(async function (resolve) {
    const status = await authStatus();
    if (status) {
      console.log(1);
    } else {
      history.push('/');
      console.log(2);
    }
  });


  const [fullName, setFullName] = useState(
    localStorage.getItem("userName") || ""
  );
  const [email, setEmail] = useState(
    localStorage.getItem("userEmail") || ""
  );
  const [company, setCompany] = useState(
    localStorage.getItem("userCompany") || ""
  );
  const [website, setWebsite] = useState(
    localStorage.getItem("userWebsite") || ""
  );

  useEffect(async () => {

    localStorage.setItem("userName", fullName);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userCompany", company);
    localStorage.setItem("userWebsite", website);
  }, [fullName, email, company, website]);

  const eventChange = (event) => {
    const id = event.target.id
    switch (id) {
      case 'fullName':
        setFullName(event.target.value);
        break;
      case 'emailAddress':
        setEmail(event.target.value);
        break;
      case 'company':
        setCompany(event.target.value);
        break;
      case 'website':
        setWebsite(event.target.value);
        break;
      default:
      // code block
    }
  };


  return (
    <div className="user-details-container">
      <Helmet>
        <title>UserDetails - Up2Data - Onboarding</title>
        <meta
          property="og:title"
          content="UserDetails - Up2Data - Onboarding"
        />
      </Helmet>
      <div className="user-details-container01">
        <TopBar menu="details" rootClassName="top-bar-root-class-name"></TopBar>
        <div className="user-details-container02">
          <div className="user-details-container03">
            <div className="user-details-container04">
              <div className="user-details-container05">
                <div className="user-details-container06">
                  <div className="user-details-container07">
                    <div className="user-details-container08">
                      <img
                        alt="image"
                        src="/playground_assets/up2datalogo%20%5B3%5D-900h.png"
                        className="user-details-image"
                      />
                      <span className="user-details-text">Onboarding</span>
                    </div>
                    <Link to="/" className="user-details-navlink">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="user-details-icon"
                      >
                        <path d="M658 708l-60 60-256-256 256-256 60 60-196 196z"></path>
                      </svg>
                    </Link>
                  </div>
                  <span className="user-details-text01">User Details</span>
                  <div className="user-details-container09">
                    <span className="user-details-text02">Full Name</span>
                    <input
                      onChange={eventChange}
                      id="fullName"
                      type="text"
                      value={fullName}
                      className="user-details-textinput input"
                    />
                    <div className="user-details-container10"></div>
                  </div>
                  <div className="user-details-container11">
                    <span className="user-details-text03">Email</span>
                    <input
                      onChange={eventChange}
                      id="emailAddress"
                      type="text"
                      value={email}
                      className="user-details-textinput1 input"
                    />
                    <div className="user-details-container12"></div>
                  </div>
                  <div className="user-details-container13">
                    <span className="user-details-text04">Company</span>
                    <input
                      onChange={eventChange}
                      id="company"
                      type="text"
                      value={company}
                      className="user-details-textinput2 input"
                    />
                    <div className="user-details-container14"></div>
                  </div>
                  <div className="user-details-container15">
                    <span className="user-details-text05">Website</span>
                    <input
                      onChange={eventChange}
                      id="website"
                      type="text"
                      value={website}
                      className="user-details-textinput3 input"
                    />
                    <div className="user-details-container16"></div>
                  </div>
                  <Button
                    text="Next"
                    icon="right"
                    goTo="upload"
                    rootClassName="button-root-class-name"
                  ></Button>
                </div>
              </div>
              <div className="user-details-container17">
                <div className="user-details-container18">
                  <div className="user-details-container19">
                    <div className="user-details-container20">
                      <span className="user-details-text06">
                        Help us to keep your personal data up to date.
                      </span>
                      <span className="user-details-text07">
                        <span>
                          For future cooperation it is important to us that your personal data is correct.
                        </span>
                        <br></br>
                        <br></br>
                        <span>
                          Therefore, we ask you to check the data you have provided again and you can correct it if necessary.
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserDetails
