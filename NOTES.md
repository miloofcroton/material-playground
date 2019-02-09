Learn more about service workers: https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#making-a-progressive-web-app

implement CSP: https://material-ui.com/css-in-js/advanced/#content-security-policy-csp



Design concepts:

- src
  - assets
    - for holding stuff like logos and other images
      - keeping this stuff in one place is good for asset management by webpack (optimizing builds)
  - data
    - see other notes
  - views
    - Content has many mini apps
      - each app has:
        - index.js
          - some app-level styles
          - most/all of the logic of the mini app
            - functions
            - state
        - pages/panes for the mini app
        - styles.js (for mini style components to use in your mini app pages/panes)
    - Layout is the core app (the SPA)
    - Lib doesn't really have apps, unless you expect to use them in several places under content
    - Routes are where you stash routing stuff
    - app.js is the entry point for the app

To fix:
  - routes should go under layout
  - app.js should be index.js of layout
