// NOTE:
// Make sure there are no TSLint Errors (like trailing commas or ; missing) in this file, otherwise E2E test will fail!
import app from 'main.module';

/**
 * Configures the application routes.
 */
function routeConfig($stateProvider: angular.ui.IStateProvider,
                     $urlRouterProvider: angular.ui.IUrlRouterProvider,
                     gettext: angular.gettext.gettextFunction) {

  // Routes configuration

  // Known route
  $urlRouterProvider.when('', '/');
  // Default to Page 1
  $urlRouterProvider.when('/', '/page1');

  // Abstract route -> Default Child route
  $urlRouterProvider.when('/page1', '/page1/whatis');
  $urlRouterProvider.when('/page2', '/page2/ballast1');
  $urlRouterProvider.when('/page3', '/page3/ballast1');

  // Page or children not found
  $urlRouterProvider.otherwise(($injector, $location) => {
    const state = $injector.get('$state');
    state.go('pageNotFound');
    return $location.path();
  });

  $stateProvider
    .state('pageNotFound', {
      template: <string>require('screens/page-not-found.html')
    })
    .state('app', {
      template: <string>require('shell/shell.html'),
      controller: 'shellController as shell'
    })
    .state('app.page1', {
      url: '/page1',
      abstract: true,
      template: <string>require('screens/page1/page1.html'),
      controller: 'page1Controller as vm'
    })
      .state('app.page1.whatis', {
          url: '/whatis',
          template: <string>require('screens/page1/whatis/whatis.html'),
          controller: 'page1WhatIsController as vm',
          data: {title: gettext('What is Lorem Ipsum?')}
        })
      .state('app.page1.wherefrom', {
          url: '/wherefrom',
          template: <string>require('screens/page1/wherefrom/wherefrom.html'),
          controller: 'page1WhereFromController as vm',
          data: {title: gettext('Where does it come from?')}
      })
      .state('app.page1.whydo', {
          url: '/whydo',
          template: <string>require('screens/page1/whydo/whydo.html'),
          controller: 'page1WhyDoController as vm',
          data: {title: gettext('Why do we use it?')}
      })
    .state('app.page2', {
        url: '/page2',
        abstract: true,
        template: <string>require('screens/page2/page2.html'),
        controller: 'page2Controller as vm'
    })
        .state('app.page2.ballast1', {
            url: '/ballast1',
            template: <string>require('screens/page2/ballast1/ballast1.html'),
            controller: 'page2Ballast1Controller as vm'
        })
        .state('app.page2.ballast2', {
            url: '/ballast2',
            template: <string>require('screens/page2/ballast2/ballast2.html'),
            controller: 'page2Ballast2Controller as vm'
        })
        .state('app.page2.ballast3', {
            url: '/ballast3',
            template: <string>require('screens/page2/ballast3/ballast3.html'),
            controller: 'page2Ballast3Controller as vm'
        })
      .state('app.page3', {
          url: '/page3',
          abstract: true,
          template: <string>require('screens/page3/page3.html'),
          controller: 'page3Controller as vm'
      })
      .state('app.page3.ballast1', {
          url: '/ballast1',
          template: <string>require('screens/page3/ballast1/ballast1.html'),
          controller: 'page3Ballast1Controller as vm'
      })
      .state('app.page3.ballast2', {
          url: '/ballast2',
          template: <string>require('screens/page3/ballast2/ballast2.html'),
          controller: 'page3Ballast2Controller as vm'
      })
      .state('app.page3.ballast3', {
          url: '/ballast3',
          template: <string>require('screens/page3/ballast3/ballast3.html'),
          controller: 'page3Ballast3Controller as vm'
      });
}

app.config(routeConfig);
