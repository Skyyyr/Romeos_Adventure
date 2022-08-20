import '../../assets/character.css'

function BattleView() {

    return (
        <div>
            <h1>
                Battle
            </h1>
            <div className='row align-items-end' style={{'height':'45vh', 'overflow': 'hidden'}}>
                <div className='wrapper'>
                    <div className = {"row align-items-center justify-content-center"} style={{'width':"300px", 'height': "300px"}}>
                        <div className={`icon`} ></div>
                    </div>
                    <div className = {"row align-items-center justify-content-center"} style={{'width':"300px", 'height': "300px"}}>
                        <div className={`icon`} ></div> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BattleView