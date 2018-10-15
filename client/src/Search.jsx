import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
    this.onSearchChange = this.onSearchChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onSearchChange(event){
		this.setState({ 
      query: event.target.value });
  };
  
	handleSubmit(event){
		event.preventDefault();
		this.props.onSearch(this.state.query.value);
		event.currentTarget.reset();
	};

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label> Manifest via Search: </label>
          <input 
            type="text" 
            onChange={this.onSearchChange}
            ref={input => (this.state.query = input)}
					  name="search"
					  placeholder="Search..."
          />
     
        <button type="submit" value="Find your vision">Find your vision</button>
      </form>
    )
  }
}

export default Search;
