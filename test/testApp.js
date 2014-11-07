var scope;
beforeEach(module('angularCorp'));

describe('topMenuController', function()
{
    beforeEach(inject(function($controller)
    {
        scope = {};
        $controller('topMenuController', {$scope:scope});
    }));

    it('should create "topMenu" with 4 links', inject(function($controller) 
    { 
        expect(scope.topMenu.length).toBe(4);
    }));

    it('should create "topMenu" with specific parameters', inject(function($controller) 
    { 
        expect(scope.topMenu[0].name).toBe('Inicio');
        expect(scope.topMenu[0].url).toBe('/');
        expect(scope.topMenu[0].id).toBe('inicio');
        expect(scope.topMenu[1].name).toBe('Equipo');
        expect(scope.topMenu[1].url).toBe('/equipo');
        expect(scope.topMenu[1].id).toBe('equipo');
        expect(scope.topMenu[2].name).toBe('Portafolio');
        expect(scope.topMenu[2].url).toBe('/portafolio');
        expect(scope.topMenu[2].id).toBe('portafolio');
        expect(scope.topMenu[3].name).toBe('Contacto');
        expect(scope.topMenu[3].url).toBe('/contacto');
        expect(scope.topMenu[3].id).toBe('contacto');
    }));
});

describe('bottomMenuController', function()
{
    beforeEach(inject(function($controller)
    {
        scope = {};
        $controller('bottomMenuController', {$scope:scope});
    }));

    it('should create "bottomMenu" with 3 links', inject(function($controller) 
    { 
        expect(scope.bottomMenu.length).toBe(3);
    }));

    it('should create "bottomMenu" with specific parameters', inject(function($controller) 
    { 
        expect(scope.bottomMenu[0].name).toBe('Aviso legal');
        expect(scope.bottomMenu[0].url).toBe('/aviso-legal');
        expect(scope.bottomMenu[0].id).toBe('legal');
        expect(scope.bottomMenu[1].name).toBe('Política de privacidad');
        expect(scope.bottomMenu[1].url).toBe('/politica-privacidad');
        expect(scope.bottomMenu[1].id).toBe('politica');
        expect(scope.bottomMenu[2].name).toBe('Licencias');
        expect(scope.bottomMenu[2].url).toBe('/licencias');
        expect(scope.bottomMenu[2].id).toBe('licencias');
    }));
});
