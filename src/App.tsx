// components & layouts
import { ButtonBoard, ColorCanvas, SelectDifficulty } from "@/components";
import { MainLayout, PageFooter } from '@/layouts'

// packages
import { tw } from "twind";

function App() {
  return (
    <>
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