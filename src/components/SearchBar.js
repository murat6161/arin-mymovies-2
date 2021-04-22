import React from 'react' 
import ReactDOM from 'react-dom'

class SearchBar extends React.Component {


    handleFormSubmit = (e) => {

        e.preventDefault()

    }

    render (){
        return (

          <form onSubmit={this.handleFormSubmit}>
              <div className="form-row mb-5">
                  <div className="col-10">
                      
                      <input 
                      onChange={this.props.searchMovieProp} 
                      type="text" className="form-control" 
                      placeholder="Search movie"
                     // value={this.state.searchQuery}
                      />
                  </div>
                  
                  <button className="col-2"
                          className="btn btn-md btn-danger"
                          style={{float:'right'}}>Add Movie
                    </button>
              </div>
          </form>

        )
    }
}

export default SearchBar