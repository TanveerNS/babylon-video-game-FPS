var canvas, engine, createScene, scene, camera, light0, 
origin, torus, box, cylinder, box1

	var loadWorld = function(){
		
		init();
		animate();
		
		function init(){
				
			canvas = document.getElementById("renderCanvas");
			engine = new BABYLON.Engine(canvas, true);
			
			createScene  = function() {
			
				scene = new BABYLON.Scene(engine);
				scene.clearColor = new BABYLON.Color3(1, 0.8, 0.8);
					
				camera = new BABYLON.ArcRotateCamera("Camera", 1, 0.8, 10, new BABYLON.Vector3(0, 0, 0), scene);
				
				camera.position = new BABYLON.Vector3(10, 0, 10).addInPlace(new BABYLON.Vector3(0, 10, 0));

				
				scene.activeCamera.attachControl(canvas);
					
				light0 = new BABYLON.PointLight("Omni", new BABYLON.Vector3(0, 0, 10), scene);
				
				light0.position = new BABYLON.Vector3(20, 20, 20);
				light0.diffuse = new BABYLON.Color3(0, 1, 0);
				light0.specular = new BABYLON.Color3(1, 0, 0);
				light0.intensity = 1.0;

				
				origin = BABYLON.Mesh.CreateSphere("origin", 10, 1.0, scene);
					
				torus = BABYLON.Mesh.CreateTorus("torus", 1, 1, 1, scene, false);
					
				box = BABYLON.Mesh.CreateBox("box", 1.0, scene);
				box.position = new BABYLON.Vector3(-5, 0, 0); 
					
				cylinder = BABYLON.Mesh.CreateCylinder("cylinder", 3, 3, 3, 6, 1, scene, false);
					
				cylinder.position = new BABYLON.Vector3(5, 0, 0);	
				
				box1 = BABYLON.Mesh.CreateBox("boxName", 1, scene);
				
				box1.position = new BABYLON.Vector3(0, 0, 3);
				box1.rotation = new BABYLON.Vector3(0, Math.PI / 4, 0);
				box1.scaling = new BABYLON.Vector3(2, 2, 2);
				
				return scene;
			};
			scene = createScene();
			engine.runRenderLoop(function() {
				scene.render();
			});
		}
		
		
		function animate(){
			engine.runRenderLoop(function() {
				scene.render();
			});
		
		}
		 
	};
	
	
	
	
	
	
	
	