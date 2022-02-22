const {Builder, Capabilities, By}  = require('selenium-webdriver')



require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5501/movieList/index.html')
})
afterAll(async () => {
    await driver.quit('http://127.0.0.1:5501/movieList/index.html')
})



test('add a movie', async () => {
    
    
    const inputField = await driver.findElement(By.xpath('//input'))
    await inputField.sendKeys('F9\n')
    await driver.sleep(2000)
    
    
    const movieButton = await driver.findElement(By.css('button'))
    await movieButton.click()
    await driver.sleep(2000)
    
    
    const deleteBtn = await driver.findElement(By.id('F9'))
    await deleteBtn.click()
    await driver.sleep(500)

    const message = await driver.findElement(By.id('message')).getText()

    expect(message).toBe(`F9 deleted!`)
    await driver.sleep(2000)
})