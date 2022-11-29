Cypress.Commands.add("postProductReviewWooCommerce", function (token, product_id, review, reviewer, reviewer_email, rating) {
    cy.request({
        method: "POST",
        url: Cypress.env("wooCommerce") + Cypress.env("productReview"),
        headers: {
            Authorization: token
        },
        body: {
            "product_id": product_id,
            "review": review,
            "reviewer": reviewer,
            "reviewer_email": reviewer_email,
            "rating": rating
        }
    })
})


Cypress.Commands.add("putProductReviewWooCommerce", function (rating, id, token) {
    cy.request({
        method: "PUT",
        url: Cypress.env("wooCommerce") + Cypress.env("productReview") + "/" + id,
        headers: {
            Authorization: token
        },
        body: {
            "rating": rating,
        }
    })

})

Cypress.Commands.add("deleteProductReviewWooCommerce", function (id, token, force) {
    cy.request({
        method: "DELETE",
        url: Cypress.env("wooCommerce") + Cypress.env("productReview") + "/" + id + "?force=" + force,
        headers: {
            Authorization: token
        },
        body: {
            "deleted": true,
        }
    })

})