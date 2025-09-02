class autosignup{
  test() {
    throw new Error('Method not implemented.');
  }
    get cookie(){
        return $('//p[text()="Consent"]');
    }
get signup(){
    return $("//a[normalize-space()='Signup / Login']");
}
get name(){
    return $("//input[@placeholder='Name']");
}
get emailaddress(){
    return $("//input[@data-qa='signup-email']");
}
get signupbtn(){
    return $("//button[normalize-space()='Signup']");
}
get tittlemr(){
    return $("//input[@id='id_gender1']");
}
get username(){
    return $("//input[@id='name']");
}
get email(){
    return $("//input[@id='email']");
}
get password(){
    return $("//input[@id='password']");
}
get dobday(){
    return $("//select[@id='days']");
}
get dobmonth(){
    return $("//select[@id='months']");
}
get dobyear(){
    return $("//select[@id='years']");
}
get adinfofirstname(){
    return $("//input[@id='first_name']");
}
get adinfolastname(){
    return $("//input[@id='last_name']");
}
get adinfocompany(){
    return $("//input[@id='company']");
}
get firstaddline(){
    return $("//input[@id='address1']");
}
get secondaddline(){
    return $("//input[@id='address2']");
}
get country(){
    return $("//select[@id='country']");
}
get state(){
    return $("//input[@id='state']");
}
get city(){
    return $("//input[@id='city']");
}
get zipcode(){
    return $("//input[@id='zipcode']");
}
get createacct(){
    return $('//button[@data-qa="create-account"]');
}
get acctcreated(){
    return $('//b[contains(normalize-space(),"Account Created")]');
}
get acctcreatedcontbtn(){
    return $('//a[@data-qa="continue-button"]');
}
 
async autosignup(){
await browser.url('https://automationexercise.com');
await this.cookie.click();
await this.signup.click();
await this.name.setValue("Clement Ukaeru");
await this.emailaddress.setValue('cukaeru14@gmail.com');
await this.signupbtn.click();
await this.tittlemr.click();
await expect(this.username).toHaveValue('Clement Ukaeru');
await expect(this.email).toHaveValue('cukaeru14@gmail.com');
await this.password.setValue('Mummys1991@')
await this.dobday.selectByIndex(14);
await this.dobmonth.selectByVisibleText('May');
await this.dobyear.selectByVisibleText('1995');
await this.adinfofirstname.setValue('Clement');
await this.adinfolastname.setValue('Ukaeru');
await this.adinfocompany.setValue('Klemsified');
await this.firstaddline.setValue('28');
await this.secondaddline.setValue('7 clarence street');
await this.country.selectByVisibleText('United States');
await this.state.setValue('Dallas');
await this.city.setValue('Manny');
await this.zipcode.setValue('20012');
await this.createacct.click();
await this.acctcreated.isDisplayed();
await this.acctcreatedcontbtn.isDisplayed();
    
}

}
export default new autosignup();