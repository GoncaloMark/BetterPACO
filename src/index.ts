interface DOMchanger {
  deleteBody: () => void;
  setClasses: () => void;
  setInnerHTML: () => void;
  setListeners: () => void;
  appendElements: () => void;
}

//Melhorar estes tipos pfv...

type EVT = {
  buttonEstudante: HTMLElement,
  buttonDocente: HTMLElement,
  buttonSecretaria: HTMLElement,
}

type Menu = {
  menuEstudante: HTMLElement,
  menuDocente: HTMLElement,
  menuSecretaria: HTMLElement,
}

//Fazer um type Avisos!!

class RenderIndex implements DOMchanger {
  private body;
  private info;
  private arrInfo: NodeListOf<HTMLElement> ;
  private childLink;
  private header;
  private footer;
  private nav;
  private section;
  private article;
  private heading;
  readonly avisos;
  readonly buttons:EVT;
  readonly menu:Menu;

  constructor(){

    this.body = document.body as HTMLBodyElement;
    this.childLink = document.getElementsByName("topo")[0] as HTMLLinkElement;
    this.info = this.body.querySelectorAll('div[class="info"]')[1] as HTMLElement;
    this.arrInfo = this.info.querySelectorAll('div[class="alert"]');

    this.header = document.createElement("header") as HTMLElement;
    this.footer = document.createElement("footer") as HTMLElement;
    this.nav = document.createElement("nav") as HTMLElement;
    this.section = document.createElement("section") as HTMLElement;
    this.article = document.createElement("article") as HTMLElement;
    this.heading = document.createElement("h1") as HTMLElement;
    this.avisos = [
      {
        Title1: this.arrInfo[0].querySelector('div[class="title"]')?.innerHTML as string,
        Text1: this.arrInfo[0].querySelector('div[class="text"]')?.innerHTML as string
      },
      
      {
        Title2: this.arrInfo[1].querySelector('div[class="title"]')?.innerHTML as string,
        Text2: this.arrInfo[1].querySelector('div[class="text"]')?.innerHTML as string
      },
      
      {
        Title3: this.arrInfo[2].querySelector('div[class="title"]')?.innerHTML as string,
        Text3: this.arrInfo[2].querySelector('div[class="text"]')?.innerHTML as string
      },
      
      {
        Title4: this.arrInfo[3].querySelector('div[class="title"]')?.innerHTML as string,
        Text4: this.arrInfo[3].querySelector('div[class="text"]')?.innerHTML as string
      }
      ];

      this.deleteBody();
      this.setClasses();
      this.setInnerHTML();
      this.appendElements();

      this.buttons = {
        buttonEstudante: this.nav.querySelector('li[name="estudante"]') as HTMLElement,
        buttonDocente: this.nav.querySelector('li[name="docente"]') as HTMLElement,
        buttonSecretaria: this.nav.querySelector('li[name="secretaria"]') as HTMLElement
      };

      this.menu = {
        menuEstudante: this.nav.querySelector('div[name="listEstudante"]') as HTMLElement,
        menuDocente: this.nav.querySelector('div[name="listDocente"]') as HTMLElement,
        menuSecretaria: this.nav.querySelector('div[name="listSecretaria"]') as HTMLElement,
      };

      this.setListeners();
  }

  deleteBody: () => void = () => {
    this.body.removeChild(this.childLink)
  }

  setClasses: () => void = () => {
    this.body.className = `bg-sky-100`;
    this.footer.className = `container-fluid w-full flex flex-wrap items-center px-6 h-fit bg-blue-600 justify-left`;
    this.heading.textContent = `Avisos!`;
    this.heading.className = `text-slate-700 text-2xl bold mb-5`;
    this.nav.className = `relativew-fullflex flex-wrap items-center justify-between bg-blue-600 py-4 text-yellow-50 hover:text-gray-700 focus:text-gray-700 shadow-lg navbar navbar-expand-lg navbar-light`;
    this.section.className = `block mx-auto h-fit w-4/6 mt-10 mb-10`;
  }

