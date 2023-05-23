import React from 'react'
import { Link, useHistory } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import TopBar from '../components/top-bar'
import Checkbox from '../components/checkbox'
import Button from '../components/button'
import './favorite.css'
import { authStatus } from '../database/app.js'

const Favorite = (props) => {
  const history = useHistory();
  new Promise(async function (resolve) {
    const status = await authStatus({check:true});
    if (status) {
      console.log(1);
    } else {
      history.push('/');
      console.log(2);
    }
  });
  return (
    <div className="favorite-container">
      <Helmet>
        <title>Favorite - Up2Data - Onboarding</title>
        <meta property="og:title" content="Favorite - Up2Data - Onboarding" />
      </Helmet>
      <div className="favorite-container01">
        <TopBar menu="favorite" rootClassName="top-bar-root-class-name3"></TopBar>
        <div className="favorite-container02">
          <div className="favorite-container03">
            <div className="favorite-container04">
              <div className="favorite-container05">
                <div className="favorite-container06">
                  <div className="favorite-container07">
                    <div className="favorite-container08">
                      <img
                        alt="image"
                        src="/playground_assets/up2datalogo%20%5B3%5D-900h.png"
                        className="favorite-image"
                      />
                      <span className="favorite-text">Onboarding</span>
                    </div>
                    <Link to="/upload-status" className="favorite-navlink">
                      <svg viewBox="0 0 1024 1024" className="favorite-icon">
                        <path d="M658 708l-60 60-256-256 256-256 60 60-196 196z"></path>
                      </svg>
                    </Link>
                  </div>
                  <span className="favorite-text01">
                    Who would you like to monitor?
                  </span>
                  <div className="favorite-container09">
                    <div className="favorite-container10">
                      <div className="favorite-container11">
                        <Checkbox id="fav0" rootClassName="checkbox-root-class-name"></Checkbox>
                        <span>Sales</span>
                      </div>
                      <div className="favorite-container12">
                        <Checkbox id="fav1" rootClassName="checkbox-root-class-name1"></Checkbox>
                        <span>Marketing</span>
                      </div>
                      <div className="favorite-container13">
                        <Checkbox id="fav2" rootClassName="checkbox-root-class-name2"></Checkbox>
                        <span>Finance</span>
                      </div>
                    </div>
                    <div className="favorite-container14">
                      <div className="favorite-container15">
                        <Checkbox id="fav3" rootClassName="checkbox-root-class-name9"></Checkbox>
                        <span>HR</span>
                      </div>
                      <div className="favorite-container16">
                        <Checkbox id="fav4" rootClassName="checkbox-root-class-name10"></Checkbox>
                        <span>Legal</span>
                      </div>
                      <div className="favorite-container17">
                        <Checkbox id="fav5" rootClassName="checkbox-root-class-name11"></Checkbox>
                        <span>
                          Controlling
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </div>
                    </div>
                    <div className="favorite-container18">
                      <div className="favorite-container19">
                        <Checkbox id="fav6" rootClassName="checkbox-root-class-name6"></Checkbox>
                        <span>Compliance</span>
                      </div>
                      <div className="favorite-container20">
                        <Checkbox id="fav7" rootClassName="checkbox-root-class-name7"></Checkbox>
                        <span>Business Development</span>
                      </div>
                      <div className="favorite-container21">
                        <Checkbox id="fav8" rootClassName="checkbox-root-class-name8"></Checkbox>
                        <span>Business Intelligence</span>
                      </div>
                    </div>
                    <div className="favorite-container22">
                      <div className="favorite-container23">
                        <Checkbox id="fav9" rootClassName="checkbox-root-class-name3"></Checkbox>
                        <span>Customer Care</span>
                      </div>
                      <div className="favorite-container24">
                        <Checkbox id="fav10" rootClassName="checkbox-root-class-name4"></Checkbox>
                        <span>Office Management</span>
                      </div>
                      <div className="favorite-container25">
                        <Checkbox id="fav11" rootClassName="checkbox-root-class-name5"></Checkbox>
                        <span>Operations</span>
                      </div>
                    </div>
                    <div className="favorite-container26">
                      <div className="favorite-container27">
                        <Checkbox id="fav12" rootClassName="checkbox-root-class-name18"></Checkbox>
                        <span>Partnership</span>
                      </div>
                      <div className="favorite-container28">
                        <Checkbox id="fav13" rootClassName="checkbox-root-class-name19"></Checkbox>
                        <span>Procurement</span>
                      </div>
                      <div className="favorite-container29">
                        <Checkbox id="fav14" rootClassName="checkbox-root-class-name20"></Checkbox>
                        <span>Product</span>
                      </div>
                    </div>
                    <div className="favorite-container30">
                      <div className="favorite-container31">
                        <Checkbox id="fav15" rootClassName="checkbox-root-class-name24"></Checkbox>
                        <span>Project Management</span>
                      </div>
                      <div className="favorite-container32">
                        <Checkbox id="fav16" rootClassName="checkbox-root-class-name25"></Checkbox>
                        <span>Supply Chain</span>
                      </div>
                      <div className="favorite-container33">
                        <Checkbox id="fav17" rootClassName="checkbox-root-class-name26"></Checkbox>
                        <span>IT</span>
                      </div>
                    </div>
                    <div className="favorite-container34">
                      <div className="favorite-container35">
                        <Checkbox id="fav18" rootClassName="checkbox-root-class-name21"></Checkbox>
                        <span>Account Management</span>
                      </div>
                      <div className="favorite-container36">
                        <Checkbox id="fav19" rootClassName="checkbox-root-class-name22"></Checkbox>
                        <span>C-Level</span>
                      </div>
                      <div className="favorite-container37">
                        <Checkbox id="fav20" rootClassName="checkbox-root-class-name23"></Checkbox>
                        <span>VP</span>
                      </div>
                    </div>
                    <div className="favorite-container38">
                      <div className="favorite-container39">
                        <Checkbox id="fav21" rootClassName="checkbox-root-class-name42"></Checkbox>
                        <span>Director</span>
                      </div>
                      <div className="favorite-container40">
                        <Checkbox id="fav22" rootClassName="checkbox-root-class-name43"></Checkbox>
                        <span>Head of</span>
                      </div>
                      <div className="favorite-container41">
                        <Checkbox id="fav23" rootClassName="checkbox-root-class-name44"></Checkbox>
                        <span>Team Lead</span>
                      </div>
                    </div>
                    <div className="favorite-container42">
                      <div className="favorite-container43">
                        <Checkbox id="fav24" rootClassName="checkbox-root-class-name39"></Checkbox>
                        <span>Employee</span>
                      </div>
                      <div className="favorite-container44">
                        <Checkbox id="fav25" rootClassName="checkbox-root-class-name40"></Checkbox>
                        <span>Partner</span>
                      </div>
                      <div className="favorite-container45">
                        <Checkbox id="fav26" rootClassName="checkbox-root-class-name41"></Checkbox>
                        <span>Principle</span>
                      </div>
                    </div>
                    <div className="favorite-container46">
                      <div className="favorite-container47">
                        <Checkbox id="fav27" rootClassName="checkbox-root-class-name36"></Checkbox>
                        <span>Investor</span>
                      </div>
                      <div className="favorite-container48">
                        <Checkbox id="fav28" rootClassName="checkbox-root-class-name37"></Checkbox>
                        <span>Freelance</span>
                      </div>
                      <div className="favorite-container49">
                        <Checkbox id="fav29" rootClassName="checkbox-root-class-name38"></Checkbox>
                        <span>Coach</span>
                      </div>
                    </div>
                    <div className="favorite-container50">
                      <div className="favorite-container51">
                        <Checkbox id="fav30" rootClassName="checkbox-root-class-name33"></Checkbox>
                        <span>Consultant</span>
                      </div>
                      <div className="favorite-container52">
                        <Checkbox id="fav31" rootClassName="checkbox-root-class-name34"></Checkbox>
                        <span>Associate</span>
                      </div>
                      <div className="favorite-container53"></div>
                    </div>
                  </div>
                  <Button
                    goTo="cookie"
                    icon="right"
                    text="Next"
                    rootClassName="button-root-class-name6"
                  ></Button>
                </div>
              </div>
              <div className="favorite-container54">
                <div className="favorite-container55">
                  <div className="favorite-container56">
                    <div className="favorite-container57">
                      <span className="favorite-text34">
                        Tell us which categories you would like to monitor.
                      </span>
                      <span className="favorite-text35">
                        <span>
                        Get notified when a certain category gets triggered. 
                        That means that an employee of your client with the chosen category has changed the employer, 
                        and a new potential client is waiting for you around the corner.  Never miss opportunities again.
                        </span>
                        <br></br>
                        <br></br>
                        <span>
                        Simply select all the positions you are interested in and we will do the rest for you.
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

export default Favorite
