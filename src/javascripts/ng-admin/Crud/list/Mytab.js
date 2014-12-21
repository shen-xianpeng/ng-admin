define(function (require) {
    'use strict';

    var tabView = require('text!./Mytab.html'),
        MytabController = require('./MytabController');

    function TabControllerDirective() {
        return {
            restrict: 'E',
            template: tabView,
            controllerAs: 'mytabCtrl',
            controller: MytabController
        };
    }

    TabControllerDirective.$inject = [];

    return TabControllerDirective;
});
