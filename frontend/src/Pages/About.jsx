import { useEffect, useRef } from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import { SvgIcon } from '@mui/material';
import Animation from '../features/battling/helpers/Animation';
import { walkForward } from '../features/battling/helpers/AnimationConstants';

function About() {

  const newKey = useRef(0)

  useEffect( () => {
    newKey.current++
  })

  const TEAM = [
    [ 'Skyler Scott', 'https://github.com/Skyyyr', '/Skyyyr' ],
    [ 'Justin Peterson', 'https://github.com/jjpeterson90', '/jjpeterson90' ],
    [ 'Garrett Adams', 'https://github.com/garrettadams52', '/garrettadams52' ],
    [ 'Meredith Hall', 'https://github.com/meredithhall716', '/meredithhall716' ],
    [ 'Zack Fair', 'https://github.com/zaxx81', '/zaxx81' ],
  ]

  return (
    <div classname="page-container">
      <div className="row justify-content-center text-center">
        <h2 className="py-3 pt-4">
          <b>Meet the Team</b>
        </h2>
        <hr style={{width:"400px", opacity:1, color:"rgb(251,250,235)"}}></hr>
      </div>
      <div className="row d-flex justify-content-center mt-2">
        <div className = "team-sprite-container">
          <Animation 
            key={newKey.current}
            {...walkForward}
            type='Skyler'
            running={false}
            mouse={true}
            scale='1.5'
            speed='10'
          />
        </div>
        <div className="team-sprite-container">
          <Animation 
            key={newKey.current}
            {...walkForward}
            type='Justin'
            running={false}
            mouse={true}
            scale='1.5'
            speed='10'
          />
        </div>
        <div className="team-sprite-container">
        <Animation 
            key={newKey.current}
            {...walkForward}
            type='Garrett'
            running={false}
            mouse={true}
            scale='1.5'
            speed='10'
          />
        </div>
        <div className="team-sprite-container">
        <Animation 
            key={newKey.current}
            {...walkForward}
            type='Meredith'
            running={false}
            mouse={true}
            scale='1.5'
            speed='10'
          />
        </div>
        <div className="team-sprite-container">
        <Animation 
            key={newKey.current}
            {...walkForward}
            type='Zack'
            running={false}
            mouse={true}
            scale='1.5'
            speed='10'
          />
        </div>
      </div>

      <div className="my-5 d-flex justify-content-center text-center" style={{position:'relative'}}>
        <div className="mx-3" style={{height: "175px", width:"1px", backgroundColor:"rgb(251,250,235)"}}></div>
        <div className="w-50 text-end" style={{position:'absolute', top:0, marginLeft: '-53%'}}>
          { 
            TEAM.map(member => {
              return (
                <p className="m-0" style={{height: "35px", lineHeight: "35px"}}>
                  <b>{member[0]}</b>
                </p>
              )
            })
          }
        </div>
        <div  className="w-50 text-start" style={{position:'absolute', top:0, marginRight: "-53%"}}>
          { 
            TEAM.map(member => {
              return (
                <p className="m-0" style={{height: "35px", lineHeight: "35px"}}>
                  <a href={member[1]} target="_blank" rel="noreferrer">
                    <SvgIcon component={GitHubIcon} className="me-2" sx={{color:"rgb(251,250,235)", fontSize:30, marginTop:"-5px"}}/>
                    <b>{member[2]}</b>
                  </a>
                </p>
              )
            })
          }
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <div className="text-center py-3 px-4" style={{border:"solid rgb(142,228,232)", borderRadius:"25px"}}>
          <h5 style={{ fontWeight: "bold", textAlign: "center", lineHeight: 1.7}}>
            A special thank you to Code Platoon<br/>
            and our wonderful teachers<br/>
            Adam, Zaynab, and Raphael!
          </h5>
        </div>
      </div>
    </div>
  );
}

export default About;
