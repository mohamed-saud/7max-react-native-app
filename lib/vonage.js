const { Vonage } = require('@vonage/server-sdk');

const vonage = new Vonage({
  apiKey: '597e3326',
  apiSecret: 'QJUd3iR43))', // if you want to manage your secret, please do so by visiting your API Settings page in your dashboard
});

export { vonage };
