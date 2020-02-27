export const environment = {
  production: true,
  // I've decided to add these variables here because
  // (for example) we could deploy the application to sweden and change the default language to swedish.
  // (or another example) we could want our develop environment to route to a test page by default.
  defaultLanguage: 'en',
  defaultPage: '/chat'
};
