angular.module('regionSelector').service('regionMap', [function() {

	'use strict';

	var service = {};

	service.repositionBg = function(element, areaId, imgHeight) {
		
		var heightMultiply = 0,
			positionY;

		if (!imgHeight) {
			imgHeight = element.height();
		}

		switch(areaId) {
		case 'region-na':
			heightMultiply = 1;
			break;
		case 'region-la':
			heightMultiply = 2;
			break;
		case 'region-uk':
			heightMultiply = 3;
			break;
		case 'region-eu':
			heightMultiply = 4;
			break;
		case 'region-ee':
			heightMultiply = 5;
			break;
		case 'region-me':
			heightMultiply = 6;
			break;
		case 'region-af':
			heightMultiply = 7;
			break;
		case 'region-as':
			heightMultiply = 8;
			break;
		case 'region-an':
			heightMultiply = 9;
			break;
		case 'region-au':
			heightMultiply = 10;
			break;
		default:
			areaId = '';
			break;
		}

		positionY = imgHeight * heightMultiply;

		element.css('backgroundPosition', '0 -' + positionY + 'px');

		if (areaId) {
			angular.element('#' + areaId).addClass('active');
		} else {
			element.find('area').removeClass('active');
		}
	};

	return service;
}]);