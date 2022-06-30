/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';

import PaymentsList from './PaymentsList';

describe("Payments List Table", () => {


    it("should show a loading message before the payments load", () => {

        render(<PaymentsList/>)
        
    });


    it("should display a table of the payments", () => {

        render(<PaymentsList/>)

    });

    it("should have a spinner icon button to refresh the list", () => {

        render(<PaymentsList/>)

    });

    it("should have ten payments on with pagination links", () => {

        render(<PaymentsList/>)

    });

})
