export const environment = {
  production: false,
  auth0: {
    domain: '{your_auth0_domain_here}',
    clientId: '{your_auth0_client_id_here}',
    authorizationParams: {
      redirect_uri: window.location.origin
    }
  },
};
