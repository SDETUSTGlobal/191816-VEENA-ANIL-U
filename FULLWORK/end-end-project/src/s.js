
describe('Promise Demo', () => {
    it('Sample', () => {
        browser.get('https://www.freelancer.in/login');
        browser.getCurrentUrl().then((url) => {
            expect(url).toBe('https://www.freelancer.in/login');
        });
    });
    it('Should accept the user login credentials and login', () => {
        //browser.get('https://www.freelancer.in/login');
        element(by.xpath("/html/body/app-root/app-logged-out-shell/app-login-page/fl-container/fl-bit/app-login/app-credentials-form/form/fl-input[1]/fl-bit/fl-bit/input")).sendKeys("veenaanil811");
        element(By.xpath("/html/body/app-root/app-logged-out-shell/app-login-page/fl-container/fl-bit/app-login/app-credentials-form/form/fl-input[2]/fl-bit/fl-bit/input")).sendKeys("Veena12@");
        element(By.xpath("/html/body/app-root/app-logged-out-shell/app-login-page/fl-container/fl-bit/app-login/app-credentials-form/form/app-login-signup-button/fl-button/button")).click();
        browser.getCurrentUrl().then((url) => {
            expect(url).toBe('https://www.freelancer.in/dashboard');
        })

    });
    it('Should go to my list', () => {
        // browser.get('https://www.freelancer.in/dashboard');
        element(by.xpath('/html/body/app-root/app-logged-in-shell/div/div[2]/ng-component/app-navigation-secondary-projects/app-bar/fl-container/nav/fl-scrollable-content/div/app-bar-item[2]/a/fl-bit/fl-text/div')).click();
        browser.getCurrentUrl().then((url) => {
            expect(url).toBe('https://www.freelancer.in/lists/favorites');
        })

    });
    it('Should go to my project', () => {
        browser.get('https://www.freelancer.in/dashboard');
        element(by.xpath('/html/body/app-root/app-logged-in-shell/div/div[2]/ng-component/app-navigation-secondary-projects/app-bar/fl-container/nav/fl-scrollable-content/div/app-bar-item[3]/a')).click();
        browser.getCurrentUrl().then((url) => {
            expect(url).toBe('https://www.freelancer.in/manage/work/projects/open?query=&filter=All&show=10');
        })

    });
    it('Should go to my inbox', () => {
        browser.get('https://www.freelancer.in/dashboard');
        element(by.xpath('/html/body/app-root/app-logged-in-shell/div/div[2]/ng-component/app-navigation-secondary-projects/app-bar/fl-container/nav/fl-scrollable-content/div/app-bar-item[4]/a')).click();
        browser.getCurrentUrl().then((url) => {
            expect(url).toBe('https://www.freelancer.in/messages');
        })

    });
    it('Should go to my project', () => {
        browser.get('https://www.freelancer.in/dashboard');
        element(by.xpath('/html/body/app-root/app-logged-in-shell/div/div[2]/ng-component/app-navigation-secondary-projects/app-bar/fl-container/nav/fl-scrollable-content/div/app-bar-item[5]/a')).click();
        browser.getCurrentUrl().then((url) => {
            expect(url).toBe('https://www.freelancer.in/dashboard/feedback.php?w=f&ngsw-bypass=');
        })

    });


});
