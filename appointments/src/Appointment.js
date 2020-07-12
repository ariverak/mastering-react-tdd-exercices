import React from 'react';

export const Appointment = ({ customer }) => (
    <div>
        {customer.first_name}
    </div>
)

export const AppointmentsDayView = ({ appointments }) => 
    <div id="appointmentsDayView">
        <ol>
            {appointments.map((appointment) =>(
                <li key={appointment.startAt}></li>
            ))}
        </ol>
    </div>