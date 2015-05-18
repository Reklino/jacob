angular.module('app', ['ngAnimate', 'cfp.hotkeys', 'ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
	
	$urlRouterProvider.otherwise("/");

	$stateProvider
		.state('projects', {
			url: '/',
			templateUrl: 'projects.html',
			controller: 'MainController'
		})
		.state('projects.detail', {
			url: ':id',
			templateUrl: 'projects.detail.html',
			controller: function($scope, $stateParams) {
				$scope.project = $scope.projects[$stateParams.id];
			}
		})

})

.controller('MainController', function($scope, $rootScope){

	$rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
		$rootScope.projectView = toParams.id ? true : false;
		$rootScope.activeProject = toParams.id ? parseInt(toParams.id) : 0;
	})

	$scope.projects = [
		{
			'name' : 'Sleepy Monkey',
			'desc' : 'Angular application to optimize creation & hosting of landing pages and other content.',
			'date' : 'October 2014',
			'img_url'  : 'img/sleepymonkey-thumb.png'
		},
		{
			'name' : 'HmgCSC Portfolio Site',
			'desc' : 'A multi-functional website for showcasing digital products and sharing resources across designers and sales departments.',
			'date' : 'January 2014',
			'img_url'  : 'img/hmgcsc-thumb.png'
		},
		{
			'name' : 'HmgGo',
			'desc' : 'A simple splash page with the purpose of linking together different assets of the company.',
			'date' : 'March 2014',
			'img_url'  : 'img/hmggo.jpg'
		},
		{
			'name' : 'Nobody Delivers Like We Do',
			'desc' : 'Angular application to optimize creation & hosting of landing pages and other content.',
			'date' : 'January 2015',
			'img_url'  : 'img/nobodydelivers.jpg'
		},
		{
			'name' : 'Ghost Grid',
			'desc' : 'Angular application to optimize creation & hosting of landing pages and other content.',
			'date' : 'April 2015',
			'img_url'  : 'http://publicdomainarchive.com/wp-content/uploads/2014/12/public-domain-images-free-stock-photos-high-quality-resolution-downloads-public-domain-archive-8-1000x662.jpg'
		},
		{
			'name' : 'Angular-Resizable',
			'desc' : 'Angular application to optimize creation & hosting of landing pages and other content.',
			'date' : 'March 2015',
			'img_url'  : 'http://publicdomainarchive.com/wp-content/uploads/2014/12/public-domain-images-free-stock-photos-high-quality-resolution-downloads-public-domain-archive-4-1000x667.jpg'
		},
		{
			'name' : 'Strings',
			'desc' : 'A simple linear icon font I built to grow and understand the pros and cons of svg vs fonts.',
			'date' : 'February 2015',
			'img_url'  : 'http://publicdomainarchive.com/wp-content/uploads/2014/12/public-domain-images-free-stock-photos-high-quality-resolution-downloads-public-domain-archive-4-1000x667.jpg'
		}
	];

})