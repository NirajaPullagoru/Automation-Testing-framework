module.exports = function () {
    this.openBrowserDriver = function (browserName, cb) {
        var webdriver = require('selenium-webdriver'),
            By = webdriver.By;

        var driver = null;
        
            driver = new webdriver.Builder()
                        .forBrowser(browserName)
                        .usingServer('http://localhost:4444/wd/hub')
                        .build();    
    
        cb(driver, By);
    }
}