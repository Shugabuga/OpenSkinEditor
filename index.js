function update() {
    try {
        shadow()
    } catch(err) {

    }

    save()

    var element = "";

    element += ".navbar {" + document.getElementById('header').value + ";}";""
    element += "body {" + document.getElementById('label').value + ";}";
    element += ".list-button, .button, .active {" + document.getElementById('button').value + ";}";
    element += ".modal {" + document.getElementById('alert').value + ";}";
    element += ".page-content {" + document.getElementById('containerBackground').value + ";}";
    element += ".item-content, .card, .swiper-slide {" + document.getElementById('cell').value + ";}";
    element += ".item-after {" + document.getElementById('cellChevron').value + ";}";
    element += ".toolbar {" + document.getElementById('toolbar').value + ";}";
    // iGBA methods are officially in the OpenSkin spec.
    element += "#emulatorPopup {" + document.getElementById('emulatorBackground').value + ";}";
    element += "#emulatorTarget {" + document.getElementById('emulatorScreen').value + ";}";
    element += "#triggerL {" + document.getElementById('triggerL').value + ";}";
    element += "#triggerR {" + document.getElementById('triggerR').value + ";}";
    element += "#center {" + document.getElementById('center').value + ";}";
    element += "#right {" + document.getElementById('right').value + ";}";
    element += "#left {" + document.getElementById('left').value + ";}";
    element += "#up {" + document.getElementById('up').value + ";}";
    element += "#down {" + document.getElementById('down').value + ";}";
    element += "#aBtn {" + document.getElementById('aBtn').value + ";}";
    element += "#bBtn {" + document.getElementById('bBtn').value + ";}";
    element += "#startbtn {" + document.getElementById('startBtn').value + ";}";
    element += "#select {" + document.getElementById('select').value + ";}";
    console.log(element)

    // iframe = window.frames[0].document
    iframe = document.querySelector('igba-frame').shadowRoot

    if(iframe.getElementById("openskin_stylesheet")) {
      iframe.getElementById("openskin_stylesheet").innerHTML = element;
    } else {
      var style = document.createElement("style");
      style.id = "openskin_stylesheet";
      style.innerHTML = element;
      iframe.appendChild(style);
    }
}

function jsonExport() {
    // Metadata
    var element = '{"name": "' + document.getElementById('skinName').value + '","logo": "' + document.getElementById('logo').value
    element += '","author": "' + document.getElementById('authorName').value + '","description": "' + document.getElementById('description').value
    element += '","styles": [{'
    // General
    element += '"header": "' + document.getElementById('header').value + '",'
    element += '"label": "' + document.getElementById('label').value + '",'
    element += '"button": "' + document.getElementById('button').value + '",'
    // element += '"roundedButton": "' + document.getElementById('roundedButton').value + '",'
    element += '"alert": "' + document.getElementById('alert').value + '",'
    element += '"containerBackground": "' + document.getElementById('containerBackground').value + '",'
    element += '"cell": "' + document.getElementById('cell').value + '",'
    element += '"cellChevron": "' + document.getElementById('cellChevron').value + '",'
    element += '"toolbar": "' + document.getElementById('toolbar').value + '",'
    
    // Emulator
    element += '"emulatorBackground": "' + document.getElementById('emulatorBackground').value + '",'
    element += '"emulatorBackground": "' + document.getElementById('emulatorScreen').value + '",'
    element += '"triggerL": "' + document.getElementById('triggerL').value + '",'
    element += '"triggerR": "' + document.getElementById('triggerR').value + '",'
    element += '"center": "' + document.getElementById('center').value + '",'
    // element += '"right": "' + document.getElementById('right').value + '",'
    element += '"right": "' + document.getElementById('right').value + '",'
    element += '"left": "' + document.getElementById('left').value + '",'
    element += '"up": "' + document.getElementById('up').value + '",'
    element += '"down": "' + document.getElementById('down').value + '",'
    element += '"aBtn": "' + document.getElementById('aBtn').value + '",'
    element += '"bBtn": "' + document.getElementById('bBtn').value + '",'
    element += '"startBtn": "' + document.getElementById('startBtn').value + '",'
    element += '"select": "' + document.getElementById('select').value + '"}]}'
    
    document.getElementById('themeJSON').innerHTML = element


    
    return element
}


// Import stuffs
var importFile = ""

