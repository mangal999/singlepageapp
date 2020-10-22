import React from 'react';
import { Component } from 'react';

export default class Homepage extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

   showAddForm = ()=> {

    document.getElementById("city").value = "";
    document.getElementById("image").value = "";
    document.getElementById("span").innerHTML = "";

    let cityList = document.getElementById("cityList");
    cityList.style.display = "none";

    let cityForm = document.getElementById("newCityForm");
    cityForm.style.display = "flex";
    
  }

  showAllCities = () => {

    let cityForm = document.getElementById("newCityForm");
    cityForm.style.display = "none";

    let cityList = document.getElementById("cityList");
    cityList.style.display = "flex";
  }

  addCity = () => {
    let c = document.getElementById("city").value;
    let image = document.getElementById("image").value;

    if(c == "" || image ==""){
      alert("name and image url must be filled")
      return;
    }
    let temp = this.state;
    temp[c] = image;
    this.setState(temp)
    let sp = document.getElementById("span");
    sp.innerHTML = "City Added click on show button to see visted places "
    document.getElementById("city").value = "" ;
    document.getElementById("image").value = ""
  }

  render() {
    return (
      <div className="App-header">

        <h1>Welcome To Your Visited Cities Manager</h1>

        <div className="options">

          <button onClick={this.showAddForm}>Add New City</button>
          <button onClick={this.showAllCities} >Show Visited Cities</button>

        </div>

        <div className="content">

          <div className="newCityForm" id="newCityForm" >

              <h1> Add New City </h1>

              <input type="text" placeholder="Enter Your City Name" id="city" required />
              <input type="text" placeholder="Enter URL of city image" id="image" required />

              <button onClick={this.addCity}>Add City</button>
              <span id="span"></span>
          </div>

          <div className="cityList" id="cityList">

            <h1>Here is the list of All cities you visited</h1>

            <div className="listImage">
              {Object.keys(this.state).map((x) =>
                <div key={x}>
                  <img src={this.state[x]} height="130px" width="160px" className="thumbnail" />
                  <h4>{x}</h4>
                </div>
              )}
            </div>

          </div>

      </div>

      </div>
    );
  }
}
