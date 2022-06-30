/**
 * @jest-environment jsdom
 */

 import React from 'react';
 import { render } from '@testing-library/react';
 
 import InvoiceDetails from './InvoiceDetails';
 
 describe("Payments List Table", () => {
 
     it("should load an invoice given its uid", () => {
 
         render(<InvoiceDetails uid={12345}/>)
     });
 
 
    it("should show a list of notes associated with invoice", () => {
 
         render(<InvoiceDetails uid={12345}/>)
 
    });

    it("should show the invoice status", () => {
 
        render(<InvoiceDetails uid={12345}/>)
    });

    it("should allow the user to cancel the invoice", () => {
 
        render(<InvoiceDetails uid={12345}/>)
    });

    describe("A Paid InvoiceDetails", () => {

        it("should display the status as paid", () => {
            render(<InvoiceDetails uid={674846}/>)
        })

        it("should not allow the invoice to be cancelled", () => {
            render(<InvoiceDetails uid={674846}/>)
        })
        
    })
 
 })
 