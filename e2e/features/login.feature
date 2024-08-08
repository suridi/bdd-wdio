Feature: Login

    Scenario: Verify that user is able to login to site successfully
        Given user has launched the browser with the tutorials ninja site url
        When user enters valid credentials 
        And clicks on login button
        Then user should be able to login into the site successfully