import Login from "../pageobjects/loginginpage.ts"; 
describe("Automation Exercise - Login", () => {
    
    it("should log in successfully with valid credentials", async () => {
        await Login.loginToAccount();
    })
})