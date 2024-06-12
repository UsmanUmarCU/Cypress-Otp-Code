Feature: Signup form and validate Otp



    @regression @ar
    Scenario:SignUp Form and validate otp

    Given User land onto go daddy website
    When User clicks on continue with email
    And User fills signup form details
    And User clicks on send verification code
    And User get otp message from email
    Then User enter the otpCode and verify account created successfully