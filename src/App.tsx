import { useState } from 'react'
import { tw } from "twind"
import ColorCanvas from "@/components/colorCanvas";
import GameButtons from "@/components/gameButtons";


function App() {

  return (
    <div className={tw`grid h-screen place-items-center`}>
      <ColorCanvas></ColorCanvas>
      <GameButtons></GameButtons>
    </div>
  )
}

export default App