
describe('template spec', () => {
  before(()=> {
    cy.fixture('data.json').as('data')
  })
  const randomData = Date.now().toString()

  it('API testing', function() {
    cy.CreateNewUser(randomData, this.data).then(response => {
      expect(response.body.email).to.eq("mmnn6777999yan@mail.com"),
      expect(response.body.name).to.eq("Greta")
      const user_id = response.body.id 
   
     cy.GetList(user_id).then(response => {
       expect(response.body.email).to.eq("mmnn6777999yan@mail.com"),
      expect(response.body.name).to.eq("Greta"),
      expect(response.body.id).to.eq(user_id)
    })  
    
     cy.DeleteUser(user_id).then(response => {
        expect(response.status).to.eq(204)

})
})         
})
})


      