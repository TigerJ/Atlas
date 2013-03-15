ig.module(
	'plugins.spine-impact'
)
.requires(
	'impact.impact'
)
.defines(function(){
    ig.Skeleton = ig.Class.extend({
        SkeletonData:{
            BoneData:{
                Name:null,
                ParentBoneData:null,
            },
            SlotData:null,
            Skin:null,
            RegionAttachment:null
        },

        init: function(){
            
        },
        update: function(){

        },
        draw: function(){
        }
    });
});