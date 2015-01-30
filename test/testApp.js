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

describe('portfolioController', function()
{
    var scope;
    beforeEach(module('angularCorp'));

    beforeEach(inject(function(_$httpBackend_, $controller)
    {
        $httpBackend = _$httpBackend_;
        $httpBackend.expectGET('../data/portfolio.json').
            respond(
                [
                    {
                        "name": "Proyecto 1",
                        "image": "../img/portfolio.jpg",
                        "url": "http://www.google.com"
                    },
                    {
                        "name": "Proyecto 2",
                        "image": "../img/portfolio.jpg",
                        "url": "http://www.google.com"
                    },
                    {
                        "name": "Proyecto 3",
                        "image": "../img/portfolio.jpg",
                        "url": "http://www.google.com"
                    },
                    {
                        "name": "Proyecto 4",
                        "image": "../img/portfolio.jpg",
                        "url": "http://www.google.com"
                    },
                    {
                        "name": "Proyecto 5",
                        "image": "../img/portfolio.jpg",
                        "url": "http://www.google.com"
                    },
                    {
                        "name": "Proyecto 6",
                        "image": "../img/portfolio.jpg",
                        "url": "http://www.google.com"
                    },
                    {
                        "name": "Proyecto 7",
                        "image": "../img/portfolio.jpg",
                        "url": "http://www.google.com"
                    },
                    {
                        "name": "Proyecto 8",
                        "image": "../img/portfolio.jpg",
                        "url": "http://www.google.com"
                    }
                ]
            );

        scope = {};
        $controller('portfolioController', {$scope:scope});
    }));

    it('should create "projects" with 8 projects', inject(function($controller) 
    { 
        expect(scope.projects).toBeUndefined();

        $httpBackend.flush();
        expect(scope.projects.length).toBe(8);
    }));

    it('should create "projects" with specific parameters', inject(function($controller) 
    { 
        expect(scope.projects).toBeUndefined();
        
        $httpBackend.flush();
        expect(scope.projects[0].name).toBe('Proyecto 1');
        expect(scope.projects[0].url).toBe('http://www.google.com');
        expect(scope.projects[0].image).toBe('../img/portfolio.jpg');
        expect(scope.projects[1].name).toBe('Proyecto 2');
        expect(scope.projects[1].url).toBe('http://www.google.com');
        expect(scope.projects[1].image).toBe('../img/portfolio.jpg');
        expect(scope.projects[2].name).toBe('Proyecto 3');
        expect(scope.projects[2].url).toBe('http://www.google.com');
        expect(scope.projects[2].image).toBe('../img/portfolio.jpg');
        expect(scope.projects[3].name).toBe('Proyecto 4');
        expect(scope.projects[3].url).toBe('http://www.google.com');
        expect(scope.projects[3].image).toBe('../img/portfolio.jpg');
        expect(scope.projects[4].name).toBe('Proyecto 5');
        expect(scope.projects[4].url).toBe('http://www.google.com');
        expect(scope.projects[4].image).toBe('../img/portfolio.jpg');
        expect(scope.projects[5].name).toBe('Proyecto 6');
        expect(scope.projects[5].url).toBe('http://www.google.com');
        expect(scope.projects[5].image).toBe('../img/portfolio.jpg');
        expect(scope.projects[6].name).toBe('Proyecto 7');
        expect(scope.projects[6].url).toBe('http://www.google.com');
        expect(scope.projects[6].image).toBe('../img/portfolio.jpg');
        expect(scope.projects[7].name).toBe('Proyecto 8');
        expect(scope.projects[7].url).toBe('http://www.google.com');
        expect(scope.projects[7].image).toBe('../img/portfolio.jpg');
    }));
});
