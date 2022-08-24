import githubicon from "../features/assets/github.png"



function About() {

    return (
        <div className="row">
        <div className="col-5"></div>
        <div className="col-4 align-self-center" style={{'text-align': 'left'}}>
         <div style={{'text-align': 'center'}}>  
            <br></br>
            <h2 style={{ fontWeight: 'bold' }}>Meet the Team</h2>
            <br></br>
            <div className="row text-align-center" >
                <div id="skyler-icon"></div>
                <div id="justin-icon"></div>
                <div id="garrett-icon"></div>
                <div id="meredith-icon"></div>
                <div id="zack-icon"></div>
            </div>
            </div> 
            <div >
            <p style={{ fontWeight: 'bold' }}>Skyler Scott <img class='github-icon' src={githubicon}/><a href="https://github.com/Skyyyr" target="_blank" rel="noreferrer">
            /Skyyyr </a></p>
            
            </div>
            
            <div>
            <p style={{ fontWeight: 'bold' }}>Justin Peterson <img class='github-icon' src={githubicon}/> <a href="https://github.com/jjpeterson90" target="_blank" rel="noreferrer">
            /jjpeterson90 </a></p>
            
            </div>
            
            <div>
            <p style={{ fontWeight: 'bold' }}>Garrett Adams <img class='github-icon' src={githubicon}/><a href="https://github.com/garrettadams52" target="_blank" rel="noreferrer">
            /garrettadams52 </a></p>
            
            </div>
            
            <div>
            <p style={{ fontWeight: 'bold' }}>Meredith Hall  <img class='github-icon' src={githubicon}/><a href="https://github.com/meredithhall716" target="_blank" rel="noreferrer">
            /meredithhall716</a></p>
            
            </div>
            
            <div>
            <p style={{ fontWeight: 'bold' }}>Zack Fair <img class='github-icon' src={githubicon}/><a href="https://github.com/zaxx81" target="_blank" rel="noreferrer">
            /zaxx81</a></p>
            
            </div>
            <br></br>
            <br></br>
           
        </div>
        </div>


    )
}

export default About