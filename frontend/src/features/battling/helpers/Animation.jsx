import { useState, useEffect, useRef } from 'react';
import frontend from '../../assets/frontend.png';
import backend from '../../assets/backend.png';
import fullstack from '../../assets/fullstack.png';
import Raphael from '../../assets/raphael.png';
import Adam from '../../assets/adam.png';
import Zaynab from '../../assets/zaynab.png';
import EnemyOne from '../../assets/Enemy.png';
import EnemyTwo from '../../assets/Enemy2.png';
import WhiteHit from '../../assets/whitehit.png';
import FireHit from '../../assets/firehit.png';
import Justin from '../../assets/Justin.png';
import Skyler from '../../assets/Skyler.png';
import Meredith from '../../assets/Meredith.png';
import Garrett from '../../assets/Garrett.png';
import Zack from '../../assets/Zack.png';

export default function Animation({key, height, width, row, frames, repeat, scale=2, type, zIndex=0, running=true, speed=15, mouse=false}) {
  
  const firstRender = useRef(true)

  const scaledWidth = scale * width;
  const scaledHeight = scale * height;
  const spritesheet = new Image();
  spritesheet.src = getSpritesheet()

  const ref = useRef();
  const frame = useRef(0);
  const theRow = useRef(row);

  const frameCount = useRef(0)
  const FRAMES_PER_SECOND = speed
  const FRAME_MIN_TIME = (1000/60) * (60/FRAMES_PER_SECOND) - (1000/60) * 0.5;

  function getSpritesheet() {
    if (type === 'frontend') return frontend
    if (type === 'backend') return backend
    if (type === 'fullstack') return fullstack
    if (type === 'Raphael') return Raphael
    if (type === 'Adam') return Adam
    if (type === 'Zaynab') return Zaynab
    if (type === 'EnemyOne') return EnemyOne
    if (type === 'EnemyTwo') return EnemyTwo
    if (type === 'whiteHit') return WhiteHit
    if (type === 'fireHit') return FireHit
    if (type === 'Justin') return Justin
    if (type === 'Skyler') return Skyler
    if (type === 'Meredith') return Meredith
    if (type === 'Garrett') return Garrett
    if (type === 'Zack') return Zack
  }

  useEffect( () => {
    let canvas = ref.current;
    let context = canvas.getContext('2d')
    requestAnimationFrame(frameStep)

    if (mouse) {
      function getMousePosition(canvas, event) {
        let rect = canvas.getBoundingClientRect()
        return {
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        }
      }
      canvas.addEventListener('mousemove', function(event) {
        let mousePos = getMousePosition(canvas, event)
        console.log('mouse position: ', mousePos.x, ',', mousePos.y)
        if (mousePos.x <= 32) {
          theRow.current = row-1
        }
        if (mousePos.x > 32 && mousePos.x < 64) {
          theRow.current = row
        }
        if (mousePos.x >= 64) {
          theRow.current = row+1
        }
      }, false)      
    }

    function drawFrame(frameX, frameY, canvasX, canvasY) {
      context.drawImage(
        spritesheet,
        (frameX * width), (frameY * height), width, height,
        canvasX, canvasY, scaledWidth, scaledHeight
      )
    }

    function frameStep(time) {
      if (time-frameCount.current < FRAME_MIN_TIME && firstRender.current === false) {
        requestAnimationFrame(frameStep);
        return;
      }
      frameCount.current = time

      context.clearRect(0, 0, canvas.width, canvas.height);
      drawFrame(frames[frame.current], theRow.current-1, 0, 0);

      if (running) {
        frame.current++;
        if (frame.current >= frames.length) {
          if (repeat) frame.current = 0;
          else return
        }
      }
      firstRender.current = false
      requestAnimationFrame(frameStep)
    }
  }, [])

  const canvasBoxStyle = {
    position: 'absolute',
    top: '50',
    left: '50',
    height: `${height}`,
    width: `${width}`,
    marginTop: `-${height/2}`,
    marginLeft: `-${width/2}`,
    zIndex: {zIndex},
  }
  const canvasStyle = {
    display: 'grid',
    placeItems: 'center',
  }

  return (
    <div style={{...canvasBoxStyle}}>
      <canvas
        key = {key}
        ref = {ref}
        style = {{...canvasStyle}}
        width = {scaledWidth}
        height = {scaledHeight}
      />
    </div>
  )
}