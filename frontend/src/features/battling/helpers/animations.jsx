import { useState, useEffect, useRef } from 'react';
import sprites from '../../assets/frontend.png';

// spritesheet, width, height, row, frames

export default function CanvasWalk({oversize, row, frames, repeat}) {

  const isMounted = useRef(true)
  const firstRender = useRef(true)

  useEffect( () => {
    isMounted.current = true
    return () => {
      isMounted.current = false
    }
  }, [])
  
  let height, width
  if (oversize) {
    height = 192;
    width = 192;
  } else {
    height = 64;
    width = 64;
  }

  const scale = 2;
  const scaledWidth = scale * width;
  const scaledHeight = scale * height;
  const spritesheet = new Image();
  spritesheet.src = sprites;

  const ref = useRef();
  const frame = useRef(1);
  const frameCount = useRef(0);

  const canvasBoxStyle = {
    position: 'absolute',
    top: '50',
    left: '50',
    height: `${height}`,
    width: `${width}`,
    marginTop: `-${height/2}`,
    marginLeft: `-${width/2}`,
  }
  const canvasStyle = {
    display: 'grid',
    placeItems: 'center',
  }

  useEffect( () => {
    let canvas = ref.current;
    let context = canvas.getContext('2d')

    function drawFrame(frameX, frameY, canvasX, canvasY) {
      context.drawImage(
        spritesheet,
        (frameX * width), (frameY * height), width, height,
        canvasX, canvasY, scaledWidth, scaledHeight
      )
    }

    function frameStep() {
      if (isMounted.current) {
        frameCount.current++;
        if (frameCount.current < 12 && firstRender.current == false) {
          window.requestAnimationFrame(frameStep);
          return
        }
        frameCount.current = 0;
        context.clearRect(0, 0, canvas.width, canvas.height);
        drawFrame(frame.current, row-1, 0, 0);
        frame.current++;
        if (frame.current >= frames) {
          if (repeat == false) return
          frame.current = 1;
        }
        firstRender.current = false
        window.requestAnimationFrame(frameStep)
      }
    }
    window.requestAnimationFrame(frameStep)
  })

  return (
    <div style={{...canvasBoxStyle}}>
      <canvas
        ref = {ref}
        id = "canvas"
        style = {{...canvasStyle}}
        width = {scaledWidth}
        height = {scaledHeight}
      />
    </div>
  )
}