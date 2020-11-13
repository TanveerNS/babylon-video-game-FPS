var canvas, engine, createSyene, scene, camera, light0, origin, torus, box, cylinder, player,  playerId, moveSpeed, turnSpeed, c_x, sphere, plane,knot,lines,ground,ground1,precision,subdivisions,tiledGround;



	var loadWorld = function(){
		
		init();
		
		
		function init(){
			c_x = 1;
			canvas = document.getElementById("renderCanvas");
			engine = new BABYLON.Engine(canvas, true);
			//engine.isPointerLock = true;
			createScene  = function() {
			scene = new BABYLON.Scene(engine);
            scene.clearColor = new BABYLON.Color3(1, 0.8, 0.8);
            
			camera = new BABYLON.ArcRotateCamera("Camera", 1, 0.8, 10, new BABYLON.Vector3(0, 0, 0), scene);
            
			light0 = new BABYLON.PointLight("Omni", new BABYLON.Vector3(0, 0, 10), scene);
            
			origin = BABYLON.Mesh.CreateSphere("origin", 10, 1.0, scene);
			
			box = BABYLON.Mesh.CreateBox("box", 1.0, scene, false, BABYLON.Mesh.DEFAULTSIDE); 
			box.position.x=1.5;
			
			sphere = BABYLON.Mesh.CreateSphere("sphere", 1.0, 1.0, scene, false, BABYLON.Mesh.DEFAULTSIDE);
			sphere.position.x=3;
			
			plane = BABYLON.Mesh.CreatePlane(   "plane", 10.0, scene, false, BABYLON.Mesh.DEFAULTSIDE);
			plane.position.z=15;
			
			disc = BABYLON.Mesh.CreateDisc(    "disc", 1, 3, scene, false, BABYLON.Mesh.DEFAULTSIDE);
			disc.position.z=5;			
			
			cylinder = BABYLON.Mesh.CreateCylinder(   "cylinder", 3, 1, 1, 6, 1, scene, false,    BABYLON.Mesh.DEFAULTSIDE);
			cylinder.position.x=5;	
			 
			torus = BABYLON.Mesh.CreateTorus(   "torus", 2, 0.1, 10, scene, false,    BABYLON.Mesh.DEFAULTSIDE);
			torus.position.x=-1.5;	
			
			knot = BABYLON.Mesh.CreateTorusKnot(   "knot", 2, 0.5, 128, 64, 2, 3, scene, false,   BABYLON.Mesh.DEFAULTSIDE);
			knot.position.z=-5;	
			
			lines = BABYLON.Mesh.CreateLines("lines", [
   new BABYLON.Vector3(-10, 0, 0),
   new BABYLON.Vector3(10, 0, 0),
   new BABYLON.Vector3(0, 0, -10),
   new BABYLON.Vector3(0, 0, 10)
], scene);
			
			ground = BABYLON.Mesh.CreateGround(   "ground", 6, 6, 2, scene);
			ground.position.y=-1;
			
			
			precision = {"w" : 2, "h" : 2};
			subdivisions = {'h' : 8, 'w' : 8};
			tiledGround = BABYLON.Mesh.CreateTiledGround(   "Tiled Ground", -3, -3, 3, 3,    subdivisions, precision, scene, false);
			
			tiledGround.position.x=-7;
			
			// ground1 = BABYLON.Mesh.CreateGroundFromHeightMap(   "ground", "heightmap.jpg", 200, 200, 250, 0, 10,    scene, false, successCallback);
			
			
			// var dashedlines = BABYLON.Mesh.CreateDashedLines(   "dashedLines", [v1, v2, ... vn],    dashSize, gapSize, dashNb, scene);
			// var ribbon = BABYLON.Mesh.CreateRibbon(
   // "ribbon", 
   // [path1, path2, ..., pathn], 
   // false, false, 0, 
   // scene, false, 
   // BABYLON.Mesh.DEFAULTSIDE);
			// var tube = BABYLON.Mesh.CreateTube(
   // "tube", 
   // [V1, V2, ..., Vn], 
   // radius, tesselation, 
   // radiusFunction, 
   // cap, scene, false, 
   // BABYLON.Mesh.DEFAULTSIDE);
			
			
			
			
			
            scene.activeCamera.attachControl(canvas);	
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










	