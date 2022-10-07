import { useEffect, useRef } from "react";
import ColorCanvas from "@/components/colorCanvas";
import GameButton from "@/components/gameButtons";
import { ButtonLayout, MainLayout } from '@/layouts';

function App() {
  return (
    <MainLayout>
      <div>
        <ColorCanvas/>
        <ButtonLayout>
          { [...Array(3).keys()].map( (el, index)=> <GameButton key={index} />) }
        </ButtonLayout>
      </div>
    </MainLayout>
  )
}

export default App