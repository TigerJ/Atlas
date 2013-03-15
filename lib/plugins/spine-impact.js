ig.module(
	'plugins.spine-impact'
)
.requires(
	'impact.impact'
)
.defines(function(){
    ig.Spine = ig.Class.extend({
        SkeletonData:{
            BoneData:{
                Name:null,
                ParentBoneData:null,
                Length:null,
                Scale:0,
                Rotation:0,
                Translation:{
                    x:0,
                    y:0
                }
            },
            SlotData:{
                Name:null,
                BoneData:null,
                BindPoseColor:null,
                BindPoseAttachment:null
            }
        },

        init: function(){
            
        },
        update: function(){

        },
        draw: function(){
        }
    });
});