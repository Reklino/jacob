angular.module('app', ['ngAnimate', 'cfp.hotkeys', 'ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
	
	$urlRouterProvider.otherwise("/");

	$stateProvider
		.state('projects', {
			url: '/',
			templateUrl: 'projects.html',
			controller: 'MainController'
		})
		.state('about', {
			url: '/about',
			templateUrl: 'about.html',
			controller: 'MainController'
		})
		.state('resume', {
			url: '/resume',
			templateUrl: 'resume.html',
			controller: 'MainController'
		})
		.state('stats', {
			url: '/stats',
			templateUrl: 'stats.html',
			controller: 'MainController'
		})
		.state('contact', {
			url: '/contact',
			templateUrl: 'contact.html',
			controller: 'MainController'
		})
		.state('project', {
			url: '/:id',
			templateUrl: function(attrs){
				return "projects." + attrs.id + ".html";
			},
			controller: function($scope, $stateParams) {
				$scope.project = $scope.projects[$stateParams.id];
			}
		})

})

.controller('MainController', function($scope, $rootScope, $window){

	var pane = document.getElementById('projects');

	$scope.view = {};

	$rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
		$scope.view.name = toState.name;
		$scope.view.mode = toParams.id ? 'project' : 'primary';
		$scope.view.id = toParams.id ? parseInt(toParams.id) : '';
		pane.scrollTop = 0;
		console.log($scope.view.name);
	});

	$scope.background = '';

	$scope.view.mode = 'primary';

	$scope.tabs = [
		{
			'name'	: 'Projects',
			'href'	: 'projects',
			'mode'	: 'primary'
		},
		{
			'name'	: 'About',
			'href'	: 'about',
			'mode'	: 'primary'
		},
		{
			'name'	: 'Resume',
			'href'	: 'resume',
			'mode'	: 'primary'
		},
		{
			'name'	: 'Stats',
			'href'	: 'stats',
			'mode'	: 'primary'
		},
		{
			'name'	: 'Contact',
			'href'	: 'contact',
			'mode'	: 'primary'
		}

	];

	$scope.projectTabs = [
		{
			'name'	: 'Close',
			'href'	: 'projects',
			'mode'	: 'project'
		},
		{
			'name'	: 'Previous',
			'href'	: 'projects.detail({id: view.id - 1})',
			'mode'	: 'project'
		},
		{
			'name'	: 'Next',
			'href'	: 'projects.detail({id: view.id + 1})',
			'mode'	: 'project'
		}
	];

	$scope.projects = [
		{
			'id'	: 0,
			'name' : 'Sleepy Monkey',
			'desc' : 'Angular application to optimize creation & hosting of landing pages and other content.',
			'date' : 'October 2014',
			'img'  : 'img/sleepymonkey.png'
		},
		{
			'id'	: 1,
			'name' : 'HmgCSC.com',
			'desc' : 'A multi-functional website for showcasing digital products and sharing resources across designers and sales departments.',
			'date' : 'January 2014',
			'img'  : 'img/hmgcsc.jpg'
		},
		{
			'id'	: 2,
			'name' : 'HmgGo',
			'desc' : 'A simple splash page with the purpose of linking together different assets of the company.',
			'date' : 'March 2014',
			'img'  : 'img/hmggo.png'
		},
		{
			'id'	: 3,
			'name' : 'Nobody Delivers',
			'desc' : 'Angular application to optimize creation & hosting of landing pages and other content.',
			'date' : 'January 2015',
			'img'  : 'img/nobodydelivers.png'
		},
		{
			'id'	: 4,
			'name' : 'Ghost Grid',
			'desc' : 'Angular application to optimize creation & hosting of landing pages and other content.',
			'date' : 'April 2015',
			'img'  : 'http://publicdomainarchive.com/wp-content/uploads/2014/12/public-domain-images-free-stock-photos-high-quality-resolution-downloads-public-domain-archive-8-1000x662.jpg'
		},
		{
			'id'	: 5,
			'name' : 'Angular-Resizable',
			'desc' : 'Angular application to optimize creation & hosting of landing pages and other content.',
			'date' : 'March 2015',
			'img'  : 'http://publicdomainarchive.com/wp-content/uploads/2014/12/public-domain-images-free-stock-photos-high-quality-resolution-downloads-public-domain-archive-4-1000x667.jpg'
		},
		{
			'id'	: 6,
			'name' : 'Strings',
			'desc' : 'A simple linear icon font I built to grow and understand the pros and cons of svg vs fonts.',
			'date' : 'February 2015',
			'img'  : 'http://publicdomainarchive.com/wp-content/uploads/2014/12/public-domain-images-free-stock-photos-high-quality-resolution-downloads-public-domain-archive-4-1000x667.jpg'
		}
	];

	$scope.tools = [
			{
				'name' : 'Design',
				'level' : 85,
				'passion' : 100
			},
			{
				'name' : 'Illustration',
				'level' : 75,
				'passion' : 95
			},
			{
				'name' : 'UX',
				'level' : 55,
				'passion' : 90
			},
			{
				'name' : 'Plain Ol\' Javascript',
				'level' : 80,
				'passion' : 95
			},
			{
				'name' : 'AngularJS',
				'level' : 70,
				'passion' : 85
			},
			{
				'name' : 'AJAX',
				'level' : 75,
				'passion' : 90
			},
			{
				'name' : 'SASS, CSS',
				'level' : 90,
				'passion' : 95
			},
			{
				'name' : 'HTML5',
				'level' : 75,
				'passion' : 85
			},
			{
				'name' : 'PHP',
				'level' : 65,
				'passion' : 70
			},
			{
				'name' : 'Laravel',
				'level' : 85,
				'passion' : 90
			},
			{
				'name' : 'MYSQL',
				'level' : 70,
				'passion' : 70
			},
			{
				'name' : 'MongoDB',
				'level' : 50,
				'passion' : 90
			},
			{
				'name' : 'Drupal',
				'level' : 65,
				'passion' : 55
			},
			{
				'name' : 'Wordpress',
				'level' : 65,
				'passion' : 75
			},
			{
				'name' : 'Node',
				'level' : 50,
				'passion' : 80
			}
		];

})