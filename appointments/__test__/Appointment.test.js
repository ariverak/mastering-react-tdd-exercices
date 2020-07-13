import React from 'react';
import ReactDOM from 'react-dom';
import { Appointment, AppointmentsDayView } from '../src/Appointment';
import ReactTestUtils from 'react-dom/test-utils'

let container;
let customer;
let appointments;

const render = component => ReactDOM.render(component, container)

describe('Appointment', () => {
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
    beforeEach(()=> {
        container = document.createElement('div');
        const today = new Date();
        appointments = [
            { 
                startsAt: today.setHours(12, 0),
                customer: { first_name: 'Ashley' }
            },
            { 
                startsAt: today.setHours(13, 0),
                customer: { first_name: 'Jordan' }
            }
        ];
    })
    it("renders a div with the right id", () => {
        render(<AppointmentsDayView appointments={[]} />);
        expect(container.querySelector('div#appointmentsDayView')).not.toBeNull()
    })
    it("renders multiple appointments in an ol element", () => {
        render(<AppointmentsDayView appointments={appointments} />);
        expect(container.querySelector('ol').children).toHaveLength(2);
    })
    it("renders each appointments in an li", () => {
        render(<AppointmentsDayView appointments={appointments} />);
        expect(container.querySelectorAll('li')).toHaveLength(2);
        expect(container.querySelectorAll('li')[0].textContent).toEqual('12:00');
        expect(container.querySelectorAll('li')[1].textContent).toEqual('13:00');
    })
    it("initially shows a message saying there are no appointment today", () => {
        render(<AppointmentsDayView appointments={[]} />);
        expect(container.textContent).toMatch('The are no appointments scheduled for today.');
    })
    it("has a button element in each li", () => {
        render(<AppointmentsDayView appointments={appointments} />);
        expect(container.querySelectorAll('li button')).toHaveLength(2);
        expect(container.querySelectorAll('li button')[0].type).toEqual('button')
    })
    it("renders another appointment when selected", () => {
        render(<AppointmentsDayView appointments={appointments} />);
        const button = container.querySelectorAll('button')[0];
        ReactTestUtils.Simulate.click(button);
        expect(container.textContent).toMatch('Ashley');
    })
})