import { useState, useEffect, useRef } from 'react';
import frontend from '../../assets/frontend.png';
import backend from '../../assets/backend.png';
import fullstack from '../../assets/fullstack.png';
import Raphael from '../../assets/raphael.png';
import Adam from '../../assets/adam.png';
import Zaynab from '../../assets/zaynab.png';
import EnemyOne from '../../assets/Enemy.png';
import EnemyTwo from '../../assets/Enemy2.png';

export default function Animation({height, width, row, frames, repeat, type}) {

  const firstRender = useRef(true)

  const scale = 2;
  const scaledWidth = scale * width;
  const scaledHeight = scale * height;
  const spritesheet = new Image();
  spritesheet.src = getSpritesheet()

  const ref = useRef();
  const frame = useRef(0);

  const frameCount = useRef(0)
  const FRAMES_PER_SECOND = 15
  const FRAME_MIN_TIME = (1000/60) * (60/FRAMES_PER_SECOND) - (1000/60) * 0.5;

  useEffect( () => {
    firstRender.current = true
  }, [])

  function getSpritesheet() {
    if (type === 'frontend') return frontend
    if (type === 'backend') return backend
    if (type === 'fullstack') return fullstack
    if (type === 'Raphael') return Raphael
    if (type === 'Adam') return Adam
    if (type === 'Zaynab') return Zaynab
    if (type === 'EnemyOne') return EnemyOne
    if (type === 'EnemyTwo') return EnemyTwo
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

    function frameStep(time) {
      if (time-frameCount.current < FRAME_MIN_TIME && firstRender.current === false) {
        requestAnimationFrame(frameStep);
        return;
      }
      frameCount.current = time
      context.clearRect(0, 0, canvas.width, canvas.height);
      drawFrame(frames[frame.current], row-1, 0, 0);
      frame.current++;
      if (frame.current >= frames.length) {
        if (repeat) frame.current = 0
        else return
      }
      firstRender.current = false
      requestAnimationFrame(frameStep)
    }
    requestAnimationFrame(frameStep)
  })

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