import { test, expect } from '@playwright/test';

test.describe('Trang nhân sự Anh Tester', () => {

  test('Kịch bản đăng nhập và kiểm tra widget', async ({ page, browserName }) => {

    await test.step('Bước 1: Điều hướng và đăng nhập', async () => {

      await page.goto('https://hrm.anhtester.com/');

      await page.locator('#iusername').fill('admin_example');

      await page.locator('#ipassword').fill('password_example');

      await page.getByRole('button', { name: 'Login' }).click();

      await expect(page.locator('.page-header h4')).toHaveText('Welcome back, Admin!');

    });


    await test.step('Bước 2: Kiểm tra các widget cơ bản trên Dashboard', async () => {

      await expect(page.getByText('Employees')).toBeVisible();

      await expect(page.getByText('Projects')).toBeVisible();

    });


    await test.step('Bước 3: Kiểm tra widget đặc biệt (chỉ có trên Chrome)', async (step) => {

      // Bỏ qua bước này nếu trình duyệt không phải là Chromium

      step.skip(browserName !== 'chromium', 'Widget này chỉ được thiết kế cho trình duyệt Chrome.');

     
      console.log(`Đang chạy trên ${browserName}, tiếp tục kiểm tra widget đặc biệt...`);

      // Giả sử có một widget chỉ hiển thị trên Chrome

      await expect(page.locator('#chrome-special-widget')).toBeVisible();

    });


    await test.step('Bước 4: Đăng xuất', async () => {

      await page.getByRole('link', { name: 'Logout' }).click();

      await expect(page).toHaveURL(/.*login/);

    });

  });

});