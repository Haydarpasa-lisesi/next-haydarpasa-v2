import Frame from './Frame';
import SectionTitle from '@/ui/client/global/SectionTitle';

function Marş() {
  return (
    <section className=" my-12 flex h-full w-full   flex-col items-center bg-white p-3 lg:flex-row lg:p-5">
      <div className="gap-3 lg:pr-4   ">
        <SectionTitle>Okul Marşı</SectionTitle>
        <div className="ml-3 font-sans text-sm leading-10 xs:text-[0.6rem] sm:text-base 	 ">
          <span className=" text-[0.6rem] xs:text-sm sm:text-sm ">
            Okulumuz, yurdumuzun en şerefli lisesi{' '}
          </span>
          <span className=" text-[0.6rem] xs:text-sm sm:text-sm ">
            İlm-i irfandan meş&apos;ale taşır her bir köşesi
          </span>
          <span className=" text-[0.6rem] xs:text-sm sm:text-sm ">
            Çok yücesin, çok ulusun ey imanlı Türk gençliği{' '}
          </span>
          <span className=" text-[0.6rem] xs:text-sm sm:text-sm ">
            Amaç yaptın sen kendine, cesaret ve mertliği{' '}
          </span>
          <span className=" text-[0.6rem] xs:text-sm sm:text-sm ">
            Haydarpaşa Lisesi bu gençlere kucak açar,{' '}
          </span>
          <span className=" text-[0.6rem] xs:text-sm sm:text-sm ">
            Medeniyet dünyasına nurlu ışıklar saçar.{' '}
          </span>
          <span className=" text-[0.6rem] xs:text-sm sm:text-sm ">
            Üç kıtaya feyiz veren ataların ahfadı{' '}
          </span>
          <span className=" text-[0.6rem] xs:text-sm sm:text-sm ">
            Fazilet ve hakka tapan büyük neslin evladı{' '}
          </span>
          <span className=" text-[0.6rem] xs:text-sm sm:text-sm ">
            Tarihinin eşi yoktur, ey kahraman Türkoğlu
          </span>
          <span className=" text-[0.6rem] xs:text-sm sm:text-sm ">
            Ey cihanda devir açan, devrim yapan Türkoğlu{' '}
          </span>
          <span className=" text-[0.6rem] xs:text-sm sm:text-sm ">
            Haydarpaşa Lisesi bu gençlere kucak açar,
          </span>
          <span className=" text-[0.6rem] xs:text-sm sm:text-sm ">
            Medeniyet dünyasına nurlu ışıklar saçar.
          </span>

          <br />
          <span className="text-sm sm:text-base">
            <span className=" font-bold"> Beste ve güfte</span>: Niyazi
            ÇITAKOĞLU
          </span>
        </div>
      </div>
      <div className=" h-[90%]  min-h-[150px] w-[92%] overflow-hidden   ">
        <Frame height={'500px'} />
      </div>
    </section>
  );
}

export default Marş;
