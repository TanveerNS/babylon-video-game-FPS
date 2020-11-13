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
					
				camera = new BABYLON.FreeCamera("Camera",  new BABYLON.Vector3(0, 0,-2), scene);
				scene.activeCamera.attachControl(canvas);
				
				scene.activeCamera.keysUp.push(87);
				
				light0 = new BABYLON.PointLight("Omni", new BABYLON.Vector3(0, 0, 10), scene);
					
				// origin = BABYLON.Mesh.CreateSphere("origin", 4, 0.3, scene);
					
				// torus = BABYLON.Mesh.CreateTorus("torus", 2, 1, 1, scene, false);
					
				box = BABYLON.Mesh.CreateBox("box", c_x, scene);
				box.position = new BABYLON.Vector3(-2, 2.5, 0);
				
				objects.push( box );

					
				// cylinder = BABYLON.Mesh.CreateCylinder("cylinder", 1, 1, 1, 6, 1, scene, false);
					
				// cylinder.position = new BABYLON.Vector3(0, 0, 0);
				
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




var createPlayer = function(data){

    playerData = data;

	player = BABYLON.Mesh.CreateBox(`player{playerData.playerId}`, 1.0, scene);
			
	player.position = new BABYLON.Vector3(playerData.x, playerData.y, playerData.z); 
	player.position.x = data.x;
    player.position.y = data.y;
    player.position.z = data.z;
	
	playerId = data.playerId;
    moveSpeed = data.speed;
    turnSpeed = data.turnSpeed;
	
	updateCameraPosition();

    objects.push( player );

    camera.lockedTarget = player.position ;
	
	scene.activeCamera = camera;
	
};	

var updateCameraPosition = function(){

    camera.position.x = player.position.x + 6 * Math.sin( player.rotation.y );
    camera.position.y = player.position.y + 6;
    camera.position.z = player.position.z + 6 * Math.cos( player.rotation.y );

};








	