module.exports = function () {
    var _this = this;
    var stepResult = {};
    var webdriver = require('selenium-webdriver');
    var windowHandlerArray = [];

    /**
     * 
     * @param {*} driver 
     * @param {*} time 
     */
    this.wait = function (driver, time) {
        return driver.sleep(time)
    }

    this.clickusingEnter = function (driver, by, locator) {
        return driver
            .wait(webdriver.until.elementLocated(by.xpath(locator)), 20000, 'Could not locate the child element within the time specified')
            .then(() => {
                return driver.findElement(by.xpath(locator)).sendKeys(webdriver.Key.ENTER)
            })
    }

    this.click = function (driver, by, locator) {
        return driver
            .wait(webdriver.until.elementLocated(by.xpath(locator)), 20000, 'Could not locate the child element within the time specified')
            .then(() => {
                return driver.findElement(by.xpath(locator)).click();
            })
    }

    this.clickusingjavascript = function (driver, by, locator) {
        return driver
            .wait(webdriver.until.elementLocated(by.xpath(locator)), 20000, 'Could not locate the child element within the time specified')
            .then(() => {
                return driver.executeScript(" var eveObj = document.querySelector('" + locator + "'); var event = document.createEvent('Events'); event.initEvent('click', true, false);eveObj.dispatchEvent(event)", "")
            })
    }

    this.change = function (driver, by, locator, value) {
        return driver
            .wait(webdriver.until.elementLocated(by.xpath(locator)), 20000, 'Could not locate the child element within the time specified')
            .then(() => {
                return driver.findElement(by.xpath(locator)).sendKeys(value)
            })

    }

    this.close = function (driver) {
        return driver.quit()
    }

    this.assertValue = function (driver, by, locator, expectedValue) {
        return new Promise((resolve, reject) => {
            driver
                .wait(webdriver.until.elementLocated(by.xpath(locator)), 20000, 'Could not locate the child element within the time specified')
                .getAttribute('innerHTML')
                .then((actualValue) => {
                    expect(expectedValue).to.equal(actualValue);
                    resolve("assertValue");
                })
                .catch((err) => {
                    resolve(err)
                })
        })
    }

    this.assertVisible = function (driver, by, locator) {
        return driver
            .wait(webdriver.until.elementLocated(by.xpath(locator)), 20000, 'Could not locate the child element within the time specified')
            .then(() => {
                return driver.findElement(by.xpath(locator))
            })
    }

}