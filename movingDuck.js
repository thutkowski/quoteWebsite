const canvas  = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const iconSize = 50;
    let posX = canvas.width / 2 - iconSize / 2;
    let posY = canvas.height / 2 - iconSize / 2;
    let speedX = 3;
    let speedY = 2;

    const image = new Image();
    image.src="pinkDuckSmall.png"
    
    function drawIcon() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(image,posX,posY,iconSize,iconSize);
    }

    function updatePosition() {
        posX += speedX;
        posY += speedY;

        // Check collision with walls
        if (posX <= 0 || posX + iconSize >= canvas.width) {
            speedX = -speedX;
        }
        if (posY <= 0 || posY + iconSize >= canvas.height) {
            speedY = -speedY;
        }
    }

    function animate() {
        updatePosition();
        drawIcon();
        requestAnimationFrame(animate);
    }

    image.onload = function() {
        // Start animation when the button is clicked
        document.getElementById('addDuck').addEventListener('click', function() {
            animate();
        });
    };