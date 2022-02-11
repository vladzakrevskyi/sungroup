import React from 'react';
import { Container, Row } from 'react-bootstrap';
import laptopContentFirst from '../img/laptop-content-1.png';
import laptopContentSecond from '../img/laptop-content-2.png';
import laptopContentThird from '../img/laptop-content-3.png';
import laptopContentFourth from '../img/laptop-content-4.png';
import laptopContentFifth from '../img/laptop-content-5.png';

export function ContentSection() {
    return(
      <Container fluid>
        <Container className="pt-100">
          <Row>
            <img src={laptopContentFirst} alt="" width="100%"/>
            <h2 className="text-black mt-5">Pomysłowe technologie dla wszystkich</h2>
            <p className="mt-3">Lenovo poszerza zakres możliwości w nowych laptopach Yoga opracowanych wspólnie z firmą Intel® i wyposażonych w
            funkcje sztucznej inteligencji. Teraz możesz mówić do urządzenia i nim sterować z drugiego końca pokoju. Oglądać wideo o podwyższonej
            jakości w programie Windows Media Player. Unikać zmęczenia oczu dzięki wyświetlaczowi, który automatycznie zmniejsza natężenie światła
             niebieskiego odpowiednio do pory dnia. A to jeszcze nie wszystko.</p>
             <h2 className="text-black mt-5">Sztuczna inteligencja i zdrowy rozsądek</h2>
             <p className="mt-3">Zaawansowany procesor Intel® Core™ 10. generacji do urządzeń mobilnych i utraprzenośny laptop Yoga S740 dostosowują się do Twoich potrzeb i stylu użytkowania. Razem tworzą rozwiązanie bardziej intuicyjne i osobiste, którego sztuczna inteligencja dynamicznie reaguje na Twoje działania i optymalizuje żywotność baterii.</p>
             <img src={laptopContentSecond} alt="" width="100%" className="mt-5"/>
             <h2 className="text-black mt-5">Potrzebujesz czegoś? Wystarczy poprosić.</h2>
             <p className="mt-3">Yoga S740 ma mikrofony dalekiego zasięgu i inteligentne asystentki głosowe Alexę oraz Cortanę. Pomogą Ci złożyć zamówienie, ustawić przypomnienie czy odtworzyć muzykę — wystarczy poprosić z odległości do 4 metrów. To kolejny przykład przewagi, jaką daje Ci Yoga S740. Aby uzyskać więcej informacji o Cortanie, kliknij tutaj , a w celu uzyskania dodatkowych informacji o Alexie, kliknij tutaj.</p>
             <h2 className="text-black mt-5">Mobilne kino</h2>
             <p className="mt-3">Wyświetlacz o przekątnej 14 cali w wąskiej jak brzytwa ramce prezentuje imponującą gamę kolorów i szczegółów. Ekran do poziomu 4K VESA400 HDR z jasnością 500 nitów i spektakularną technologią Dolby Vision™ oraz bogaty, wielowarstwowy dźwięk 3D z głośników z Dolby Atmos® oferują niezwykle realistyczną i wciągającą rozrywkę.</p>
             <img src={laptopContentThird} alt="" width="100%" className="mt-5"/>

             <h2 className="text-black mt-5">Nie ma gniazdka? Nie ma problemu.</h2>
             <p className="mt-3">Niezależnie od tego, czy pracujesz w terenie, czy też urządzasz sobie serialową noc na sofie, bateria eleganckiego i smukłego Yoga S740 ma w sobie wystarczająco dużo energii — na nawet 15 godzin działania.</p>

              <h2 className="text-black mt-5">Nowy poziom wydajności</h2>
              <p className="mt-3">Opcjonalna dedykowana karta graficzna NVIDIA® GeForce® MX250 zwiększa dodatkowo możliwości laptopa w zastosowaniach służbowych i rozrywkowych. Korzystaj z nawet 3,5-krotnie większej wydajności w porównaniu ze zintegrowaną kartą graficzną w aplikacjach do edycji zdjęć i wideo, a także z szybszej i płynniejszej gry.</p>

              <img src={laptopContentFourth} alt="" width="100%" className="mt-5"/>

               <h2 className="text-black mt-5">Intuicyjnie i interaktywnie</h2>
               <p className="mt-3">Kamera na podczerwień ułatwia życie. Wystarczy, że się oddalisz, a oglądany film zostanie automatycznie wstrzymany. Zawartość wyświetlacza laptopa możesz przenieść na dodatkowy monitor ruchem głowy. A to jeszcze nie wszystko. Laptop Yoga S740 reaguje na Twój styl użytkowania, dlatego możesz skupić się na tym, co ważne.</p>

               <h2 className="text-black mt-5">Zna Cię lepiej</h2>
               <p className="mt-3">Możesz na przykład logować się do niego samym uśmiechem. Dzięki kamerze na podczerwień i funkcji rozpoznawania twarzy Windows Hello możesz zacząć pracę trzy razy szybciej niż wpisując hasło. Jest też świetnie zabezpieczony.</p>

               <img src={laptopContentFifth} alt="" width="100%" className="mt-5"/>

               <h2 className="text-black mt-5">Elegancki styl i mobilność</h2>
               <p className="mt-3">Yoga S740 ma obudowę z piaskowanego aluminium z wykończeniem wysokiej klasy i łączy w sobie wysoką wydajność z wygodną mobilnością. Ma jedynie 14,9 mm grubości, a waży zaledwie 1,4 kg i jest dostępny w kolorze żelaznoszarym lub z ciepłym, metalicznym mikowym wykończeniem.</p>

                <h2 className="text-black mt-5">Szybki i elastyczny</h2>
                <p className="mt-3">Yoga S740 ma port Thunderbolt™ 3. Pod względem szybkości przewyższa on port USB 3.0 aż 8 razy, dlatego stanowi najszybszy i najbardziej uniwersalny sposób łączenia z monitorami, stacjami dokującymi i pamięcią masową. Co więcej, służy też jako źródło zasilania. Laptop ma też szybką łączność Wi-Fi 6, dlatego możesz teraz wyświetlać strumieniowe wideo i przeglądać strony internetowe bez porównania płynniej.</p>
          </Row>
        </Container>
      </Container>
    );
}
