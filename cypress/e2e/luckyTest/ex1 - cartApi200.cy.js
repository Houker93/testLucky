describe('Lucky Test 1', () => {


  it('exo 1', () => {
    cy.request({
      method: 'POST',
      url: 'https://api.luckycart.com/cart/ticket',
      auth: {
      },
      headers: {
      },
      body: [
          {
          }
      ]
    })

  })
})
