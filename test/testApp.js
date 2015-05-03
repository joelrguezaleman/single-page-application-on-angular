describe('menuController', function()
{
    var scope;
    beforeEach(module('angularCorp'));

    beforeEach(inject(function($controller)
    {
        scope = {};
        $controller('menuController', {$scope:scope});
    }));

    it('creates "menu" with 7 links', inject(function($controller) 
    { 
        expect(scope.menu[0].name).toBe('Home');
        expect(scope.menu[0].url).toBe('/');
        expect(scope.menu[0].id).toBe('home');
        expect(scope.menu[1].name).toBe('Team');
        expect(scope.menu[1].url).toBe('/team');
        expect(scope.menu[1].id).toBe('team');
        expect(scope.menu[2].name).toBe('Portfolio');
        expect(scope.menu[2].url).toBe('/portfolio');
        expect(scope.menu[2].id).toBe('portfolio');
        expect(scope.menu[3].name).toBe('Contact');
        expect(scope.menu[3].url).toBe('/contact');
        expect(scope.menu[3].id).toBe('contact');
        expect(scope.menu[4].name).toBe('Legal note');
        expect(scope.menu[4].url).toBe('/legal-note');
        expect(scope.menu[4].id).toBe('legal-note');
        expect(scope.menu[5].name).toBe('Privacy policy');
        expect(scope.menu[5].url).toBe('/privacy-policy');
        expect(scope.menu[5].id).toBe('privacy-policy');
        expect(scope.menu[6].name).toBe('Licenses');
        expect(scope.menu[6].url).toBe('/licenses');
        expect(scope.menu[6].id).toBe('licenses');
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
                        "name": "Project 1",
                        "image": "../img/portfolio.jpg",
                        "url": "http://www.google.com"
                    },
                    {
                        "name": "Project 2",
                        "image": "../img/portfolio.jpg",
                        "url": "http://www.google.com"
                    },
                    {
                        "name": "Project 3",
                        "image": "../img/portfolio.jpg",
                        "url": "http://www.google.com"
                    },
                    {
                        "name": "Project 4",
                        "image": "../img/portfolio.jpg",
                        "url": "http://www.google.com"
                    },
                    {
                        "name": "Project 5",
                        "image": "../img/portfolio.jpg",
                        "url": "http://www.google.com"
                    },
                    {
                        "name": "Project 6",
                        "image": "../img/portfolio.jpg",
                        "url": "http://www.google.com"
                    },
                    {
                        "name": "Project 7",
                        "image": "../img/portfolio.jpg",
                        "url": "http://www.google.com"
                    },
                    {
                        "name": "Project 8",
                        "image": "../img/portfolio.jpg",
                        "url": "http://www.google.com"
                    }
                ]
            );

        scope = {};
        $controller('portfolioController', {$scope:scope});
    }));

    it('creates "projects" with 8 links', inject(function($controller) 
    { 
        expect(scope.projects).toBeUndefined();
        
        $httpBackend.flush();
        expect(scope.projects[0].name).toBe('Project 1');
        expect(scope.projects[0].url).toBe('http://www.google.com');
        expect(scope.projects[0].image).toBe('../img/portfolio.jpg');
        expect(scope.projects[1].name).toBe('Project 2');
        expect(scope.projects[1].url).toBe('http://www.google.com');
        expect(scope.projects[1].image).toBe('../img/portfolio.jpg');
        expect(scope.projects[2].name).toBe('Project 3');
        expect(scope.projects[2].url).toBe('http://www.google.com');
        expect(scope.projects[2].image).toBe('../img/portfolio.jpg');
        expect(scope.projects[3].name).toBe('Project 4');
        expect(scope.projects[3].url).toBe('http://www.google.com');
        expect(scope.projects[3].image).toBe('../img/portfolio.jpg');
        expect(scope.projects[4].name).toBe('Project 5');
        expect(scope.projects[4].url).toBe('http://www.google.com');
        expect(scope.projects[4].image).toBe('../img/portfolio.jpg');
        expect(scope.projects[5].name).toBe('Project 6');
        expect(scope.projects[5].url).toBe('http://www.google.com');
        expect(scope.projects[5].image).toBe('../img/portfolio.jpg');
        expect(scope.projects[6].name).toBe('Project 7');
        expect(scope.projects[6].url).toBe('http://www.google.com');
        expect(scope.projects[6].image).toBe('../img/portfolio.jpg');
        expect(scope.projects[7].name).toBe('Project 8');
        expect(scope.projects[7].url).toBe('http://www.google.com');
        expect(scope.projects[7].image).toBe('../img/portfolio.jpg');
    }));
});
