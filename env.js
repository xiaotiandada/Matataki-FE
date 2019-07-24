module.exports = {
  development: {
    VUE_APP_API: 'https://apitest.smartsignature.io',
    VUE_APP_URL: 'https://test.smartsignature.io',
    VUE_APP_SIGNATURE_CONTRACT: 'dragonquest2',
    VUE_APP_SCRIPT_HASH: '36df9722fc0ff5fa3979f2a844a012cabe1d4c56',
    VUE_APP_GITHUB_CLIENT_ID: '889e6eafa77e2e87a08c',
  },
  production: {
    VUE_APP_API: 'https://api.smartsignature.io',
    VUE_APP_URL: 'https://smartsignature.io',
    VUE_APP_SIGNATURE_CONTRACT: 'signature.bp',
    VUE_APP_SCRIPT_HASH: '36df9722fc0ff5fa3979f2a844a012cabe1d4c56',
    VUE_APP_GITHUB_CLIENT_ID: '21cc5341ef03f40cd5a4',
  }
}