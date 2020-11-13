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
         
            camera = new BABYLON.ArcRotateCamera("Camera", 1, 0.8, 10, new BABYLON.Vector3(0, 0, 0), scene);
            scene.activeCamera.attachControl(canvas);
         
            light = new BABYLON.PointLight("Omni", new BABYLON.Vector3(0, 100, 100), scene);

            boxa = BABYLON.Mesh.CreateBox("BoxA", 1.0, scene);
            boxa.position = new BABYLON.Vector3(0,0.5,0);

            boxb = BABYLON.Mesh.CreateBox("BoxB", 1.0, scene);
            boxb.position = new BABYLON.Vector3(3,0.5,0);		
            boxb.scaling = new BABYLON.Vector3(2,1,2);

            boxc = BABYLON.Mesh.CreateBox("BoxC", 1.0, scene);
            boxc.parent = boxb;
            boxc.position.z = -3;
         
            ground = BABYLON.Mesh.CreateGround("ground1", 10, 6, 2, scene);
            ground.position = new BABYLON.Vector3(0,0,0);
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










	