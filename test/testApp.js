describe('menuController', function()
{
    var scope;
    beforeEach(module('angularCorp'));

    beforeEach(inject(function($controller)
    {
        scope = {};
        $controller('menuController', {$scope:scope});
    }));

    it('should create "menu" with 7 links', inject(function($controller) 
    { 
        expect(scope.menu.length).toBe(7);
    }));

    it('should create "menu" with specific parameters', inject(function($controller) 
    { 
        expect(scope.menu[0].name).toBe('Inicio');
        expect(scope.menu[0].url).toBe('/');
        expect(scope.menu[0].id).toBe('inicio');
        expect(scope.menu[1].name).toBe('Equipo');
        expect(scope.menu[1].url).toBe('/equipo');
        expect(scope.menu[1].id).toBe('equipo');
        expect(scope.menu[2].name).toBe('Portafolio');
        expect(scope.menu[2].url).toBe('/portafolio');
        expect(scope.menu[2].id).toBe('portafolio');
        expect(scope.menu[3].name).toBe('Contacto');
        expect(scope.menu[3].url).toBe('/contacto');
        expect(scope.menu[3].id).toBe('contacto');
        expect(scope.menu[4].name).toBe('Aviso legal');
        expect(scope.menu[4].url).toBe('/aviso-legal');
        expect(scope.menu[4].id).toBe('legal');
        expect(scope.menu[5].name).toBe('Política de privacidad');
        expect(scope.menu[5].url).toBe('/politica-privacidad');
        expect(scope.menu[5].id).toBe('privacidad');
        expect(scope.menu[6].name).toBe('Licencias');
        expect(scope.menu[6].url).toBe('/licencias');
        expect(scope.menu[6].id).toBe('licencias');
    }));
});
