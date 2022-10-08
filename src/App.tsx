// components & layouts
import { ButtonBoard, ColorCanvas, SelectDifficulty, DisplayMsg } from "@/components"; 
import { MainLayout, PageFooter } from '@/layouts'

// packages
import { tw } from "twind";

function App() {
  return (
    <>
    <DisplayMsg/>
    <MainLayout>
      <div className={tw`grid justify-center`}>
        <ColorCanvas/>
        <ButtonBoard/>
      </div>
    </MainLayout>
    <PageFooter>
      <SelectDifficulty />
    </PageFooter>
    </>
  )
}

export default App