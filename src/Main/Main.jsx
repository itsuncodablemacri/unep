import './Main.css';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const Main = () => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <div style={{ width: "99vw" }}>
        <AppBar style={{ backgroundColor: "white", position: 'relative', boxShadow: "none" }}>
          <Container maxWidth="xl">
            <Toolbar>
              <img
                src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQhWUJnxaIQ8JOmf_WaWNC3ahJdw6e5LMFD5IftlCMLzMkN4Phm"
                alt="UNEP"
                style={{ width: "139px" }}
              />
              <div style={{ color: "grey", paddingLeft: "390px" }} className='lists'>
                <ListItemButton onClick={handleClick}>
                  <ListItemText
                    primary="Who we are"
                    primaryTypographyProps={{ fontSize: '22px', fontWeight: 500 }}
                  />
                  {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>

                <ListItemButton>
                  <ListItemText
                    primary="Where we work"
                    primaryTypographyProps={{ fontSize: '22px', fontWeight: 500 }}
                  />
                  <ExpandMore />
                </ListItemButton>

                <ListItemButton>
                  <ListItemText
                    primary="What we do"
                    primaryTypographyProps={{ fontSize: '22px', fontWeight: 500 }}
                  />
                  <ExpandMore />
                </ListItemButton>

                <ListItemButton>
                  <ListItemText
                    primary="Publications & data"
                    primaryTypographyProps={{ fontSize: '22px', fontWeight: 500 }}
                  />
                </ListItemButton>

                <img
                  src="https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/08/SDG-Wheel_Transparent_WEB.png"
                  alt="UNEP"
                  style={{ height: "44px", paddingTop: "35px" }}
                />
              </div>
            </Toolbar>
          </Container>
        </AppBar>
      </div>

      <div className="unepback">
        <div className="firstwhite">
          <div className='turtlemaindiv'>
            <div className='turtleleft'>
              <div className='turtlelefttop'>
                <div className='textturtlediv textpadlefttop'>
                  <Link className='linktext' to={'/'}>
                    <div className='smallturtletext'>STORY</div>
                    <div>
                      <h2>What is the international agreement to protect the high seas and why is it important? </h2>
                    </div>
                  </Link>
                </div>
              </div>
              <div className='turtleleftbottom'>
                <div className='textpadleftbottom'>
                  <Link className='linktext' to={'/'}>
                    <div className='smallturtletext'>PRESS RELEASE</div>
                    <div style={{ marginTop: "-20px" }}>
                      <h2>Emissions from building sector stopped rising for the first time since 2020, UN finds</h2>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className='turtleright'>
              <div className='turtlerighttop'>
                <div className='textturtlediv textpadrightttop'>
                  <Link className='linktext' to={'/'}>
                    <div>
                      <h3>Multilateral action for a healthy planet and people</h3>
                    </div>
                    <div style={{ marginTop: "-15px", fontWeight: "300" }} className='smallturtletext'>LEARN MORE</div>
                  </Link>
                </div>
              </div>
              <div className='turtlerighbottom'>
                <div className='textturtlediv textpadrightbottom'>
                  <Link className='linktext' to={'/'}>
                    <div>
                      <h3>Basel, Rotterdam and Stockholm conventions 2025 meetings</h3>
                    </div>
                    <div style={{ marginTop: "-15px", fontWeight: "300" }} className='smallturtletext'>LEARN MORE</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className='championsmain'>
            <div className='championimg'>
              <img
                style={{ width: "250px" }}
                src='https://cdn.unenvironment.org/s3fs-public/2025-04/Infocus-COE.png'
                alt='Champions image'
              />
            </div>
            <hr style={{ opacity: "50%", height: "400px", marginTop: "40px" }}></hr>
            <div className='championtext'>
              <div>
                <Link to={'/'}>
                  <h1 className='championsheading'>In Focus: Champions of the Earth 2025 now open!</h1>
                </Link>
                <Link to={'/'} className='campionsubhead'>Watch</Link>
                <div className='campionsdescription'>Meet champions taking bold action for people and the planet</div>
                <Link to={'/'} className='campionsubhead'>Nomination form</Link>
                <div className='campionsdescription'>The 2025 award spotlights outstanding climate action</div>
                <Link to={'/'} className='campionsubhead'>See past winners</Link>
                <div className='campionsdescription'>122 laureates, including 28 world leaders, 74 individuals and 20 organizations</div>
              </div>
            </div>
          </div>

          <div className='morelinksbody'>
            <div className='morelinksmain'>
              <div className='morelinkscontent'>
                <img
                  loading="lazy"
                  src="https://cdn.unenvironment.org/s3fs-public/styles/topics_content_promo/public/2025-04/53332886537_7426843a42_k.jpg?itok=yMGcBdVB"
                  alt="People at a conference"
                />
                <div className='morelinkssubtitle'>PRESS RELEASE</div>
                <Link to={'/'} className='morelinkheading'>
                  IPCC Call for Nominations: Seventh Assessment Report
                </Link>
              </div>

              <div className='morelinkscontent'>
                <img
                  loading="lazy"
                  src="https://cdn.unenvironment.org/styles/topics_content_promo/s3/2025-04/54350499620_a6399c01bd_c.jpg?itok=8uwRmv8u"
                />
                <div className='morelinkssubtitle'>VIDEO</div>
                <Link to={'/'} className='morelinkheading'>
                  IPCC Call for Nominations: Seventh Assessment Report
                </Link>
              </div>

              <div className='morelinkscontent'>
                <img
                  loading="lazy"
                  src="https://cdn.unenvironment.org/styles/topics_content_promo/s3/2025-04/54424784156_cf24eb5a30.jpg?itok=45YpmGVn"
                />
                <div className='morelinkssubtitle'>STORY</div>
                <Link to={'/'} className='morelinkheading'>
                  IPCC Call for Nominations: Seventh Assessment Report
                </Link>
              </div>
            </div>

            <div className='morelinksmain'>
              <div className='morelinkscontent'>
                <img
                  loading="lazy"
                  src="https://cdn.unenvironment.org/styles/topics_content_promo/s3/2025-03/54399059215_72441071f1_k.jpg?itok=LKlqiN2w"
                />
                <div className='morelinkssubtitle'>SPEECH</div>
                <Link to={'/'} className='morelinkheading'>
                  Healthy planet central to economic and human health and prosperity of all nations
                </Link>
              </div>

              <div className='morelinkscontent'>
                <img
                  loading="lazy"
                  src="https://cdn.unenvironment.org/styles/topics_content_promo/s3/2025-01/ED-Davos-Jan2025.png?itok=5n1bFlVA"
                />
                <div className='morelinkssubtitle'>SPEECH</div>
                <Link to={'/'} className='morelinkheading'>
                  Closing in on an end to plastic pollution
                </Link>
              </div>

              <div className='morelinkscontent'>
                <img
                  loading="lazy"
                  src="https://cdn.unenvironment.org/styles/topics_content_promo/s3/2024-12/53559043101_9d17b2b996_k.jpg?itok=gPVouNHI"
                />
                <div className='morelinkssubtitle'>STORY</div>
                <Link to={'/'} className='morelinkheading'>
                  UNEA-7 charts a path toward a resilient planet
                </Link>
              </div>
            </div>

            <div className='seemorebutton'>
              <Button variant="contained" color="success">
                Success
              </Button>
            </div>
          </div>
        </div>
        <div className='parallax'>
          <div className='parallaxtextarea'>
            <div className='parallaxheading'>
              Sustainable Development Goals
            </div>
            <div className='parallaxdescription'>
              A clean and healthy environment is required to achieve the Sustainable Development Goals. Efforts to counter the triple planetary crisis of climate change, nature and biodiversity loss, and pollution and waste must be ramped up in order to truly transform societies and economies for everyone, everywhere.
            </div>
            <div className='parallaxbuttondiv textpadrightttop'>
              <Link className='parallaxlinktext' to={'/'}>
                <div>
                  <h3>FIND OUT WHAT WE ARE DOING</h3>
                </div>
              </Link>
            </div>
          </div>
          <div>
            <img
              style={{ width: "320px", paddingLeft: "290px" }}
              src='https://iili.io/312xeWv.png'
              alt='Parallax image'
            />
          </div>
        </div>
        <div className='footerbody'>
<div className='footerseperator'>
<div className='footercontents'>
        <div className='footersubheadtext'>GOVERNANCE & LEADERSHIP</div>
        <Link className='footerdescripttext' to={'/'}>Senior Management Team</Link>
        <Link className='footerdescripttext' to={'/'}>Committiee of Permanent</Link>
        <Link className='footerdescripttext' to={'/'}>Representatives</Link>
        <Link className='footerdescripttext' to={'/'}>Environment Assembly - UNEA</Link>
        </div>
        <div className='footercontents'>
        <div className='footersubheadtext'>FUNDING & PARTNERS</div>
        <Link className='footerdescripttext' to={'/'}>Overview</Link>
        <Link className='footerdescripttext' to={'/'}>Civil Society</Link>
        <Link className='footerdescripttext' to={'/'}>Member States</Link>
        <Link className='footerdescripttext' to={'/'}>Private Sector</Link>
        <Link className='footerdescripttext' to={'/'}>Environment Fund</Link>
        <Link className='footerdescripttext' to={'/'}>Global Environment Facility</Link>
        <Link className='footerdescripttext' to={'/'}>Green Climate FUnd</Link>
        <Link className='footerdescripttext' to={'/'}>Centres collaborating with UNEP</Link>
        </div>
        <div className='footercontents'>
        <div className='footersubheadtext'>STRUCTURE</div>
        <Link className='footerdescripttext' to={'/'}>Division and Offices</Link>
        <Link className='footerdescripttext' to={'/'}>Evaluation Office</Link>
        <Link className='footerdescripttext' to={'/'}>Secretariats and Conventions</Link>
        </div>
</div>
        
        <div className='footerseperator'>
        <div className='footercontents'>
        <div className='footersubheadtext'>FUNDING & PARTNERS</div>
        <Link className='footerdescripttext' to={'/'}>Overview</Link>
        <Link className='footerdescripttext' to={'/'}>Civil Society</Link>
        <Link className='footerdescripttext' to={'/'}>Member States</Link>
        <Link className='footerdescripttext' to={'/'}>Private Sector</Link>
        <Link className='footerdescripttext' to={'/'}>Environment Fund</Link>
        <Link className='footerdescripttext' to={'/'}>Global Environment Facility</Link>
        <Link className='footerdescripttext' to={'/'}>Green Climate FUnd</Link>
        <Link className='footerdescripttext' to={'/'}>Centres collaborating with UNEP</Link>
</div>
        <div className='footercontents'>
        <div className='footersubheadtext'>FUNDING & PARTNERS</div>
        <Link className='footerdescripttext' to={'/'}>Overview</Link>
        <Link className='footerdescripttext' to={'/'}>Civil Society</Link>
        <Link className='footerdescripttext' to={'/'}>Member States</Link>
        <Link className='footerdescripttext' to={'/'}>Private Sector</Link>
        <Link className='footerdescripttext' to={'/'}>Environment Fund</Link>
        <Link className='footerdescripttext' to={'/'}>Global Environment Facility</Link>
        <Link className='footerdescripttext' to={'/'}>Green Climate FUnd</Link>
        <Link className='footerdescripttext' to={'/'}>Centres collaborating with UNEP</Link>
        </div>
        <div className='footercontents'>
        <div className='footersubheadtext'>FUNDING & PARTNERS</div>
        <Link className='footerdescripttext' to={'/'}>Overview</Link>
        <Link className='footerdescripttext' to={'/'}>Civil Society</Link>
        <Link className='footerdescripttext' to={'/'}>Member States</Link>
        <Link className='footerdescripttext' to={'/'}>Private Sector</Link>
        <Link className='footerdescripttext' to={'/'}>Environment Fund</Link>
        <Link className='footerdescripttext' to={'/'}>Global Environment Facility</Link>
        <Link className='footerdescripttext' to={'/'}>Green Climate FUnd</Link>
        <Link className='footerdescripttext' to={'/'}>Centres collaborating with UNEP</Link>
        </div>
</div>
<div className='footerseperator'>
        <div className='footercontents'>
        <div className='footersubheadtext'>FUNDING & PARTNERS</div>
        <Link className='footerdescripttext' to={'/'}>Overview</Link>
        <Link className='footerdescripttext' to={'/'}>Civil Society</Link>
        <Link className='footerdescripttext' to={'/'}>Member States</Link>
        <Link className='footerdescripttext' to={'/'}>Private Sector</Link>
        <Link className='footerdescripttext' to={'/'}>Environment Fund</Link>
        <Link className='footerdescripttext' to={'/'}>Global Environment Facility</Link>
        <Link className='footerdescripttext' to={'/'}>Green Climate FUnd</Link>
        <Link className='footerdescripttext' to={'/'}>Centres collaborating with UNEP</Link>
</div>
        <div className='footercontents'>
        <div className='footersubheadtext'>FUNDING & PARTNERS</div>
        <Link className='footerdescripttext' to={'/'}>Overview</Link>
        <Link className='footerdescripttext' to={'/'}>Civil Society</Link>
        <Link className='footerdescripttext' to={'/'}>Member States</Link>
        <Link className='footerdescripttext' to={'/'}>Private Sector</Link>
        <Link className='footerdescripttext' to={'/'}>Environment Fund</Link>
        <Link className='footerdescripttext' to={'/'}>Global Environment Facility</Link>
        <Link className='footerdescripttext' to={'/'}>Green Climate FUnd</Link>
        <Link className='footerdescripttext' to={'/'}>Centres collaborating with UNEP</Link>
        </div>
        <div className='footercontents'>
        <div className='footersubheadtext'>FUNDING & PARTNERS</div>
        <Link className='footerdescripttext' to={'/'}>Overview</Link>
        <Link className='footerdescripttext' to={'/'}>Civil Society</Link>
        <Link className='footerdescripttext' to={'/'}>Member States</Link>
        <Link className='footerdescripttext' to={'/'}>Private Sector</Link>
        <Link className='footerdescripttext' to={'/'}>Environment Fund</Link>
        <Link className='footerdescripttext' to={'/'}>Global Environment Facility</Link>
        <Link className='footerdescripttext' to={'/'}>Green Climate FUnd</Link>
        <Link className='footerdescripttext' to={'/'}>Centres collaborating with UNEP</Link>
        </div>
</div>


<div className='footer2nd'>
<img
                src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQhWUJnxaIQ8JOmf_WaWNC3ahJdw6e5LMFD5IftlCMLzMkN4Phm"
                alt="UNEP"
                style={{ height: "130px" }}
              />

              <div style={{marginTop:"-80px",marginLeft:"800px"}}><div className='footerbuttondiv textpadrightttop'>
              <Link className='parallaxlinktext' to={'/'}>
                <div>
                  <h3 style={{fontSize:"16px"}}>SUBSCRIBE TO THE UNEP NEWSLETTER</h3>
                </div>
              </Link>
            </div></div>

</div>
</div>
      </div>
    </div>
  );
};

export default Main;