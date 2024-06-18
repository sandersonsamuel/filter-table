import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Tabela} from "@/components/Table";

export default function Home() {
  return (
      <>
          <div className={'flex flex-col w-screen h-screen p-10'}>
              <div className={'flex flex-col items-center'}>

                  <div className={'flex w-1/3 gap-5'}>
                      <div className={'flex flex-col'}>
                          <label htmlFor="id">Filtrar por id:</label>
                          <Input type={'text'} id={'id'} placeholder={'id'}/>
                      </div>

                      <div className={'flex flex-col'}>
                          <label htmlFor="nome">Filtrar por nome:</label>
                          <Input type={'text'} id={'nome'} placeholder={'nome'}/>
                      </div>
                  </div>

                  <div className={'w-1/2'}>
                      <Tabela/>
                  </div>

              </div>
          </div>
      </>
  );
}
