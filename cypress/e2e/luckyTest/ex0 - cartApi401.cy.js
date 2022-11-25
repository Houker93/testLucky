describe('Lucky Test 0', () => {

  it('exo 0', () => {
    cy.request({
        method: 'POST',
        url: 'https://api.luckycart.com/cart/ticket',
        headers: {
          "Content-Type": "application/json"
        },
        body: [
          {
            "cartId": "not_eligible_test_1",
            "totalAti": 30.00,
            "shopperId": "not_eligible_test_1",
            "shopperEmail": "not_eligible_test_1@luckycart.com",
            "auth_v" : "2.0",
            "auth_key" : "tVIoa1S6",
            "auth_ts": "1640991600", 
            "auth_sign": "c723c649c389d68d8ab3feb4f53875f7f7eb87d27ec575f1f06a66e3dae4dc30",
          }
        ]
      })     
  })

})
