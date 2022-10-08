import { useEffect, useRef } from "react";
import ColorCanvas from "@/components/colorCanvas";
import GameButton from "@/components/gameButtons";
import { ButtonLayout, MainLayout } from '@/layouts';
import { tw } from "twind";

function App() {
  return (
    <MainLayout>
      <div className={tw`grid justify-center`}>
        <ColorCanvas/>
        <ButtonLayout>
          { [...Array(3).keys()].map( (el, index)=> <GameButton key={index} />) }
        </ButtonLayout>
      </div>
    </MainLayout>
  )
}

export default App