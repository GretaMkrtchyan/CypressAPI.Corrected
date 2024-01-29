// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --


Cypress.Commands.add('CreateNewUser', (randomData, data) => {
    cy.request({
        method: 'Post', 
        url:'/users',
        headers: {'Accept': 'application/json',
                  'Content-Type': 'application/json',
                 'Authorization' : Cypress.env('token')},
         body: data
         
        })
    })

        Cypress.Commands.add('GetList', (user_id) =>{
    cy.request({
         method: 'Get',
         url: `/users/${user_id}`,
         headers: {'Accept': 'application/json',
                  'Authorization': Cypress.env('token')}

        })     
    })  
    Cypress.Commands.add('DeleteUser', (user_id)=> {
     cy.request({
            method: "Delete", 
             url:`/users/${user_id}`,
            headers:{'Accept': 'application/json',
                    'Authorization' :  Cypress.env('token')}
    })
})
