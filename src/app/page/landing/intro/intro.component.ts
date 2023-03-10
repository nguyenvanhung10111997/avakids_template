import { Component, OnInit, Renderer2, Inject } from "@angular/core";
import { DOCUMENT } from '@angular/common';

@Component({
  selector: "app-intro",
  templateUrl: "./intro.component.html",
  styleUrls: ["./intro.component.scss"],
})
export class IntroComponent implements OnInit {
  constructor(
    private _renderer2: Renderer2,
    @Inject(DOCUMENT) private _document: Document
  ) {}

  public ngOnInit() {
    let script = this._renderer2.createElement("script");
    script.type = `text/javascript`;
    script.text = `
        {
          (function () {
            const second = 1000,
                minute = second * 60,
                hour = minute * 60,
                day = hour * 24;

            //I'm adding this section so I don't have to keep updating this pen every year :-)
            //remove this if you don't need it
            let today = new Date(),
                dd = String(today.getDate()).padStart(2, "0"),
                mm = String(today.getMonth() + 1).padStart(2, "0"),
                yyyy = today.getFullYear(),

                birthday = '12/31/2022';

            today = mm + "/" + dd + "/" + yyyy;

            //end

            const countDown = new Date(birthday).getTime(),
                x = setInterval(function () {

                    const now = new Date().getTime(),
                        distance = countDown - now;

                    document.getElementById("days").innerText = Math.floor(distance / (day)),
                        document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
                        document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
                        document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

                    //do something later when date is reached
                    if (distance < 0) {

                        document.getElementById("days").innerText = "00",
                            document.getElementById("hours").innerText = "00",
                            document.getElementById("minutes").innerText = "00",
                            document.getElementById("seconds").innerText = "00";
                        clearInterval(x);
                    }
                    //seconds
                }, 0)
        }());
        }
    `;

    this._renderer2.appendChild(this._document.body, script);
  }
}
