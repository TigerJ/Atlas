ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'impact.font',
	'game.entities.vertebrae',
	'plugins.atlas'
)
.defines(function(){

MyGame = ig.Game.extend({
	
	// Load a font
	font: new ig.Font( 'media/04b03.font.png' ),
	atlas: new ig.Atlas(),	
	init: function() {
		// Initialize your game here; bind keys etc.
		this.spawnEntity(EntityVertebrae,ig.system.width/2,ig.system.height/2);
		this.atlas.skeletonPaths=["path1","path2"];
	},
	
	update: function() {
		// Update all entities and backgroundMaps
		this.parent();
		this.atlas.update();
		// Add your own, additional update code here
	},
	
	draw: function() {
		// Draw all entities and backgroundMaps
		this.parent();
		
		
		// Add your own drawing code here
		var x = ig.system.width/2,
			y = ig.system.height/2;
		
		/*this.font.draw( 'It Works!', x, y, ig.Font.ALIGN.CENTER );*/
	}
});


// Start the Game with 60fps, a resolution of 320x240, scaled
// up by a factor of 2
ig.main( '#canvas', MyGame, 60, 320, 240, 1 );

});
