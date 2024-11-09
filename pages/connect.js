// connect.js
const { showConnect } = window['@stacks/connect'];

document.getElementById('connect-wallet').addEventListener('click', () => {
  showConnect({
    appDetails: {
      name: 'Your App Name',
      icon: window.location.origin + '/your-icon.png', // URL to an icon for your app
    },
    redirectTo: '/',
    onFinish: (authResponse) => {
      console.log('Wallet connected!', authResponse);
      // Here you can handle what happens after authentication, e.g., store user data.
    },
    userSession: new window['@stacks/auth'].UserSession({
      appConfig: new window['@stacks/auth'].AppConfig(['store_write', 'publish_data']),
    }),
  });
});
