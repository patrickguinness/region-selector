angular.module('regionSelector').directive('regionMap', ['$window', 'regionMap', function($window, regionMap){

	'use strict';

	return {
		restrict: 'A',
		link: function(scope, element, attrs) {

			var orgWidth = 988;
			var orgHeight = 613;
			var imgRatio = orgWidth / orgHeight;

			var orgCoords = {
				'na': [262,21,260,21,203,78,139,155,38,173,6,277,161,344,286,366,350,293],
				'la': [166,351,312,613,416,466,317,385],
				'eu': [457,295,456,340,498,331,557,345,550,320,525,309,530,289,522,268,544,244,564,236,566,211,562,163,525,171,405,197,414,224,494,218,496,267,486,288],
				'uk': [450,237,450,288,481,288,494,272,487,235],
				'ee': [522,286,527,313,576,316,631,314,700,313,750,277,809,269,847,298,984,209,819,104,725,54,597,173,565,182,570,230],
				'me': [448,342,413,390,456,434,490,428,498,402,517,403,523,420,543,418,592,445,646,379,605,343,593,316,564,315,552,330,512,331],
				'af': [491,431,526,556,620,511,608,435,544,419,512,407],
				'an': [677,329,708,364,774,392,873,333,859,306,830,315,817,274,720,289],
				'as': [685,429,803,473,894,465,811,385,763,389,715,360,680,323,633,306,598,316,614,357],
				'au': [779,499,780,544,874,577,945,584,973,550,961,485,867,468,816,473]
			};

			/**
			 * Calculate image height
			 */
			var resizeImageMap = function() {

				var $img = element.children('img').eq(0),
					elWidth = element.width(),
					newWidth,
					newHeight,
					newCoords = {},
					recalcRatio;

				// calculate image width/height, max width cannot exceed original width

				newWidth = ((elWidth > 0) && (elWidth < orgWidth)) ? elWidth : orgWidth;
				newHeight = newWidth / imgRatio;
				recalcRatio = newWidth / orgWidth;

				newWidth = Math.round(newWidth);
				newHeight = Math.round(newHeight);
				
				// resize element width/height based on container
				element.height(newHeight + 'px');

				// re-position background image
				var activeArea = element.find('.active'),
					activeAreaId;

				if (activeArea.length) {
					activeAreaId = activeArea.attr('id');

					if (activeAreaId) {
						regionMap.repositionBg(element, activeAreaId, newHeight);
					}
				}

				// resize image width/height based on container
				if ($img.length) {
					$img.width(newWidth + 'px');
					$img.height(newHeight + 'px');
				}

				// update image map coordinates based on new image height
				if (newHeight < orgHeight) {
		
					angular.forEach(orgCoords, function(value, key){
						newCoords[key] = value.map(function(num){
							return Math.round(num * recalcRatio);
						});
					});
				} else {
					newCoords = orgCoords;
				}

				angular.element('#region-na').attr('coords', newCoords.na.join());
				angular.element('#region-la').attr('coords', newCoords.la.join());
				angular.element('#region-eu').attr('coords', newCoords.eu.join());
				angular.element('#region-uk').attr('coords', newCoords.uk.join());
				angular.element('#region-ee').attr('coords', newCoords.ee.join());
				angular.element('#region-me').attr('coords', newCoords.me.join());
				angular.element('#region-af').attr('coords', newCoords.af.join());
				angular.element('#region-an').attr('coords', newCoords.an.join());
				angular.element('#region-as').attr('coords', newCoords.as.join());
				angular.element('#region-au').attr('coords', newCoords.au.join());
			};

			// perform initialization actions
			
			resizeImageMap();
			
			angular.element($window).resize(function(){
				resizeImageMap();
			});

			element.find('area').on('click', function(){

				var clickedId = angular.element(this).attr('id'),
					selectedId = element.find('area.active').attr('id');

				element.find('area').removeClass('active');

				if (clickedId === selectedId) {
					clickedId = '';
				}

				regionMap.repositionBg(element, clickedId);
			});
		}
	};
}]);