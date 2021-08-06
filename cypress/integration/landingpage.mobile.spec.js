/// <reference types="cypress" />

/** 
 * toggle navbar in mobile view
 * 
 * page should be visible on mobile browser
 * scroll to bottom of page and back
 * 
 * type inside form to shorten link
 * if form is empty when submit btn is clicked, show error state
 * 
 * type inside form and submit
 * show loader on button
 * mock api call to get shortened url
 * display shortened url item
 * 
 * click on copy button on shortened url item
 * button should change state to copied
*/

describe('Landing page on mobile', () => {
    let originalUrl = 'https://www.testlink.com/';
    let shortLink = 'https://testshrtco.de/'


    before(() => {
        let ranNum = Math.floor(Math.random() * 100000);

        originalUrl += ranNum;
        shortLink += ranNum;

        const opts = { recursive: true };
        
        cy.callFirestore("delete", "shortlinks", opts);

        cy.viewport('iphone-6');

        cy.visit('/');
    })

    beforeEach(() => {
        cy.viewport('iphone-6');
    })

    it('should toggle navbar', () => {
        cy.get('.navbar-toggler').click();
        cy.wait(1000);
        cy.get('.navbar-collapse').should('be.visible');
        cy.get('.navbar-toggler').click();
        cy.get('.navbar-collapse').should('not.be.visible');
    })

    it('renders properly on mobile viewport', () => {
        cy.scrollTo('bottom', { duration: 3000, easing: 'linear' });
        cy.scrollTo('top', { duration: 3000, easing: 'linear' });
    });

    it('should show error message when form is submitted with empty input field', () => {
        cy.get('input[type=url]').should('have.value', '');
        cy.get('button[type=submit]').click();
        cy.get(`[data-testid="Input_error_text"]`).should('be.visible');
    });

    it('should create new shortlink successfully', () => {
        cy.intercept('POST', 'https://api.shrtco.de/v2/**', {
            body: {
                statusCode: 200,
                result: {
                    "code": "KCveN",
                    "short_link": "testshrtco.de/KCveN",
                    "full_short_link": shortLink,
                    "short_link2": "9qr.de/KCveN",
                    "full_short_link2": "https://9qr.de/KCveN",
                    "share_link": "shrtco.de/share/KCveN",
                    "full_share_link": "https://shrtco.de/share/KCveN",
                    "original_link": originalUrl
                }
            },
            delay: 1000
        }).as('response');
        cy.get(`[data-testid="Shortlink_item"]`).should('have.length', 0);
        cy.get('input[type=url]').type(originalUrl);
        cy.get('button[type=submit]').click();
        cy.get('span.spinner-border').should('be.visible');
        cy.get('span.spinner-border', { timeout: 3000 }).should('not.exist');
        cy.get(`[data-testid="Shortlink_item"]`).should('have.length', 1);
    })

    it('should copy link text to clipboard', () => {
        cy.get('[data-testid="Shortlink_item"]').find('button').contains('Copy');
        cy.get('[data-testid="Shortlink_item"]').find('button').click();
        cy.get('[data-testid="Shortlink_item"]').find('button').contains('Copied');
        cy.get('[data-testid="Shortlink_item"]', { timeout: 1000 })
            .find('button')
            .should('not.contain', 'Copied');
            cy.get('[data-testid="Shortlink_item"]').find('button').contains('Copy');
        cy.task('getClipboard').should('contain', shortLink);
    })
});
