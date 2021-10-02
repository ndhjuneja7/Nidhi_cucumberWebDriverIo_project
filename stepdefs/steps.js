const { Given, When, Then } = require('@wdio/cucumber-framework');

let productName

Given(/^User is on application homepage url "(.*)"$/, url => {
    browser.url('');
});

When(/^User click on signin button$/, () => {
    const mySignInButton = $('//a[contains(text(),"Sign in")]')
    mySignInButton.click()
});

Then(/^I should be able to see Authentication page$/,  () => {
    const authenticationText =  $("//h1")
    authenticationText.isDisplayed()
});

When(/^I enter email as (.*)$/, emailAddress => {
     $('#email_create').setValue(emailAddress);
});

And(/^I click on create account button$/, () => {
     $('#SubmitCreate').click()
});

Then(/^I should be able to see create account page$/,  () => {
     $("//h1").isDisplayed()
});

And(/^I select title checkbox$/,  () => {
     $("id_gender2").click()
});

And(/^I enter personal information$/, () => {
     $("#customer_firstname").setValue("ABCD");
     $("#customer_lastname").setValue("EFGH");
     $("#passwd").setValue("1234");
     $("select#days").selectByIndex(2);
     $("select#months").selectByIndex(2);
     $("select#years").selectByVisibleText('1990');
     $("#address1").setValue("Hello street, abcd, abcd");  
     $("#city").setValue("ABCD");
     $("select#uniform-id_state").selectByVisibleText('New York');
     $("#postcode").setValue("546457"); 
     $("#phone_mobile").setValue("0000000000");   
});

When(/^I click on Registration button$/,  () => {
     $("#submitAccount").click()
});

When(/^verify name on the landing page$/,  () => {
    const nameText = $('//a[@title="View my customer account"]')
    Assert.assertTrue("Text not found!", nameText.contains("ABCD DEFG"));
});

And (/^I click on signout$/, () => {
    const signOutButton =  $(".logout")
    signOutButton.click()
});

And (/^I click on signin$/, () => {
    const signInButton =  $(".login")
    signInButton.click()
});

And (/^I enter Emailaddress as (.*)$/, emailAddress => {
    const emailAddressText =  $("#email")
    emailAddressText.setValue(emailAddress)
});

And (/^I enter password$/, () => {
    const pwdText =  $("#passwd")
    pwdText.setValue("Qygme123")
});

And (/^click on Sign in button$/, () => {
    const signInButton =  $("#SubmitLogin")
    signInButton.click()
});

When (/^I entered item in searchBox and click on searchbutton$/, () => {
    $("#search_query_top").setValue("dress")
    $('(//button[@type="submit"])[1]').click()
});

And (/^select first item and click on Add to cart button$/, () => {
    productName = $(".product-name").getText()
    $(".product-name").click()
    $("//button[@name='Submit']").click()
});

And (/^click on proceed to checkout button$/, () => {
    $("//a[@title='Proceed to checkout']").click()
});

When (/^I mouse hover on cart and clicked on Check out$/, () => {
    $('#//a[@title="View my shopping cart"]').moveTo()
    $('##button_order_cart').click()
});

Then (/^ I click on Proceed to checkout button$/, () => {
    $('//*[text()="Proceed to checkout"]').click()
});

And (/^I click on Proceed to checkout button in Address tab$/, () => {
    $('//*[text()="Proceed to checkout"]').click()
});

And (/^I click on terms & conditions checkbox and click on proceed to checkout button on Shipping tab$/, () => {
    $('#cgv').click()
    $('//*[text()="Proceed to checkout"]').click()
});

Then (/^same product should be available in payment tab$/, () => {
    $('//tr[@id="product_7_34_0_576864"]/td[2]/p').getText().contains(productName);
});






