var canvas, engine, createScene, scene, camera, light0, origin, torus, box, cylinder, player,  playerId, moveSpeed, turnSpeed, c_x, sphere, plane;
var keyState = {};
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
					
				camera = new BABYLON.FreeCamera("Camera",  new BABYLON.Vector3(0, 0,-22), scene);
				scene.activeCamera.attachControl(canvas);
				scene.activeCamera.keysUp.push(87);
				
				light0 = new BABYLON.PointLight("Omni", new BABYLON.Vector3(0, 0, 10), scene);
					
				origin = BABYLON.Mesh.CreateSphere("origin", 4, 0.3, scene);
					
				torus = BABYLON.Mesh.CreateTorus("torus", 2, 1, 1, scene, false);
					
				box = BABYLON.Mesh.CreateBox("box", c_x, scene);
				box.position = new BABYLON.Vector3(-2, 2.5, 0);
				
				objects.push( box );

					
				cylinder = BABYLON.Mesh.CreateCylinder("cylinder", 1, 1, 1, 6, 1, scene, false);
					
				cylinder.position = new BABYLON.Vector3(10, 0, 0);
				
				return scene;
			
			};
			
			scene = createScene();
			
			
			//Events------------------------------------------
			document.addEventListener('click', onMouseClick, false );
			document.addEventListener('mousedown', onMouseDown, false);
			document.addEventListener('mouseup', onMouseUp, false);
			document.addEventListener('mousemove', onMouseMove, false);
			document.addEventListener('mouseout', onMouseOut, false);
			document.addEventListener('keydown', onKeyDown, false );
			document.addEventListener('keyup', onKeyUp, false );
			window.addEventListener( 'resize', onWindowResize, false );
			//.....................end
			
			engine.runRenderLoop(function() {
				scene.render();
			});
		
		}
		
		
		function animate(){
			engine.runRenderLoop(function() {
				c_x = c_x +0.2
				box.rotation = new BABYLON.Vector3(c_x, Math.PI / 4, 0);
				checkKeyStates();
				scene.render();
			});
		
		}
		
		
		 
		 
	};




// var createPlayer = function(data){

    // playerData = data;

	// player = BABYLON.Mesh.CreateBox(`player{playerData.playerId}`, 1.0, scene);
			
	// player.position = new BABYLON.Vector3(playerData.x, playerData.y, playerData.z); 
	// player.position.x = data.x;
    // player.position.y = data.y;
    // player.position.z = data.z;
	
	// playerId = data.playerId;
    // moveSpeed = data.speed;
    // turnSpeed = data.turnSpeed;
	
	// updateCameraPosition();

    // objects.push( player );

    // camera.lockedTarget = player.position ;
	
	// scene.activeCamera = camera;
	
// };	

// var updateCameraPosition = function(){

    // camera.position.x = player.position.x + 6 * Math.sin( player.rotation.y );
    // camera.position.y = player.position.y + 6;
    // camera.position.z = player.position.z + 6 * Math.cos( player.rotation.y );

// };

	
	//Events Listener.........
	
	function onMouseClick(){
        console.log('hi there');
    }
	
	function onMouseDown(){
		console.log('hi there');
    }
    function onMouseUp(){
		console.log('hi there');
    }
    function onMouseMove(){
		console.log('hi there');
    }
    function onMouseOut(){
		console.log('hi there');
    }
    function onKeyDown( event ){

        //event = event || window.event;

        keyState[event.keyCode || event.which] = true;

    }

    function onKeyUp( event ){

        //event = event || window.event;

        keyState[event.keyCode || event.which] = false;

    }
	function onWindowResize() {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );

    }

	var checkKeyStates = function(){

    if (keyState[38] || keyState[87]) {
        // up arrow or 'w' - move forward
        console.log('w press');
		socket.on('connect', function(){
			console.log('hi ther');
		});
    }
    if (keyState[40] || keyState[83]) {
        // down arrow or 's' - move backward
        console.log('s press');
    }
    if (keyState[37] || keyState[65]) {
        // left arrow or 'a' - rotate left
        console.log('a press');
    }
    if (keyState[39] || keyState[68]) {
        // right arrow or 'd' - rotate right
        console.log('d press');
    }
    if (keyState[81]) {
        // 'q' - strafe left
        console.log('q press');
    }
    if (keyState[69]) {
        // 'e' - strage right
        console.log('e press');
    }

};







	