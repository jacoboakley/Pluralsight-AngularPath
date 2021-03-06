'use strict';

eventsApp.controller('EventController',
  function EventController($scope) {
    
    $scope.event = {
      name: 'Angular Boot Camp',
      date: '1/1/2013',
      time: '10:30 am',
      location: {
        address: 'Google Headquarters',
        city: 'Mountain View',
        province: 'CA'
      },
      imageURL: '/img/angularjs-logo.png',
      sessions: [
        {
          name: 'Directives Masterclass',
          creatorName: 'Bob Smith',
          duration: '1 hr',
          level: 'Advanced',
          abstract: 'In this session you will learn the ins and outs of directives'
        },
        {
          name: 'Scopes for fun and profit',
          creatorName: 'John Doe',
          duration: '30 mins',
          level: 'Introductory',
          abstract: 'This session will take a closer look at scopes. Learn what they do, how they do it, and how to get them to do it for you.'
        },
        {
          name: 'Well Behaved Controllers',
          creatorName: 'Jane Doe',
          duration: '2 hrs',
          level: 'Intermediate',
          abstract: 'Controllers are the beginning of everything Angular does. Learn how to craft controllers.'
        }
      ]
    }
  }
);