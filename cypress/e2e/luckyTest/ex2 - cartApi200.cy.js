describe('Lucky Test 2', () => {

    function getRandomArbitrary(min, max) {
        min = Math.ceil(1);
        max = Math.floor(5000);
        return Math.floor(Math.random() * (max - min +1)) + min;
    }

    it('exo 2', () => {
        cy.request({
            method: 'POST',
            url: 'https://api.luckycart.com/cart/ticket',
            headers: {
            "Content-Type": "application/json"
            },
            body: 
            {
                cartId: "eligible_test_" + getRandomArbitrary(),
                totalAti: 60.00,
                shopperId: "eligible_test_2",
                shopperEmail: "eligible_test_2@luckycart.com",
                auth_v: "2.0",
                auth_key: "tVIoa1S6",
                auth_ts: "1640991600",
                auth_sign: "c723c649c389d68d8ab3feb4f53875f7f7eb87d27ec575f1f06a66e3dae4dc30"
            }
        }).then((response) => {
            let urlNewGame = response.body.ticket
            cy.visit("https://go.luckycart.com/mobile/" + urlNewGame)
        })
    })

    it('click on game', () => {
        cy.iframe(".lc-iframe").find("h4").click({force: true})
    })

    it('verif text congrats', () => {
        cy.intercept('POST', 'https://events.luckycart.com/events/v2/experience_game_played', {
            statusCode: 201,
        })
       cy.iframe(".lc-iframe").contains("Congrats").should("be.visible")
    })

})