var handleFileSelect = function(evt) {
  var files = evt.target.files;
  var file = files[0];
  if (files && file) {
      var reader = new FileReader();
      reader.onload = function(readerEvt) {
          var result = readerEvt.target.result;
          importFile = result;
          document.getElementById('textFile').value = result
      };
      reader.readAsBinaryString(file);
  }
};

if (window.File && window.FileReader && window.FileList && window.Blob) {
    document.getElementById('importFile').addEventListener('change', handleFileSelect, false);
} else {
    alert('[OpenSkin Viewer]\nSadly, your browser isn\'t compatible. Try using a better browser, such as Chrome or Safari.');
}

function importFileText() {
  importFile = document.getElementById('textFile').value
}

function jsonImport(jsonStr) {
    obj = JSON.parse(jsonStr);
    // obj = jsonStr;
    console.log(obj)
    try {
      document.getElementById('skinName').value = obj.name
    } catch(err) {
      console.log(err)
      firstRun()
    }

    if (obj.name != undefined) {document.getElementById('skinName').value = obj.name}
    if (obj.author != undefined) {document.getElementById('authorName').value = obj.author}
    if (obj.logo != undefined) {document.getElementById('logo').value = obj.logo}
    if (obj.descr != undefined) {document.getElementById('description').value = obj.description}


    if (obj.styles[0].header != undefined) {document.getElementById('header').value = obj.styles[0].header}
    if (obj.styles[0].label != undefined) {document.getElementById('label').value = obj.styles[0].label}
    if (obj.styles[0].button != undefined) {document.getElementById('button').value = obj.styles[0].button}
    if (obj.styles[0].alert != undefined) {document.getElementById('alert').value = obj.styles[0].alert}
    if (obj.styles[0].containerBackground != undefined) {document.getElementById('containerBackground').value = obj.styles[0].containerBackground}
    if (obj.styles[0].cell != undefined) {document.getElementById('cell').value = obj.styles[0].cell}
    if (obj.styles[0].cellChevron != undefined) {document.getElementById('cellChevron').value = obj.styles[0].cellChevron}
    if (obj.styles[0].toolbar != undefined) {document.getElementById('toolbar').value = obj.styles[0].toolbar}
    if (obj.styles[0].emulatorBackground != undefined) {document.getElementById('emulatorBackground').value = obj.styles[0].emulatorBackground}
    if (obj.styles[0].emulatorScreen != undefined) {document.getElementById('emulatorScreen').value = obj.styles[0].emulatorScreen}
    if (obj.styles[0].triggerL != undefined) {document.getElementById('triggerL').value = obj.styles[0].triggerL}
    if (obj.styles[0].triggerR != undefined) {document.getElementById('triggerR').value = obj.styles[0].triggerR}
    if (obj.styles[0].center != undefined) {document.getElementById('center').value = obj.styles[0].center}
    if (obj.styles[0].right != undefined) {document.getElementById('right').value = obj.styles[0].right}
    // document.getElementById('right').value = obj.styles[0].PROPERTY
    if (obj.styles[0].left != undefined) {document.getElementById('left').value = obj.styles[0].left}
    if (obj.styles[0].up != undefined) {document.getElementById('up').value = obj.styles[0].up}
    if (obj.styles[0].down != undefined) {document.getElementById('down').value = obj.styles[0].down}
    if (obj.styles[0].aBtn != undefined) {document.getElementById('aBtn').value = obj.styles[0].aBtn}
    if (obj.styles[0].bBtn != undefined) {document.getElementById('bBtn').value = obj.styles[0].bBtn}
    if (obj.styles[0].startBtn != undefined) {document.getElementById('startBtn').value = obj.styles[0].startBtn}
    if (obj.styles[0].select != undefined) {document.getElementById('select').value = obj.styles[0].select}

    update()

    return true
}

function save() {
    // current = jsonExport()
    localStorage.setItem('saved', jsonExport())
}

function load() {
    console.log("[OpenSkin Editor] Loading from localStorage...")
    var saved = localStorage.getItem('saved');
    if (saved == 'null') {
        firstRun()
    }
    jsonImport(saved)
}

