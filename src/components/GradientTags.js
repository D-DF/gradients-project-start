const GradientTags = ({ tags }) => {
    return (
      <div className="mt-3">
        {tags.map(elem =>
          <button key={elem} type="button" className="btn btn-sm me-2 mb-2 bg-dark text-white">{elem}
          </button>
        )
        }
      </div>
    )
  }
  
  export default GradientTags