class login{
    url:string
    cookie:string
    homepage:string
    SignupLogin:string;
    logintoyouracct:string;
    correctemailaddress:string;
    correctpassword:string;
    loginbtn:string;
    Loggedinasusername:string;
    deleteccountbutton:string;
    acctdeletedmessage:string;



    constructor(){
        this.url= 'http://automationexercise.com';
        this.cookie='//button[@class="fc-button fc-cta-consent fc-primary-button"]'
        this.homepage= '//a[@style="color: orange;"]';
        this.SignupLogin= '//a[@href="/login"]';
        this.logintoyouracct= '//h2[text()="Login to your account"]';
        this.correctemailaddress= '//input[@data-qa="login-email"]';
        this.correctpassword= '//input[@data-qa="login-password"]';
        this.loginbtn= '//button[@data-qa="login-button"]';
        this.Loggedinasusername= '//b[contains(text(),"clement Ukaeru")]';
        this.deleteccountbutton= '//a[@href="/delete_account"]';
        this.acctdeletedmessage= '//div[@class="col-sm-9 col-sm-offset-1"]';

    }

    async loginToAccount (){
        await browser.url(this.url);
        await $(this.cookie).click();
        await $(this.homepage).click();
        await $(this.SignupLogin).click();
        await $(this.logintoyouracct).isDisplayed();
        await $(this.correctemailaddress).setValue('klemstest@gmail.com');
        await $(this.correctpassword).setValue('Mummys1991@');
        await $(this.loginbtn).click();
        await expect ($(this.Loggedinasusername)).toHaveText('clement Ukaeru');
        await $ (this.deleteccountbutton).click();
        await expect ($ (this.acctdeletedmessage)).toBeDisplayed();

    }
    
}
export default new login();