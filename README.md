ping-pong
=========
This was my first javascript program. I started out with a simple div, the ball, and made it move around the screen using a timer (setInterval) and absolute positioning. Next I made it bounce off the edges by simply reversing the x or y speed.

The bat was added as another absolutely positioned div, to move the bat I added a keyboard listener (addEventListener) for up/down arrow keys, these simply change the bats top position.

To make the ball bounce off the bat I detect when the ball is at the bats x position and see if it's y position is between the top of the bat and the bottom.

To make it work on ipad I added touch events to move the bat, tap in the top half to move up, bottom half of screen to move down.

I used random numbers for the initial ball x and y speed.

JS Used:
*    create div element in code
*    absolute positioning
*    setInterval for ball movement
*    random number for inital speed
*    keyboard event listener for bat movement
*    touch event listener for ipad


todo:
*    add a background image
*    add walls for top, bottom, right
*    better bat
*    limit bat movement
*    use center of ball when bouncing off bat
*    levels - change ball speed (or number of balls?), bat size...

