describe('Full test', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have home screen', async () => {
    await expect(element(by.text('PartyPanner'))).toBeVisible();
  });

  it('should show edit screen after tap and go back', async () => {
    await element(by.text('Add party')).tap();
    await expect(element(by.text('Edit party'))).toBeVisible();
    await element(by.text('PartyPanner')).tap();
    await expect(element(by.id('AddPartyButton'))).toBeVisible();
  });

  it('should save a custom event', async () => {
    await element(by.text('Add party')).tap();
    await expect(element(by.text('Edit party'))).toBeVisible();
    await element(by.id('TitleIN')).typeText('Testing');
    await element(by.id('DescIN')).typeText('Describing');
    //await element(by.id('SaveButton')).tap();
    //This test doesn't continue 
    //because the OS modals for Calendar and Share don't pop up
    //and aren't interactive
  });
});
