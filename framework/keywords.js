module.exports = function () {
    var _this = this;
    var stepResult = {};
    var webdriver = require('selenium-webdriver');
    var windowHandlerArray = [];
    var chai = require('chai');
    var chaiAsPromised = require('chai-as-promised');
    chai.use(chaiAsPromised);
    var expect = chai.expect;

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
                driver.findElement(by.xpath(locator)).sendKeys(webdriver.Key.ENTER).then(() => {
                    return ("Click executed")
                })
            })
    }

    this.click = function (driver, by, locator) {
        return driver
            .wait(webdriver.until.elementLocated(by.xpath(locator)), 20000, 'Could not locate the child element within the time specified')
            .then(() => {
                driver.findElement(by.xpath(locator)).click().then(() => {
                    return ("Click executed")
                })
            })
    }

    this.clickusingjavascript = function (driver, by, locator) {
        return driver
            .wait(webdriver.until.elementLocated(by.xpath(locator)), 20000, 'Could not locate the child element within the time specified')
            .then(() => {
                driver.executeScript(" var eveObj = document.querySelector('" + locator + "'); var event = document.createEvent('Events'); event.initEvent('click', true, false);eveObj.dispatchEvent(event)", "").then(() => {
                    return ("Click executed")
                })
            })
    }

    this.change = function (driver, by, locator, value) {
        return driver
            .wait(webdriver.until.elementLocated(by.xpath(locator)), 20000, 'Could not locate the child element within the time specified')
            .then(() => {
                driver.findElement(by.xpath(locator)).sendKeys(value).then(() => {
                    return ("Change executed")
                })
            })
    }

    this.close = function (driver) {
        driver.quit().then(() => {
            return ("Close browser executed")
        })
    }

    this.assertValue = function (driver, by, locator, expectedValue) {
        return new Promise((resolve, reject) => {
            driver
                .wait(webdriver.until.elementLocated(by.xpath(locator)), 20000, 'Could not locate the child element within the time specified')
                .getAttribute('innerHTML')
                .then((actualValue) => {
                    expect(expectedValue).to.equal(actualValue)
                    resolve("assertValue");
                })
                .catch((err) => {
                    reject(err)
                })
        })
    }

    this.assertVisible = function (driver, by, locator) {
        return driver
            .wait(webdriver.until.elementLocated(by.xpath(locator)), 20000, 'Could not locate the child element within the time specified')
            .then(() => {
                driver.findElement(by.xpath(locator)).then(() => {
                    return ("assertVisible executed")
                })
            })
    }

    this.numberofFrames = function (driver, by) {
        driver.findElements(by.tagName("iframe")).size().then((size) => {
            return ("size", size)
        })
    }

    this.switchToFrame = function (driver, by, locator) {
        return driver
            .wait(webdriver.until.elementLocated(by.xpath(locator)), 20000, 'Could not locate the child element within the time specified')
            .then((elem) => {
                driver.switchTo().frame(elem).then(() => {
                    return ("switchToFrame executed")
                })
            })
    }

    this.switchToDefault = function (driver) {
        return driver.switchTo().defaultContent()
            .then(() => {
                return ("switchToDefault executed");
            })
    }

}