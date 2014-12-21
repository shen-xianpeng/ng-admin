define(function () {
    'use strict';

    function MytabController($scope, $location) {
        this.$scope = $scope;
        this.$location = $location;
	this.tabs = [
		{'title':'正常', 'cat':1},
		{'title':'待处理', 'cat':2},
		{'title':'更新', 'cat':3}
		]
	this.enabled = this.tab_settings = this.$scope.view.tabs || null;
        var searchParams = this.$location.search();
	var active = 'tab' in searchParams?searchParams['tab']-1:0;
	var currentTab = this.tabs[active];
	currentTab['active'] = true;
	window.searchParams = searchParams;
	window.tabs = this.tabs;
	//console.log(this.enabled);
	$scope.view.config.listActions = this.enabled? this.tab_settings[active] || null: null; //null不显示操作两个字
	//$scope.listActions = this.enabled? this.tab_settings[active] || []: [];
	//onsole.log($scope.listActions);
	window.s = $scope;
    }

    MytabController.prototype.gototab = function (label) {
        this.$location.search('tab', label);
    };

    MytabController.$inject = ['$scope', '$location'];

    return MytabController;
});
