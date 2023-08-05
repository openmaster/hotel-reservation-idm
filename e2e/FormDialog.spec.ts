import { test, expect  } from '@playwright/test';

const pageUrl = "/hotel-reservation-idm"

test('Should have title', async ({ page }) => {
  await page.goto(pageUrl);
  const addButton = page.getByRole('button', { name: 'Add New Reservation' });
  await addButton.click()
  await expect(page.getByRole('heading', { name: 'Your Reservation Details' })).toBeInViewport()
});

test('Should have all the required form controls', async ({ page }) => {
  await page.goto(pageUrl);
  const addButton = page.getByRole('button', { name: 'Add New Reservation' });
  await addButton.click()

  await expect(page.getByPlaceholder('MM/DD/YYYY').first()).toBeVisible()
  await expect(page.getByPlaceholder('MM/DD/YYYY').nth(1)).toBeVisible()
  await expect(page.getByText('Room Size')).toBeVisible()
  await page.getByLabel('Room Quantity').click()
  await expect(page.getByLabel('Room Quantity')).toBeVisible()
  await page.getByLabel('Room Quantity').press('Tab')
  await expect(page.getByLabel('First Name')).toBeVisible()
  await page.getByLabel('First Name').press('Tab')
  await expect(page.getByLabel('Last Name')).toBeVisible()
  await page.getByLabel('Last Name').press('Tab')
  await expect(page.getByLabel('Email')).toBeVisible()
  await page.getByLabel('Email').press('Tab')
  await expect(page.getByLabel(/^Phone Number/i)).toBeVisible()
  await page.getByLabel(/^Phone Number/i).press('Tab')
  await expect(page.getByLabel('Street Name')).toBeVisible()
  await page.getByLabel('Street Name').press('Tab')
  await expect(page.getByLabel('Street Number')).toBeVisible()
  await page.getByLabel('Street Number').press('Tab')
  await expect(page.getByLabel('Zip')).toBeVisible()
  await page.getByLabel('Zip').press('Tab')
  await expect(page.getByLabel('State')).toBeVisible()
  await page.getByLabel('State').press('Tab')
  await expect(page.getByLabel('City')).toBeVisible()
  await page.getByLabel('City').press('Tab')
  await expect(page.getByLabel('Room Size')).toBeVisible()
  
  await expect(page.getByLabel('Cash')).toBeVisible()
  await expect(page.getByLabel('Credit Card')).toBeVisible()
  await expect(page.getByLabel('Pay pal')).toBeVisible()
  await expect(page.getByLabel('Bitcoin')).toBeVisible()
  await page.getByLabel('Personal Notes').click()
  await expect(page.getByLabel('Personal Notes')).toBeVisible()
  await page.tap
  await expect(page.getByPlaceholder('Type and press enter')).toBeVisible()
  await expect(page.getByLabel('Send me a reminder')).toBeVisible()
  await expect(page.getByLabel('Subscribe to newsletter')).toBeVisible()
  await expect(page.getByLabel('I confirm the information given above')).toBeVisible()
  await expect(page.getByRole('button', { name: 'Cancel' })).toBeVisible()
  await expect(page.getByRole('button', { name: 'Add' })).toBeVisible()
});

interface IUserInputs {
  value: string
  expectation: boolean
}
const emailCheckData: IUserInputs[] =[
  {value: 'test', expectation: false},
  {value: 'test@sample', expectation: false},
  {value: 'test@sample.com', expectation: true}
]

const validationCheck = async (testTitle: string, label: RegExp, errorMsg: RegExp, usrInput: IUserInputs[] | string) => {
  test(testTitle, async ({ page }) => {
    await page.goto(pageUrl);
    const addButton = page.getByRole('button', { name: 'Add New Reservation' });
    await addButton.click()
    await page.getByLabel(label).click()
    if (Array.isArray(usrInput)) {
      for(let i = 0; i < usrInput.length; i++ ) {
        await page.getByLabel(label).clear()
        await expect(page.getByText(errorMsg)).toBeVisible()
        await expect(page.getByRole('button', { name: 'Add' })).toBeDisabled()
        await page.getByLabel(label).click()
        await page.getByLabel(label).fill(usrInput[i].value)
        if(usrInput[i].expectation) {
          await expect(page.getByText(errorMsg)).not.toBeVisible()  
        } else {
          await expect(page.getByText(errorMsg)).toBeVisible()
        }
      }

    } else {
      await page.getByLabel(label).click()
      await page.getByLabel(label).clear()
      await expect(page.getByText(errorMsg)).toBeVisible()
      await expect(page.getByRole('button', { name: 'Add' })).toBeDisabled()
      await page.getByLabel(label).fill(usrInput)
      await expect(page.getByText(errorMsg)).not.toBeVisible()
    }
  
    
  })
}

validationCheck('FirstName validation check', new RegExp(/First Name/i), new RegExp(/Please enter your first Name/i), 'Fname test')
validationCheck('LastName validation check', new RegExp(/Last Name/i), new RegExp(/Please enter your last Name/i), 'lname Test')
validationCheck('Email validation check', new RegExp(/Email/i), new RegExp(/Please enter a valid email/i), emailCheckData)