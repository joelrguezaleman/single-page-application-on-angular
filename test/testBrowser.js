describe('angularCorp browser tests', function() 
{
    beforeEach(function() {
        browser.get('http://localhost:3000');
    });

    it('goes to team page', function() 
    {
        element(by.id('team')).click();
        
        browser.getLocationAbsUrl().then(function(url) {
            expect(url.split('/')[3]).toBe('team');
        });
    });

    it('goes to portfolio page', function() 
    {
        element(by.id('portfolio')).click();
        
        browser.getLocationAbsUrl().then(function(url) {
            expect(url.split('/')[3]).toBe('portfolio');
        });
    });

    it('goes to contact page', function() 
    {
        element(by.id('contact')).click();
        
        browser.getLocationAbsUrl().then(function(url) {
            expect(url.split('/')[3]).toBe('contact');
        });
    });

    it('goes to legal note page', function() 
    {
        element(by.id('legal-note')).click();
        
        browser.getLocationAbsUrl().then(function(url) {
            expect(url.split('/')[3]).toBe('legal-note');
        });
    });

    it('goes to privacy policy page', function() 
    {
        element(by.id('privacy-policy')).click();
        
        browser.getLocationAbsUrl().then(function(url) {
            expect(url.split('/')[3]).toBe('privacy-policy');
        });
    });

    it('goes to licenses page', function() 
    {
        element(by.id('licenses')).click();
        
        browser.getLocationAbsUrl().then(function(url) {
            expect(url.split('/')[3]).toBe('licenses');
        });
    });
});
