angular.module('app', ['ngAnimate', 'cfp.hotkeys', 'ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
	
	$urlRouterProvider.otherwise("/");

	$stateProvider
		.state('projects', {
			url: '/',
			templateUrl: 'projects.html'
		})
		.state('about', {
			url: '/about',
			templateUrl: 'about.html'
		})
		.state('resume', {
			url: '/resume',
			templateUrl: 'resume.html'
		})
		.state('process', {
			url: '/process',
			templateUrl: 'process.html'
		})
		.state('stats', {
			url: '/stats',
			templateUrl: 'stats.html'
		})
		.state('contact', {
			url: '/contact',
			templateUrl: 'contact.html'
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

.controller('MainController', function($scope, $rootScope, $state, $window, $timeout, $urlRouter, hotkeys){

	var pane = document.getElementById('projects');

	$scope.view = {};
	$scope.view.swapping = false;

	$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){

		$scope.view.swapping = $scope.view.id === '' && toParams.id || $scope.view.id !== '' && toParams.id == undefined ? true : false;
		console.log('should be true' + $scope.view.swapping)
	    $scope.view.name = toState.name;
	    $scope.view.mode = toParams.id ? 'project' : 'primary';
	    if(!toParams.id) { $scope.view.back = false; }
	    $scope.view.id = toParams.id ? parseInt(toParams.id) : '';
	    if (toParams.id) {  $scope.view.lastId = parseInt(toParams.id); }
	    
	    pane.scrollTop = 0;

	});

	hotkeys.add({
	    combo: 'left',
	    description: 'Get previous project.',
	    callback: function() {
	    	$state.go('project', { id: $scope.view.id - 1 });
	    }
	});

	$rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
		$timeout(function(){
			$scope.view.swapping = false;
			console.log('should be false' + $scope.view.swapping)
			$scope.$apply();
		},300)
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
			'name'	: 'Timeline',
			'href'	: 'resume',
			'mode'	: 'primary'
		},
		{
			'name'	: 'Process',
			'href'	: 'process',
			'mode'	: 'primary'
		},
		{
			'name'	: 'Stats',
			'href'	: 'stats',
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
			'href'	: 'project({id: view.id - 1})',
			'mode'	: 'project'
		},
		{
			'name'	: 'Next',
			'href'	: 'project({id: view.id + 1})',
			'mode'	: 'project'
		}
	];

	$scope.projects = [
		{
			'id'	: 0,
			'name' : 'Sleepy Monkey',
			'desc' : 'Angular application to optimize creation & hosting of landing pages and other content.',
			'date' : 'October 2014',
			'role' : 'Developer & Designer',
			'img'  : 'img/sleepymonkey.png',
			'pics' : [
				'resources/sleepymonkey_assets/template.png',
				'resources/sleepymonkey_assets/Homepage.jpg',
				'resources/sleepymonkey_assets/ad_jacket.png',
				'resources/sleepymonkey_assets/ads.png'
			]
		},
		{
			'id'	: 1,
			'name' : 'HmgCSC.com',
			'desc' : 'A multi-functional website for showcasing digital products and sharing resources across designers and sales departments.',
			'date' : 'January 2014',
			'role' : 'Developer & Designer',
			'img'  : 'img/hmgcsc.jpg',
			'pics' : [
				'resources/sleepymonkey_assets/Homepage.jpg',
				'resources/sleepymonkey_assets/ads.png',
				'resources/sleepymonkey_assets/ad_jacket.png',
				'resources/sleepymonkey_assets/template.png'
			]
		},
		{
			'id'	: 2,
			'name' : 'HmgGo',
			'desc' : 'A simple splash page with the purpose of linking together different assets of the company.',
			'date' : 'March 2014',
			'role' : 'Developer & Designer',
			'img'  : 'img/hmggo.png',
			'pics' : [
				'resources/hmggo_assets/devices.jpg',
				'resources/hmggo_assets/split.png'
			]
		},
		{
			'id'	: 3,
			'name' : 'Nobody Delivers',
			'desc' : 'A special concept for a company wide branding initiative that allowed me to have some fun :).',
			'date' : 'January 2015',
			'role' : 'Developer & Designer',
			'img'  : 'img/nobodydelivers.png',
			'pics' : [
				'resources/nobody-delivers_assets/Artboard 1.png',
				'resources/nobody-delivers_assets/Artboard 2.jpg',
				'resources/nobody-delivers_assets/Artboard 3.jpg'
			]
		},
		{
			'id'	: 4,
			'name' : 'Ghost Grid',
			'desc' : 'Angular application to optimize creation & hosting of landing pages and other content.',
			'date' : 'April 2015',
			'role' : 'Developer',
			'img'  : 'http://publicdomainarchive.com/wp-content/uploads/2014/12/public-domain-images-free-stock-photos-high-quality-resolution-downloads-public-domain-archive-8-1000x662.jpg'
		},
		{
			'id'	: 5,
			'name' : 'Angular-Resizable',
			'desc' : 'Angular application to optimize creation & hosting of landing pages and other content.',
			'date' : 'March 2015',
			'role' : 'Developer',
			'img'  : 'http://publicdomainarchive.com/wp-content/uploads/2014/12/public-domain-images-free-stock-photos-high-quality-resolution-downloads-public-domain-archive-4-1000x667.jpg'
		},
		{
			'id'	: 6,
			'name' : 'Strings',
			'desc' : 'A simple linear icon font I built to grow and understand the pros and cons of svg vs fonts.',
			'date' : 'February 2015',
			'role' : 'Designer',
			'img'  : 'http://publicdomainarchive.com/wp-content/uploads/2014/12/public-domain-images-free-stock-photos-high-quality-resolution-downloads-public-domain-archive-4-1000x667.jpg'
		}
	];

	$scope.timeline = [
		{
			"name": "JNJ Apparel",
			"position": "Designer/Illustrator Intern",
			"website": "http://jnjapparel.net/",
			"startDate": "2011-09-01",
			"endDate": "2011-12-01",
			"summary": "JNJ Apparel specializes in high quality illustration and graphic design.",
			"highlights": [
				"Worked on illustration and design of various T-shirts",
				"Completed detailed sketches of over 20 buildings on campus (one is featured in a design on their homepage)",
				"Developed skills for working pen and ink illustration into finished designs"
			]
		},
		{
			"name": "Halifax Media Group",
			"position": "Designer",
			"website": "http://hmgcsc.com/",
			"startDate": "2012-05-01",
			"endDate": "2013-08-01",
			"summary": "I started at Halifax as a print designer in 2012. Halifax Media Group's Creative Services Center is based out of The Tuscaloosa News building and employs 40+ graphic designers of various qualifications. One of my favorite things about working here as a designer was that they nurtured a competitive design atmosphere. After taking initiative in maintaining our digital products, I was promoted to Web Developer position in Q4 2013.",
			"highlights": [
				"Aided in branding concepts for company wide programs and initiatives",
				"Acquired various regional design awards",
				"Learned how to deal with difficult clients :)"
			]
		},
		{
			"name": "Halifax Media Group",
			"position": "Web Developer",
			"website": "http://hmgcsc.com/",
			"startDate": "2013-08-01",
			"endDate": "present",
			"summary": "Coming from the designer perspective, I made it my goal as the Web Developer to make the digital designer's jobs easier. I enjoyed being able to make useful tools for my fellow employees while learning a lot in the process. In 2015 Halifax was bought out by Gatehouse Media Group and I was promoted to Digital Product Specialist.",
			"highlights": [
				"Helped develop and maintain digital products.",
				"Designed and developed the portfolio site for the Creative Services Center",
				"Developed an application for creating, managing, and hosting various web based products.",
				"Learned a lot about real world web development, managing servers, databases, online transactions, etc.",
				"Designed HTML emails and trained others how to do so as well.",
				"Assisted in continued training of fellow designers."
			]
		}
	]

	$scope.tools = [
			{
				'name' : 'Design',
				'level' : 87,
				'passion' : false
			},
			{
				'name' : 'Plain Ol\' Javascript',
				'level' : 80,
				'passion' : false
			},
			{
				'name' : 'AngularJS',
				'level' : 75,
				'passion' : false
			},
			{
				'name' : 'React',
				'level' : 35,
				'passion' : true
			},
			{
				'name' : 'AJAX',
				'level' : 85,
				'passion' : false
			},
			{
				'name' : 'SASS, CSS',
				'level' : 90,
				'passion' : false
			},
			{
				'name' : 'HTML5',
				'level' : 85,
				'passion' : false
			},
			{
				'name' : 'PHP',
				'level' : 65,
				'passion' : false
			},
			{
				'name' : 'Laravel',
				'level' : 84,
				'passion' : false
			},
			{
				'name' : 'MYSQL',
				'level' : 72,
				'passion' : false
			},
			{
				'name' : 'MongoDB',
				'level' : 49,
				'passion' : true
			},
			{
				'name' : 'Drupal',
				'level' : 65,
				'passion' : false
			},
			{
				'name' : 'Wordpress',
				'level' : 66,
				'passion' : false
			},
			{
				'name' : 'Node.js',
				'level' : 45,
				'passion' : true
			},
			{
				'name' : 'Photoshop',
				'level' : 89,
				'passion' : false
			},
			{
				'name' : 'Illustrator',
				'level' : 90,
				'passion' : false
			},
			{
				'name' : 'Git',
				'level' : 60,
				'passion' : false
			},
			{
				'name' : 'CLI',
				'level' : 75,
				'passion' : false
			},
			{
				'name' : 'After Effects',
				'level' : 55,
				'passion' : true
			}
		];

})