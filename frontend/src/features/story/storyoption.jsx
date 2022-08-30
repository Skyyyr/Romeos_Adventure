function StoryOption(props){

    return (
      <div className='col-12 menu-section p-0'>
          <button
            className={'menu-option'}
            onClick={() => props.clickFunction(props.option.id, props.id)} 
          >
            {props.option.text}
          </button>
      </div>
    )
}

export default StoryOption
