'use client';
import {
  useState,
  SyntheticEvent,
  useCallback,
} from 'react';
import Loading from '@/ui/global/loading';
import Input from '@/ui/global/form_elements/Input';
import Label from '@/ui/global/form_elements/Label';
import ContainerComp from '@/ui/global/Container';
import { useInput } from 'hooks/useInput';

function TanıtımFormu() {
  const [isLoading, setIsLoading] = useState(false);
  const [check, setCheck] = useState(false);
  const [error, setError] = useState(false);
  const tamAd = useInput('');
  const mail = useInput('');
  const telefon = useInput('');
  const mesaj = useInput('');

  const sendForm = useCallback(
    async (e: SyntheticEvent) => {
      e.preventDefault();
      setCheck(false);
      setIsLoading(true);
      const state = {
        tamAd: tamAd.value,
        mail: mail.value,
        telefon: telefon.value,
        mesaj: mesaj.value,
      };
      await fetch('/api/tanitim', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(state),
      }).catch(() => {
        setIsLoading(false);
        setCheck(false);
        setError(true);
      });
      tamAd.reset();
      mail.reset();
      telefon.reset();
      mesaj.reset();

      setIsLoading(false);
      setCheck(true);
    },
    [tamAd, mail, telefon, mesaj],
  );

  return (
    <ContainerComp classNames="my-[5rem]">
      <h2 className="mb-5 text-xl font-bold text-primary-3">
        Tanıtım Başvurusu
      </h2>
      {isLoading && <Loading />}
      {!error && check && (
        <p className="text-lg font-bold text-blue-600">
          Form başarıyla gönderildi!
        </p>
      )}
      {error && <p className="text-xl text-red-600">Bir hata oluştu...</p>}
      {!isLoading && (
        <form onSubmit={sendForm}>
          <div className="mb-6 grid gap-6 md:grid-cols-2">
            <div>
              <Label htmlFor="tamAd">Tam Ad*</Label>
              <Input
                name="tamAd"
                id="tamAd"
                type="text"
                onChange={tamAd.onChange}
                value={tamAd.value}
                placeholder="Sena"
                required={true}
              />
            </div>
            <div className="mb-2">
              <Label htmlFor="mail">Email*</Label>
              <Input
                name="mail"
                id="mail"
                type="email"
                onChange={mail.onChange}
                value={mail.value}
                placeholder="example@gmail.com"
                required={true}
              />
            </div>

            <div>
              <Label htmlFor="phone">Telefon Numarası*</Label>
              <Input
                name="telefon"
                id="phone"
                type="tel"
                onChange={telefon.onChange}
                value={telefon.value}
                placeholder="+90"
                required={true}
              />
            </div>
          </div>
          <Label htmlFor="mesaj">Mesajınız</Label>

          <textarea
            id="mesaj"
            value={mesaj.value}
            name="mesaj"
            rows={4}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
            placeholder="Mesajınızı buraya yazın"
            onChange={mesaj.onChange}
          ></textarea>

          <button
            type="submit"
            disabled={
              isLoading ||
              tamAd.value.length == 0 ||
              mail.value.length == 0 ||
              telefon.value.length == 0 ||
              error
            }
            className="in-ease-out my-5 w-full rounded-lg bg-red-700 px-5 py-2.5 text-center text-sm font-bold text-white duration-500 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 active:scale-105 active:bg-red-800 disabled:cursor-not-allowed disabled:bg-red-100 sm:w-auto "
          >
            Gönder
          </button>
        </form>
      )}
    </ContainerComp>
  );
}

export default TanıtımFormu;
