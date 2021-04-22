import React, { Component } from 'react'
import serialize from 'form-serialize'

export default class AddMovie extends Component {

    handleFormSubmit = (e) => {
        e.preventDefault();
        const newMovie = serialize(e.target, {hash: true})
        console.log("New Movie", newMovie)
        this.props.onAddMovie(newMovie)
    }
    render() {
        return (
            <div className="container">
                <form className="mt-5" onSubmit={this.handleFormSubmit}>
                    <input className="form-control" 
                           id="disableInput"
                           type="text"
                           placeholder="Fill The Form To Add A Movie"
                           disabled={false}/>

                    <div className="form-row">
                        <div className="form-group col-md-10">
                            <label htmlFor="inputname">Name</label>
                            <input type="text" 
                                   className="form-control" 
                                   name="name"/>
                        </div>


                        <div className="form-group col-md-2">
                            <label htmlFor="inputname">Rating</label>
                            <input type="text" 
                                   className="form-control" 
                                   name="rating"/>
                        </div>

                        <div className="form-group col-md-12">
                            <label htmlFor="inputname">Image URL</label>
                            <input type="text" 
                                   className="form-control" 
                                   name="imageURL"/>
                        </div>


                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label htmlFor="overviewTextarea">Overview</label>
                            <textarea
                                className="form-control"
                                name="overview" rows="5"></textarea>
                        </div>
                    </div>
                    <input type="submit" className="btn btn-danger btn-block"
                           value="Add Movie"/>

                </form>
                
            </div>
        )
    }
}

