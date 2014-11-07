describe('angularCorp browser tests', function() 
{
    beforeEach(function() {
        browser.get('http://localhost:3000');
    });

    it('should go to equipo page', function() 
    {
        element(by.id('equipo')).click();
        
        browser.getLocationAbsUrl().then(function(url) {
            expect(url.split('/')[3]).toBe('equipo');
        });
    });

    it('should go to portafolio page', function() 
    {
        element(by.id('portafolio')).click();
        
        browser.getLocationAbsUrl().then(function(url) {
            expect(url.split('/')[3]).toBe('portafolio');
        });
    });

    it('should go to contacto page', function() 
    {
        element(by.id('contacto')).click();
        
        browser.getLocationAbsUrl().then(function(url) {
            expect(url.split('/')[3]).toBe('contacto');
        });
    });

    it('should go to aviso legal page', function() 
    {
        element(by.id('legal')).click();
        
        browser.getLocationAbsUrl().then(function(url) {
            expect(url.split('/')[3]).toBe('aviso-legal');
        });
    });

    it('should go to politica privacidad page', function() 
    {
        element(by.id('politica')).click();
        
        browser.getLocationAbsUrl().then(function(url) {
            expect(url.split('/')[3]).toBe('politica-privacidad');
        });
    });

    it('should go to licencias page', function() 
    {
        element(by.id('licencias')).click();
        
        browser.getLocationAbsUrl().then(function(url) {
            expect(url.split('/')[3]).toBe('licencias');
        });
    });
});
