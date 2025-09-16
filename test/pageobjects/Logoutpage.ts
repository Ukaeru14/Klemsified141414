class Loggingout{
url:string;
cookie: string
homepagevisiblity:string;
signuplogin:string;
loginpagevisibility:string;
correctemailaddress:string;
password:string;
loginbtn:string
loginpage:string
logoutbtn: string






constructor(){
    this.url = 'http://automationexercise.com';
    this.cookie='//button[@class="fc-button fc-cta-consent fc-primary-button"]'
    this.homepagevisiblity = '//img[@src="/static/images/home/logo.png"]'
    this.signuplogin = '//a[@href="/login"]'
    this.loginpagevisibility = '//h2[text()="Login to your account"]'
    this.correctemailaddress = '//input[@data-qa="login-email"]'
    this.password = '//input[@data-qa="login-password"]'
    this.loginbtn = '//button[@data-qa="login-button"]'
    this.loginpage = '//i[@class="fa fa-user"]'
    this.logoutbtn = '//a[@href="/logout"]'


}

async log(){
    await browser.url(this.url);
    await $(this.cookie).click();
    await expect ($(this.homepagevisiblity)).toBeDisplayed();
    await $(this.signuplogin).click();
    await expect ($(this.loginpagevisibility)).toExist();
    await $(this.correctemailaddress).setValue('klemstest@gmail.com');
    await $(this.password).setValue('Mummys1991@');
    await $(this.loginbtn).click();
    await expect ($(this.loginpage)).toBeExisting();
    await $(this.logoutbtn).click();



}

}
export default new Loggingout();