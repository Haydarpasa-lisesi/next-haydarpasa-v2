import Image from 'next/image';
interface OgretmenProps {
  ogretmenSRC: StaticImageData;
  isim: string;
  branş: string;
}
function Ogretmen({ ogretmenSRC, isim, branş }: OgretmenProps) {
  return (
    <div className="group  relative flex  h-[25vh] max-h-[300px] min-h-[200px] w-full max-w-[450px] items-end xs:min-w-[190px] sm:h-[27vw] sm:w-[44vw]   md:w-[40vh] ">
      <Image src={ogretmenSRC} alt={isim} fill />
      <div className="opactiy-100 z-10 flex w-full flex-col justify-center gap-2 bg-primary-1/90 px-3 py-1 text-white transition-all duration-200  ease-in-out md:translate-y-3 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
        <h2 className="font-bold">{isim}</h2>
        <p>{branş}</p>
      </div>
    </div>
  );
}

export default Ogretmen;
