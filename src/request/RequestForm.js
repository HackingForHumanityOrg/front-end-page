import React, { Component } from 'react';

class LocationList extends Component {
  return (
    <div>
        <i class="fa fa-arrow-left  fa-3x" aria-hidden="true"></i>
        <h2>{{name}}</h2>
        <div class="row">
            <div class="col-sm-6" style="height:80px;">
                <p>{{:availabletime}}</p>
            </div>'
            <div class="col-sm-6" style="height:80px;">
                <div class="pull-right"><p class="call text-center" style="width:150px;">CALL {{:call}}</p></div>
            </div>
        </div>
        <p>{{service}}</p>
        <hr style="margin: 20px 0px; width: 100%; color: black; height: 1px; background-color:black;" />
        <div class="row">
            <div class="col-sm-6" style="height:80px;">
                <span>PREFERRED DAY(S)</span>
                <div class="form-group">
                    <div class="input-group date" id="preferred-day-input">
                        <input type="text" class="form-control" />
                        <span class="input-group-addon">
                            <span class="glyphicon glyphicon-calendar"></span>
                        </span>
                    </div>
                </div>
            </div>
            <div class="col-sm-6" style="height:80px;">
                <span>PREFERRED TIMES</span>
                <div class="form-group">
                    <div class="input-group date" id="preferred-time-input">
                        <input type="text" class="form-control" />
                        <span class="input-group-addon">
                            <span class="glyphicon glyphicon-calendar"></span>
                        </span>
                    </div>
                </div>
            </div>

            <div class="col-sm-12" style="height:60px;">
                <div class="col-10">
                    <input class="form-control" type="text" placeholder="Name" id="name-input">
                </div>
            </div>
            <div class="col-sm-12" style="height:60px;">
                <div class="col-10">
                    <input class="form-control" type="text" placeholder="Phone Number" id="phone-input">
                </div>
            </div>
            <div class="col-sm-12" style="height:60px;">
                <div class="col-10">
                    <input class="form-control" type="text" placeholder="Email Address" id="email-input">
                </div>
            </div>
            <div class="col-sm-12" style="height:60px;">
                <button type="button" class="btn btn-secondary btn-lg btn-block" id="submit-button">Request Appointment</button>
            </div>
        </div>
    </div>
  )
}
