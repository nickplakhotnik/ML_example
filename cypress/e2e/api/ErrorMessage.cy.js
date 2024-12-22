import {ENDPOINTS} from "../../constants/endpoints";
import {SentimentAnalysisService} from "../../requests/sentimentAnalysisService";
import {STATUS_CODES} from "../../constants/statusCodes";

describe("Sentiment Analysis API", () => {
    const sentimentService = new SentimentAnalysisService(ENDPOINTS.PREDICT);

    it("Should return predictions for valid input", () => {
        const texts = ["I love coding!", "This is awful."];

        sentimentService.predict(texts).then((response) => {
            expect(response.status).to.equal(STATUS_CODES.OK);
            expect(response.body).to.have.length(2);
            expect(response.body[0]).to.have.property("label");
            expect(response.body[0]).to.have.property("score");
        });
    });

    it("Should return 400 for invalid input", () => {
        cy.request({
            method: "POST",
            url: ENDPOINTS.PREDICT,
            failOnStatusCode: false,
            body: {},
        }).its("status").should("equal", STATUS_CODES.BAD_REQUEST);
    });
});