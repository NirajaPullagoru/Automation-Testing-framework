var Keywords = require('../framework/keywords.js');
var keywords = new Keywords();
var Driver = require('../framework/driver.js');
var driver = new Driver();
var data = require('../config.json');
var promisesArr = [];
main()

function main() {

    driver.openBrowserDriver('chrome', function (newDriver, newBy) {
        newDriver.manage().window().maximize()
            .then(function () {
                return newDriver.get(data.url)
            })
            .then(function () {
                return keywords.clickusingEnter(newDriver, newBy, "//*[contains(text(),'Login')]")
            })
            .then(function () {
                return keywords.change(newDriver, newBy, "//*[@name='email']", data.email)
            })
            .then(function () {
                return keywords.change(newDriver, newBy, "//*[@id='password']", data.password)
            })
            .then(function () {
                // Waiting because we don't have explicit wat in click keywork to check the disabled status
                return keywords.wait(newDriver, 5000)
            })
            .then(function () {
                return keywords.clickusingEnter(newDriver, newBy, "//input[@class='btn btn-success btn-signup full-width']")
            })
            .then(function () {
                // Waiting because we don't have explicit wat in click keywork to check the disabled status                
                return keywords.wait(newDriver, 3000)
            })
            .then(function () {
                return keywords.click(newDriver, newBy, "(//*[@class='fa fa-caret-up fa-3x icon-style'])[1]")
            })
            .then(function () {
                return keywords.click(newDriver, newBy, "//*[@id='cg-busy-po']/section/div/div[1]/div/div/div/div[2]/a")
            })
            .then(function () {
                return keywords.change(newDriver, newBy, "//*[@name='title']", "Testing")
            })
            .then(function () {
                return keywords.click(newDriver, newBy, "//*[@id='ngdialog1']/div[2]/div/div/div/div[3]/div/div[2]/button[1]")
            })
            // Assert inner HTML
            .then(function () {
                return keywords.assertValue(newDriver, newBy, "//*[contains(text(),'Recaptcha required')]", "Recaptcha required")
            })
            .then(function () {
                // Waiting because we don't have explicit wat in click keywork to check the disabled status                
                return keywords.wait(newDriver, 3000)
            })
            .then(function () {
                return keywords.close(newDriver)
            })
            .catch(function (err) {
                console.log(`Error in main1 : ${err}`)
            })
    })
}