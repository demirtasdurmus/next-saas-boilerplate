import { ApiCheck, AssertionBuilder } from 'checkly/constructs';

// eslint-disable-next-line no-new
new ApiCheck('books-api-check-1', {
  name: 'Books API',
  alertChannels: [],
  degradedResponseTime: 10000,
  maxResponseTime: 20000,
  request: {
    url: 'https://danube-web.shop/api/books',
    method: 'GET',
    followRedirects: true,
    skipSSL: false,
    assertions: [
      AssertionBuilder.statusCode().equals(200),
      AssertionBuilder.jsonBody('$[0].id').isNotNull(),
    ],
  },
  runParallel: true,
});
