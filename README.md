Start with this simple boilerplate:
```
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Hello, World! - A-Frame</title>
		<meta name="description" content="Hello, World! - A-Frame">
		<script src="https://aframe.io/releases/0.6.1/aframe.min.js"></script>
	</head>
	<body>
		<a-scene>
			<a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
			<a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
			<a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder>
			<a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
			<a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
			<a-sky color="#ECECEC"></a-sky>
		</a-scene>
	</body>
</html>
```

Create an entity to display the API responses:
```
<a-scene>
	[...]
	<a-entity
		api-ui
		id="restaurants-list"
		position="-2.5 2 -3"
		rotation="0 20 0"
		geometry="primitive: plane; height: auto; width: auto"
		material="color: #eaffce"
		text="width: 4; value: Restaurants; color: black; align: center">
	</a-entity>
</a-scene>
```

The canvas must have ` id="restaurants-list" ` and the buttons must have ` class="api-button" `.
Both must have the component ` api-ui ` like you see above.
