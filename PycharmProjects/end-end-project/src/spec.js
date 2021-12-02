describe('SmartBear Demo', () => {
    it('Should navigate to SmartBear Login Page', () => {
        browser.get('http://secure.smartbearsoftware.com/samples/testcomplete11/WebOrders/login.aspx');
        browser.getCurrentUrl().then((url) => {
        expect(url).toBe('http://secure.smartbearsoftware.com/samples/testcomplete11/WebOrders/login.aspx');
    });


    it('Should accept the user login credentials and login', () => {
        element (by.name ('ctl00$MainContent$username')).sendkeys ('Tester');
        element (by.name ('ctl00_MainContent_password')).sendkeys ('test');
        element (by.name ('ctl00$MainContent$login_button')).click();
        expect(url).toBe('http://secure.smartbearsoftware.com/samples/TestComplete11/WebOrders/default.aspx');
     });


    it('Should go to view all order page and check title', () => {
        element (by.linkText ('View all orders')).click();
        expect(title).toBe('List of All Orders');
    }); 

    it('Should go to view all product page and check title', () => {
        element (by.linkText ('View all products')).click();
        expect(title).toBe('List of Products');
    }); 

    it('Should go to orders page and check title', () => {
        element (by.linkText ('Order')).click();
        expect(title).toBe('Order');
    });
});
});
