import Navbar from "@/components/navbar";
import ContactUsFloatingBtn from "@/components/contact-us-floating-btn";
import Footer from "@/components/footer";
import WhatsappFloatingBtn from "@/components/whatsapp-floating-btn";
import Link from "next/link";
import Image from "next/image";
import type {Metadata} from "next";
import ContactForm from "@/components/contact-form";

export const metadata: Metadata = {
    title: "Battista Trasporti - Servizi per materiali fragili a Milano",
    description: "Trasporto sicuro a Milano per gioielli preziosi, oggetti fragili, farmaci e alimenti deperibili con massima cura e puntualità.",
};

export default function DedicatedTransportPage() {
  return (
      <div className="min-h-screen gap-2">
          <ContactUsFloatingBtn/>
          <Navbar>
              <Link href="/" className="cursor-pointer text-nowrap">Torna alla Home</Link>
          </Navbar>
          <WhatsappFloatingBtn/>

          <main className="my-8 flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <div id="dedicated-transport" className="mt-4 sm:mt-0 px-8 sm:px-16 grid grid-cols-12">
              {/* Trasporti su misura */}
              <div className="col-span-12 leading-[40px]">
                  <h1 className="text-5xl font-bold mb-8">Trasporti su Misura: La nostra Eccellenza</h1>
                  <div className="grid grid-cols-12 gap-6">
                      <div className="col-span-12 sm:col-span-8">
                          <h2 className=" text-gray-600 text-lg leading-[40px]">
                              Nel mondo della logistica, ogni carico ha la sua importanza e ogni cliente merita un servizio
                              personalizzato.
                              È proprio su questa filosofia che Battista Trasporti ha costruito la sua reputazione: offrire
                              trasporti su misura,
                              progettati per soddisfare le esigenze uniche di ogni cliente. Grazie a un’esperienza consolidata
                              nel settore
                              e a una flotta moderna e versatile, siamo in grado di gestire ogni tipo di trasporto, garantendo
                              qualità,
                              puntualità e sicurezza in ogni fase del processo.
                          </h2>
                          <h3 className="text-3xl font-bold my-8">Cosa significa “trasporti su misura”?</h3>
                          <div className="text-gray-600 text-lg leading-[40px]">
                              Quando parliamo di trasporti su misura, intendiamo un servizio completamente personalizzato,
                              progettato per rispondere alle esigenze specifiche di ogni cliente. Questo approccio è
                              particolarmente utile per chi ha necessità particolari, come:
                              <ul className="p-4 list-disc">
                                  <li>Trasporti speciali: movimentazione di carichi fragili o preziosi.</li>
                                  <li>Trasporti a temperatura controllata: gestione della catena del freddo per alimenti,
                                      farmaci e altri prodotti deperibili.
                                  </li>
                                  <li>Trasporti per settori specifici: moda, eventi, fotografia, traslochi e molto altro.</li>
                              </ul>
                              Il nostro obiettivo è quello di offrire una soluzione che sia perfettamente in linea con le tue
                              richieste, ottimizzando i tempi e garantendo la massima cura per le tue merci.
                          </div>
                      </div>
                      <div className="col-span-12 sm:col-span-4 flex justify-center">
                          <Image
                              src="/servizi/trasporti-su-misura.png"
                              alt="Battista Trasporti su misura"
                              width={0}
                              height={0}
                              priority
                              sizes="100vw"
                              className="mt-2 rounded-md w-full h-auto"
                          />
                      </div>
                  </div>

                  <h3 className="text-3xl font-bold my-8">Perché scegliere Battista Trasporti per i tuoi trasporti su
                      misura?</h3>
                  <h4 className="text-xl font-bold my-8">1. Pianificazione dettagliata</h4>
                  <p className="text-gray-600 text-lg leading-[40px]">
                      Ogni trasporto è pianificato nei minimi dettagli, tenendo conto delle caratteristiche del carico,
                      delle
                      tempistiche richieste e delle necessità specifiche del cliente. La nostra esperienza ci permette
                      di prevedere
                      e risolvere eventuali criticità, assicurando un servizio impeccabile.
                  </p>
                  <h4 className="text-xl font-bold my-8">2. Flotta versatile e tecnologicamente avanzata</h4>

                  <div className="text-gray-600 text-lg leading-[40px]">
                      La nostra flotta include veicoli di ultima generazione, progettati per gestire ogni tipo di
                      trasporto:
                      <ul className="p-4 list-disc">
                          <li>🚚 Veicoli dedicati per trasporti fragili o di alto valore.</li>
                          <li>📦 Van e furgoni per consegne rapide e flessibili.</li>
                          <li>❄️ Furgoni refrigerati per trasporti a temperature fino a -20°C.</li>
                      </ul>
                  </div>

                  <h4 className="text-xl font-bold my-8">3. Assistenza completa</h4>
                  <p className="text-gray-600 text-lg leading-[40px]">
                      Il nostro team ti accompagna in ogni fase del processo, fornendo assistenza tecnica per il carico e
                      lo scarico, monitoraggio in tempo reale e un supporto clienti sempre disponibile.
                  </p>

                  <h4 className="text-xl font-bold my-8">4. Copertura capillare</h4>
                  <p className="text-gray-600 text-lg leading-[40px]">
                      Operiamo in tutta Italia, con un focus particolare su Milano e hinterland, garantendo consegne
                      rapide, sicure e puntuali.
                  </p>

                  <h3 className="text-3xl font-bold my-8">Un partner affidabile per i tuoi trasporti</h3>
                  <p className="text-gray-600 text-lg leading-[40px]">
                      La scelta di un servizio di trasporto non è mai banale, e Battista Trasporti lo sa bene. Per questo ci
                      impegniamo ogni giorno a essere il partner ideale per aziende e privati che cercano affidabilità,
                      qualità e flessibilità. Che tu abbia bisogno di un trasporto urgente, di gestire carichi complessi o
                      di trovare una soluzione personalizzata, noi siamo qui per aiutarti.
                  </p>


                  <h3 className="text-3xl font-bold my-8">Contattaci per il tuo trasporto su misura</h3>
                  <p className="text-gray-600 text-lg leading-[40px]">
                      Siamo pronti a trasformare le tue esigenze di trasporto in una soluzione concreta. Contattaci oggi
                      stesso per ricevere una consulenza personalizzata e scoprire come possiamo aiutarti a raggiungere
                      i tuoi obiettivi.
                  </p>
              </div>
          </div>
          <ContactForm />
          </main>
          <Footer/>
      </div>
  );
}
