import githubicon from "../features/assets/github.png"



function About() {

    return (
        <div>
            <div className="row text-center" style={{'text-align': 'center', 'margin': '25px'}}>
                <br></br>
                <br></br>
                <h2 style={{ fontWeight: 'bold' }}>Meet the Team</h2>
                <br></br>
                
                <div className="col-4"></div>
                <div className="col-4 hstack gap-4">
                <div id="skyler-icon"></div>
                <div id="justin-icon"></div>
                <div id="garrett-icon"></div>
                <div id="meredith-icon"></div>
                <div id="zack-icon"></div>
                </div>
                </div>
            
        <div className="row">
        <div className="col-4"></div>
        <div className="col-4 align-self-center" style={{'text-align': 'left', 'margin': '20px', 'paddingLeft': '85px'}}>
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
        <div>
                <p style={{ fontWeight: 'bold', textAlign: 'center' }}>A Special Thank You to Code Platoon, and our wonderful teachers Adam, Zaynab, and Raphael! </p>
            </div>
        </div>
        </div>


    )
}

export default About