import { Component } from '@angular/core';
import WebFont from 'webfontloader';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
})
export class AppComponent {
  loadFontViaFontFace() {
    const font = new FontFace("Grey Qo", "url(https://fonts.gstatic.com/s/greyqo/v9/BXRrvF_Nmv_TyXxNPOxa9EX3UcA.woff2)", {
      style: "normal",
      weight: "400",
    });

    document.fonts.add(font);
  }

  loadFontViaFontLoader() {
    WebFont.load({google: {families: ['Nerko One']}})
  }
}
