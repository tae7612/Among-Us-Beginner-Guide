function preload(){
    auFont = loadFont('assets/font/AmaticSC-Bold.ttf');
}

function setup() {
    darkbg = loadImage("assets/img/sillyAmongUsBg.jpg");
    lightbg = loadImage("assets/img/lightAmongUsBg.jpg");
    //Logo Image
    logo = createImg('assets/logo/Logo.png', 'the among us logo');
    logo.position(windowWidth/3,-30);
    getAudioContext().suspend();
    
    //Videos
    lore = createVideo("assets/video/Lore.mp4");
    lore.size(640, 360);
    lore.position(50,windowHeight/3);
    lore.style("display", "block");
    lore.volume(1);
    
    
    gT = createVideo("assets/video/Game Theory.mp4");
    gT.size(640, 360);
    gT.position(50,windowHeight/3);
    gT.style("display", "none");
    gT.volume(0);

    
    stream = createVideo("assets/video/The Most Insane 900 IQ Among Us Outplay!.mp4");
    stream.size(640, 360);
    stream.position(50,windowHeight/3);
    stream.style("display", "none");
    stream.volume(0);

    
    caveman = createVideo("assets/video/CAVEMAN_MODE.mp4");
    caveman.size(640, 360);
    caveman.position(50,windowHeight/3);
    caveman.style("display", "none");
    caveman.volume(0);

    
    //Buttons
    
    loreBtn = createButton('Lore');
    loreBtn.position(windowWidth/1.8,windowHeight/2.3);
    loreBtn.style('width', '200px');
    loreBtn.style('height', '40px');
    loreBtn.style('border', 'none');
    loreBtn.style('border-radius', '4px');
    loreBtn.style("font-family", 'Amatic SC, cursive');
    loreBtn.style("font-size", '30px');
    loreBtn.style("background-color", 'purple');
    loreBtn.style("color", 'white');
    loreBtn.mouseClicked(loreVideo);
    
    
    gameTBtn = createButton('Game Theory');
    gameTBtn.position(windowWidth/1.3,windowHeight/2.3);
    gameTBtn.style('width', '200px');
    gameTBtn.style('height', '40px');
    gameTBtn.style('border', 'none');
    gameTBtn.style('border-radius', '4px');
    gameTBtn.style("font-family", 'Amatic SC, cursive');
    gameTBtn.style("font-size", '30px');
    gameTBtn.style("background-color", 'purple');
    gameTBtn.style("color", 'white');
    gameTBtn.mouseClicked(gTVideo);
    
    
    streamBtn = createButton('Stream');
    streamBtn.position(windowWidth/1.8,windowHeight/1.6);
    streamBtn.style('width', '200px');
    streamBtn.style('height', '40px');
    streamBtn.style('border', 'none');
    streamBtn.style('border-radius', '4px');
    streamBtn.style("font-family", 'Amatic SC, cursive');
    streamBtn.style("font-size", '30px');
    streamBtn.style("background-color", 'purple');
    streamBtn.style("color", 'white');
    streamBtn.mouseClicked(streamVideo);
    
    cavemanBtn = createButton('Caveman Mode');
    cavemanBtn.position(windowWidth/1.3,windowHeight/1.6);
    cavemanBtn.style('width', '200px');
    cavemanBtn.style('height', '40px');
    cavemanBtn.style('border', 'none');
    cavemanBtn.style('border-radius', '4px');
    cavemanBtn.style("font-family", 'Amatic SC, cursive');
    cavemanBtn.style("font-size", '30px');
    cavemanBtn.style("background-color", 'purple');
    cavemanBtn.style("color", 'white');
    cavemanBtn.mouseClicked(cavemanVideo);
    
    
    playBtn = createButton('Play');
    playBtn.position(windowWidth/9,windowHeight/1.15);
    playBtn.style('width', '100px');
    playBtn.style('height', '40px');
    playBtn.style('border', 'none');
    playBtn.style('border-radius', '4px');
    playBtn.style("font-family", 'Amatic SC, cursive');
    playBtn.style("font-size", '30px');
    playBtn.style("background-color", 'lime');
    playBtn.style("color", 'white');
    playBtn.mouseClicked(playVideo);
    
    
    pauseBtn = createButton('Pause');
    pauseBtn.position(windowWidth/4.4,windowHeight/1.15);
    pauseBtn.style('width', '100px');
    pauseBtn.style('height', '40px');
    pauseBtn.style('border', 'none');
    pauseBtn.style('border-radius', '4px');
    pauseBtn.style("font-family", 'Amatic SC, cursive');
    pauseBtn.style("font-size", '30px');
    pauseBtn.style("background-color", 'red');
    pauseBtn.style("color", 'white');
    pauseBtn.mouseClicked(pauseVideo); 
    
    replayBtn = createButton('Replay');
    replayBtn.position(windowWidth/3,windowHeight/1.15);
    replayBtn.style('width', '100px');
    replayBtn.style('height', '40px');
    replayBtn.style('border', 'none');
    replayBtn.style('border-radius', '4px');
    replayBtn.style("font-family", 'Amatic SC, cursive');
    replayBtn.style("font-size", '30px');
    replayBtn.style("background-color", 'blue');
    replayBtn.style("color", 'white');
    replayBtn.mouseClicked(replayVideo);

    createCanvas(windowWidth, windowHeight);
    
    
}

function draw() {
  background(lightbg);
}

function playVideo(){
    lore.play();
    gT.play();
    stream.play();
    caveman.play();
}

function pauseVideo() { 
    lore.pause(); 
    gT.pause();
    stream.pause();
    caveman.pause();
} 

function replayVideo() { 
    lore.time(0); 
    gT.time(0);
    stream.time(0);
    caveman.time(0);
} 

function switchVideo(){
    lore.style("display", "none");
    lore.volume(0);
    gT.style("display", "none");
    gT.volume(0);
    stream.style("display", "none");
    stream.volume(0);
    caveman.style("display", "none");
    caveman.volume(0);
}

function loreVideo(){
    
    switchVideo();
    lore.style("display", "block");
    lore.pause(); 
    lore.volume(1);
    lore.time(0); 
    
    
}

function gTVideo(){
    switchVideo();
    gT.style("display", "block");
    gT.volume(1);
    gT.time(0);
    
}

function streamVideo(){
    switchVideo();
    stream.style("display", "block");
    stream.pause();
    stream.volume(1);
    stream.time(0);
    
}

function cavemanVideo(){
    switchVideo();
    caveman.style("display", "block");
    caveman.pause();
    caveman.volume(1);
    caveman.time(0);
    
}

function mousePressed(){
    userStartAudio();
}

