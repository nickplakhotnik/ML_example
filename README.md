## Technologies

Project is created with:

- Cypress version: ^13.1.0
- Page Object pattern\*
- ESLint configuration

- Install dependencies: `npm install`

## How to

- Run server: `py server/app.py`
- Open Cypress runner and debug tests `npm cypress run`
- Run QR tests `npm run cy:complex`

## About Cypress

- JavaScript End to End Testing Framework.
- Cypress has been made specifically for developers and QA engineers, to help them get more done.
- Cypress benefits from our amazing open source community - and our tools are evolving better and faster than if we
  worked on them alone.
- Cypress takes snapshots as your tests run. Simply hover over commands in the Command Log to see exactly what happened
  at each step.
- Debug directly from familiar tools like Chrome DevTools. Our readable errors and stack traces make debugging lightning
  fast.
- Cypress automatically reloads whenever you make changes to your tests.
- Cypress automatically waits for commands and assertions before moving on. No more async hell.

## Directory structure

- **_fixtures_** - contains test data.
- **_page_objects_** - contains the page selectors.
- Inside `support` folder:
    - **_commands.js_** - allows to create custom commands and overwriting existing commands.
    - **_e2e.js_** - allows to put reusable behavior such as custom commands or global overrides that you want applied
      and available to all of your spec files.

## Page object pattern\*

We are using Page Object Model (POM) for almost all of our projects. POM is a design pattern that helps to enhance test
maintenance and reduce code duplication. A few benefits of the POM pattern are given below.

- POM helps in diminishing the level of code duplication.
- POM encourages better upkeep of test information, locators and test capacities.
- POM helps in less upkeep of test structure where we store locators and capacities independently of test contents for
  the simplicity of progress the executives in code.
- Implementation of articles and capacities are isolated from one another, builds the comprehensibility of the code.
  There are two ways of creating page objects in Cypress.