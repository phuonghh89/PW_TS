import { test, expect } from '@playwright/test';
import { link } from 'node:fs';

test('Get by role', async ({ page }) => {
    await page.goto('https://demoapp-sable-gamma.vercel.app/')
    await page.getByRole('link', { name: 'Bài 2: Playwright Locators' }).click()
    await page.getByRole('button', { name: 'Playwright getByRole'}).click()
    await page.getByRole('button', { name: 'Bài tập' }).click()

    await page.getByRole('button', { name: 'Bold', pressed: true }).click()
    await page.pause()
})