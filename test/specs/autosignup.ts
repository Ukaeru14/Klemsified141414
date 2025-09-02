import autosignup from '../pageobjects/autoexersignuppage.ts';
describe('automation signup', () =>{
  it('should sign up successfully', async () =>{
    await autosignup.autosignup();
 
});
});