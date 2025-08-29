class addcart{
    open() {
        return browser.url('https://www.automationexercise.com/');
    }
    get cookie(){
        return $('//p[text()="Consent"]');
    }
    get logo() {
        return $('img[alt="Website for automation practice"]');
    }
    get prodbtn() {
        return $("//a[@href='/products']");
    }
    get itemtoadd() {
        return $("//div[@class='col-sm-9 padding-right']//div[2]//div[1]//div[1]//div[2]");
    }
    get firstProd() {
    return $('//a[@data-product-id="1" and contains(text(),"Add to cart")]');
  }
    get contibtn() {
        return $("//button[@class='btn btn-success close-modal btn-block']");
    }
    get hoveritem() {
        return $("//div[3]//div[1]//div[1]//div[2]");
    }
    get secondprod() {
        return $('//a[@data-product-id="2" and contains(text(),"Add to cart")]');
    }
    get viewcart() {
        return $("//u[normalize-space()='View Cart']");
    }
    get prodfirstname() {
        return $("//a[normalize-space()='Blue Top']");
    }
    get prodsecondname() {
        return $("//a[normalize-space()='Men Tshirt']");
    }
    get price(){
        return $("//td[@class='cart_price']//p[contains(text(),'Rs. 500')]");
    }
    get quantity() {
        return $("//tr[@id='product-1']//button[@class='disabled'][normalize-space()='1']");
    }
    get total() {
        return $("//p[@class='cart_total_price'][normalize-space()='Rs. 500']");
    }
   
    get cartHeading() {
        return $("//li[@class='active']");
    }
    get xbtn() {
        return $("//tr[@id='product-1']//i[@class='fa fa-times']");
    }
    get emptyCart() {
        return $("//a[normalize-space()='Blue Top']");
    }
 
   async secondtest (){
    await browser.url('https://www.automationexercise.com/');
    await this.cookie.click();
    await this.logo.isDisplayed();
    await this.prodbtn.click();
    await this.itemtoadd.moveTo();
    await this.firstProd.click();
    await this.firstProd.scrollIntoView();
    await this.contibtn.click();
    await this.hoveritem.moveTo();
    await this.secondprod.click();
    await this.viewcart.click();
    await expect(this.prodfirstname).toBeDisplayed();
    await expect(this.prodsecondname).toBeDisplayed();
    await expect(this.price).toBeDisplayed();
    await expect(this.quantity).toBeDisplayed();
    await expect(this.total).toBeDisplayed();
   
   }
 
   async thirdtest (){
    await this.cartHeading.isDisplayed();
    await this.xbtn.click();
    await this.emptyCart.isDisplayed();
 
   }
 
}
 
 
 
export default new addcart();