/**
 * @jest-environment jsdom
 */
 import React from 'react';
 import { render, screen } from '@testing-library/react';
 
 import InvoicesList from './InvoicesList';
 
 
 describe("Payments List Table", () => {
 
     it("should show a loading message before the invoices load", () => {
 
         render(<InvoicesList/>)

     });
 
 
     it("should display a table of the invoices", () => {
 
         render(<InvoicesList/>)
  
     });
 
     it("should have a spinner icon button to refresh the list", () => {
 
         render(<InvoicesList/>)
 
     });
 
     it("should have ten payments on with pagination links", () => {
 
         render(<InvoicesList/>)
 
     });
 
 })
 