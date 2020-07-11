import React from 'react';
import $ from 'jquery';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchItems: []
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.renderTableData = this.renderTableData.bind(this);
    this.renderTableHeader = this.renderTableHeader.bind(this);
  }

  componentDidMount() {
    $.ajax({
      url: '/items',
      success: (data) => {
        this.setState({
          searchItems: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  onSubmit() {
    let city = document.getElementById("searchCity").value;
    let state = document.getElementById("searchState").value;
    console.log(city, state)
    $.ajax({
      method: "POST",
      url: '/search',
      data: { city, state },
      success: (data) => {
        this.setState({
          searchItems: data
        })
        console.log(data);
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }
  renderTableData() {
    return this.state.searchItems.map((item, index) => {
       const { id, name, location_city, location_state, phone_number, service1, price1 } = item
       return (
          <tr key={id}>
             <td>{id}</td>
             <td>{name}</td>
             <td>{location_city}</td>
             <td>{location_state}</td>
             <td>{phone_number}</td>
             <td>{service1}</td>
             <td>{price1}</td>
          </tr>
       )
    })
  }

  renderTableHeader() {
    let header = ['ID', 'Name', 'City', 'State', 'Phone Number', 'Service', 'Price']
    return header.map((key, index) => {
      return <th key={index}>{key}</th>
    })
  }

  render () {
    return (
      <div className="search-container">
        <form onSubmit={this.onSubmit} >
          <input type="text" placeholder="e.g. San Francisco" id="searchCity"></input>
          <input type="text" placeholder="e.g. CA" id="searchState"></input>
          <button type="submit">Search</button>
        </form>
        <table id='items'>
          <tbody>
            <tr>{this.renderTableHeader()}</tr>
            {this.renderTableData()}
          </tbody>
        </table>
      </div>
    )
  }
}
export default Search;