// Shadow DOM for iGBA preview
function shadow() {
    let content = `

    <!DOCTYPE html>
    <html>
       <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=2, maximum-scale=2, minimum-scale=2, user-scalable=no, viewport-fit=cover">
          <link rel="apple-touch-icon" href="iconwng">
          <meta name="apple-mobile-web-app-capable" content="yes">
          <meta name="apple-mobile-web-app-status-bar-style" content="black">
          <title>iGBA</title>
          <!-- Path to Framework7 Library CSS-->
          <link rel="stylesheet" href="previewSites/igba/css/framework7.ios.min.css">
          <!-- Path to your custom app styles-->
          <link rel="stylesheet" href="previewSites/igba/css/my-app.css">
          <link rel="stylesheet" href="previewSites/igba/css/framework7.themes.css">
          <link rel="stylesheet" href="previewSites/igba/css/framework7-icons.css">
          <style>
             /**{
             max-width: 100%;
             overflow-x: hidden;
             }*/
             textarea
             {
             width:100%;
             resize: none;
             border: none;
             background-color: white;
             height: 500px;
             }
             .textwrapper
             {
             border:1px solid #999999;
             margin:5px 0;
             padding:3px;
             }
             #my_file {
             display: none;
             }
             .layout-white .searchbar {
               /*box-shadow: 0 5px 13px 0 rgba(0, 0, 0, .1);*/
               background-color:#fff;
               z-index: 400;
             }
             .searchbar::after {
               width: 0px;
             }
             .subnavbar::after {
               width: 0px;
             }
          </style>
       </head>
       <body style="zoom:0.5!important" class="theme-orange layout-white">
          <!-- Status bar overlay for fullscreen mode-->
          <div class="statusbar-overlay"></div>
          <!-- Panels overlay-->
          <div class="panel-overlay"></div>
          <!-- Left panel with reveal effect-->
          <div class="panel panel-left panel-reveal">
             <div class="content-block">
                <p>Left panel content goes here</p>
             </div>
          </div>
          <!-- Right panel with cover effect-->
          <div class="panel panel-right panel-cover">
             <div class="content-block">
                <p>Right panel content goes here</p>
             </div>
          </div>
          <!-- Views-->
          <div class="views">
          <!-- Your main view, should have "view-main" class-->
          <div class="view view-main">
          <!-- Top Navbar-->
          <div class="navbar no-border">
             <div class="navbar-inner">
                <div class="left"></div>
                <div class="center sliding"><center>iGBA</center></div>
                <div class="right"></div>
                <div class="subnavbar" style="box-shadow: 0 20px 15px 0 rgba(0, 0, 0, .075);">
                  <form data-search-list=".list-block-search" data-search-in=".card-footer" class="searchbar searchbar-init">
                    <div class="searchbar-input">
                      <input type="search" placeholder="Search Library"><a href="#" class="searchbar-clear"></a>
                    </div><a href="#" class="searchbar-cancel">Cancel</a>
                  </form>
                </div>
             </div>
          </div>

          <!-- Pages, because we need fixed-through navbar and toolbar, it has additional appropriate classes-->
          <div class="pages navbar-through toolbar-through">
          <!-- Index Page-->
          <div data-page="index-page" class="page with-subnavbar">

            <div class="searchbar-overlay"></div>
          <div class="page-content">
          <div class="content-block inset">
             <div class="content-block-inner" style="background-image: linear-gradient(-180deg, #FABE61 0%, #F76B1C 100%); box-shadow: 0 5px 13px 0 rgba(0, 0, 0, .1);">
                <br>
                <center><img src="https://igbaemu.com/beta-1134/icon-refresh.png" width="100" height="100" style="box-shadow: 0 5px 13px 0 rgba(0, 0, 0, .1); border-radius: 21%;"></center>
                <center>
                   <h1 style="color:#fff;">iGBA</h1>
                </center>
                <div class="row">
                  <div class="col-100 tablet-25"></div>
                   <div class="col-100 tablet-25">
                   </div>
                   <div class="col-100 tablet-25"></div>
                </div>
             </div>
          </div>
          <center>
            <div class="content-block searchbar-not-found inset">
              <center>
                <h1 style="color:#333;">Sorry,</h1>
                <h2>No games with that name have been found</h2>
              </center>
            </div>
               <div class="list-block list-block-search cards-list">
                 <ul id="gamesLibraryList" style="padding:0px;">
                   <li>
                     <div class="content-block">
                       <div style="cursor:pointer" class="row">
                          <div class="col-50 tablet-33"><a onclick='iframe.getElementById("emulatorPopup").className = "popup popup-load tablet-fullscreen modal-in";iframe.getElementById("emulatorPopup").style.display = "block"' data-popup=".popup-load" class="open-popup"><li class="card"><div class="card-content"><img src="https://r.mprd.se/media/images/43640-Super_Mario_World_-_Super_Mario_Advance_2_(E)(Cezar)-10.jpg" class="boxart"></div><div class="card-footer name" style="margin-left:-30px;">Super Mario Advance 2</div></li></a></div>
                       </div>
                     </div>
                   </li>
                 </ul>
               </div>
             <hr style="border: 0; height: 0; border-top: 1px solid rgba(0, 0, 0, 0.1); border-bottom: 1px solid rgba(255, 255, 255, 0.3);">
              <div class="content-block-title" style="font-weight:bold;color:#333;">Ads</div>
             <br>
          </center>
          <div class="popup popup-load tablet-fullscreen" id="emulatorPopup">
             <div class="content-block">
                <div class="load">
                   <div id="emulator_target" style="margin:0!important;padding:0!important;left:0!important;position:absolute;transform:translate(0,-35px);width:100%;height:160px;background-color:black;"><br></div>
                   <span style="font-size: 15px; color: white; top: 0; font-family: arial; margin-top:16px; margin-right:16px;" id="tempMessage"></span>
                   <!-- Add This In (you can just copy the IDs of the buttons) -->
                   <div class="controllers controls">
                      <div id="buttons">
                         <div id="triggerL" class="button-l">L</div>
                         <div id="triggerR" class="button-r">R</div>
                         <div id="center" class="arrow-button-center arrow-button-centerr"></div>
                         <div id="right" class="arrow-button arrow-button-right"></div>
                         <div id="left" class="arrow-button arrow-button-left"></div>
                         <div id="up" class="arrow-button arrow-button-up"></div>
                         <div id="down" class="arrow-button arrow-button-down"></div>
                      </div>
                      <div id="portrait_settings_keys">
                         <div id="startbtn" class="menu-button menu-button-start">Start</div>
                         <div id="select" class="menu-button menu-button-select">Select</div>
                         <a style="cursor:pointer" onclick="showEmulationMenu();">
                            <div onclick='iframe.getElementById("emulatorPopup").className = "popup popup-load tablet-fullscreen";iframe.getElementById("emulatorPopup").style.display = "none"' style="transform:translate(40px,0)" class="menu-button menu-button-back">Menu</div>
                         </a>
                      </div>
                      <div id="portrait_action_keys">
                         <div id="bBtn" class="control-button button-b">B</div>
                         <div id="aBtn" class="control-button button-a">A</div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
          <div class="popup popup-welcome tablet-fullscreen">
             <div class="content-block">
                <center>
                   <img src="icon.png" width="100" height="100" style="box-shadow: 0 5px 13px 0 rgba(0, 0, 0, .1); border-radius: 21%;"/>
                   <h1 style="color:#333;">iGBA 2.0</h1>
                   <p>Built from the ground up, to offer the best web emu experience available. Some of the biggest changes are:</p>
                   <div style="width:200px; display: block;">
                      <ul style="text-align: left;">
                         <li>Tap hold controls</li>
                         <li>Faster Emulation</li>
                         <li>New UI</li>
                         <li>New Games Hub</li>
                         <li>New Repo System</li>
                         <li>New Skins System</li>
                         <li>Toggleable Audio</li>
                      </ul>
                   </div>
                   <p>But thats only a few of the features you can find in iGBA 2.0, why not discover them for yourself?</p>
                   <p>Please note that this version of iGBA is stripped down with the intent of being able to easily test your skins.</p>
                   <br>
                   <div class="row">
                     <div class="col-100 tablet-25"></div>
                     <div class="col-100 tablet-25">
                       <a href="#" onclick="iGBA.closeModal(); setupAudio(); setupFastForward();" class="button active button-big button-round" style="box-shadow: 0 5px 13px 0 rgba(0, 0, 0, .1); border:none; background-image: linear-gradient(-227deg, #FABE61 0%, #F76B1C 100%); font-weight:bold;">Get Started</a>
                     </div>
                     <div class="col-100 tablet-25"></div>
                   </div>
                </center>
                <br>
             </div>
          </div>
          <!-- <div class="popover popover-links">
             <div class="popover-angle"></div>
             <div class="popover-inner">
               <div class="list-block">
                 <ul>
                   <li><a href="#" class="list-button item-link" onclick="toggleEmulationAudio();">Toggle Audio</a></li>
                   <li><a href="#" class="list-button item-link" onclick="location.reload();">Close Emulator</a></li>
                 </ul>
               </div>
             </div>
             </div> -->
          <script>
          function showEmulationMenu() {
               var buttons = [
                 {
                   text: 'Toggle Audio',
                   onClick: function () {
                     toggleEmulationAudio();
                 }
               },
                {
                 text: 'Toggle Fast Forward',
                 onClick: function () {
                   toggleFastForward();
                 }
               },
                {
                 text: 'Fix Controls',
                 onClick: function () {
                   fixControls();
                 }
               },

             //   {
             //    text: 'Load Saves',
             //    onClick: function () {
             //      sendClickToLoadSave();
             //    }
             //  },
             //  {
             //   text: 'Export Saves',
             //   onClick: function () {
             //     exportSaves();
             //   }
             // },

                     {
                 text: 'Save Progress',
                 onClick: function () {
                   ExportSave();

                 }
               },
               {
                 text: 'Close Emulator',
                 onClick: function () {
                   ExportSave();
                   closeEmulator();

                 }
               }
               ];
           var cancelButton = [
           {
                 text: 'Cancel',
                 color: 'red'
                 }
           ];
           var btns = [buttons, cancelButton];
               iGBA.actions(btns);
             }
          </script>
          <!-- Template7 templates-->
          <!-- Path to Framework7 Library JS-->
          <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
          <script type="text/javascript" src=""previewSites/igba/js/framework7.min.js"></script>
          <!-- Path to your app js-->
          <script type="text/javascript" src="previewSites/igba/js/igba.js"></script>
          <script type="text/javascript" src="previewSites/igba/js/controls.js"></script>
          <script type="text/javascript" src="previewSites/igba/js/states.js"></script>
          <script src="previewSites/igba/IodineGBA/includes/TypedArrayShim.js"></script>
          <script src="previewSites/igba/IodineGBA/core/Cartridge.js"></script>
          <script src="previewSites/igba/IodineGBA/core/DMA.js"></script>
          <script src="previewSites/igba/IodineGBA/core/Emulator.js"></script>
          <script src="previewSites/igba/IodineGBA/core/Graphics.js"></script>
          <script src="previewSites/igba/IodineGBA/core/RunLoop.js"></script>
          <script src="previewSites/igba/IodineGBA/core/Memory.js"></script>
          <script src="previewSites/igba/IodineGBA/core/IRQ.js"></script>
          <script src="previewSites/igba/IodineGBA/core/JoyPad.js"></script>
          <script src="previewSites/igba/IodineGBA/core/Serial.js"></script>
          <script src="previewSites/igba/IodineGBA/core/Sound.js"></script>
          <script src="previewSites/igba/IodineGBA/core/Timer.js"></script>
          <script src="previewSites/igba/IodineGBA/core/Wait.js"></script>
          <script src="previewSites/igba/IodineGBA/core/CPU.js"></script>
          <script src="previewSites/igba/IodineGBA/core/Saves.js"></script>
          <script src="previewSites/igba/IodineGBA/core/sound/FIFO.js"></script>
          <script src="previewSites/igba/IodineGBA/core/sound/Channel1.js"></script>
          <script src="previewSites/igba/IodineGBA/core/sound/Channel2.js"></script>
          <script src="previewSites/igba/IodineGBA/core/sound/Channel3.js"></script>
          <script src="previewSites/igba/IodineGBA/core/sound/Channel4.js"></script>
          <script src="previewSites/igba/IodineGBA/core/CPU/ARM.js"></script>
          <script src="previewSites/igba/IodineGBA/core/CPU/THUMB.js"></script>
          <script src="previewSites/igba/IodineGBA/core/CPU/CPSR.js"></script>
          <script src="previewSites/igba/IodineGBA/core/graphics/Renderer.js"></script>
          <script src="previewSites/igba/IodineGBA/core/graphics/RendererProxy.js"></script>
          <script src="previewSites/igba/IodineGBA/core/graphics/BGTEXT.js"></script>
          <script src="previewSites/igba/IodineGBA/core/graphics/BG2FrameBuffer.js"></script>
          <script src="previewSites/igba/IodineGBA/core/graphics/BGMatrix.js"></script>
          <script src="previewSites/igba/IodineGBA/core/graphics/AffineBG.js"></script>
          <script src="previewSites/igba/IodineGBA/core/graphics/ColorEffects.js"></script>
          <script src="previewSites/igba/IodineGBA/core/graphics/Mosaic.js"></script>
          <script src="previewSites/igba/IodineGBA/core/graphics/OBJ.js"></script>
          <script src="previewSites/igba/IodineGBA/core/graphics/OBJWindow.js"></script>
          <script src="previewSites/igba/IodineGBA/core/graphics/Window.js"></script>
          <script src="previewSites/igba/IodineGBA/core/graphics/Compositor.js"></script>
          <script src="previewSites/igba/IodineGBA/core/memory/DMA0.js"></script>
          <script src="previewSites/igba/IodineGBA/core/memory/DMA1.js"></script>
          <script src="previewSites/igba/IodineGBA/core/memory/DMA2.js"></script>
          <script src="previewSites/igba/IodineGBA/core/memory/DMA3.js"></script>
          <script src="previewSites/igba/IodineGBA/core/cartridge/SaveDeterminer.js"></script>
          <script src="previewSites/igba/IodineGBA/core/cartridge/SRAM.js"></script>
          <script src="previewSites/igba/IodineGBA/core/cartridge/FLASH.js"></script>
          <script src="previewSites/igba/IodineGBA/core/cartridge/EEPROM.js"></script>
          <script src="previewSites/igba/js/XAudioJS/swfobject.js"></script>
          <script src="previewSites/igba/js/XAudioJS/resampler.js"></script>
          <script src="previewSites/igba/js/XAudioJS/XAudioServer.js"></script>
          <script src="previewSites/igba/js/IodineGBAGlueCode.js"></script>
          <script src="previewSites/igba/js/base64.js"></script>
          <script type="text/javascript" src="previewSites/igba/js/inobounce.js"></script>
          <script>
          if(!localStorage.autoSave) {
            localStorage.autoSave = "yes";
          }
          setInterval(function() {
            if(localStorage.autoSave == "yes") {
              ExportSave();
            }
          }, 30 * 1000);

             /* Basic Vars */
             var upLoop = null;
             var downLoop = null;
             var leftLoop = null;
             var rightLoop = null;

             var aLoop = null;
             var bLoop = null;
             var xLoop = null;
             var yLoop = null;

             var lLoop = null;
             var rLoop = null;

             var startLoop = null;
             var selectLoop = null;

             // EmulateKeys
             function emulateKeypress(code) {
             var down = new Event('keypress');
             down.keyCode = code;
             document.dispatchEvent(down);
             }

             function emulateKeydown(code) {
             var down = new Event('keydown');
             down.keyCode = code;
             document.dispatchEvent(down);
             }

             function emulateKeyup(code) {
             var up = new Event('keyup');
             up.keyCode = code;
             document.dispatchEvent(up);
             }

             // fixControls() has been moved to ./js/controls.js

             loadControls();
          </script>
       </body>
    </html>


    `;
    let myElements = document.querySelectorAll('igba-frame');

    if (document.body.attachShadow) {
      
      myElements.forEach((el) => {
        var shadow = el.attachShadow({
          mode: 'open'
        });
        shadow.innerHTML = content;
      });
      
    } else {
      
      console.log("[OpenSkin Editor] Your browser does not support Shadow DOMs.")
      document.getElementById("iframe_shim_loaded").style.display = "block";
      let newiframe = document.createElement("iframe");
      newiframe.srcdoc = content;
      
      myElements.forEach((el) => {
        let parent = el.parentNode;
        parent.replaceChild(newiframe, el);
      });

    }
}

function firstRun() {
  console.log('No save detected. Generating save and restarting...')
  jsonImport("{\"name\": \"\",\"logo\": \"\",\"author\": \"\",\"description\": \"\",\"styles\": [{\"header\": \"\",\"label\": \"\",\"button\": \"\",\"alert\": \"\",\"containerBackground\": \"\",\"cell\": \"\",\"cellChevron\": \"\",\"toolbar\": \"\",\"emulatorBackground\": \"undefined\",\"emulatorBackground\": \"undefined\",\"triggerL\": \"\",\"triggerR\": \"\",\"center\": \"\",\"right\": \"\",\"left\": \"\",\"up\": \"\",\"down\": \"\",\"aBtn\": \"\",\"bBtn\": \"\",\"startBtn\": \"\",\"select\": \"\"}]}")
  save()
  location.reload()
}

function init() {
    console.log("[OpenSkin Editor] Initializing...");
    load();
    update();
}

window.onload = function() {
    console.log("[OpenSkin Editor] Loaded!")
    init()
}