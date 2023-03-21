const { addInternationalCode } = require('./addInternationPrefix');

test('addInternationalCode_whenPhoneNumberIs3294121360AndInternationalCodeIs39_thenReturns+393294121360', () => {
    const phoneNumber1 = "3294121360";
    const internationalCode = "39";
    expect(addInternationalCode(phoneNumber1, internationalCode)).toBe("+393294121360");
  });

test('addInternationalCode_whenPhoneNumberIs393294121360AndInternationalCodeIs39_thenReturns+393294121360', () => {
    const phoneNumber1 = "393294121360";
    const internationalCode = "39";
    expect(addInternationalCode(phoneNumber1, internationalCode)).toBe("+393294121360");
  });  

test('addInternationalCode_whenPhoneNumberIs+12025550152AndInternationalCodeIs1_thenReturns+12025550152', () => {
    const phoneNumber1 = "+12025550152";
    const internationalCode = "1";
    expect(addInternationalCode(phoneNumber1, internationalCode)).toBe("+12025550152");
  });

 test('addInternationalCode_whenPhoneNumberIs1234567890AndInternationalCodeIs44_thenReturns+441234567890', () => {
    const phoneNumber1 = "1234567890";
    const internationalCode = "44";
    expect(addInternationalCode(phoneNumber1, internationalCode)).toBe("+441234567890");
  });   

