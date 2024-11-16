"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lambdaHandler = void 0;
/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */
const lambdaHandler = async (event) => {
    try {
        const claims = event.requestContext.authorizer.claims;
        const userId = claims['sub']; // The user ID (Cognito Identity ID)
        const userEmail = claims['email']; // The user's email address
        console.log('User ID:', userId);
        console.log('User Email:', userEmail);
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: 'User information retrieved successfully!',
                userId,
                userEmail,
            }),
        };
    }
    catch (err) {
        console.log(err);
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: 'some error happened',
            }),
        };
    }
};
exports.lambdaHandler = lambdaHandler;
