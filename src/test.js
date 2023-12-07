const { Builder, By, until } = require("selenium-webdriver");
async function loginTest() {
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    await driver.get("https://vladimirolishevsky.github.io/demoSeleniumProject/");
    await driver.findElement(By.name("Username")).sendKeys("student");
    await driver.findElement(By.name("Password")).sendKeys("Password123");
    await driver.findElement(By.className("submit-button")).click();
    await driver.findElement(By.xpath("//*[text()='Logged In Successfully']"));
    await driver.sleep(5000);
  } catch(err) {
    console.log(err);
    console.log("test failed")
  } finally {
    await driver.quit();
  }
}
loginTest();