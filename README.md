# BrxSpartacus

This project was generated with [Angular CLI](https://github.com/angular/angular-cli). Please check the documentation
for all the configuration and CLI commands.

## Development server

### Set Environment Varaibles
Configure environment variables in src > environments.ts file


    endpoint: 'http://localhost:8080/delivery/site/v1/channels/spartacus/pages'
    smEndPoint: 'https://pathways.dxpapi.com/api/',
    smSuggestionEndPoint: 'https://suggest.dxpapi.com/api/',
    accountId: 'your_account_id',
    domainKey: 'your_domain_key',
    authKey: 'your_auth_key',
### Install dependencies and run the app as follows:

```bash
npm ci
npm start
```
Navigate to `http://localhost:3000/`. The app will automatically reload if you change
any of the source files.
For more on components and environment varaibles check out the Bloomreach Spartacus Library [documentation](https://www.npmjs.com/package/@bloomreach/brx-spartacus-library).

## Production build

### Environment Varaibles
Configure environment variables(as [here](#set-environment-variables)) in src > environments.prod.ts file 
### Install dependencies and build the app as follows:

```bash
npm ci
npm run build
```

## Other links
* [Bloomreach Saprtacus NPM Library](https://www.npmjs.com/package/@bloomreach/brx-spartacus-library)
* [Bloomreach Saprtacus Storefornt demo](https://brx-spartacus-latest.netlify.app/)
* [Bloomreach Spartacus documentation](https://documentation.bloomreach.com/content/docs/sap-spartacus)
* [brX instance](https://spartacus-sandbox.bloomreach.io/cms/?0)
* [Spartacus Github](https://github.com/SAP/spartacus)
* [Spartacus docs](https://sap.github.io/spartacus-docs)
