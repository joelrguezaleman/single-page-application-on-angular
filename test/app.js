describe('topMenuController', function()
{
    var scope;

    beforeEach(module('angularCorp'));
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
        expect(scope.topMenu[0].url).toBe('#');
        expect(scope.topMenu[1].name).toBe('Equipo');
        expect(scope.topMenu[1].url).toBe('#');
        expect(scope.topMenu[2].name).toBe('Portafolio');
        expect(scope.topMenu[2].url).toBe('#');
        expect(scope.topMenu[3].name).toBe('Contacto');
        expect(scope.topMenu[3].url).toBe('#');
    }));
});

