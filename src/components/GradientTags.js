const GradientTags = ({ tags }) => {

  const colorValue = (e) => {
    e.preventDefault()
    console.log(e.currentTarget.value)
  }
  

    return (
      <div className="mt-3">
        {tags.map(elem =>
          <button key={elem} type="button" className="btn btn-sm me-2 mb-2 bg-dark text-white" value={elem}onClick ={colorValue}>{elem}
          </button>
        )
        }
      </div>
    )
  }
  
  export default GradientTags