import { test, expect, selectors } from '@playwright/test';
import { link } from 'node:fs';

test('Get by role', async ({ page }) => {
    await page.goto('https://demoapp-sable-gamma.vercel.app/')
    await page.getByRole('link', { name: 'Bài 2: Playwright Locators' }).click()
    // await page.getByRole('button', { name: 'Playwright getByRole' }).click()

    // await page.getByRole('button', { name: 'Bài tập' }).nth(1).click()


    //await page.getByRole('button', { name: 'Bold', pressed: true }).click()
    // await page.getByRole('button', {name: 'More options', expanded: false}).click()
    // await page.getByRole('menuitem', { name: 'Duplicate'}).click()
    // const menuDownload = page.getByRole('menuitem', {name: 'Download (disabled)', disabled: true })
    // expect(menuDownload).toBeVisible()
    // await page.getByRole('combobox', {name: 'Font family'}).click()
    // await page.getByRole('option', {name: 'Roboto'}).click()
    // await page.getByRole('textbox', {name: 'Tiêu đề'}).fill('Bài viết mới')
    // const btnPublish =  page.getByRole('button', {name: 'Publish', disabled: true})
    // await expect(btnPublish).toBeVisible()

    await page.getByRole('button',{name: 'CSS Selector'}).click()
    // await page.locator('#username-input').fill('Phuong')
    // await page.locator('#password-input').fill('Phuong')
    // await page.locator('#login-submit-btn').click()

    // await page.locator('.edit-profile-btn').dblclick()
    // await page.pause()

    await page.getByRole('button', {name: 'Bài tập'}).nth(1).click()
    // const sanPhamGiamGia = await page.locator('.product-card .discount-badge').count()
    // await page.locator('.product-card .add-cart')
    // console.log('so luong san pham: ', sanPhamGiamGia)
    // const soLuongsanPhamGiamGia = await page.locator('[class*="product-card"] [class*="out-of-stock"]').count()
    // console.log(soLuongsanPhamGiamGia)

    // const soLuongInactive = await page.locator('.user-table .status-badge.inactive').count()
    // console.log(`so luong inactive: ${soLuongInactive}`)

    // await page.locator('.user-table .user-row[data-user-id ="002"] .btn-delete').hover()
    // const text = await page.locator('.user-table>tbody>tr:last-child').allTextContents()
    // console.log(text)

    // await page.locator('.registration-form .invalid').hover()
    // await page.locator('.registration-form [data-field="email"] .error-message').hover()
    // await page.locator('.registration-form .btn-primary:disabled').hover()


    // await page.locator('.modal-overlay.active').hover()
    // await page.locator('.setting-checkbox:checked').hover()
    // await page.locator('.modal-header .btn-close').hover()



    await page.pause()


})

test ('xPath', async ({page}) =>{
      await page.goto('https://demoapp-sable-gamma.vercel.app/');

    await page.getByRole('link', { name: 'Bài 2: Playwright Locators' }).click();
    await page.getByRole('button', { name: 'XPath Selector' }).click();
    await page.getByRole('button', {name: 'Bài tập'}).nth(1).click()

    await page.locator('//button[text()="Add to Cart"]').count()
    await page.locator('//div[@data-category="electronics"]').hover()
    await page.locator('//button[text()="Add to Cart"]/ancestor::div[@class = "product-card"]').count()
    await page.locator('//div[@class="product-card" and @data-category="clothing"]').hover()
    await page.locator('//div[@class="product-card"]/h4[contains(text(), "iPhone")]').hover()


    await page.locator('//div[@class="user-card" and @data-role="admin" and @data-status = "active"]').hover()
    await page.locator('//div[@class="user-card"]//button[@class="btn-primary" or @class = "btn-secondary"]').hover()

    
    //await page.pause()
})