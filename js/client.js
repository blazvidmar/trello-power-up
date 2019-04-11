
var Promise = TrelloPowerUp.Promise;

var TEST_ICON = './images/test-icon.svg';

TrelloPowerUp.initialize({
	'card-buttons': function(t, options){
		return [{
			icon: TEST_ICON,
			text: 'Test Button',
			callback: function(t){
				return t.popup({
					title: "Estimation",
					url: './estimate.html',
				});
			}

		}];
	},
});
