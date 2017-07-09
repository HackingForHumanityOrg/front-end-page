import React, { Component } from 'react';
import { Col, FormGroup } from 'react-bootstrap';

class RequestForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      service: '',
      time: '',
      email: '',
      password: '',
      list: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {

  }

  handleSubmit(event) {

  }

  render() {
    return (
      <div>

      </div>
    )
  }
}

export default RequestForm;

// <i class="fa fa-arrow-left  fa-3x" aria-hidden="true"></i>
// <h2>{props.name}</h2>
// <div class="row">
//   <Col sm={6} style="height:80px;">
//       <p>{props.availabletime}</p>
//   </Col>
//   <Col sm={6} style="height:80px;">
//       <div class="pull-right"><p class="call text-center" style="width:150px;">CALL {props.call}</p></div>
//   </Col>
// </div>
// <p>{props.service}</p>
// <hr style="margin: 20px 0px; width: 100%; color: black; height: 1px; background-color:black;" />
// <div class="row">
//   <Col sm={6} style="height:80px;">
//     <span>PREFERRED DAY(S)</span>
//     <FormGroup>
//       <div class="input-group date" id="preferred-day-input">
//         <input type="text" class="form-control" />
//           <span class="input-group-addon">
//             <span class="glyphicon glyphicon-calendar"></span>
//           </span>
//         </div>
//       </div>
//     </FormGroup>
//   </Col>
//   <Col sm={6} style="height:80px;">
//     <span>PREFERRED TIMES</span>
//     <FormGroup>
//       <div class="input-group date" id="preferred-time-input">
//         <input type="text" class="form-control" />
//           <span class="input-group-addon">
//             <span class="glyphicon glyphicon-calendar"></span>
//           </span>
//       </div>
//     </FormGroup>
//   </Col>
//   <Col sm={12} style="height:60px;">
//     <Col sm={12} style="height:60px;">
//       <input class="form-control" type="text" placeholder="Name" id="name-input">
//     </Col>
//     <Col sm={12} style="height:60px;">
//         <div class="col-10">
//             <input class="form-control" type="text" placeholder="Phone Number" id="phone-input">
//         </div>
//     </Col>
//     <Col sm={12} style="height:60px;">
//       <div class="col-10">
//         <input class="form-control" type="text" placeholder="Email Address" id="email-input">
//       </div>
//     </Col>
//     <Col sm={12} style="height:60px;">
//       <button type="button" class="btn btn-secondary btn-lg btn-block" id="submit-button">Request Appointment</button>
//     </Col
// </Col>