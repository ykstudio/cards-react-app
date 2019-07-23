import React from "react";

// className Card extends React.Component{
//     render(){
//         return(
//             <div className="ui card">
//                 <div className="image">
//                     <img src="https://semantic-ui.com/images/avatar2/large/kristy.png"/>
//                 </div>
//                 <div className="content">
//                     <a className="header">{this.props.header} | {this.props.age}</a>
//                     <div className="meta">
//                         <span className="date">{this.props.date}</span>
//                     </div>
//                     <div className="description">
//                     {this.props.header} is an art director living in New York.
//                     </div>
//                 </div>
//                 <div className="extra content">
//                     <a>
//                         <i className="user icon"></i>
//                         {this.props.extra} Friends
//                     </a>
//                 </div>
//             </div>
//         )
//     }
// }
// Card.defaultProps = {
//     extra: 0
// }

const Card = ({ header, age, extra, date }) => {
  return (
    <div className="ui card">
      <div className="image">
        <img src="https://semantic-ui.com/images/avatar2/large/kristy.png" />
      </div>
      <div className="content">
        <a className="header">
          {header} | {age}
        </a>
        <div className="meta">
          <span className="date">{date}</span>
        </div>
        <div className="description">
          {header} is an art director living in New York.
        </div>
      </div>
      <div className="extra content">
        <a>
          <i className="user icon" />
          {extra} Friends
        </a>
        lala
      </div>
    </div>
  );
};
export default Card;
