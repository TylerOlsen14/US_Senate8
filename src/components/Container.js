// import React, { Component } from 'react';
// import'./Home.css';

// export class Container extends Component {
//   state = {
//     senators: [],
//     party: "",
//   };

//   componentDidMount() {
//     fetch('https://raw.githubusercontent.com/CivilServiceUSA/us-senate/master/us-senate/data/us-senate.json')
//     .then(senData => {
//       return senData.json();
//     })
//     .then(data=> {
//       console.log("data:", data)
//       this.setState({senators: data})
//     });
//   }

//   filterByParty=(e) =>{
//     let updatedList = this.state.party
//     updatedList = updatedList.filter(party => {
//       return
//     })
//   }

  
//   render() {
//     return (
//       <div className="Container">
//         {this.state.senators.map((senator, index)=>
//           (
//             <div className="SenatorInfo">
//               <h3>{senator.name}</h3>
//               <p>{senator.party}</p>
//               <p>{senator.state_name}</p>
//               <ul>
//                 <li>Entered Office: {senator.entered_office}</li>
//                 <li>Term Ends: {senator.term_end}</li>
//                 <li>Gender: {senator.gender}</li>
//                 <li>Ethnicity: {senator.ethnicity}</li>
//                 <li>Religion: {senator.religion}</li>
//               </ul>
//               <p>Date of Birth: {senator.date_of_birth}</p>
//               <p>{senator.biography}</p>
//             </div>
//           )
//         )}
//       </div>
//     )
//   }
// }

// export default Container
