Feature: Registration on website

  Scenario: As a user, I should be able to register on the website

    Given User is on application homepage url "/"
    When User click on signin button
    # Then I should be able to see Authentication page
    When I enter email as "abcd123@abc.com"
    And I click on create account button
    # Then I should be able to see create account page

  Scenario: As a user should be able to enter personal details for registration
    And I select title checkbox
    And I enter personal information
    When I click on Registration button
    Then verify name on the landing page
    And I click on signout
    And I click on signin

  Scenario: As a user should be able to login successfully
    When I enter Emailaddress as "abcd123@abc.com"
    And I enter password
    And click on Sign in button
    Then verify name on the landing page

  Scenario: As a user should be able to add the item to the cart
    When I entered item in searchBox and click on searchbutton
    And select first item and click on Add to cart button
    And click on proceed to checkout button

  Scenario: As a user should be able to proceed to the checkout page and should be able to verify same product in Payment screen
    When I mouse hover on cart and clicked on Check out
    Then I click on Proceed to checkout button
    And I click on Proceed to checkout button in Address tab
    When I click on terms & conditions checkbox and click on proceed to checkout button on Shipping tab
    Then same product should be available in payment tab

    
    

