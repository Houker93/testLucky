describe('Lucky Test 1', () => {


  it('exo 1', () => {
    cy.request({
        method: 'POST',
        url: 'https://api.luckycart.com/cart/ticket',
        headers: {
          "Content-Type": "application/json"
        },
        body: 
          {
            cartId: "eligible_test_2",
            totalAti: 60.00,
            shopperId: "eligible_test_2",
            shopperEmail: "eligible_test_2@luckycart.com",
            auth_v: "2.0",
            auth_key: "tVIoa1S6",
            auth_ts: "1640991600",
            auth_sign: "c723c649c389d68d8ab3feb4f53875f7f7eb87d27ec575f1f06a66e3dae4dc30"
          }
        })     
      })

})
    
