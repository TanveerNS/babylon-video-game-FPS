var canvas, engine, createSyene, scene, camera, light0, light, origin, torus, box, cylinder, player,  playerId, moveSpeed, turnSpeed, c_x, sphere, plane,knot,lines,ground,ground1,precision,subdivisions,tiledGround,boxa,boxb,boxc;



	var loadWorld = function(){
		
		init();
		
		
		function init(){
			c_x = 1;
			canvas = document.getElementById("renderCanvas");
			engine = new BABYLON.Engine(canvas, true);
			engine.isPointerLock = true;
			createScene  = function() {
			
			scene = new BABYLON.Scene(engine);
            scene.clearColor = new BABYLON.Color3(0, 1, 0);
            
            var camera = new BABYLON.ArcRotateCamera("Camera", 1, 0.8, 10, new BABYLON.Vector3(0, 0, 0), scene);
            camera.attachControl(canvas, true);
            
            var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);
            light.intensity = 0.7;	
            
            var materialforbox = new BABYLON.StandardMaterial("texture1", scene);
            
            var box = BABYLON.Mesh.CreateBox("box", '3', scene);	
            box.material  = materialforbox;
            materialforbox.diffuseTexture = new BABYLON.Texture("./js/img/nature.jpg", scene);
            return scene;
			
			};
			scene = createScene();
			engine.runRenderLoop(function() {
				
				//requestAnimationFrame( animate );
				// c_x = c_x +0.2
				// box.rotation = new BABYLON.Vector3(c_x, Math.PI / 4, 0);
				scene.render();
			});
		
		}
		
		
		
		
		
		 
		 
	};










	