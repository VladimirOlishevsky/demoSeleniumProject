const { Builder, By, until } = require("selenium-webdriver");
async function loginTest() {
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    await driver.get("https://vladimirolishevsky.github.io/demoSeleniumProject/");
    await driver.findElement(By.name("Username")).sendKeys("student");
    await driver.findElement(By.name("Password")).sendKeys("Password123");
    await driver.findElement(By.className("submit-button")).click();
  } catch(err) {
    console.log(err);
    console.log("test failed")
  } finally {
    await driver.quit();
  }
}
loginTest();