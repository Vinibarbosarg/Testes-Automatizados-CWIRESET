import productReviewFixture from '../../fixtures/productReview.json'
import tokenFixture from '../../fixtures/token.json'
import statusFixture from '../../fixtures/status.json'
import { faker } from '@faker-js/faker'
import productReviewSchema from '../../contracts/productReview.contract'
import productReviewDeleteSchema from '../../contracts/productReviewDelete.contract'


describe('Product Reviews', () => {
    it('Criar Product Review', () => {
        var reviewer_email = faker.internet.email()
        cy.postProductReviewWooCommerce(
            tokenFixture.token,
            productReviewFixture.reviewValido.product_id,
            productReviewFixture.reviewValido.review,
            productReviewFixture.reviewValido.reviewer,
            reviewer_email,
            productReviewFixture.reviewValido.rating,
        ).then((response) => {
            var id = response.body.id
            expect(response.status).to.eq(statusFixture.created)
            expect(response.body.product_id).to.eq(productReviewFixture.reviewValido.product_id)
            expect(response.body.review).to.eq(productReviewFixture.reviewValido.review)
            expect(response.body.reviewer).to.eq(productReviewFixture.reviewValido.reviewer)
            expect(response.body.reviewer_email).to.eq(reviewer_email)
            expect(response.body.rating).to.eq(productReviewFixture.reviewValido.rating)
            expect(response.body.id).to.eq(id)
            return productReviewSchema.validateAsync(response.body),
                cy.deleteProductReviewWooCommerce(
                    id,
                    tokenFixture.token,
                    productReviewFixture.reviewDelete.force,
                )
        })
    })


    it('Editar Product Review', () => {
        var reviewer_email = faker.internet.email()
        cy.postProductReviewWooCommerce(
            tokenFixture.token,
            productReviewFixture.reviewValido.product_id,
            productReviewFixture.reviewValido.review,
            productReviewFixture.reviewValido.reviewer,
            reviewer_email,
            productReviewFixture.reviewValido.rating,

        ).then((response) => {
            var id = response.body.id
            cy.putProductReviewWooCommerce(
                productReviewFixture.reviewUptate.rating,
                id,
                tokenFixture.token,
            ).then((response) => {
                expect(response.status).to.eq(statusFixture.ok)
                expect(response.body.rating).to.eq(productReviewFixture.reviewUptate.rating)
                expect(response.body.id).to.eq(id)
                return productReviewSchema.validateAsync(response.body),
                    cy.deleteProductReviewWooCommerce(
                        id,
                        tokenFixture.token,
                        productReviewFixture.reviewDelete.force,
                    )
            })
        })
    })


    it('Deletar Product Review', () => {
        var reviewer_email = faker.internet.email()
        cy.postProductReviewWooCommerce(
            tokenFixture.token,
            productReviewFixture.reviewValido.product_id,
            productReviewFixture.reviewValido.review,
            productReviewFixture.reviewValido.reviewer,
            reviewer_email,
            productReviewFixture.reviewValido.rating,
        ).then((response) => {
            var id = response.body.id
            cy.deleteProductReviewWooCommerce(
                id,
                tokenFixture.token,
                productReviewFixture.reviewDelete.force,
            ).then((response) => {
                expect(response.status).to.eq(statusFixture.ok)
                expect(response.body.deleted).to.eq(productReviewFixture.reviewDelete.deleted)
                return productReviewDeleteSchema.validateAsync(response.body)
            })
        })
    })
})