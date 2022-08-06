import React from 'react'
import { render } from 'react-dom';
import Timer from '../components/Timer';

export default function Home() {
  return (
    <div>
      <Timer/>
      <button>ยาใหม่</button>
      <button>ตั้งค่า</button>
    </div>
  )
}