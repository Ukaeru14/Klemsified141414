import loggingout from"../pageobjects/Logoutpage.ts";
describe("auto logout page", () => {
    
    it("should log out successfully", async () => {
        await loggingout.log();

    })

})

