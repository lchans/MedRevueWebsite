/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function() {
var app = angular.module('port', []);

app.controller('folioController', function(){
    this.information = "hello";
    this.tab = "index";
});

app.controller('viewController', function () { 
    this.initial = 0;
    this.setPage = function (value) { 
        this.initial = value; 
    };
    this.getPage = function (value) { 
        if (value === this.initial) { 
            return 1; 
        }
        return 0;
    };
});
    
app.directive('teams', function () { 
    return { 
        restrict: 'E',
        templateUrl: 'html/teams.html', 

    };
}); 

app.directive('sponsorship', function () { 
    return { 
        restrict: 'E',
        templateUrl: 'html/sponsorship.html', 
        controller: function () { 
            this.sponsors = sponsors;
        },
    };
}); 

app.directive('photos', function () { 
    return { 
        restrict: 'E',
        templateUrl: 'html/photos.html', 
        controller: function () { 
            this.images = gallery;
        },
        controllerAs: 'photoController'
    };
}); 


app.directive('contact', function () { 
    return { 
        restrict: 'E',
        templateUrl: 'html/contact.html'    
    };
}); 

app.directive('about', function () { 
    return { 
        restrict: 'E',
        templateUrl: 'html/about.html'    
    };
}); 

app.directive('footer', function () { 
    return { 
        restrict: 'E', 
        templateUrl: 'html/footer.html'
    }
});

app.directive('home', function () { 
    return { 
        restrict: 'E',
        templateUrl: 'html/home.html'
    }
});

app.directive('test', function () { 
    return { 
        restrict: 'E',
        templateUrl: 'html/test.html'
    }
});



var gallery = [ 
    {name: "./img/gallery/1.jpg"}, 
    {name: "./img/gallery/2.jpg"}, 
    {name: "./img/gallery/3.jpg"}, 
    {name: "./img/gallery/4.jpg"}, 
    {name: "./img/gallery/5.jpg"}, 
    {name: "./img/gallery/6.jpg"}, 
    {name: "./img/gallery/7.jpg"}, 
    {name: "./img/gallery/8.jpg"}, 
    {name: "./img/gallery/9.jpg"}, 
    {name: "./img/gallery/10.jpg"}, 
    {name: "./img/gallery/11.jpg"},
    {name: "./img/gallery/12.jpg"}
];

var pages = [ 
    {name: "index"}, 
    {name: "sponsors"}
];

var sponsors = [ 
    {picture: "./img/sponsors/healthscope",
    
    },
];
//






})();