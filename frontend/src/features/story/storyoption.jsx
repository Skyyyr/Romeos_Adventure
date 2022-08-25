function StoryOption(props){

    return (
    <div>
        <div className='col-12 menu-section'>
            <button onClick={() => props.clickFunction(props.option.id, props.id)} className={'menu-option'}>
                {props.option.text}
            </button>
        </div>
    </div>
    )
}

export default StoryOption
