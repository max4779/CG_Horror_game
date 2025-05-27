document.querySelector('#app').innerHTML = `
  <div id="overlay">
    <h1>원하는 맵을 고르세요</h1>
    <div class="map-buttons">
      <div class="map-box" onclick="location.href='/page/map1.html'"></div>
      <div class="map-box" onclick="location.href='/page/map2.html'"></div>
      <div class="map-box" onclick="location.href='/page/map3.html'"></div>
    </div>
  </div>
  <canvas id="three-canvas"></canvas>
`

