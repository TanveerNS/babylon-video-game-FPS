var canvas, engine, createScene, scene, camera, light0, origin, torus, box, cylinder, player,  playerId, moveSpeed, turnSpeed, c_x, sphere, plane;

var objects = [];


	var loadWorld = function(){
		
		init();
		animate();
		
		function init(){
			c_x = 1;
			canvas = document.getElementById("renderCanvas");
			engine = new BABYLON.Engine(canvas, true);
			//engine.isPointerLock = true;
			createScene  = function() {
				scene = new BABYLON.Scene(engine);
            scene.clearColor = new BABYLON.Color3(1, 0.8, 0.8);
            
			camera = new BABYLON.ArcRotateCamera("Camera", 1, 0.8, 10, new BABYLON.Vector3(0, 0, 0), scene);
            scene.activeCamera.attachControl(canvas);
            
            light0 = new BABYLON.PointLight("Omni", new BABYLON.Vector3(0, 0, 10), scene);
            
            origin = BABYLON.Mesh.CreateSphere("origin", 10, 1.0, scene);
            
            torus = BABYLON.Mesh.CreateTorus("torus", 5, 1, 10, scene, false);
            
            box = BABYLON.Mesh.CreateBox("box", 3.0, scene);
            box.position = new BABYLON.Vector3(-5, 0, 0); 
            
            cylinder = BABYLON.Mesh.CreateCylinder("cylinder", 3, 3, 3, 6, 1, scene, false);
            
            cylinder.position = new BABYLON.Vector3(5, 0, 0);	
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
		
		
		function animate(){
			engine.runRenderLoop(function() {
				c_x = c_x +0.2
				box.rotation = new BABYLON.Vector3(c_x, Math.PI / 4, 0);
				scene.render();
			});
		
		}
		
		
		 
		 
	};










	