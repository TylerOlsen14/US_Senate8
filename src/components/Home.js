// import React, { Component } from 'react';
// import './Home.css';
// import Container from './Container';

// export class Home extends Component {
//   state = {
//     senators: []
//   }
//   componentDidMount() {
//     fetch('https://raw.githubusercontent.com/CivilServiceUSA/us-senate/master/us-senate/data/us-senate.json')
//       .then((response) => {
//         return response.json();
//       })
//       .then(data => {
//         let senators = data.map(senator => { return {value: senator, display: senator} })
//         this.setState({senators: [{value: '', display: '(choose a senator)'}].concat(senators) })
//       }).catch(error => {
//         console.log(error)
//       })
//   }



//   // constructor(props) {
//   //   super(props);
//   //   this.state = {isToggleOn: true};
//   //   this.handleClick = this.handleClick.bind(this);
//   // }

//   // handleClick() {
//   //   this.setState(state => ({
//   //     isToggleOn: !state.isToggleOn
//   //   }));
//   // }
//   constructor(props) {
//     super(props);
//       this.state = {
//         search: "",
//         party: 'select',
//         state: 'select'
//       }
//       // query = []

//     this.handlesearch = this.handlesearch.bind(this);
//     this.handleselect = this.handleselect.bind(this);
//   }
  
//   handlesearch(searchText) {
//     this.setState({
//       searchText: searchText
//     })
//   }

//   handleselect(e) {
//     this.setState({
//       optionSelect: e.target.value
//     })
//   }

//   filterByParty=(e) =>{
//     let updatedList = this.state.party
//     updatedList = updatedList.filter(party => {
//       return
//     })
//   }


//   render() {
//     console.log(this)
//     return (
//       <div>
//         <p>This is the form here:</p>
//         <div className="form-group">
//           <form>
//             <label htmlFor="query">Query</label>
//               <input type="search" name="query" id="query"  placeholder='Search' handlesearch={this.state.searchText} />
//               <select name="party" id="party" className="form-control" onChange={this.handleselect.bind(this)} value={this.state.optionSelect}>
//                 <option value="">Choose</option>
//                 <option value="republican">Republican</option>
//                 <option value="democrat">Democrat</option>
//                 <option value="independent">Independent</option>
//               </select>
//               <label htmlFor="state" className="col-sm-2 control-label">
//                 <div className="col-sm-10">
//                   <select name="USSenate" id="USSenate">
//                     {this.state.senators.map((senators) => <option key={senator.state_name.value} value={senator.state_name.value}>{senator.name.display}</option>)}
//                   </select>
//                   {/* <select 
//                       name="state" 
//                       id="state" 
//                       className="form-control" 
//                       onChange={this.handleselect.bind(this)} 
//                       value={this.state.optionSelect}
//                     >
//                     <option value="">N/A</option>
//                     <option value="AK">Alaska</option>
//                     <option value="AL">Alabama</option>
//                     <option value="AR">Arkansas</option>
//                     <option value="AZ">Arizona</option>
//                     <option value="CA">California</option>
//                     <option value="CO">Colorado</option>
//                     <option value="CT">Connecticut</option>
//                     <option value="DC">District of Columbia</option>
//                     <option value="DE">Delaware</option>
//                     <option value="FL">Florida</option>
//                     <option value="GA">Georgia</option>
//                     <option value="HI">Hawaii</option>
//                     <option value="IA">Iowa</option>
//                     <option value="ID">Idaho</option>
//                     <option value="IL">Illinois</option>
//                     <option value="IN">Indiana</option>
//                     <option value="KS">Kansas</option>
//                     <option value="KY">Kentucky</option>
//                     <option value="LA">Louisiana</option>
//                     <option value="MA">Massachusetts</option>
//                     <option value="MD">Maryland</option>
//                     <option value="ME">Maine</option>
//                     <option value="MI">Michigan</option>
//                     <option value="MN">Minnesota</option>
//                     <option value="MO">Missouri</option>
//                     <option value="MS">Mississippi</option>
//                     <option value="MT">Montana</option>
//                     <option value="NC">North Carolina</option>
//                     <option value="ND">North Dakota</option>
//                     <option value="NE">Nebraska</option>
//                     <option value="NH">New Hampshire</option>
//                     <option value="NJ">New Jersey</option>
//                     <option value="NM">New Mexico</option>
//                     <option value="NV">Nevada</option>
//                     <option value="NY">New York</option>
//                     <option value="OH">Ohio</option>
//                     <option value="OK">Oklahoma</option>
//                     <option value="OR">Oregon</option>
//                     <option value="PA">Pennsylvania</option>
//                     <option value="PR">Puerto Rico</option>
//                     <option value="RI">Rhode Island</option>
//                     <option value="SC">South Carolina</option>
//                     <option value="SD">South Dakota</option>
//                     <option value="TN">Tennessee</option>
//                     <option value="TX">Texas</option>
//                     <option value="UT">Utah</option>
//                     <option value="VA">Virginia</option>
//                     <option value="VT">Vermont</option>
//                     <option value="WA">Washington</option>
//                     <option value="WI">Wisconsin</option>
//                     <option value="WV">West Virginia</option>
//                     <option value="WY">Wyoming</option>
//                   </select> */}
//                 </div>
//               </label>
//               <br/>
//               <button type="button" id="search">Search</button>
//           </form>
//           {{}}
//           {/* {{this.state.optionSelect}((senator, index)=>  */}
//           {/* <Container /> */}
//           )}
//         </div>
//       </div>
//     )
//   }
// }

// export default Home
