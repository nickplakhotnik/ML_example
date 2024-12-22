export class SentimentAnalysisService {
    endpoint;

    constructor(endpoint) {
        this.endpoint = endpoint;
    }

    async predict(texts) {
        return cy.request("POST", this.endpoint, { text: texts });
    }
}