import React from 'react';
import ReactDOM from 'react-dom';
import { Appointment, AppointmentsDayView } from '../src/Appointment';


describe('Appointment', () => {
    let container;
    let customer;
    const render = component => ReactDOM.render(component, container)
    beforeEach(()=> {
        container = document.createElement('div');
    })
    it("renders the customer first name", () => {
        customer = { first_name: 'Ashley' }
        document.body.appendChild(container);
        render(<Appointment customer={customer} />);
        expect(document.body.textContent).toMatch('Ashley')
    })
    it("renders another customer first name", () => {
        customer = { first_name: 'Jordan' }
        document.body.appendChild(container);
        render(<Appointment customer={customer} />);
        expect(document.body.textContent).toMatch('Jordan')
    })
})
describe('AppointmentsDayView', () => {
    let container;
    const render = component => ReactDOM.render(component, container)
    beforeEach(()=> {
        container = document.createElement('div');
    })
    it("renders a div with the right id", () => {
        render(<AppointmentsDayView appointments={[]} />);
        expect(container.querySelector('div#appointmentsDayView')).not.toBeNull()
    })
    it("renders multiple appointments in an ol element", () => {
        const today = new Date();
        const appointments = [
            { startAt: today.setHours(12, 0) },
            { startAt: today.setHours(13, 0) }
        ];
        render(<AppointmentsDayView appointments={appointments} />);
        expect(container.querySelector('ol').children).toHaveLength(2);
    })
})