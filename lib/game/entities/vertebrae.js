ig.module(
	'game.entities.vertebrae'
)
.requires(
	'impact.entity'
)
.defines(function(){

EntityVertebrae = ig.Entity.extend({
	size: {x: 40, y:70},
	gravityFactor:0,
	animSheet: new ig.AnimationSheet( 'media/vertebrae.png', 40, 70 ),	
	init: function( x, y, settings ) {
		this.parent( x, y, settings );
		this.addAnim( 'idle', 1, [0] );
	},
	update: function() {

		this.parent();
	}
});
});