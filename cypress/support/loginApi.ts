export const loginByApi = (username: string, password: string) => {
  cy.clearCookies().then(() => {
    cy.request({
        method: 'POST',
        url: 'https://demo.1crmcloud.com/json.php?action=login', 
        form: true,
        body: {
            res_width: 1920,
            res_height: 911,
            username: username,
            password: password,
            captcha: '',
            remember: '',
            language: 'en_us',
            theme: 'Flex',
            login_module: '',
            login_action: '',
            login_record: '',
            login_layout: '',
            mobile: '0',
            gmto: -60,
            in_frame: false
        }
    }).then((response) => {
        console.log('Request Body:', {
            res_width: 1920,
            res_height: 911,
            username: username,
            password: password,
            captcha: '',
            remember: '',
            language: 'en_us',
            theme: 'Flex',
            login_module: '',
            login_action: '',
            login_record: '',
            login_layout: '',
            mobile: '0',
            gmto: -60,
            in_frame: false
        });
        cy.log('Response Headers:', JSON.stringify(response.headers));
        cy.log('Response Body:', JSON.stringify(response.body));
        cy.log('Response Status:', JSON.stringify(response.status));
      });
    });
};

   