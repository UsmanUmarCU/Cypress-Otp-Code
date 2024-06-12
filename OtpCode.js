getEmailAddress(){
  cy.visit('https://temp-mail.io/en')
  cy.get('#email').invoke('attr','title').then(emailIdText=>{
emailId=emailIdText

  })
},
  landOntoWebsite(){
    cy.wait(2000)
    cy.visit('/')
  },
  clickOnContinueWithMail(){
    cy.get('#sign-up-email').click()
  },
  fillSignUpDetails(){
    cy.log(emailId)
    
    cy.get('#first_name').type(randomTextGenerator("test"))
    cy.get('#last_name').type(randomTextGenerator("last"))
    cy.get('#email').type(emailId)
    cy.get('#username').type('MaanCUUser')
    cy.get('#new-password').type('Test12345678')
    cy.pause()
    cy.get('#submitBtn').click()
  },
  clickOnSendVerification(){
    cy.get('#action-btn').click()
    cy.wait(10000)
    
  },
  getOtpMessage(){
    cy.request('https://api.internal.temp-mail.io/api/v3/email/'+emailId+'/messages').then(response=>{
      const responseBody=response.body

     const otpCode= responseBody.body_html.match(/\b\d{6}\b/)
      cy.log(otpCode[2])
      cy.get('#verify').type(otpCode[2])
    })
  },

  verifyAccountCreated(){
    cy.get('#completeVerification').click()
    cy.contains('account created')
  }
  
  
  
  ------------------------------------------------------------------------------------
  Step Defination
  
  
  Given ("User land onto go daddy website",()=>{
  arservice.getEmailAddress()
  arservice.landOntoWebsite()
})

When ("User clicks on continue with email",()=>{
  arservice.clickOnContinueWithMail()
})

And ("User fills signup form details",()=>{
  arservice.fillSignUpDetails()
})

And ("User clicks on send verification code",()=>{
arservice.clickOnSendVerification()
})

And ("User get otp message from email",()=>{
  arservice.getOtpMessage()
})

Then ("User enter the otpCode and verify account created successfully",()=>{
  arservice.verifyAccountCreated()
})
  
  