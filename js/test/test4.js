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
            var light = new BABYLON.PointLight("Omni", 
            new BABYLON.Vector3(10, 50, 50), scene);
            
            var camera = new BABYLON.ArcRotateCamera("Camera", 0.4, 1.2, 20, new BABYLON.Vector3(-10, 0, 0), scene);
            camera.attachControl(canvas, true);

            var material1 = new BABYLON.StandardMaterial("mat1", scene);
            material1.diffuseTexture = new BABYLON.Texture("./js/img/tshphere.jpg", scene);

            var sphere = BABYLON.Mesh.CreateSphere("red", 32, 2, scene);
            sphere.setPivotMatrix(BABYLON.Matrix.Translation(2, 0, 0));
            sphere.material = material1;		

            // Fog
            scene.fogMode = BABYLON.Scene.FOGMODE_EXP;
            scene.fogColor = new BABYLON.Color3(0.9, 0.9, 0.85);
            scene.fogDensity = 0.01;

            //skybox		
            var skybox = BABYLON.Mesh.CreateBox("skyBox", 100.0, scene);
            
            var skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
            skyboxMaterial.backFaceCulling = false;
            
            skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("./js/img/skybox", scene);
            skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
            
            skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0); 
            
            skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
            
            skyboxMaterial.disableLighting = true;
            skybox.material = skyboxMaterial;


            var spriteManagerPlayer = new BABYLON.SpriteManager("playerManager", "images/plane.png", 8, 1000, scene);
            
            var plane = new BABYLON.Sprite("plane", spriteManagerPlayer);
            plane.position.x = -2;
            plane.position.y = 2;	
            plane.position.z = 0;	


            var alpha = 0;
            var x = 2;
            var y = 0;
            scene.registerBeforeRender(function () {
               scene.fogDensity = Math.cos(alpha) / 10;
               alpha += 0.02;
               sphere.rotation.y += 0.01;
               y += 0.05; 
               if (x > 50) {
                  x = -2;
               }
               plane.position.x = -x;
               x += 0.02; 
            });
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










	