  setInnerHTML: () => void = () => {
    this.nav.innerHTML = `
    <div class="container-fluid w-full flex flex-wrap items-center px-6 h-16 justify-between">
      <div class="relative flex items-center ">
          <a class="nav-link text-white font-bold" href="/">
          <svg class="h-8" viewBox="0 0 916 220" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <title>logo</title>
        <desc>Created with Sketch.</desc>
        <defs></defs>
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="logo" fill-rule="nonzero" fill="#FFFFFF">
                <path d="M177.65,186.58 C177.58991,189.15066 175.471143,191.193598 172.9,191.16 L133.32,191.16 C125.698042,191.203707 118.715485,195.428577 115.14,202.16 C113.473596,204.992807 110.426556,206.725811 107.14,206.71 L103.7,206.71 C100.215896,206.653452 97.0244497,204.749248 95.32,201.71 C91.780227,195.199184 84.9507837,191.158366 77.54,191.19 L34.66,191.19 C32.0888569,191.223598 29.9700896,189.18066 29.91,186.61 L29.91,130.11 C29.8696361,128.886694 30.3206,127.698126 31.1622761,126.809481 C32.0039523,125.920837 33.1663052,125.406059 34.39,125.38 L77.51,125.38 C85.1331965,125.419315 92.1178313,129.645441 95.69,136.38 C97.3574338,139.210475 100.404954,140.939943 103.69,140.92 L107.13,140.92 C110.615846,140.869588 113.810123,138.963695 115.51,135.92 C119.051414,129.410766 125.879813,125.370566 133.29,125.4 L173.08,125.4 C174.299778,125.389288 175.472996,125.867735 176.337419,126.7284 C177.201842,127.589065 177.685397,128.760187 177.68,129.98 L177.65,186.58 Z M182.65,17.58 C182.222765,17.5174506 181.79177,17.4840401 181.36,17.48 C178.823803,17.4776931 176.424363,18.6295715 174.84,20.61 L152.73,47.54 C149.320232,50.825729 144.76522,52.6549072 140.03,52.64 C130.03,52.64 121.79,44.72 121.79,34.95 C121.79,16.39 107.4,1.51 88.86,0.02 C88.0185748,0.00927584871 87.2080547,0.336732797 86.6102156,0.928931938 C86.0123765,1.52113108 85.6772517,2.3285109 85.68,3.17 L85.68,25.79 L85.68,34.95 C85.6642202,39.6750375 83.7651508,44.1987756 80.4034429,47.5191895 C77.041735,50.8396034 72.4948717,52.6826185 67.77,52.64 C62.9901108,52.6561923 58.3878561,50.8296165 54.92,47.54 L32.8,20.61 C31.2175116,18.6272158 28.8168632,17.4747573 26.28,17.48 C25.8515665,17.4844308 25.4239235,17.5178404 25,17.58 C10.7310038,19.5368447 0.155980121,31.818624 0.34,46.22 L0.34,191 C0.34,207 13.59,220 29.92,220 L177.72,220 C194.06,220 207.31,207 207.31,191 L207.31,46.23 C207.489543,31.8302539 196.916719,19.5510302 182.65,17.59 L182.65,17.58 Z" id="Shape"></path>
                <path d="M262.29,146.26 L258.07,146.26 L258.07,156.63 L252.07,156.63 L252.07,160.18 L258.07,160.18 L258.07,183.81 C258,189.7 259.94,191.58 265.57,191.58 C266.84,191.58 268.04,191.45 269.32,191.45 L269.32,187.83 C268.117955,187.963498 266.909435,188.030267 265.7,188.03 C262.7,187.83 262.29,186.22 262.29,183.48 L262.29,160.19 L269.29,160.19 L269.29,156.64 L262.29,156.64 L262.29,146.26 Z" id="Shape"></path>
                <path d="M275,125.37 L282.5,125.37 L282.5,90.76 L274.87,90.76 L274.87,110.85 C274.87,116.21 272.73,120.29 266.36,120.29 C262.22,120.29 259.73,118.09 259.73,111.99 L259.73,90.76 L252.1,90.76 L252.1,112.76 C252.1,121.76 255.98,126.35 265.02,126.35 C269.080735,126.279831 272.810729,124.09642 274.86,120.59 L275,125.37 Z" id="Shape"></path>
                <path d="M707.81,164.74 L707.68,156.64 L703.8,156.64 L703.8,191.18 L708,191.18 L708,172.77 C708,165.61 713.22,159.99 720.86,160.39 L720.86,156.17 C715.065999,155.721673 709.700943,159.244932 707.81,164.74" id="Shape"></path>
                <path d="M289.39,155.63 C284.51,155.63 279.88,158.44 278.39,162.63 L278.26,143.42 L274,143.42 L274,191.21 L278.21,191.21 L278.21,171 C278.34,164.24 282.36,159.15 289.05,159.15 C295.74,159.15 297.82,163.64 297.82,169.59 L297.82,191.14 L302,191.14 L302,169 C302,160.77 299.06,155.68 289.35,155.68" id="Shape"></path>
                <rect id="Rectangle-path" x="326.43" y="90.77" width="7.63" height="34.61"></rect>
                <path d="M816.67,105 C816.87,99.85 820.48,95.83 825.77,95.83 C831.06,95.83 834.21,100.18 834.47,105 L816.67,105 Z M825.77,89.8 C815.47,89.8 809.04,98.24 809.04,108.08 C809.04,118.72 815.13,126.29 825.98,126.29 C833.54,126.29 839.98,122.07 841.64,114.51 L834.4,114.51 C833.06,118.33 830.4,120.27 825.97,120.27 C819.61,120.27 816.67,115.45 816.67,110.03 L842.1,110.03 C843.37,99.65 836.67,89.81 825.76,89.81 L825.77,89.8 Z" id="Shape"></path>
                <path d="M311.9,103.62 L311.9,125.38 L319.53,125.38 L319.53,101.61 C319.53,93.84 314.77,89.83 307.28,89.83 C302.844922,89.812615 298.738252,92.1652753 296.51,96 L296.38,90.78 L289.15,90.78 L289.15,125.39 L296.78,125.39 L296.78,105 C296.78,99.91 300.06,95.89 305.15,95.89 C309.63,95.89 311.78,98.24 311.91,103.66" id="Shape"></path>
                <path d="M356.64,188.63 C348.54,188.63 344.52,181.27 344.52,173.91 C344.52,166.55 348.52,159.18 356.64,159.18 C364.76,159.18 368.76,166.54 368.76,173.91 C368.76,181.28 364.76,188.63 356.64,188.63 M356.64,155.63 C346.06,155.63 340.3,164 340.3,173.91 C340.3,183.82 346.06,192.18 356.64,192.18 C367.22,192.18 373,183.81 373,173.91 C373,164.01 367.25,155.63 356.67,155.63" id="Shape"></path>
                <rect id="Rectangle-path" x="846.78" y="90.77" width="7.63" height="34.61"></rect>
                <path d="M381.94,164.74 L381.81,156.64 L377.93,156.64 L377.93,191.18 L382.14,191.18 L382.14,172.77 C382.14,165.61 387.36,159.99 395,160.39 L395,156.17 C389.205999,155.721673 383.840943,159.244932 381.95,164.74" id="Shape"></path>
                <path d="M322.51,159.18 C329.34,159.18 333.29,165.18 333.51,171.5 L311.14,171.5 C311.81,165.21 315.62,159.18 322.52,159.18 M322.52,155.63 C311.52,155.63 306.93,164.8 306.93,173.91 C306.93,183.75 311.55,192.18 322.52,192.18 C331.22,192.18 335.78,187.63 337.59,179.8 L333.37,179.8 C332.03,185.02 328.68,188.64 322.52,188.64 C314.42,188.64 311.21,181.21 311.14,175.05 L337.72,175.05 C338.05,165.34 333.63,155.64 322.52,155.64" id="Shape"></path>
                <path d="M610.69,95.85 C615.84,95.85 619.13,100.2 619.39,105.02 L601.59,105.02 C601.79,99.86 605.4,95.85 610.69,95.85 M610.89,126.31 C618.45,126.31 624.89,122.09 626.55,114.53 L619.32,114.53 C617.98,118.35 615.32,120.29 610.89,120.29 C604.53,120.29 601.59,115.47 601.59,110.05 L627,110.05 C628.27,99.67 621.57,89.83 610.66,89.83 C600.36,89.83 593.93,98.27 593.93,108.11 C593.93,118.75 600.02,126.32 610.87,126.32" id="Shape"></path>
                <path d="M881.64,90 C880.687132,89.8542633 879.723866,89.7873698 878.76,89.8 C874.07,89.8 869.53,93.8 868.65,97.43 L868.52,90.73 L861.36,90.73 L861.36,125.34 L869,125.34 L869,108.91 C869,101.27 873.15,97.06 878.37,97.06 C879.469211,97.1067951 880.564562,97.2203376 881.65,97.4 L881.64,90 Z" id="Shape"></path>
                <path d="M571.74,95.85 C577.63,95.85 581.31,100.4 581.31,108.04 C581.31,114.04 578.43,120.29 571.6,120.29 C564.97,120.29 562.02,114.4 562.02,108.44 C562.02,102.22 564.56,95.86 571.73,95.86 M570.59,126.32 C574.94,126.32 579.29,124.64 581.3,120.7 L581.43,125.38 L588.66,125.38 L588.66,77.58 L581,77.58 L581,95.25 C578.52,91.43 573.71,89.82 569.35,89.82 C561.79,89.82 554.35,95.31 554.35,107.82 C554.35,118.2 559.64,126.3 570.55,126.3" id="Shape"></path>
                <path d="M762.8,113.73 C762.8,118.54 757.58,120.29 754.23,120.29 C751.55,120.29 747.23,119.29 747.23,115.87 C747.23,111.87 750.23,110.65 753.46,110.11 C756.69,109.57 760.46,109.57 762.83,108.04 L762.8,113.73 Z M752.89,105.43 C746.46,106.16 739.57,107.57 739.57,116.21 C739.57,122.97 745.19,126.32 751.42,126.32 C755.51,126.32 760.42,125.04 763.42,122.1 C764.03,125.25 766.23,126.32 769.31,126.32 C770.94727,126.237397 772.567169,125.945008 774.13,125.45 L774.13,120.16 C773.511747,120.258629 772.885953,120.302133 772.26,120.29 C770.86,120.29 770.46,119.56 770.46,117.68 L770.46,99.87 C770.46,92.58 763.36,89.87 756.6,89.87 C748.97,89.87 741.4,92.48 740.87,101.39 L748.5,101.39 C748.84,97.64 751.85,95.9 756.13,95.9 C759.21,95.9 763.29,96.64 763.29,100.59 C763.29,105.07 758.41,104.47 752.92,105.48 L752.89,105.43 Z" id="Shape"></path>
                <path d="M898.23,120.29 C891.41,120.29 888.39,114.06 888.39,108.04 C888.39,102.02 891.39,95.85 898.23,95.85 C905.07,95.85 908.07,102.07 908.07,108.04 C908.07,114.01 905.07,120.29 898.23,120.29 M898.23,89.83 C887.12,89.83 880.76,97.46 880.76,108.04 C880.76,118.62 887.12,126.32 898.23,126.32 C909.34,126.32 915.7,118.69 915.7,108.04 C915.7,97.39 909.34,89.83 898.23,89.83" id="Shape"></path>
                <rect id="Rectangle-path" x="326.43" y="77.58" width="7.63" height="7.23"></rect>
                <path d="M417.9,108.91 C417.9,101.27 422.05,97.06 427.27,97.06 C428.369203,97.1068933 429.464549,97.2204352 430.55,97.4 L430.55,90 C429.597102,89.8545335 428.633858,89.7876416 427.67,89.8 C422.98,89.8 418.43,93.8 417.56,97.43 L417.43,90.73 L410.26,90.73 L410.26,125.34 L417.89,125.34 L417.9,108.91 Z" id="Shape"></path>
                <path d="M496.31,95.85 C502.2,95.85 505.88,100.4 505.88,108.04 C505.88,114.04 503,120.29 496.17,120.29 C489.54,120.29 486.6,114.4 486.6,108.44 C486.6,102.22 489.14,95.86 496.31,95.86 M495.18,126.32 C499.53,126.32 503.88,124.64 505.89,120.7 L506.02,125.38 L513.25,125.38 L513.25,77.58 L505.62,77.58 L505.62,95.25 C503.15,91.43 498.33,89.82 493.98,89.82 C486.42,89.82 478.98,95.31 478.98,107.82 C478.98,118.2 484.27,126.3 495.18,126.3" id="Shape"></path>
                <polygon id="Shape" points="358.75 125.37 371.13 90.76 363.23 90.76 354.8 117.34 345.89 90.76 337.6 90.76 350.18 125.37"></polygon>
                <rect id="Rectangle-path" x="466.06" y="77.58" width="7.63" height="7.23"></rect>
                <rect id="Rectangle-path" x="466.06" y="90.77" width="7.63" height="34.61"></rect>
                <rect id="Rectangle-path" x="846.78" y="77.57" width="7.63" height="7.23"></rect>
                <path d="M557.18,159.18 C564,159.18 567.96,165.18 568.18,171.5 L545.8,171.5 C546.47,165.21 550.29,159.18 557.18,159.18 M557.18,155.63 C546.18,155.63 541.58,164.8 541.58,173.91 C541.58,183.75 546.2,192.18 557.18,192.18 C565.88,192.18 570.43,187.63 572.24,179.8 L568,179.8 C566.66,185.02 563.32,188.64 557.16,188.64 C549.06,188.64 545.85,181.21 545.78,175.05 L572.35,175.05 C572.69,165.34 568.27,155.64 557.16,155.64" id="Shape"></path>
                <rect id="Rectangle-path" x="607.62" y="143.38" width="4.22" height="6.75"></rect>
                <rect id="Rectangle-path" x="607.62" y="156.64" width="4.22" height="34.54"></rect>
                <rect id="Rectangle-path" x="532.36" y="156.64" width="4.22" height="34.54"></rect>
                <polygon id="Shape" points="784 156.63 778.71 156.63 769.07 169.75 759.23 156.63 754 156.63 766.38 173.23 753.68 190.23 753.68 190.88 753.13 190.97 753 191.15 758.22 191.15 768.86 176.62 779.7 191.15 785 191.15 771.55 173.15"></polygon>
                <rect id="Rectangle-path" x="532.36" y="143.38" width="4.22" height="6.75"></rect>
                <rect id="Rectangle-path" x="397.73" y="156.64" width="4.22" height="34.54"></rect>
                <path d="M683,188.63 C674,188.63 670.88,181.07 670.88,173.91 C670.88,166.08 673.69,159.18 683,159.18 C691,159.18 694.31,166.74 694.31,173.91 C694.31,181.08 691.03,188.63 683,188.63 M683,155.63 C677.44,155.63 672.63,158.51 670.68,163.19 L670.55,156.63 L666.67,156.63 L666.67,204 L670.89,204 L670.89,184.61 C672.83,189.61 677.89,192.17 683.01,192.17 C693.52,192.17 698.54,183.67 698.54,173.9 C698.54,164.13 693.54,155.62 683.01,155.62" id="Shape"></path>
                <path d="M703.38,95.85 C708.54,95.85 711.82,100.2 712.08,105.02 L694.28,105.02 C694.48,99.87 698.09,95.85 703.38,95.85 M719.25,114.53 L712,114.53 C710.66,118.35 708,120.29 703.56,120.29 C697.2,120.29 694.26,115.47 694.26,110.05 L719.7,110.05 C720.98,99.67 714.27,89.83 703.36,89.83 C693.06,89.83 686.63,98.27 686.63,108.11 C686.63,118.75 692.72,126.32 703.57,126.32 C711.13,126.32 717.57,122.1 719.24,114.54" id="Shape"></path>
                <path d="M664.29,120.29 C657.66,120.29 654.72,114.4 654.72,108.44 C654.72,102.22 657.26,95.86 664.43,95.86 C670.32,95.86 674,100.41 674,108.05 C674,114.05 671.12,120.3 664.29,120.3 M674,120.7 L674.13,125.39 L681.36,125.39 L681.36,77.58 L673.73,77.58 L673.73,95.25 C671.26,91.43 666.44,89.82 662.09,89.82 C654.52,89.82 647.09,95.31 647.09,107.82 C647.09,118.19 652.38,126.29 663.29,126.29 C667.65,126.29 671.99,124.61 674,120.67" id="Shape"></path>
                <path d="M634.86,172.23 L629.23,171 C626.35,170.26 622.07,168.92 622.07,165.17 C622.07,160.69 626.49,159.17 630.24,159.17 C635.06,159.17 639.07,161.52 639.24,166.73 L643.45,166.73 C643.18,159.23 637.69,155.62 630.8,155.62 C624.71,155.62 617.8,158.3 617.8,165.33 C617.8,171.22 621.95,173.1 627.44,174.57 L632.86,175.77 C636.67,176.71 640.42,178.05 640.42,182.06 C640.42,186.88 634.93,188.62 630.98,188.62 C625.36,188.62 621.14,185.67 620.8,179.99 L616.58,179.99 C617.25,188.42 622.74,192.17 630.77,192.17 C637.2,192.17 644.63,189.29 644.63,181.8 C644.63,175.8 639.63,172.97 634.79,172.23" id="Shape"></path>
                <path d="M733.58,188.63 C729.63,188.63 725.88,186.02 725.88,181.8 C725.88,175.04 734.78,175.11 741.94,173.8 C743.07,173.6 744.94,173.26 745.49,172.26 L745.62,177.74 C745.69,184.51 740,188.59 733.62,188.59 L733.58,188.63 Z M753.7,187.31 C753.273076,187.479416 752.81922,187.570864 752.36,187.58 C751.671257,187.658026 750.985191,187.412803 750.501956,186.915873 C750.018721,186.418944 749.792762,185.726294 749.89,185.04 L749.89,166.74 C749.89,157.51 743.26,155.63 737.17,155.63 C729.28,155.63 723.58,159.11 723.17,167.21 L727.39,167.21 C727.52,161.59 731.39,159.21 736.62,159.21 C741.62,159.21 745.62,160.61 745.62,166.31 C745.62,170.12 743.68,170.6 740.2,171 C731.1,172.07 721.66,172.4 721.66,182.11 C721.66,189.11 726.88,192.22 733.24,192.22 C739.87,192.22 742.88,189.68 745.83,185.22 C745.96,188.84 746.63,191.22 750.91,191.22 C751.647264,191.226546 752.383605,191.1663 753.11,191.04 L753.66,190.31 L753.7,187.31 Z" id="Shape"></path>
                <path d="M593,172.23 L587.35,171 C584.47,170.26 580.19,168.92 580.19,165.17 C580.19,160.69 584.6,159.17 588.35,159.17 C593.17,159.17 597.19,161.52 597.35,166.73 L601.56,166.73 C601.29,159.23 595.81,155.62 588.92,155.62 C582.82,155.62 575.92,158.3 575.92,165.33 C575.92,171.22 580.07,173.1 585.56,174.57 L590.98,175.77 C594.79,176.71 598.54,178.05 598.54,182.06 C598.54,186.88 593.05,188.62 589.1,188.62 C583.48,188.62 579.26,185.67 578.93,179.99 L574.71,179.99 C575.38,188.42 580.87,192.17 588.9,192.17 C595.32,192.17 602.75,189.29 602.75,181.8 C602.75,175.8 597.75,172.97 592.91,172.23" id="Shape"></path>
                <path d="M815.08,172.23 L809.45,171 C806.57,170.26 802.29,168.92 802.29,165.17 C802.29,160.69 806.7,159.17 810.45,159.17 C815.27,159.17 819.29,161.52 819.45,166.73 L823.67,166.73 C823.4,159.23 817.91,155.62 811.02,155.62 C804.93,155.62 798.02,158.3 798.02,165.33 C798.02,171.22 802.17,173.1 807.66,174.57 L813.08,175.77 C816.89,176.71 820.64,178.05 820.64,182.06 C820.64,186.88 815.16,188.62 811.2,188.62 C805.58,188.62 801.36,185.67 801.03,179.99 L796.81,179.99 C797.48,188.42 802.96,192.17 811,192.17 C817.43,192.17 824.86,189.29 824.86,181.8 C824.86,175.8 819.86,172.97 815.02,172.23" id="Shape"></path>
                <path d="M418.73,188.63 C414.73,188.63 411.03,186.02 411.03,181.8 C411.03,175.04 419.93,175.11 427.1,173.8 C428.24,173.6 430.1,173.26 430.65,172.26 L430.78,177.74 C430.85,184.51 425.16,188.59 418.78,188.59 M435,185.08 L435,166.74 C435,157.51 428.37,155.63 422.28,155.63 C414.38,155.63 408.69,159.11 408.28,167.21 L412.5,167.21 C412.63,161.59 416.5,159.21 421.74,159.21 C426.74,159.21 430.74,160.61 430.74,166.31 C430.74,170.12 428.8,170.6 425.32,171 C416.21,172.07 406.78,172.4 406.78,182.11 C406.78,189.11 412,192.22 418.36,192.22 C424.99,192.22 428,189.68 430.95,185.22 C431.08,188.84 431.75,191.22 436.03,191.22 C436.954092,191.238381 437.877129,191.147755 438.78,190.95 L438.78,187.4 C438.353076,187.569416 437.89922,187.660864 437.44,187.67 C436.751257,187.748026 436.065191,187.502803 435.581956,187.005873 C435.098721,186.508944 434.872762,185.816294 434.97,185.13" id="Shape"></path>
                <path d="M450.22,105 C444.6,103.72 438.97,103.19 438.97,99.44 C438.97,96.44 443.06,95.89 445.26,95.89 C448.61,95.89 451.62,96.89 452.26,100.51 L460.26,100.51 C459.32,92.81 452.9,89.87 445.8,89.87 C439.51,89.87 431.34,92.22 431.34,99.78 C431.34,106.78 436.83,108.78 442.45,110.03 C448.07,111.28 453.56,111.76 453.76,115.78 C453.96,119.8 448.95,120.33 446.06,120.33 C441.98,120.33 438.63,118.72 438.23,114.33 L430.6,114.33 C430.73,122.49 437.23,126.33 445.93,126.33 C453.09,126.33 461.39,123.33 461.39,115.08 C461.39,108.25 455.77,106.25 450.21,104.97" id="Shape"></path>
                <path d="M541.55,113.73 C541.55,118.54 536.33,120.29 532.99,120.29 C530.31,120.29 525.99,119.29 525.99,115.87 C525.99,111.87 528.99,110.65 532.22,110.11 C535.45,109.57 539.22,109.57 541.59,108.04 L541.55,113.73 Z M548.05,126.31 C549.683965,126.227095 551.300519,125.934704 552.86,125.44 L552.86,120.15 C552.241771,120.248839 551.615959,120.292345 550.99,120.28 C549.59,120.28 549.19,119.55 549.19,117.67 L549.19,99.86 C549.19,92.57 542.09,89.86 535.33,89.86 C527.7,89.86 520.13,92.47 519.6,101.38 L527.23,101.38 C527.56,97.63 530.58,95.89 534.86,95.89 C537.94,95.89 542.02,96.63 542.02,100.58 C542.02,105.06 537.14,104.46 531.65,105.47 C525.22,106.2 518.33,107.61 518.33,116.25 C518.33,123.01 523.95,126.36 530.18,126.36 C534.26,126.36 539.18,125.08 542.18,122.14 C542.78,125.29 544.99,126.36 548.07,126.36 L548.05,126.31 Z" id="Shape"></path>
                <path d="M380.35,105 C380.55,99.85 384.16,95.83 389.46,95.83 C394.76,95.83 397.89,100.18 398.16,105 L380.35,105 Z M389.46,89.8 C379.15,89.8 372.72,98.24 372.72,108.08 C372.72,118.72 378.81,126.29 389.66,126.29 C397.23,126.29 403.66,122.07 405.33,114.51 L398.1,114.51 C396.76,118.33 394.1,120.27 389.66,120.27 C383.3,120.27 380.36,115.45 380.36,110.03 L405.8,110.03 C407.08,99.65 400.38,89.81 389.47,89.81 L389.46,89.8 Z" id="Shape"></path>
                <rect id="Rectangle-path" x="397.73" y="143.38" width="4.22" height="6.75"></rect>
                <path d="M511,188.63 C502.9,188.63 498.88,181.27 498.88,173.91 C498.88,166.55 502.88,159.18 511,159.18 C519.12,159.18 523.12,166.54 523.12,173.91 C523.12,181.28 519.12,188.63 511,188.63 M511,155.63 C500.43,155.63 494.67,164 494.67,173.91 C494.67,183.82 500.43,192.18 511,192.18 C521.57,192.18 527.33,183.81 527.33,173.91 C527.33,164.01 521.58,155.63 511,155.63" id="Shape"></path>
                <rect id="Rectangle-path" x="787.85" y="156.64" width="4.22" height="34.54"></rect>
                <polygon id="Shape" points="799.54 90.76 791.11 117.34 782.21 90.76 773.9 90.76 786.49 125.38 795.06 125.38 807.44 90.76"></polygon>
                <rect id="Rectangle-path" x="787.85" y="143.38" width="4.22" height="6.75"></rect>
                <path d="M475.67,188.63 C466.67,188.63 463.55,181.07 463.55,173.91 C463.55,166.08 466.36,159.18 475.67,159.18 C483.67,159.18 486.98,166.74 486.98,173.91 C486.98,181.08 483.7,188.63 475.67,188.63 M475.67,155.63 C470.11,155.63 465.3,158.51 463.35,163.19 L463.22,156.63 L459.34,156.63 L459.34,204 L463.56,204 L463.56,184.61 C465.5,189.61 470.56,192.17 475.68,192.17 C486.19,192.17 491.21,183.67 491.21,173.9 C491.21,164.13 486.21,155.62 475.68,155.62" id="Shape"></path>
            </g>
        </g>
        </svg>
          </a>
          </div>
    
          <ul class="flex items-center space-x-8 text-white">
              <li class="font-medium p-4 cursor-pointer hover:border-b-2 hover:border-cyan-50">
                <a href="/secvirtual" class"mr-4 ">
                  Secretaria Virtual
                </a>
              </li>
    
              <li class="relative font-medium dropdown flex items-center p-4 cursor-pointer" name = "estudante">
                <a class="mr-4">
                  Estudante
                </a> 
                <svg class="inline w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
    
                <div x-show="open" x-transition:enter.duration.500ms="" x-transition:leave.duration.800ms="" class="absolute w-48 py-2 mt-2 right-0 top-10 bg-gray-100 rounded-md shadow-xl" name = "listEstudante" style="display: none";>
                        <a href="/matriculas/" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-400 hover:text-white">
                            Matrículas Online
                        </a>
                        <a href="https://paco.ua.pt/Candidaturas" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-400 hover:text-white">
                            Candidaturas
                        </a>
                        <a href="/M23/" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-400 hover:text-white">
                            Candidaturas M23
                        </a>
                        <a href="/M23TESP/" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-400 hover:text-white">
                        Candidaturas M23 - TESP
                        </a>
    
                        <a href="/CandidaturasUA/" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-400 hover:text-white">
                        Candidaturas Cursos Livres
                        </a>
                    </div>
              </li>
    
              <li class="relative font-medium dropdown flex items-center p-4 cursor-pointer" name="docente">
                <a class="mr-4">
                  Docente
                </a> 
                
                <svg class="inline w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
    
                <div x-show="open" x-transition:enter.duration.500ms="" x-transition:leave.duration.800ms="" class="absolute w-48 py-2 mt-2 right-0 top-10 bg-gray-100 rounded-md shadow-xl" name = "listDocente" style="display: none";>
                <a href="/disciplinas/" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-400 hover:text-white">
                    Disciplinas
                </a>
                <a href="/aulas/" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-400 hover:text-white">
                    Apoio às Aulas
                </a>
                <a href="/DPUC/secure/UCList.aspx" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-400 hover:text-white">
                    Dossiê Pedagógico
                </a>
                <a href="/creditacoes/" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-400 hover:text-white">
                    Creditações Online
                </a>
            </div>
              </li>
    
              <li class="relative font-medium dropdown flex items-center p-4 cursor-pointer" name="secretaria">
                <a class="mr-4">
                  Secretaria
                </a> 
                
                <svg class="inline w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
    
                <div x-show="open" x-transition:enter.duration.500ms="" x-transition:leave.duration.800ms="" class="absolute w-48 py-2 mt-2 right-0 top-10 bg-gray-100 rounded-md shadow-xl" name = "listSecretaria" style="display: none";>
                <a href="/dsd/" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-400 hover:text-white">
                    Distribuição de Serviço Docente
                </a>
                <a href="/secretariaDEP/" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-400 hover:text-white">
                    Apoio a Secretarias Departamentos
                </a>
                <a href="/horarios/" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-400 hover:text-white">
                    Horários
                </a>
            </div>
              </li>
          </ul>
          
    </div>
    `;
    this.article.innerHTML = `
    <style>
    p a {font-weight: bold;} 
    li a {font-weight: bold;}
    </style>
      <h3>${this.avisos[0].Title1}</h3>
      <p>${this.avisos[0].Text1}</p>
    
      <h3 class="mt-5">${this.avisos[1].Title2}</h3>
      <p>${this.avisos[1].Text2}</p>
    
      <h3 class="mt-5">${this.avisos[2].Title3}</h3>
      <p>${this.avisos[2].Text3}</p>
    
      <h3 class="mt-5">${this.avisos[3].Title4}</h3>
      <p class="mb-5">${this.avisos[3].Text4}</p>
    `;
    this.footer.innerHTML = `
    <img class="py-5" src="/common/images/posi/rgbpos_peq.gif" alt="Programa Operacional Sociedade da Informação" border="0">
    <img class="py-5" src="/common/images/prodepCee/paco_prodep_cee.gif" alt="União Europeia - FEDER" width="105" height="75" border="0">
    <img class="py-5" src="/common/images/campusvirtuais/logo_e-U_105_75.gif" alt="e-U - Campus Virtuais" width="105" height="75" border="0">
    <img class="py-5" src="/common/images/prodepCee/paco_prodep_logo.gif" alt="PRODEP" width="105" height="75" border="0">
    `
  }

  appendElements: () => void = () => {
    this.header.appendChild(this.nav);
    this.body.appendChild(this.header);
    this.section.appendChild(this.heading);
    this.section.appendChild(this.article);
    this.body.appendChild(this.section);
    this.section.after(this.footer);
  }

  setListeners: () => void = () => {
    this.buttons.buttonEstudante.onmouseover = () => this.menu.menuEstudante.style.display = "block";
    this.buttons.buttonEstudante.onmouseleave = () => this.menu.menuEstudante.style.display = "none";

    this.buttons.buttonDocente.onmouseover = () => this.menu.menuDocente.style.display = "block";
    this.buttons.buttonDocente.onmouseleave = () => this.menu.menuDocente.style.display = "none";

    this.buttons.buttonSecretaria.onmouseover = () => this.menu.menuSecretaria.style.display = "block";
    this.buttons.buttonSecretaria.onmouseleave = () => this.menu.menuSecretaria.style.display = "none";
  }

}

new RenderIndex();
